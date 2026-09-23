import { replyWithTaskResult } from "@/lib/chatwoot";

export const dynamic = "force-dynamic";

// The host page reports how an Argide task ended, because only the tab can read its outcome.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  return replyWithTaskResult(
    {
      accountId: body?.account_id,
      conversationId: body?.conversation_id,
      messageId: body?.id,
    },
    body?.status,
    body?.summary
  );
}
