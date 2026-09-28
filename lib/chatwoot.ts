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

const HANDOFF_MESSAGE = "Handing this over to Argide. Watch the page, it's doing it for you now.";

// How the Argide bot reports a finished task. `summary` is Argide's own account of what it did.
const TASK_RESULT_MESSAGES = {
  completed: (summary: string) => (summary ? `✓ Done: ${summary}` : "✓ Done."),
  failed: (summary: string) => (summary ? `I couldn't finish that: ${summary}` : "I couldn't finish that."),
  cancelled: () => "Argide stopped before finishing.",
  not_started: () => "Argide couldn't start this task.",
} satisfies Record<string, (summary: string) => string>;

type TaskResultStatus = keyof typeof TASK_RESULT_MESSAGES;

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
 * Hands a customer message that starts with "argide:" to Argide: the Argide bot replies with the rest of the
 * message as content_attributes.argide_goal. Other messages are left to Chatwoot's bot or agents. The message
 * is re-read from Chatwoot, so callers only supply ids and cannot choose the content or message type.
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
  return postAsArgide(conversation, { content: HANDOFF_MESSAGE, content_attributes: { argide_goal: goal } });
}

/**
 * Posts how an Argide task ended, from the Argide bot. Only the tab can read a task's outcome, so the page
 * reports it; `ref` must be the handoff message that started the task, and each handoff is answered once.
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

  reportedHandoffIds.add(messageId);
  const detail = typeof summary === "string" ? summary.trim() : "";
  return postAsArgide(conversation, { content: TASK_RESULT_MESSAGES[status as TaskResultStatus](detail) });
}
