const BROWSER_GOALS: { pattern: RegExp; goal: string }[] = [
  {
    pattern: /\b(add|put)\b.*\bcart\b|\badd to cart\b/i,
    goal: "Add the first product on this page to the cart by clicking its Add to Cart button.",
  },
  {
    pattern: /\b(open|show|view|go to)\b.*\bcart\b/i,
    goal: "Open the cart page.",
  },
  {
    pattern: /\bcheckout\b/i,
    goal: "Open the checkout page.",
  },
];

export function browserGoalForUserText(text: string | null | undefined): string | null {
  if (typeof text !== "string" || !text.trim()) return null;
  const match = BROWSER_GOALS.find((rule) => rule.pattern.test(text));
  return match?.goal ?? null;
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
