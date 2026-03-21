import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Coupon from "@/lib/db/models/Coupon";
import { requireAuth, isResponse } from "@/lib/rbac";

export async function POST(request: NextRequest) {
  try {
    const result = await requireAuth(request);
    if (isResponse(result)) return result;

    const { code, cartTotal } = await request.json();

    if (!code?.trim() || cartTotal === undefined) {
      return NextResponse.json(
        { error: "Code and cartTotal are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const coupon = await Coupon.findOne({
      code: code.trim().toUpperCase(),
    }).lean();

    if (!coupon) {
      return NextResponse.json(
        { valid: false, error: "Coupon code not found" },
        { status: 404 }
      );
    }

    if (!coupon.isActive) {
      return NextResponse.json(
        { valid: false, error: "This coupon is no longer active" },
        { status: 400 }
      );
    }

    if (new Date(coupon.expiresAt) <= new Date()) {
      return NextResponse.json(
        { valid: false, error: "This coupon has expired" },
        { status: 400 }
      );
    }

    if (coupon.usedCount >= coupon.usageLimit) {
      return NextResponse.json(
        { valid: false, error: "This coupon has reached its usage limit" },
        { status: 400 }
      );
    }

    if (cartTotal < coupon.minOrderAmount) {
      return NextResponse.json(
        {
          valid: false,
          error: `Minimum order amount is $${coupon.minOrderAmount.toFixed(2)}`,
        },
        { status: 400 }
      );
    }

    // Calculate discount
    let discountAmount: number;
    if (coupon.discountType === "percentage") {
      discountAmount = (cartTotal * coupon.discountValue) / 100;
      if (coupon.maxDiscount && discountAmount > coupon.maxDiscount) {
        discountAmount = coupon.maxDiscount;
      }
    } else {
      discountAmount = Math.min(coupon.discountValue, cartTotal);
    }

    discountAmount = Math.round(discountAmount * 100) / 100;

    return NextResponse.json({
      valid: true,
      code: coupon.code,
      discountType: coupon.discountType,
      discountValue: coupon.discountValue,
      discountAmount,
    });
  } catch (error) {
    console.error("Validate coupon error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
