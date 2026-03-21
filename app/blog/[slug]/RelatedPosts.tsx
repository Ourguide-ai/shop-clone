"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { apiGet } from "@/lib/api";
import type { BlogPost } from "@/lib/types";

interface Props {
  currentSlug: string;
  category: string;
}

export default function RelatedPosts({ currentSlug, category }: Props) {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ posts: BlogPost[] }>(
          `/api/blog?category=${category}&limit=4`
        );
        setPosts(data.posts.filter((p) => p.slug !== currentSlug).slice(0, 3));
      } catch {
        // handle error
      }
    }
    load();
  }, [currentSlug, category]);

  if (posts.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Related Posts</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="blog-card">
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
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-3xl">
                  📝
                </div>
              )}
            </div>
            <div className="blog-card__body">
              <span className="blog-category-badge">{post.category.replace(/-/g, " ")}</span>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
