import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Cart from "@/lib/db/models/Cart";
import Product from "@/lib/db/models/Product";
import { getAuthUser } from "@/lib/auth";

async function getPopulatedCart(userId: string) {
  const cart = await Cart.findOne({ userId }).lean();
  if (!cart || cart.items.length === 0) return [];

  const productIds = cart.items.map((item) => item.productId);
  const products = await Product.find({ productId: { $in: productIds } }).lean();
  const productMap = new Map(products.map((p) => [p.productId, p]));

  return cart.items
    .map((item) => {
      const product = productMap.get(item.productId);
      if (!product) return null;
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
    .filter(Boolean);
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

    const cart = await Cart.findOne({ userId: user._id });
    if (cart) {
      cart.items = cart.items.filter((item) => item.productId !== productId);
      await cart.save();
    }

    const items = await getPopulatedCart(user._id.toString());
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Remove cart item error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
