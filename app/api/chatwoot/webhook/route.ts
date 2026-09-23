import { replyWithBrowserGoal } from "@/lib/chatwoot";

export const dynamic = "force-dynamic";

// Agent-bot webhook, for when the shop has a public URL Chatwoot can reach.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (body?.event !== "message_created" || body?.message_type !== "incoming") {
    return Response.json({ ok: true });
  }

  return replyWithBrowserGoal({
    accountId: body?.account?.id,
    conversationId: body?.conversation?.id,
    messageId: body?.id,
  });
}
