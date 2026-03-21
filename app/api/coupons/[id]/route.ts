import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Coupon from "@/lib/db/models/Coupon";
import { requireRole, isResponse } from "@/lib/rbac";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await requireRole(request, ["admin"]);
    if (isResponse(result)) return result;

    const { isActive } = await request.json();

    await dbConnect();

    const coupon = await Coupon.findById(params.id);
    if (!coupon) {
      return NextResponse.json({ error: "Coupon not found" }, { status: 404 });
    }

    if (typeof isActive === "boolean") {
      coupon.isActive = isActive;
    }

    await coupon.save();

    return NextResponse.json({
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
    });
  } catch (error) {
    console.error("Update coupon error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await requireRole(request, ["admin"]);
    if (isResponse(result)) return result;

    await dbConnect();

    const coupon = await Coupon.findByIdAndDelete(params.id);
    if (!coupon) {
      return NextResponse.json({ error: "Coupon not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete coupon error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
