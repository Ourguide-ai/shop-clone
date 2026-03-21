"use client";

import { useState, useEffect, FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { apiGet } from "@/lib/api";
import type { BlogPost } from "@/lib/types";

const BLOG_CATEGORIES = [
  { value: "buying-guides", label: "Buying Guides" },
  { value: "how-to", label: "How-To" },
  { value: "comparisons", label: "Comparisons" },
  { value: "industry-news", label: "Industry News" },
];

export default function EditBlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("buying-guides");
  const [tags, setTags] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [showPreview, setShowPreview] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ post: BlogPost }>(`/api/blog/${slug}`);
        const p = data.post;
        setTitle(p.title);
        setContent(p.content);
        setExcerpt(p.excerpt);
        setCategory(p.category);
        setTags(p.tags?.join(", ") || "");
        setMetaTitle(p.metaTitle || "");
        setMetaDescription(p.metaDescription || "");
        setStatus(p.status);
      } catch {
        setError("Post not found");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !excerpt.trim()) {
      setError("Title, content, and excerpt are required");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("excerpt", excerpt);
      formData.append("category", category);
      formData.append("tags", tags);
      formData.append("status", status);
      formData.append("metaTitle", metaTitle || title);
      formData.append("metaDescription", metaDescription || excerpt);
      if (featuredImage) formData.append("featuredImage", featuredImage);

      const response = await fetch(`/api/blog/${slug}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("shopclone-token")}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to update post");
      }

      router.push("/admin/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update post");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link href="/admin/blog" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Blog
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Post</h1>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3 mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
        <div className="price-match-form__field">
          <label className="price-match-form__label">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="price-match-form__input" />
        </div>

        <div className="price-match-form__field">
          <label className="price-match-form__label">Excerpt</label>
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} className="price-match-form__input" style={{ resize: "vertical" }} />
        </div>

        <div className="price-match-form__field">
          <label className="price-match-form__label">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="price-match-form__input">
            {BLOG_CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="price-match-form__field">
          <label className="price-match-form__label">Tags (comma-separated)</label>
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} className="price-match-form__input" />
        </div>

        <div className="price-match-form__field">
          <label className="price-match-form__label">Featured Image (upload to replace)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFeaturedImage(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>

        <div className="price-match-form__field">
          <div className="flex items-center justify-between mb-1">
            <label className="price-match-form__label" style={{ marginBottom: 0 }}>Content (Markdown)</label>
            <button type="button" onClick={() => setShowPreview(!showPreview)} className="btn btn--sm btn--outline">
              {showPreview ? "Edit" : "Preview"}
            </button>
          </div>
          <div className="blog-editor">
            {showPreview ? (
              <div className="blog-editor__preview blog-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </div>
            ) : (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={16}
                className="price-match-form__input w-full"
                style={{ resize: "vertical", fontFamily: "var(--font-geist-mono)", fontSize: "0.8125rem" }}
              />
            )}
          </div>
        </div>

        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="text-sm font-medium text-gray-700 cursor-pointer">SEO Settings</summary>
          <div className="mt-4 space-y-4">
            <div className="price-match-form__field">
              <label className="price-match-form__label">Meta Title</label>
              <input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className="price-match-form__input" />
            </div>
            <div className="price-match-form__field">
              <label className="price-match-form__label">Meta Description</label>
              <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={2} className="price-match-form__input" style={{ resize: "vertical" }} />
            </div>
          </div>
        </details>

        <div className="price-match-form__field">
          <label className="price-match-form__label">Status</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" checked={status === "draft"} onChange={() => setStatus("draft")} />
              Draft
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" checked={status === "published"} onChange={() => setStatus("published")} />
              Published
            </label>
          </div>
        </div>

        <button type="submit" disabled={submitting} className="btn btn--primary btn--lg w-full">
          {submitting ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
