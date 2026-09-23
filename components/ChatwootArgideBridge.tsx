"use client";

import { useEffect, useState } from "react";
import {
  ARGIDE_AGENT_API_URL,
  ARGIDE_AGENT_PRODUCT_ID,
  CHATWOOT_BASE_URL,
  CHATWOOT_WEBSITE_TOKEN,
} from "@/lib/chatwoot";
import { asChatwootMessage, browserHandoffGoal, isIncomingMessage } from "@/lib/browserGoal";

// The task in flight, kept per tab so its result is still reported after Argide reloads the page.
const PENDING_TASK_KEY = "argide-pending-task";
const TASK_CHECK_INTERVAL_MS = 2000;

const seenMessageIds = new Set<number>();

type MessageIds = { id: number; account_id: number; conversation_id: number };
type PendingTask = { taskId: string; handoff: MessageIds };

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

      if (cancelled) return;
      const offActivity = ArgideAgent.onActivity((event) => {
        if (event.kind === "idle") {
          setActivity(null);
          return;
        }
        setActivity("Argide is working on this page");
      });

      // Only the tab can read a task's outcome, so it waits for the task to settle and reports it to Chatwoot.
      async function reportWhenSettled(task: PendingTask) {
        sessionStorage.setItem(PENDING_TASK_KEY, JSON.stringify(task));
        try {
          let outcome = await ArgideAgent.check({ taskId: task.taskId });
          while (outcome.status === "running") {
            await new Promise((resolve) => setTimeout(resolve, TASK_CHECK_INTERVAL_MS));
            outcome = await ArgideAgent.check({ taskId: task.taskId });
          }
          await reportTaskResult(task.handoff, outcome.status, outcome.summary);
        } finally {
          sessionStorage.removeItem(PENDING_TASK_KEY);
        }
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
          // do() resolves once the task exists; a different goal while one runs rejects with SESSION_BUSY.
          ArgideAgent.do({ goal })
            .then(
              ({ taskId }) => reportWhenSettled({ taskId, handoff: ids }),
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

        // The server re-reads the message from Chatwoot, so only ids are sent.
        void fetch("/api/chatwoot/handoff", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ids),
        });
      };

      window.addEventListener("chatwoot:on-message", onMessage);
      stop.current = () => {
        offActivity();
        window.removeEventListener("chatwoot:on-message", onMessage);
      };

      const pendingTask = sessionStorage.getItem(PENDING_TASK_KEY);
      if (pendingTask) {
        void reportWhenSettled(JSON.parse(pendingTask) as PendingTask).catch((error: unknown) => {
          console.error("[argide]", error);
        });
      }
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
