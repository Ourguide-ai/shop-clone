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

    const isAdmin = user.role === "admin";
    const filter = isAdmin
      ? { orderId: params.id }
      : { orderId: params.id, userId: user._id };

    const order = await Order.findOne(filter);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Compute tracking waypoint from elapsed days
    const daysSince = Math.floor(
      (Date.now() - new Date(order.date).getTime()) / 86400000
    );
    const currentWaypoint = Math.min(5, Math.max(0, daysSince));

    // Auto-deliver if 5+ days have elapsed and order isn't cancelled
    if (
      currentWaypoint >= 5 &&
      !["delivered", "cancelled", "return_requested", "replacement_requested"].includes(order.status)
    ) {
      order.status = "delivered";
      await order.save();
    }

    return NextResponse.json({
      order: {
        id: order.orderId,
        items: order.items,
        total: order.total,
        date: order.date,
        status: order.status,
        tracking: {
          currentWaypoint,
          estimatedDelivery: new Date(
            new Date(order.date).getTime() + 5 * 86400000
          ).toISOString(),
        },
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

    if (!action || !["cancel", "return", "replace", "deliver"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action. Must be cancel, return, replace, or deliver" },
        { status: 400 }
      );
    }

    await dbConnect();

    const isAdmin = user.role === "admin";
    const patchFilter = isAdmin
      ? { orderId: params.id }
      : { orderId: params.id, userId: user._id };

    const order = await Order.findOne(patchFilter);

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
    } else if (action === "deliver") {
      if (!isAdmin) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
      order.status = "delivered";
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
