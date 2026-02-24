import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Review from "@/lib/db/models/Review";
import { getAuthUser } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { productId, rating, title, body } = await request.json();

    if (!productId || !rating || !title?.trim() || !body?.trim()) {
      return NextResponse.json(
        { error: "Product ID, rating, title, and body are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const review = await Review.create({
      productId,
      userId: user._id,
      userName: user.name,
      rating,
      title: title.trim(),
      body: body.trim(),
      date: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        review: {
          id: review._id.toString(),
          productId: review.productId,
          userName: review.userName,
          rating: review.rating,
          title: review.title,
          body: review.body,
          date: review.date,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create review error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
