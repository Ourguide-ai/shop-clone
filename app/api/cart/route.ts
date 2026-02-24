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

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await dbConnect();
    const items = await getPopulatedCart(user._id.toString());
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Get cart error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { productId, quantity = 1 } = await request.json();

    if (!productId || quantity < 1) {
      return NextResponse.json({ error: "Invalid product or quantity" }, { status: 400 });
    }

    await dbConnect();

    let cart = await Cart.findOne({ userId: user._id });
    if (!cart) {
      cart = await Cart.create({ userId: user._id, items: [] });
    }

    const existingItem = cart.items.find((item) => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();

    const items = await getPopulatedCart(user._id.toString());
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Add to cart error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { productId, quantity } = await request.json();

    if (!productId || quantity === undefined) {
      return NextResponse.json({ error: "Product ID and quantity are required" }, { status: 400 });
    }

    await dbConnect();

    const cart = await Cart.findOne({ userId: user._id });
    if (!cart) {
      return NextResponse.json({ items: [] });
    }

    if (quantity <= 0) {
      cart.items = cart.items.filter((item) => item.productId !== productId);
    } else {
      const item = cart.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity = quantity;
      }
    }

    await cart.save();

    const items = await getPopulatedCart(user._id.toString());
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Update cart error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await dbConnect();

    await Cart.findOneAndUpdate(
      { userId: user._id },
      { items: [] }
    );

    return NextResponse.json({ items: [] });
  } catch (error) {
    console.error("Clear cart error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
