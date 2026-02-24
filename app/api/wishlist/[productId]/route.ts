import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Wishlist from "@/lib/db/models/Wishlist";
import Product from "@/lib/db/models/Product";
import { getAuthUser } from "@/lib/auth";

async function getPopulatedWishlist(userId: string) {
  const wishlist = await Wishlist.findOne({ userId }).lean();
  if (!wishlist || wishlist.productIds.length === 0) return [];

  const products = await Product.find({
    productId: { $in: wishlist.productIds },
  }).lean();

  return products.map((p) => ({
    id: p.productId,
    title: p.title,
    description: p.description,
    price: p.price,
    image: p.image,
    category: p.category,
  }));
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const productId = Number(params.productId);
    if (isNaN(productId)) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
    }

    await dbConnect();

    const wishlist = await Wishlist.findOne({ userId: user._id });
    if (wishlist) {
      wishlist.productIds = wishlist.productIds.filter((id) => id !== productId);
      await wishlist.save();
    }

    const products = await getPopulatedWishlist(user._id.toString());
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Remove from wishlist error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
