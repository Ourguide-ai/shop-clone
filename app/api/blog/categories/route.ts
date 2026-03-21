import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import BlogPost from "@/lib/db/models/BlogPost";

export async function GET() {
  try {
    await dbConnect();

    const categories = await BlogPost.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const mapped = categories.map((c: { _id: string; count: number }) => ({
      slug: c._id,
      name: c._id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      count: c.count,
    }));

    return NextResponse.json({ categories: mapped });
  } catch (error) {
    console.error("Get categories error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
