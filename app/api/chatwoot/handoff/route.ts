import { replyWithBrowserGoal } from "@/lib/chatwoot";

export const dynamic = "force-dynamic";

// Local path: the host page forwards widget message ids here because Railway cannot reach localhost.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  return replyWithBrowserGoal({
    accountId: body?.account_id,
    conversationId: body?.conversation_id,
    messageId: body?.id,
  });
}
