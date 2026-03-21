"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet, apiDelete } from "@/lib/api";
import type { BlogPost } from "@/lib/types";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ posts: BlogPost[] }>("/api/blog?admin=true&limit=50");
        setPosts(data.posts);
      } catch {
        // handle error
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleDelete(slug: string) {
    try {
      await apiDelete(`/api/blog/${slug}`);
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
    } catch {
      // handle error
    }
  }

  const filtered = filter === "all" ? posts : posts.filter((p) => p.status === filter);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Blog Posts</h1>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="admin-card">
              <div className="h-4 bg-gray-200 rounded w-48 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-32" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <Link href="/admin/blog/new" className="btn btn--primary">
          New Post
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "published", "draft"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`btn btn--sm ${filter === s ? "btn--info" : "btn--outline"}`}
          >
            {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm">No posts found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((post) => (
            <div key={post.id} className="admin-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div>
                  <p className="font-semibold text-gray-900">{post.title}</p>
                  <p className="text-sm text-gray-500">
                    /{post.slug} &middot; {post.category.replace(/-/g, " ")} &middot;{" "}
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span className={`status-badge status-badge--${post.status}`}>
                  {post.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
              <div className="flex gap-2">
                <Link href={`/admin/blog/${post.slug}/edit`} className="btn btn--sm btn--outline">
                  Edit
                </Link>
                <Link href={`/blog/${post.slug}`} className="btn btn--sm btn--outline" target="_blank">
                  View
                </Link>
                <button onClick={() => handleDelete(post.slug)} className="btn btn--sm btn--danger">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
