import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { orderId, amount } = await request.json();

    if (!orderId || amount === undefined) {
      return NextResponse.json(
        { error: "Order ID and amount are required" },
        { status: 400 }
      );
    }

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate a fake transaction ID
    const transactionId = `TXN-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      transactionId,
      orderId,
      amount,
      message: "Payment processed successfully (simulated)",
    });
  } catch (error) {
    console.error("Payment process error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
