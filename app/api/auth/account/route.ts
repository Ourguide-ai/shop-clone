import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db/mongoose";
import Cart from "@/lib/db/models/Cart";
import Order from "@/lib/db/models/Order";
import Wishlist from "@/lib/db/models/Wishlist";
import Review from "@/lib/db/models/Review";
import { getAuthUser } from "@/lib/auth";

export async function DELETE(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: "Password is required" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Password is incorrect" }, { status: 401 });
    }

    await dbConnect();

    await Promise.all([
      Cart.deleteMany({ userId: user._id }),
      Order.deleteMany({ userId: user._id }),
      Wishlist.deleteMany({ userId: user._id }),
      Review.deleteMany({ userId: user._id }),
      user.deleteOne(),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete account error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
