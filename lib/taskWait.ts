import type { TaskOutcome } from "@ourguide-ai/agent";

// An Argide task waiting for the customer (status "needs_input"), asked in the chat one message at a time.

type TaskNeeds = NonNullable<TaskOutcome["needs"]>;
export type InputField = Extract<TaskNeeds, { kind: "input" }>["fields"][number];
export type FieldValue = string | string[] | boolean;
type InputWait = { kind: "input"; fields: InputField[]; answers: Record<string, FieldValue> };

/** `user_action`: the customer does something on the page, then says so. `input`: values, one field per reply. */
export type TaskWait = { kind: "user_action" } | InputWait;

/** The wait a needs_input outcome describes. One without fields is answered with a message. */
export function waitFromNeeds(needs: TaskOutcome["needs"]): TaskWait {
  return needs?.kind === "input" && needs.fields.length > 0
    ? { kind: "input", fields: needs.fields, answers: {} }
    : { kind: "user_action" };
}

/** The next field without an answer, or null once every field has one. */
export function nextField(wait: InputWait): InputField | null {
  return wait.fields.find((field) => !Object.hasOwn(wait.answers, field.name)) ?? null;
}

/** The chat line that asks for one field, with the format its answer takes. */
export function fieldPrompt(field: InputField): string {
  switch (field.type) {
    case "date":
      return `${field.name}? Reply with a date as YYYY-MM-DD.`;
    case "checkbox":
      return `${field.name}? Reply yes or no.`;
    case "options":
      return field.allowMultiple
        ? `${field.name}? Reply with one or more of: ${field.options.join(", ")}, separated by commas.`
        : `${field.name}? Reply with one of: ${field.options.join(", ")}.`;
    case "text":
      return field.placeholder ? `${field.name}? For example: ${field.placeholder}` : `${field.name}?`;
  }
}

/** The first message of a wait: Argide's question, then the first field or how to say the action is done. */
export function waitQuestion(wait: TaskWait, summary: string | null): string {
  const question = summary?.trim();
  if (wait.kind === "user_action") {
    return `${question || "Argide needs you to do something on the page first."}\n\nReply here once you've done it.`;
  }
  const field = nextField(wait);
  return [question, field && fieldPrompt(field)].filter(Boolean).join("\n\n");
}

const YES = /^(y|yes|true)$/i;
const NO = /^(n|no|false)$/i;

function isIsoDate(text: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return false;
  const date = new Date(`${text}T00:00:00Z`);
  // Rejects dates that roll over, such as 2026-02-30.
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(text);
}

/** The reply as this field's value, or null when it can't be one, so the field is asked again. */
export function parseFieldAnswer(field: InputField, reply: string): FieldValue | null {
  const text = reply.trim();
  if (!text) return null;
  switch (field.type) {
    case "text":
      return text;
    case "date":
      return isIsoDate(text) ? text : null;
    case "checkbox":
      return YES.test(text) ? true : NO.test(text) ? false : null;
    case "options": {
      // A listed option matches whatever its case; anything else is passed on as written, which the server accepts.
      const pick = (value: string) => field.options.find((o) => o.toLowerCase() === value.toLowerCase()) ?? value;
      if (!field.allowMultiple) return pick(text);
      const picked = text
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
        .map(pick);
      return picked.length > 0 ? picked : null;
    }
  }
}

/** The wait with this reply recorded: the next field to ask, or every value once all are answered. */
export function answerField(
  wait: InputWait,
  reply: string
): { ask: string; wait: InputWait } | { inputs: Record<string, FieldValue> } {
  const field = nextField(wait);
  if (!field) return { inputs: wait.answers };
  const value = parseFieldAnswer(field, reply);
  if (value === null) return { ask: fieldPrompt(field), wait };
  const answered = { ...wait, answers: { ...wait.answers, [field.name]: value } };
  const next = nextField(answered);
  return next ? { ask: fieldPrompt(next), wait: answered } : { inputs: answered.answers };
}
