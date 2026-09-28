// A customer message is routed to Argide only when it starts with "argide:"; the rest is the goal, as typed.
const ARGIDE_PREFIX = /^\s*argide\s*:/i;

export function browserGoalForUserText(text: string | null | undefined): string | null {
  if (typeof text !== "string" || !ARGIDE_PREFIX.test(text)) return null;
  return text.replace(ARGIDE_PREFIX, "").trim() || null;
}

// Payload of the widget's chatwoot:on-message event (Chatwoot Message#push_event_data).
// conversation_id is the display id used by the REST API.
type ChatwootMessage = {
  id?: number;
  message_type?: number;
  private?: boolean;
  content_attributes?: { argide_goal?: unknown };
  account_id?: number;
  conversation_id?: number;
};

// Widget events use integer message types.
const INCOMING = 0;
const OUTGOING = 1;

export function asChatwootMessage(value: unknown): ChatwootMessage | null {
  if (!value || typeof value !== "object") return null;
  return value as ChatwootMessage;
}

function argideGoalFromMessage(message: ChatwootMessage | null): string | null {
  const goal = message?.content_attributes?.argide_goal;
  if (typeof goal !== "string") return null;
  const trimmed = goal.trim();
  return trimmed || null;
}

/** The goal to hand to ArgideAgent.do(), only for a public outgoing message with a non-empty argide_goal. */
export function browserHandoffGoal(message: ChatwootMessage | null): string | null {
  if (!message || message.private || message.message_type !== OUTGOING) return null;
  return argideGoalFromMessage(message);
}

export function isIncomingMessage(message: ChatwootMessage | null): boolean {
  return !!message && !message.private && message.message_type === INCOMING;
}
