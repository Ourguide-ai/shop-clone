import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import BlogPost from "@/lib/db/models/BlogPost";
import { getAuthUser } from "@/lib/auth";
import { requireRole, isResponse } from "@/lib/rbac";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const page = Math.max(1, Number(request.nextUrl.searchParams.get("page")) || 1);
    const limit = Math.min(50, Math.max(1, Number(request.nextUrl.searchParams.get("limit")) || 12));
    const category = request.nextUrl.searchParams.get("category");
    const tag = request.nextUrl.searchParams.get("tag");
    const adminMode = request.nextUrl.searchParams.get("admin") === "true";

    // Check if admin mode requested
    let includesDrafts = false;
    if (adminMode) {
      const user = await getAuthUser(request);
      if (user?.role === "admin") {
        includesDrafts = true;
      }
    }

    const filter: Record<string, unknown> = includesDrafts ? {} : { status: "published" };
    if (category) filter.category = category;
    if (tag) filter.tags = tag;

    const [posts, total] = await Promise.all([
      BlogPost.find(filter)
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      BlogPost.countDocuments(filter),
    ]);

    const mapped = posts.map((p) => ({
      id: p._id.toString(),
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      featuredImage: p.featuredImage || "",
      category: p.category,
      tags: p.tags,
      authorName: p.authorName,
      status: p.status,
      publishedAt: p.publishedAt?.toISOString() || "",
      metaTitle: p.metaTitle || "",
      metaDescription: p.metaDescription || "",
      createdAt: p.createdAt.toISOString(),
    }));

    return NextResponse.json({ posts: mapped, total, page, limit });
  } catch (error) {
    console.error("Get blog posts error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const result = await requireRole(request, ["admin"]);
    if (isResponse(result)) return result;
    const { user } = result;

    const formData = await request.formData();
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const category = formData.get("category") as string;
    const tagsRaw = formData.get("tags") as string;
    const status = formData.get("status") as string;
    const metaTitle = formData.get("metaTitle") as string;
    const metaDescription = formData.get("metaDescription") as string;

    if (!title?.trim() || !slug?.trim() || !content?.trim() || !excerpt?.trim() || !category) {
      return NextResponse.json(
        { error: "Title, slug, content, excerpt, and category are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Check slug uniqueness
    const existing = await BlogPost.findOne({ slug: slug.trim().toLowerCase() });
    if (existing) {
      return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
    }

    // Upload featured image if provided
    let featuredImage = "";
    const imageFile = formData.get("featuredImage");
    if (imageFile instanceof File && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploaded = await uploadToCloudinary(buffer, "blog");
      featuredImage = uploaded.url;
    }

    const tags = tagsRaw
      ? tagsRaw.split(",").map((t) => t.trim().toLowerCase()).filter(Boolean)
      : [];

    const postStatus = status === "published" ? "published" : "draft";

    const post = await BlogPost.create({
      slug: slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-"),
      title: title.trim(),
      content,
      excerpt: excerpt.trim(),
      featuredImage,
      category,
      tags,
      authorId: user._id,
      authorName: user.name,
      status: postStatus,
      publishedAt: postStatus === "published" ? new Date() : undefined,
      metaTitle: metaTitle?.trim() || title.trim(),
      metaDescription: metaDescription?.trim() || excerpt.trim(),
    });

    return NextResponse.json(
      {
        post: {
          id: post._id.toString(),
          slug: post.slug,
          title: post.title,
          status: post.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create blog post error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
