"use client";

import type { AgentActivity } from "@ourguide-ai/agent";
import { useEffect, useState } from "react";
import {
  ARGIDE_AGENT_API_URL,
  ARGIDE_AGENT_PRODUCT_ID,
  ARGIDE_ASSET_ORIGIN,
  CHATWOOT_BASE_URL,
  CHATWOOT_WEBSITE_TOKEN,
} from "@/lib/chatwoot";
import {
  asChatwootMessage,
  browserGoalForUserText,
  browserHandoffGoal,
  handoffConversation,
  isIncomingMessage,
} from "@/lib/browserGoal";
import { answerField, type FieldValue, type TaskWait, waitFromNeeds, waitQuestion } from "@/lib/taskWait";

// The task in flight, kept per tab so its result is still reported after Argide reloads the page. While it waits
// for the customer, `wait` says what for, and their next chat message answers it.
const PENDING_TASK_KEY = "argide-pending-task";

const seenMessageIds = new Set<number>();

type MessageIds = { id: number; account_id: number; conversation_id: number };
type PendingTask = { taskId: string; handoff: MessageIds; wait?: TaskWait };
type WaitAnswer = { message: string } | { inputs: Record<string, FieldValue> };
type TaskEvent = Extract<AgentActivity, { kind: "task" }>;

function savePendingTask(task: PendingTask) {
  sessionStorage.setItem(PENDING_TASK_KEY, JSON.stringify(task));
}

function readPendingTask(): PendingTask | null {
  const stored = sessionStorage.getItem(PENDING_TASK_KEY);
  return stored ? (JSON.parse(stored) as PendingTask) : null;
}

// The server re-reads the message from Chatwoot, so only ids are sent.
function handOffToChatwoot(ids: MessageIds) {
  return fetch("/api/chatwoot/handoff", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ids),
  });
}

declare global {
  interface Window {
    chatwootSDK?: {
      run: (options: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

function reportTaskResult(handoff: MessageIds, status: string, summary?: string | null) {
  return fetch("/api/chatwoot/task-result", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...handoff, status, summary }),
  });
}

export function ChatwootArgideBridge() {
  const [activity, setActivity] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const stop = { current: () => {} };

    async function startAgent() {
      const { ArgideAgent } = await import("@ourguide-ai/agent");
      if (cancelled) return;

      ArgideAgent.init({
        apiUrl: ARGIDE_AGENT_API_URL,
        productId: ARGIDE_AGENT_PRODUCT_ID,
        assetOrigin: ARGIDE_ASSET_ORIGIN,
        onStateChange: (state) => {
          if (state === "error") setActivity("Argide could not start");
        },
        claim: async ({ sessionId, pairingCode }) => {
          const response = await fetch("/api/argide/claim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId, pairingCode }),
          });
          if (!response.ok) throw new Error(`claim failed: HTTP ${response.status}`);
        },
      });
      (window as unknown as { ArgideAgent: typeof ArgideAgent }).ArgideAgent = ArgideAgent;

      if (cancelled) return;
      const offActivity = ArgideAgent.onActivity((event) => {
        if (event.kind === "task") {
          setActivity(null);
          void reportTaskEvent(event).catch((error: unknown) => console.error("[argide]", error));
          return;
        }
        if (event.kind === "idle") {
          setActivity(null);
          return;
        }
        setActivity("Argide is working on this page");
      });

      // The SDK follows the task, across page loads too, and sends each result as a `task` event; this reports it
      // to the Chatwoot conversation that asked. A task that waits for the customer stays pending, with its question
      // posted to the chat.
      async function reportTaskEvent(event: TaskEvent) {
        const task = readPendingTask();
        if (!task || task.taskId !== event.taskId) return;
        if (event.status === "needs_input") {
          const wait = waitFromNeeds(event.needs);
          savePendingTask({ ...task, wait });
          await reportTaskResult(task.handoff, "needs_input", waitQuestion(wait, event.summary));
          return;
        }
        sessionStorage.removeItem(PENDING_TASK_KEY);
        await reportTaskResult(task.handoff, event.status, event.summary);
      }

      // The customer's reply to a waiting task. A page action is answered with their words; values are asked
      // one field per reply and sent together once every field has one.
      async function answerWait(task: PendingTask & { wait: TaskWait }, reply: string) {
        let answer: WaitAnswer = { message: reply };
        if (task.wait.kind === "input") {
          const step = answerField(task.wait, reply);
          if ("ask" in step) {
            savePendingTask({ ...task, wait: step.wait });
            await reportTaskResult(task.handoff, "needs_input", step.ask);
            return;
          }
          answer = { inputs: step.inputs };
        }

        // Running again from here: the customer's messages go to Chatwoot until the task's next event.
        savePendingTask({ taskId: task.taskId, handoff: task.handoff });
        try {
          await ArgideAgent.resume({ taskId: task.taskId, ...answer });
        } catch (error) {
          // Refused or failed: a task that failed arrives as its own event; one still waiting keeps its wait, so the
          // customer's next reply answers it again.
          console.error("[argide]", error);
          savePendingTask(task);
          await reportTaskResult(task.handoff, "needs_input", "That didn't go through to Argide.");
        }
      }

      // A new "argide:" goal replaces a waiting task. Cancelling it ends its workflow run now, rather than when
      // the server suspends the run for want of a heartbeat.
      async function cancelWaitingTask(task: PendingTask) {
        sessionStorage.removeItem(PENDING_TASK_KEY);
        const outcome = await ArgideAgent.cancel({ taskId: task.taskId }).catch(() =>
          ArgideAgent.check({ taskId: task.taskId })
        );
        if (outcome.status !== "running" && outcome.status !== "needs_input") {
          await reportTaskResult(task.handoff, outcome.status, outcome.summary);
        }
      }

      // A customer message answers the waiting task, if there is one; anything else, and any "argide:" goal, goes
      // to Chatwoot as before. Messages are handled one at a time, so a quick second one sees the first's outcome.
      let customerMessages = Promise.resolve();
      function onCustomerMessage(ids: MessageIds, text: string) {
        customerMessages = customerMessages
          .then(async () => {
            const task = readPendingTask();
            if (task?.wait && !browserGoalForUserText(text)) return answerWait({ ...task, wait: task.wait }, text);
            if (task?.wait) await cancelWaitingTask(task);
            await handOffToChatwoot(ids);
          })
          .then(
            () => undefined,
            (error: unknown) => console.error("[argide]", error)
          );
      }

      const onMessage = (event: Event) => {
        // The widget re-emits a message when its content_attributes change, so act once per id.
        const message = asChatwootMessage((event as CustomEvent).detail);
        if (typeof message?.id !== "number" || seenMessageIds.has(message.id)) return;
        if (message.account_id == null || message.conversation_id == null) return;
        const ids = { id: message.id, account_id: message.account_id, conversation_id: message.conversation_id };

        const goal = browserHandoffGoal(message);
        if (goal) {
          seenMessageIds.add(message.id);
          // do() resolves once the task exists; while another task runs it rejects with SESSION_BUSY.
          // The chat so far goes along, so the agent understands "it" and "that" in the goal.
          ArgideAgent.do({ goal, messages: handoffConversation(message) })
            .then(
              ({ taskId }) => savePendingTask({ taskId, handoff: ids }),
              (error: unknown) => {
                setActivity(error instanceof Error ? error.message : String(error));
                return reportTaskResult(ids, "not_started");
              }
            )
            .catch((error: unknown) => console.error("[argide]", error));
          return;
        }

        if (!isIncomingMessage(message)) return;
        seenMessageIds.add(message.id);
        onCustomerMessage(ids, message.content ?? "");
      };

      window.addEventListener("chatwoot:on-message", onMessage);
      stop.current = () => {
        offActivity();
        window.removeEventListener("chatwoot:on-message", onMessage);
      };

    }

    void startAgent().catch((error: unknown) => {
      console.error("[argide]", error);
    });

    if (!document.querySelector("script[data-chatwoot-sdk]")) {
      const script = document.createElement("script");
      const firstScript = document.getElementsByTagName("script")[0];
      script.src = `${CHATWOOT_BASE_URL}/packs/js/sdk.js`;
      script.async = true;
      script.dataset.chatwootSdk = "true";
      script.onload = () => {
        window.chatwootSDK?.run({
          websiteToken: CHATWOOT_WEBSITE_TOKEN,
          baseUrl: CHATWOOT_BASE_URL,
        });
      };
      if (firstScript?.parentNode) firstScript.parentNode.insertBefore(script, firstScript);
      else document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
      stop.current();
    };
  }, []);

  if (!activity) return null;

  return (
    <p className="fixed bottom-24 left-4 z-[2147483000] max-w-xs rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg">
      {activity}
    </p>
  );
}
