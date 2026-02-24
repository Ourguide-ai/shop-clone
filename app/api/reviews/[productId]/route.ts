import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Review from "@/lib/db/models/Review";

export async function GET(
  _request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const productId = Number(params.productId);
    if (isNaN(productId)) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
    }

    await dbConnect();

    const reviews = await Review.find({ productId })
      .sort({ date: -1 })
      .lean();

    const mapped = reviews.map((r) => ({
      id: r._id.toString(),
      productId: r.productId,
      userName: r.userName,
      rating: r.rating,
      title: r.title,
      body: r.body,
      date: r.date,
    }));

    return NextResponse.json({ reviews: mapped });
  } catch (error) {
    console.error("Get reviews error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
