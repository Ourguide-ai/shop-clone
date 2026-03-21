import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import BlogComment from "@/lib/db/models/BlogComment";
import { requireRole, isResponse } from "@/lib/rbac";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string; commentId: string } }
) {
  try {
    const result = await requireRole(request, ["admin"]);
    if (isResponse(result)) return result;

    await dbConnect();

    const comment = await BlogComment.findByIdAndDelete(params.commentId);
    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete comment error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
