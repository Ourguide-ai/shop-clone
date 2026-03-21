import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Coupon from "@/lib/db/models/Coupon";
import { requireRole, isResponse } from "@/lib/rbac";

export async function GET(request: NextRequest) {
  try {
    const result = await requireRole(request, ["admin"]);
    if (isResponse(result)) return result;

    await dbConnect();

    const coupons = await Coupon.find().sort({ createdAt: -1 }).lean();

    const mapped = coupons.map((c) => ({
      id: c._id.toString(),
      code: c.code,
      discountType: c.discountType,
      discountValue: c.discountValue,
      minOrderAmount: c.minOrderAmount,
      maxDiscount: c.maxDiscount ?? null,
      usageLimit: c.usageLimit,
      usedCount: c.usedCount,
      isActive: c.isActive,
      expiresAt: c.expiresAt.toISOString(),
      createdAt: c.createdAt.toISOString(),
    }));

    return NextResponse.json({ coupons: mapped });
  } catch (error) {
    console.error("Get coupons error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const result = await requireRole(request, ["admin"]);
    if (isResponse(result)) return result;
    const { user } = result;

    const body = await request.json();
    const {
      code,
      discountType,
      discountValue,
      minOrderAmount,
      maxDiscount,
      usageLimit,
      expiresAt,
    } = body;

    if (!code?.trim() || !discountType || discountValue === undefined || !usageLimit || !expiresAt) {
      return NextResponse.json(
        { error: "Code, discountType, discountValue, usageLimit, and expiresAt are required" },
        { status: 400 }
      );
    }

    if (!["percentage", "fixed"].includes(discountType)) {
      return NextResponse.json({ error: "discountType must be 'percentage' or 'fixed'" }, { status: 400 });
    }

    if (discountType === "percentage" && (discountValue < 1 || discountValue > 100)) {
      return NextResponse.json({ error: "Percentage discount must be between 1 and 100" }, { status: 400 });
    }

    if (discountValue <= 0) {
      return NextResponse.json({ error: "Discount value must be positive" }, { status: 400 });
    }

    if (new Date(expiresAt) <= new Date()) {
      return NextResponse.json({ error: "Expiry date must be in the future" }, { status: 400 });
    }

    await dbConnect();

    const existing = await Coupon.findOne({ code: code.trim().toUpperCase() });
    if (existing) {
      return NextResponse.json({ error: "A coupon with this code already exists" }, { status: 409 });
    }

    const coupon = await Coupon.create({
      code: code.trim().toUpperCase(),
      discountType,
      discountValue,
      minOrderAmount: minOrderAmount || 0,
      maxDiscount: discountType === "percentage" ? (maxDiscount || null) : null,
      usageLimit,
      expiresAt: new Date(expiresAt),
      createdBy: user._id,
    });

    return NextResponse.json(
      {
        coupon: {
          id: coupon._id.toString(),
          code: coupon.code,
          discountType: coupon.discountType,
          discountValue: coupon.discountValue,
          minOrderAmount: coupon.minOrderAmount,
          maxDiscount: coupon.maxDiscount ?? null,
          usageLimit: coupon.usageLimit,
          usedCount: coupon.usedCount,
          isActive: coupon.isActive,
          expiresAt: coupon.expiresAt.toISOString(),
          createdAt: coupon.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create coupon error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
