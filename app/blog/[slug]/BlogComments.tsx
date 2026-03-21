"use client";

import { useEffect, useState, FormEvent } from "react";
import { useAuth } from "@/context/AuthContext";
import { apiGet, apiPost, apiDelete } from "@/lib/api";
import type { BlogComment } from "@/lib/types";

export default function BlogComments({ slug }: { slug: string }) {
  const { user, isAuthenticated } = useAuth();
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ comments: BlogComment[] }>(`/api/blog/${slug}/comments`);
        setComments(data.comments);
      } catch {
        // handle error
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitting(true);
    try {
      const data = await apiPost<{ comment: BlogComment }>(`/api/blog/${slug}/comments`, {
        text: text.trim(),
      });
      setComments((prev) => [data.comment, ...prev]);
      setText("");
    } catch {
      // handle error
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(commentId: string) {
    try {
      await apiDelete(`/api/blog/${slug}/comments/${commentId}`);
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    } catch {
      // handle error
    }
  }

  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-gray-900 mb-6">
        Comments {comments.length > 0 && `(${comments.length})`}
      </h2>

      {/* Comment form */}
      {isAuthenticated ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            rows={3}
            className="input w-full mb-2"
            style={{ resize: "vertical" }}
          />
          <button
            type="submit"
            disabled={submitting || !text.trim()}
            className="btn btn--primary"
          >
            {submitting ? "Posting..." : "Post Comment"}
          </button>
        </form>
      ) : (
        <p className="text-sm text-gray-500 mb-8">
          <a href="/signin" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:underline">Sign in</a> to leave a comment.
        </p>
      )}

      {/* Comments list */}
      {loading ? (
        <div className="space-y-4 animate-pulse">
          {[1, 2].map((i) => (
            <div key={i} className="blog-comment">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <p className="text-gray-500 text-sm">No comments yet. Be the first!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="blog-comment">
              <div className="blog-comment__header">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">{comment.userName}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded" style={{
                    background: "var(--color-surface-alt)",
                    color: "var(--color-text-secondary)",
                  }}>
                    {comment.userRole}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                {user?.role === "admin" && (
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                )}
              </div>
              <p className="blog-comment__body">{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
