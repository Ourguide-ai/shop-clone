import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Order from "@/lib/db/models/Order";
import Cart from "@/lib/db/models/Cart";
import Product from "@/lib/db/models/Product";
import Coupon from "@/lib/db/models/Coupon";
import { getAuthUser } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await dbConnect();

    const isAdmin = user.role === "admin";
    const adminRequested = request.nextUrl.searchParams.get("admin") === "true";
    const filter = isAdmin && adminRequested ? {} : { userId: user._id };

    const orders = await Order.find(filter)
      .sort({ date: -1 })
      .lean();

    const mapped = orders.map((o) => ({
      id: o.orderId,
      items: o.items,
      total: o.total,
      subtotal: o.subtotal ?? o.total,
      couponCode: o.couponCode ?? null,
      discountAmount: o.discountAmount ?? 0,
      date: o.date,
      status: o.status,
    }));

    return NextResponse.json({ orders: mapped });
  } catch (error) {
    console.error("Get orders error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { items, total, couponCode } = await request.json();

    if (!items?.length || total === undefined) {
      return NextResponse.json({ error: "Items and total are required" }, { status: 400 });
    }

    await dbConnect();

    // Look up full product details for each item
    const enrichedItems = await Promise.all(
      items.map(async (item: { product: { id: number }; quantity: number }) => {
        const product = await Product.findOne({ productId: item.product.id }).lean();
        if (!product) {
          throw new Error(`Product with id ${item.product.id} not found`);
        }
        return {
          product: {
            id: product.productId,
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image,
            category: product.category,
          },
          quantity: item.quantity,
        };
      })
    );

    // Server-side recalculate subtotal from DB prices
    const subtotal = enrichedItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    let finalTotal = subtotal;
    let discountAmount = 0;
    let appliedCouponCode: string | undefined = undefined;

    // Validate and apply coupon if provided
    if (couponCode) {
      const coupon = await Coupon.findOne({
        code: couponCode.trim().toUpperCase(),
      });

      if (!coupon) {
        return NextResponse.json({ error: "Coupon not found" }, { status: 400 });
      }

      if (!coupon.isActive) {
        return NextResponse.json({ error: "Coupon is no longer active" }, { status: 400 });
      }

      if (new Date(coupon.expiresAt) <= new Date()) {
        return NextResponse.json({ error: "Coupon has expired" }, { status: 400 });
      }

      if (subtotal < coupon.minOrderAmount) {
        return NextResponse.json(
          { error: `Minimum order amount is $${coupon.minOrderAmount.toFixed(2)}` },
          { status: 400 }
        );
      }

      // Calculate discount
      if (coupon.discountType === "percentage") {
        discountAmount = (subtotal * coupon.discountValue) / 100;
        if (coupon.maxDiscount && discountAmount > coupon.maxDiscount) {
          discountAmount = coupon.maxDiscount;
        }
      } else {
        discountAmount = Math.min(coupon.discountValue, subtotal);
      }
      discountAmount = Math.round(discountAmount * 100) / 100;
      finalTotal = Math.round((subtotal - discountAmount) * 100) / 100;
      appliedCouponCode = coupon.code;

      // Atomic increment — fails if usage limit already reached
      const updated = await Coupon.findOneAndUpdate(
        { _id: coupon._id, usedCount: { $lt: coupon.usageLimit } },
        { $inc: { usedCount: 1 } }
      );

      if (!updated) {
        return NextResponse.json(
          { error: "Coupon has reached its usage limit" },
          { status: 400 }
        );
      }
    }

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const orderId = `ORD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    const order = await Order.create({
      orderId,
      userId: user._id,
      items: enrichedItems,
      subtotal,
      couponCode: appliedCouponCode,
      discountAmount,
      total: finalTotal,
      status: "pending",
      date: new Date().toISOString(),
    });

    // Clear the user's cart after order placement
    await Cart.findOneAndUpdate({ userId: user._id }, { items: [] });

    return NextResponse.json(
      {
        order: {
          id: order.orderId,
          items: order.items,
          total: order.total,
          subtotal: order.subtotal ?? order.total,
          couponCode: order.couponCode ?? null,
          discountAmount: order.discountAmount ?? 0,
          date: order.date,
          status: order.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
