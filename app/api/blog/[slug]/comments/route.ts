import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import BlogPost from "@/lib/db/models/BlogPost";
import BlogComment from "@/lib/db/models/BlogComment";
import { requireAuth, isResponse } from "@/lib/rbac";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect();

    const post = await BlogPost.findOne({ slug: params.slug }).lean();
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const comments = await BlogComment.find({ postId: post._id })
      .sort({ createdAt: -1 })
      .lean();

    const mapped = comments.map((c) => ({
      id: c._id.toString(),
      userName: c.userName,
      userRole: c.userRole,
      text: c.text,
      createdAt: c.createdAt.toISOString(),
    }));

    return NextResponse.json({ comments: mapped });
  } catch (error) {
    console.error("Get comments error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const result = await requireAuth(request);
    if (isResponse(result)) return result;
    const { user } = result;

    const { text } = await request.json();

    if (!text?.trim()) {
      return NextResponse.json({ error: "Comment text is required" }, { status: 400 });
    }

    await dbConnect();

    const post = await BlogPost.findOne({ slug: params.slug });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const comment = await BlogComment.create({
      postId: post._id,
      userId: user._id,
      userName: user.name,
      userRole: user.role || "buyer",
      text: text.trim(),
    });

    return NextResponse.json(
      {
        comment: {
          id: comment._id.toString(),
          userName: comment.userName,
          userRole: comment.userRole,
          text: comment.text,
          createdAt: comment.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create comment error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
