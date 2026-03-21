"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MarkdownEditor, { MarkdownPreview } from "@/components/MarkdownEditor";

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
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");
  const [seoOpen, setSeoOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleTitleChange(value: string) {
    setTitle(value);
    setSlug(generateSlug(value));
  }

  function handleImageChange(file: File | null) {
    setFeaturedImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
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
    <div className="adm-form-page">
      <Link href="/admin/blog" className="adm-form-back">
        <svg viewBox="0 0 20 20" fill="currentColor" className="adm-form-back__icon">
          <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
        </svg>
        Back to Blog
      </Link>

      <div className="adm-form-header">
        <div className="adm-form-header__icon adm-form-header__icon--blog">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </div>
        <div>
          <h1 className="adm-form-header__title">New Blog Post</h1>
          <p className="adm-form-header__subtitle">Create and publish content for your audience</p>
        </div>
      </div>

      {error && (
        <div className="adm-form-alert adm-form-alert--error">
          <svg viewBox="0 0 20 20" fill="currentColor" className="adm-form-alert__icon">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="adm-form adm-form--blog">
        {/* Main content area */}
        <div className="adm-blog-layout">
          {/* Left column: main content */}
          <div className="adm-blog-layout__main">
            {/* Title */}
            <div className="adm-form-card">
              <div className="adm-form-field">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Post title..."
                  className="adm-form-input adm-form-input--title"
                />
              </div>
              <div className="adm-form-field">
                <label className="adm-form-label">Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
                  className="adm-form-input adm-form-input--mono"
                />
              </div>
            </div>

            {/* Content editor with tabs */}
            <div className="adm-form-card adm-form-card--flush">
              <div className="adm-editor-tabs">
                <button
                  type="button"
                  onClick={() => setActiveTab("write")}
                  className={`adm-editor-tab ${activeTab === "write" ? "adm-editor-tab--active" : ""}`}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                  </svg>
                  Write
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`adm-editor-tab ${activeTab === "preview" ? "adm-editor-tab--active" : ""}`}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Preview
                </button>
              </div>

              {activeTab === "write" ? (
                <MarkdownEditor
                  value={content}
                  onChange={setContent}
                  placeholder="Write your blog post content..."
                  minRows={20}
                />
              ) : (
                <div className="adm-editor-preview">
                  <MarkdownPreview content={content} />
                </div>
              )}
            </div>
          </div>

          {/* Right sidebar: metadata */}
          <div className="adm-blog-layout__sidebar">
            {/* Status */}
            <div className="adm-form-card">
              <h2 className="adm-form-card__title">Publish</h2>
              <div className="adm-form-field">
                <div className="adm-form-status-group">
                  <button
                    type="button"
                    onClick={() => setStatus("draft")}
                    className={`adm-form-status ${status === "draft" ? "adm-form-status--active" : ""}`}
                  >
                    <span className="adm-form-status__dot adm-form-status__dot--draft" />
                    Draft
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus("published")}
                    className={`adm-form-status ${status === "published" ? "adm-form-status--active adm-form-status--published" : ""}`}
                  >
                    <span className="adm-form-status__dot adm-form-status__dot--published" />
                    Publish Now
                  </button>
                </div>
              </div>

              <button type="submit" disabled={submitting} className="adm-form-btn adm-form-btn--primary adm-form-btn--full">
                {submitting ? (
                  <>
                    <span className="adm-form-btn__spinner" />
                    Creating...
                  </>
                ) : status === "published" ? (
                  "Publish Post"
                ) : (
                  "Save Draft"
                )}
              </button>
            </div>

            {/* Category & Tags */}
            <div className="adm-form-card">
              <h2 className="adm-form-card__title">Taxonomy</h2>
              <div className="adm-form-field">
                <label className="adm-form-label">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="adm-form-input"
                >
                  {BLOG_CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div className="adm-form-field">
                <label className="adm-form-label">Tags</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="electronics, guides, tips"
                  className="adm-form-input"
                />
                <p className="adm-form-hint">Separate with commas</p>
              </div>
            </div>

            {/* Excerpt */}
            <div className="adm-form-card">
              <h2 className="adm-form-card__title">Excerpt</h2>
              <div className="adm-form-field">
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Short summary for listing cards..."
                  rows={3}
                  className="adm-form-input adm-form-input--textarea"
                />
                <p className="adm-form-hint">{excerpt.length}/300 characters</p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="adm-form-card">
              <h2 className="adm-form-card__title">Featured Image</h2>
              <div className="adm-form-field">
                {imagePreview ? (
                  <div className="adm-form-image-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imagePreview} alt="Preview" />
                    <button
                      type="button"
                      onClick={() => handleImageChange(null)}
                      className="adm-form-image-preview__remove"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <label className="adm-form-upload">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="adm-form-upload__icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="adm-form-upload__text">Click to upload image</span>
                    <span className="adm-form-upload__hint">PNG, JPG, WebP up to 5MB</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
                      className="sr-only"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* SEO */}
            <div className="adm-form-card">
              <button
                type="button"
                onClick={() => setSeoOpen(!seoOpen)}
                className="adm-form-card__toggle"
              >
                <h2 className="adm-form-card__title" style={{ marginBottom: 0 }}>SEO Settings</h2>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="16"
                  height="16"
                  className={`adm-form-card__chevron ${seoOpen ? "adm-form-card__chevron--open" : ""}`}
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {seoOpen && (
                <div className="adm-form-card__collapsible">
                  <div className="adm-form-field">
                    <label className="adm-form-label">Meta Title</label>
                    <input
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      placeholder="Defaults to post title"
                      className="adm-form-input"
                    />
                  </div>
                  <div className="adm-form-field">
                    <label className="adm-form-label">Meta Description</label>
                    <textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Defaults to excerpt"
                      rows={2}
                      className="adm-form-input adm-form-input--textarea"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
