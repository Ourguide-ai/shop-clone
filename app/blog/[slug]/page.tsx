import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dbConnect from "@/lib/db/mongoose";
import BlogPost from "@/lib/db/models/BlogPost";
import BlogComments from "./BlogComments";
import RelatedPosts from "./RelatedPosts";
import MarkdownContent from "./MarkdownContent";

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await dbConnect();
  const post = await BlogPost.findOne({ slug: params.slug }).lean();
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  await dbConnect();
  const post = await BlogPost.findOne({ slug: params.slug }).lean();

  if (!post || (post.status !== "published")) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage || undefined,
    author: { "@type": "Person", name: post.authorName },
    datePublished: post.publishedAt?.toISOString() || post.createdAt.toISOString(),
    dateModified: post.updatedAt?.toISOString() || post.createdAt.toISOString(),
    publisher: { "@type": "Organization", name: "eBay" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="category-breadcrumb mb-6" aria-label="Breadcrumb">
            <Link href="/" className="category-breadcrumb__link">Home</Link>
            <span className="category-breadcrumb__separator">/</span>
            <Link href="/blog" className="category-breadcrumb__link">Blog</Link>
            <span className="category-breadcrumb__separator">/</span>
            <span className="category-breadcrumb__current">{post.title}</span>
          </nav>

          {/* Category + date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="blog-category-badge">{post.category.replace(/-/g, " ")}</span>
            <span className="text-sm text-gray-500">
              {new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Author */}
          <p className="text-sm text-gray-500 mb-8">
            By {post.authorName}
          </p>

          {/* Featured image */}
          {post.featuredImage && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 48rem"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="blog-content">
            <MarkdownContent content={post.content} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "var(--color-surface-alt)", color: "var(--color-text-secondary)" }}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Related posts */}
        <div className="max-w-3xl mx-auto mt-12">
          <RelatedPosts currentSlug={post.slug} category={post.category} />
        </div>

        {/* Comments */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
          <BlogComments slug={post.slug} />
        </div>
      </article>
    </>
  );
}
