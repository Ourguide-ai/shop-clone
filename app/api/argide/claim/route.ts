import { NextResponse } from "next/server";
import { ARGIDE_AGENT_API_URL } from "@/lib/chatwoot";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const apiKey = process.env.ARGIDE_AGENT_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Set ARGIDE_AGENT_API_KEY. The browser never receives this key." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const sessionId = body?.sessionId;
  const pairingCode = body?.pairingCode;
  if (typeof sessionId !== "string" || !sessionId || typeof pairingCode !== "string" || !pairingCode) {
    return NextResponse.json({ error: "sessionId and pairingCode are required strings" }, { status: 400 });
  }

  // One attempt only: a 409 ALREADY_CLAIMED is passed back to the SDK as-is, never retried.
  const response = await fetch(`${ARGIDE_AGENT_API_URL}/api/agent/v1/sessions/claim`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ sessionId, pairingCode }),
    cache: "no-store",
  });

  return new NextResponse(await response.text(), {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
