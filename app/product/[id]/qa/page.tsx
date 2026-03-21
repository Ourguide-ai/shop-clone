"use client";

import { useEffect, useState, FormEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { apiGet, apiPost, apiPatch } from "@/lib/api";
import type { Question } from "@/lib/types";

export default function QAPage() {
  const params = useParams();
  const productId = Number(params.id);
  const { user, isAuthenticated } = useAuth();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [newQuestion, setNewQuestion] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [answeringId, setAnsweringId] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState("");
  const [answerSubmitting, setAnswerSubmitting] = useState(false);
  const [productTitle, setProductTitle] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const [qData, pData] = await Promise.all([
          apiGet<{ questions: Question[] }>(`/api/questions?productId=${productId}`),
          apiGet<{ product: { title: string } }>(`/api/products/${productId}`),
        ]);
        setQuestions(qData.questions);
        setProductTitle(pData.product.title);
      } catch {
        // handle error
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [productId]);

  async function handleAskQuestion(e: FormEvent) {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    setSubmitting(true);
    try {
      const data = await apiPost<{ question: Question }>("/api/questions", {
        productId,
        questionText: newQuestion.trim(),
      });
      setQuestions((prev) => [data.question, ...prev]);
      setNewQuestion("");
    } catch {
      // handle error
    } finally {
      setSubmitting(false);
    }
  }

  async function handleAnswer(questionId: string) {
    if (!answerText.trim()) return;
    setAnswerSubmitting(true);
    try {
      const data = await apiPatch<{ question: Question }>(`/api/questions/${questionId}`, {
        answerText: answerText.trim(),
      });
      setQuestions((prev) =>
        prev.map((q) => (q.id === questionId ? data.question : q))
      );
      setAnsweringId(null);
      setAnswerText("");
    } catch {
      // handle error
    } finally {
      setAnswerSubmitting(false);
    }
  }

  async function handleUpvote(questionId: string) {
    try {
      const data = await apiPost<{ upvoteCount: number; hasUpvoted: boolean }>(
        `/api/questions/${questionId}/upvote`,
        {}
      );
      setQuestions((prev) =>
        prev.map((q) =>
          q.id === questionId
            ? { ...q, upvoteCount: data.upvoteCount, hasUpvoted: data.hasUpvoted }
            : q
        )
      );
    } catch {
      // handle error
    }
  }

  const canAsk = isAuthenticated && (user?.role === "buyer" || user?.role === "admin");
  const canAnswer = isAuthenticated && (user?.role === "seller" || user?.role === "admin");

  if (loading) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-48 mb-8" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="mb-6">
              <div className="h-4 bg-gray-200 rounded w-full mb-2" />
              <div className="h-3 bg-gray-200 rounded w-64" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href={`/product/${productId}`}
          className="text-sm text-[var(--color-primary)] hover:underline mb-4 inline-block"
        >
          &larr; Back to {productTitle || "product"}
        </Link>

        <h1 className="text-2xl font-heading font-bold text-gray-900 mb-6">
          Questions & Answers
        </h1>

        {/* Ask a question */}
        {canAsk && (
          <form onSubmit={handleAskQuestion} className="mb-8">
            <label htmlFor="qa-input" className="block text-sm font-medium text-gray-700 mb-1">
              Ask a question about this product
            </label>
            <div className="flex gap-2">
              <input
                id="qa-input"
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="What would you like to know?"
                className="price-match-form__input flex-1"
              />
              <button type="submit" disabled={submitting || !newQuestion.trim()} className="btn btn--primary">
                {submitting ? "Posting..." : "Ask"}
              </button>
            </div>
          </form>
        )}

        {!isAuthenticated && (
          <p className="text-sm text-gray-500 mb-6">
            <Link href="/signin" className="text-[var(--color-primary)] hover:underline">Sign in</Link> to ask a question.
          </p>
        )}

        {/* Questions list */}
        <div className="qa-section">
          {questions.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No questions yet. Be the first to ask!</p>
          ) : (
            questions.map((q) => (
              <div key={q.id} className={`qa-card ${q.answers.length === 0 ? "qa-card--unanswered" : ""}`}>
                <p className="qa-card__question-text">Q: {q.questionText}</p>
                <p className="qa-card__meta">
                  Asked by {q.askerName} &middot;{" "}
                  {new Date(q.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>

                {q.answers.length === 0 && (
                  <span className="qa-badge--unanswered">Awaiting answer</span>
                )}

                {q.answers.map((a) => (
                  <div key={a.id} className="qa-card__answer">
                    <p className="qa-card__answer-label">A: {a.answererName}</p>
                    <p className="qa-card__answer-text">{a.answerText}</p>
                    <p className="qa-card__meta" style={{ marginTop: "var(--space-xs)" }}>
                      {new Date(a.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                ))}

                <div className="qa-card__actions">
                  {isAuthenticated && (user?.role === "buyer" || user?.role === "admin") && (
                    <button
                      onClick={() => handleUpvote(q.id)}
                      className={`qa-card__upvote ${q.hasUpvoted ? "qa-card__upvote--active" : ""}`}
                    >
                      👍 I have this question too ({q.upvoteCount})
                    </button>
                  )}

                  {canAnswer && answeringId !== q.id && (
                    <button
                      onClick={() => {
                        setAnsweringId(q.id);
                        setAnswerText("");
                      }}
                      className="btn btn--sm btn--outline"
                    >
                      Answer
                    </button>
                  )}
                </div>

                {answeringId === q.id && (
                  <div className="mt-3">
                    <textarea
                      value={answerText}
                      onChange={(e) => setAnswerText(e.target.value)}
                      placeholder="Write your answer..."
                      rows={3}
                      className="price-match-form__input w-full"
                      style={{ resize: "vertical" }}
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleAnswer(q.id)}
                        disabled={answerSubmitting || !answerText.trim()}
                        className="btn btn--sm btn--info"
                      >
                        {answerSubmitting ? "Posting..." : "Post Answer"}
                      </button>
                      <button
                        onClick={() => setAnsweringId(null)}
                        className="btn btn--sm btn--outline"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
