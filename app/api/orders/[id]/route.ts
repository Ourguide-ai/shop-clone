import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Order from "@/lib/db/models/Order";
import { getAuthUser } from "@/lib/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await dbConnect();

    const order = await Order.findOne({
      orderId: params.id,
      userId: user._id,
    }).lean();

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({
      order: {
        id: order.orderId,
        items: order.items,
        total: order.total,
        date: order.date,
        status: order.status,
      },
    });
  } catch (error) {
    console.error("Get order error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { action } = await request.json();

    if (!action || !["cancel", "return", "replace"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action. Must be cancel, return, or replace" },
        { status: 400 }
      );
    }

    await dbConnect();

    const order = await Order.findOne({
      orderId: params.id,
      userId: user._id,
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (action === "cancel") {
      if (!["pending", "processing"].includes(order.status)) {
        return NextResponse.json(
          { error: "Order can only be cancelled when pending or processing" },
          { status: 400 }
        );
      }
      order.status = "cancelled";
    } else if (action === "return") {
      if (order.status !== "delivered") {
        return NextResponse.json(
          { error: "Return can only be requested for delivered orders" },
          { status: 400 }
        );
      }
      order.status = "return_requested";
    } else if (action === "replace") {
      if (order.status !== "delivered") {
        return NextResponse.json(
          { error: "Replacement can only be requested for delivered orders" },
          { status: 400 }
        );
      }
      order.status = "replacement_requested";
    }

    await order.save();

    return NextResponse.json({
      order: {
        id: order.orderId,
        items: order.items,
        total: order.total,
        date: order.date,
        status: order.status,
      },
    });
  } catch (error) {
    console.error("Update order error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
