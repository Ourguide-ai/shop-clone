import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import BlogPost from "@/lib/db/models/BlogPost";
import BlogComment from "@/lib/db/models/BlogComment";
import { requireRole, isResponse } from "@/lib/rbac";
import { uploadToCloudinary } from "@/lib/cloudinary";

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

    return NextResponse.json({
      post: {
        id: post._id.toString(),
        slug: post.slug,
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        featuredImage: post.featuredImage || "",
        category: post.category,
        tags: post.tags,
        authorName: post.authorName,
        status: post.status,
        publishedAt: post.publishedAt?.toISOString() || "",
        metaTitle: post.metaTitle || "",
        metaDescription: post.metaDescription || "",
        createdAt: post.createdAt.toISOString(),
      },
    });
  } catch (error) {
    console.error("Get blog post error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const result = await requireRole(request, ["admin"]);
    if (isResponse(result)) return result;

    await dbConnect();

    const post = await BlogPost.findOne({ slug: params.slug });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const formData = await request.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const category = formData.get("category") as string;
    const tagsRaw = formData.get("tags") as string;
    const status = formData.get("status") as string;
    const metaTitle = formData.get("metaTitle") as string;
    const metaDescription = formData.get("metaDescription") as string;

    if (title) post.title = title.trim();
    if (content) post.content = content;
    if (excerpt) post.excerpt = excerpt.trim();
    if (category) post.category = category as typeof post.category;
    if (tagsRaw !== null) {
      post.tags = tagsRaw
        ? tagsRaw.split(",").map((t) => t.trim().toLowerCase()).filter(Boolean)
        : [];
    }
    if (metaTitle) post.metaTitle = metaTitle.trim();
    if (metaDescription) post.metaDescription = metaDescription.trim();

    if (status === "published" && post.status !== "published") {
      post.status = "published";
      post.publishedAt = new Date();
    } else if (status === "draft") {
      post.status = "draft";
    }

    // Upload new featured image if provided
    const imageFile = formData.get("featuredImage");
    if (imageFile instanceof File && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploaded = await uploadToCloudinary(buffer, "blog");
      post.featuredImage = uploaded.url;
    }

    await post.save();

    return NextResponse.json({
      post: {
        id: post._id.toString(),
        slug: post.slug,
        title: post.title,
        status: post.status,
      },
    });
  } catch (error) {
    console.error("Update blog post error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const result = await requireRole(request, ["admin"]);
    if (isResponse(result)) return result;

    await dbConnect();

    const post = await BlogPost.findOneAndDelete({ slug: params.slug });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Delete all comments for this post
    await BlogComment.deleteMany({ postId: post._id });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete blog post error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
