import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dbConnect from "@/lib/db/mongoose";
import BlogPost from "@/lib/db/models/BlogPost";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — ShopClone",
  description: "Buying guides, how-to articles, product comparisons, and industry insights from ShopClone.",
};

const CATEGORIES = [
  { slug: "buying-guides", label: "Buying Guides" },
  { slug: "how-to", label: "How-To" },
  { slug: "comparisons", label: "Comparisons" },
  { slug: "industry-news", label: "Industry News" },
];

interface Props {
  searchParams: { page?: string; category?: string };
}

export default async function BlogListingPage({ searchParams }: Props) {
  const page = Math.max(1, Number(searchParams.page) || 1);
  const limit = 12;
  const category = searchParams.category;

  await dbConnect();

  const filter: Record<string, unknown> = { status: "published" };
  if (category) filter.category = category;

  const [posts, total] = await Promise.all([
    BlogPost.find(filter)
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(),
    BlogPost.countDocuments(filter),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-gray-900">Blog</h1>
        <p className="text-sm text-gray-500 mt-1">
          Buying guides, how-to articles, and industry insights.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/blog"
          className={`btn btn--sm ${!category ? "btn--info" : "btn--outline"}`}
        >
          All
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/blog?category=${cat.slug}`}
            className={`btn btn--sm ${category === cat.slug ? "btn--info" : "btn--outline"}`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Post grid */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="font-heading text-lg font-semibold text-gray-900">No posts found</h2>
          <p className="text-gray-500 mt-2">Try selecting a different category.</p>
          <Link href="/blog" className="btn btn--primary mt-6 inline-block">View All Posts</Link>
        </div>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post._id.toString()} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card__image">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl">
                    📝
                  </div>
                )}
              </div>
              <div className="blog-card__body">
                <span className="blog-category-badge">{post.category.replace(/-/g, " ")}</span>
                <h2 className="blog-card__title">{post.title}</h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span>{post.authorName}</span>
                  <span>&middot;</span>
                  <span>
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {page > 1 && (
            <Link
              href={`/blog?page=${page - 1}${category ? `&category=${category}` : ""}`}
              className="btn btn--sm btn--outline"
            >
              Previous
            </Link>
          )}
          <span className="flex items-center text-sm text-gray-500 px-2">
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/blog?page=${page + 1}${category ? `&category=${category}` : ""}`}
              className="btn btn--sm btn--outline"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
