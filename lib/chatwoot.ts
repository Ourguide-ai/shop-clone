import { browserGoalForUserText } from "@/lib/browserGoal";

export const CHATWOOT_BASE_URL = (
  process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || "https://chatwoot-web-production-7087.up.railway.app"
).replace(/\/$/, "");

export const CHATWOOT_WEBSITE_TOKEN =
  process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || "eyjMPh359MKe7o2rpSrXYiQN";

export const ARGIDE_AGENT_API_URL = (
  process.env.NEXT_PUBLIC_ARGIDE_AGENT_API_URL || "https://dev.api.argide.ai"
).replace(/\/$/, "");

export const ARGIDE_AGENT_PRODUCT_ID =
  process.env.NEXT_PUBLIC_ARGIDE_AGENT_PRODUCT_ID || "prod_27b58e4d-2715-4451-817c-f8d28088321e";

export const ARGIDE_ASSET_ORIGIN =
  process.env.NEXT_PUBLIC_ARGIDE_ASSET_ORIGIN || "https://dev.dashboard.argide.ai";

const HANDOFF_MESSAGE = "Handing this over to Argide. Watch the page, it's doing it for you now.";

// How the Argide bot reports a task. `summary` is Argide's own account of what it did, or, while the task waits
// for the customer (needs_input), what it is asking them.
const TASK_RESULT_MESSAGES = {
  completed: (summary: string) => (summary ? `✓ Done: ${summary}` : "✓ Done."),
  failed: (summary: string) => (summary ? `I couldn't finish that: ${summary}` : "I couldn't finish that."),
  cancelled: () => "Argide stopped before finishing.",
  not_started: () => "Argide couldn't start this task.",
  needs_input: (summary: string) => summary || "Argide needs something from you to continue.",
} satisfies Record<string, (summary: string) => string>;

type TaskResultStatus = keyof typeof TASK_RESULT_MESSAGES;

// A waiting task asks as often as it needs to; only how it ended answers the handoff.
const WAITING_STATUS: TaskResultStatus = "needs_input";

// Chatwoot integer message types.
const INCOMING = 0;
const OUTGOING = 1;

// Customer messages already handed to Argide, and handoffs whose result was already posted.
const handedOffMessageIds = new Set<number>();
const reportedHandoffIds = new Set<number>();

type MessageRef = {
  accountId: unknown;
  conversationId: unknown;
  messageId: unknown;
};

type ChatwootMessage = {
  id: number;
  content?: string | null;
  message_type: number;
  private?: boolean;
  content_attributes?: { argide_goal?: unknown };
};

type ChatwootConversation = {
  messagesUrl: string;
  headers: Record<string, string>;
  argideBotId: string;
};

function positiveInt(value: unknown): number | null {
  const n = typeof value === "string" ? Number(value) : value;
  return typeof n === "number" && Number.isSafeInteger(n) && n > 0 ? n : null;
}

/** The conversation a request refers to, or the error response when it cannot be served. */
function resolveConversation(ref: MessageRef): { conversation: ChatwootConversation; messageId: number } | Response {
  const accountId = positiveInt(ref.accountId);
  const conversationId = positiveInt(ref.conversationId);
  const messageId = positiveInt(ref.messageId);
  if (!accountId || !conversationId || !messageId) {
    return Response.json({ error: "account, conversation, and message ids are required" }, { status: 400 });
  }

  const apiToken = process.env.CHATWOOT_API_TOKEN;
  const argideBotId = process.env.CHATWOOT_ARGIDE_BOT_ID;
  if (!apiToken || !argideBotId) {
    return Response.json(
      {
        error:
          "Set CHATWOOT_API_TOKEN and CHATWOOT_ARGIDE_BOT_ID. The website widget can load without them, but Chatwoot cannot hand a goal to Argide.",
      },
      { status: 503 }
    );
  }

  return {
    messageId,
    conversation: {
      messagesUrl: `${CHATWOOT_BASE_URL}/api/v1/accounts/${accountId}/conversations/${conversationId}/messages`,
      headers: { "Content-Type": "application/json", api_access_token: apiToken },
      argideBotId,
    },
  };
}

async function findMessage(conversation: ChatwootConversation, messageId: number): Promise<ChatwootMessage | undefined> {
  const response = await fetch(`${conversation.messagesUrl}?after=${messageId - 1}`, {
    headers: conversation.headers,
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Chatwoot message lookup failed: HTTP ${response.status}`);

  const { payload } = (await response.json()) as { payload?: ChatwootMessage[] };
  return payload?.find((m) => m.id === messageId);
}

/** Posts a public message from the Argide agent bot, so the chat shows Argide as its own participant. */
async function postAsArgide(
  conversation: ChatwootConversation,
  message: { content: string; content_attributes?: Record<string, unknown> }
): Promise<Response> {
  const response = await fetch(conversation.messagesUrl, {
    method: "POST",
    headers: conversation.headers,
    body: JSON.stringify({
      ...message,
      message_type: "outgoing",
      sender_type: "AgentBot",
      sender_id: conversation.argideBotId,
    }),
    cache: "no-store",
  });

  return new Response(await response.text(), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * The conversation before the handoff message, in the shape ArgideAgent.do({ messages }) takes: the customer's
 * messages as "user", public replies from agents and bots as "assistant", oldest first. The handoff message itself
 * is left out: the goal already carries it. Chatwoot returns the newest page of messages, which is all Argide keeps
 * anyway. A failed read hands off the goal alone.
 */
async function conversationForArgide(
  conversation: ChatwootConversation,
  beforeMessageId: number
): Promise<{ role: "user" | "assistant"; content: string }[]> {
  const response = await fetch(conversation.messagesUrl, { headers: conversation.headers, cache: "no-store" });
  if (!response.ok) return [];
  const { payload } = (await response.json()) as { payload?: ChatwootMessage[] };
  return (payload ?? [])
    .filter(
      (m) =>
        m.id < beforeMessageId &&
        !m.private &&
        (m.message_type === INCOMING || m.message_type === OUTGOING) &&
        typeof m.content === "string" &&
        m.content.trim() !== ""
    )
    .sort((a, b) => a.id - b.id)
    .map((m) => ({ role: m.message_type === INCOMING ? "user" : "assistant", content: m.content as string }));
}

/**
 * Hands a customer message that starts with "argide:" to Argide: the Argide bot replies with the rest of the
 * message as content_attributes.argide_goal, and the conversation so far as argide_messages. Other messages are
 * left to Chatwoot's bot or agents. The message is re-read from Chatwoot, so callers only supply ids and cannot
 * choose the content or message type. The conversation travels on the handoff message, so Chatwoot delivers it
 * only to this conversation's own widget.
 */
export async function replyWithBrowserGoal(ref: MessageRef): Promise<Response> {
  const resolved = resolveConversation(ref);
  if (resolved instanceof Response) return resolved;
  const { conversation, messageId } = resolved;
  if (handedOffMessageIds.has(messageId)) {
    return Response.json({ ok: true, duplicate: true });
  }

  const message = await findMessage(conversation, messageId);
  const goal =
    message?.message_type === INCOMING && !message.private ? browserGoalForUserText(message.content) : null;
  if (!goal) {
    return Response.json({ ok: true, ignored: true });
  }

  handedOffMessageIds.add(messageId);
  const messages = await conversationForArgide(conversation, messageId);
  return postAsArgide(conversation, {
    content: HANDOFF_MESSAGE,
    content_attributes: { argide_goal: goal, argide_messages: messages },
  });
}

/**
 * Posts how an Argide task ended, or what a waiting task asks the customer, from the Argide bot. Only the tab can
 * read a task's outcome, so the page reports it; `ref` must be the handoff message that started the task. Each
 * handoff gets one ending; questions are posted until then.
 */
export async function replyWithTaskResult(ref: MessageRef, status: unknown, summary: unknown): Promise<Response> {
  if (typeof status !== "string" || !Object.hasOwn(TASK_RESULT_MESSAGES, status)) {
    return Response.json(
      { error: `status must be one of ${Object.keys(TASK_RESULT_MESSAGES).join(", ")}` },
      { status: 422 }
    );
  }

  const resolved = resolveConversation(ref);
  if (resolved instanceof Response) return resolved;
  const { conversation, messageId } = resolved;
  if (reportedHandoffIds.has(messageId)) {
    return Response.json({ ok: true, duplicate: true });
  }

  const handoff = await findMessage(conversation, messageId);
  if (handoff?.message_type !== OUTGOING || typeof handoff.content_attributes?.argide_goal !== "string") {
    return Response.json({ error: "id must be an Argide handoff message" }, { status: 422 });
  }

  if (status !== WAITING_STATUS) reportedHandoffIds.add(messageId);
  const detail = typeof summary === "string" ? summary.trim() : "";
  return postAsArgide(conversation, { content: TASK_RESULT_MESSAGES[status as TaskResultStatus](detail) });
}
