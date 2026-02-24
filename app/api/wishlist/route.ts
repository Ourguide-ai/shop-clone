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

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await dbConnect();
    const products = await getPopulatedWishlist(user._id.toString());
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Get wishlist error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    await dbConnect();

    let wishlist = await Wishlist.findOne({ userId: user._id });
    if (!wishlist) {
      wishlist = await Wishlist.create({ userId: user._id, productIds: [] });
    }

    if (!wishlist.productIds.includes(productId)) {
      wishlist.productIds.push(productId);
      await wishlist.save();
    }

    const products = await getPopulatedWishlist(user._id.toString());
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Add to wishlist error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
