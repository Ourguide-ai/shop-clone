"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BLOG_CATEGORIES = [
  { value: "buying-guides", label: "Buying Guides" },
  { value: "how-to", label: "How-To" },
  { value: "comparisons", label: "Comparisons" },
  { value: "industry-news", label: "Industry News" },
];

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function CreateBlogPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
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
  const [error, setError] = useState("");

  function handleTitleChange(value: string) {
    setTitle(value);
    setSlug(generateSlug(value));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !excerpt.trim() || !slug.trim()) {
      setError("Title, slug, content, and excerpt are required");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("content", content);
      formData.append("excerpt", excerpt);
      formData.append("category", category);
      formData.append("tags", tags);
      formData.append("status", status);
      formData.append("metaTitle", metaTitle || title);
      formData.append("metaDescription", metaDescription || excerpt);
      if (featuredImage) formData.append("featuredImage", featuredImage);

      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("shopclone-token")}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to create post");
      }

      router.push("/admin/blog");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Link href="/admin/blog" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Blog
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Blog Post</h1>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3 mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
        {/* Title */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
            className="price-match-form__input"
          />
        </div>

        {/* Slug */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
            className="price-match-form__input"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          />
        </div>

        {/* Excerpt */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Short summary for listing cards..."
            rows={2}
            className="price-match-form__input"
            style={{ resize: "vertical" }}
          />
        </div>

        {/* Category */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="price-match-form__input"
          >
            {BLOG_CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="electronics, guides, tips"
            className="price-match-form__input"
          />
        </div>

        {/* Featured Image */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFeaturedImage(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>

        {/* Content */}
        <div className="price-match-form__field">
          <div className="flex items-center justify-between mb-1">
            <label className="price-match-form__label" style={{ marginBottom: 0 }}>Content (Markdown)</label>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="btn btn--sm btn--outline"
            >
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
                placeholder="Write your post content in Markdown..."
                rows={16}
                className="price-match-form__input w-full"
                style={{ resize: "vertical", fontFamily: "var(--font-geist-mono)", fontSize: "0.8125rem" }}
              />
            )}
          </div>
        </div>

        {/* SEO */}
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="text-sm font-medium text-gray-700 cursor-pointer">
            SEO Settings (optional)
          </summary>
          <div className="mt-4 space-y-4">
            <div className="price-match-form__field">
              <label className="price-match-form__label">Meta Title</label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="Defaults to post title"
                className="price-match-form__input"
              />
            </div>
            <div className="price-match-form__field">
              <label className="price-match-form__label">Meta Description</label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Defaults to excerpt"
                rows={2}
                className="price-match-form__input"
                style={{ resize: "vertical" }}
              />
            </div>
          </div>
        </details>

        {/* Status */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Status</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" checked={status === "draft"} onChange={() => setStatus("draft")} />
              Draft
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" checked={status === "published"} onChange={() => setStatus("published")} />
              Publish Now
            </label>
          </div>
        </div>

        <button type="submit" disabled={submitting} className="btn btn--primary btn--lg w-full">
          {submitting ? "Creating..." : status === "published" ? "Publish Post" : "Save Draft"}
        </button>
      </form>
    </div>
  );
}
