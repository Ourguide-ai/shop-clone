"use client";

import { useState, useEffect, FormEvent } from "react";
import RequireRole from "@/components/RequireRole";
import { apiGet } from "@/lib/api";
import type { Product, PriceMatchRequest } from "@/lib/types";
import Toast from "@/components/Toast";

export default function PriceMatchPage() {
  return (
    <RequireRole allowedRoles={["buyer", "admin"]}>
      <PriceMatchContent />
    </RequireRole>
  );
}

function PriceMatchContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [requests, setRequests] = useState<PriceMatchRequest[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [selectedProductId, setSelectedProductId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [competitorName, setCompetitorName] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [competitorPrice, setCompetitorPrice] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const [pData, rData] = await Promise.all([
          apiGet<{ products: Product[] }>("/api/products"),
          apiGet<{ requests: PriceMatchRequest[] }>("/api/price-match"),
        ]);
        setProducts(pData.products);
        setRequests(rData.requests);
      } catch {
        // handle error
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedProduct = products.find((p) => String(p.id) === selectedProductId);

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!selectedProductId) next.product = "Select a product";
    if (!competitorName.trim()) next.competitorName = "Required";
    if (!competitorUrl.trim()) {
      next.competitorUrl = "Required";
    } else {
      try {
        new URL(competitorUrl);
      } catch {
        next.competitorUrl = "Enter a valid URL";
      }
    }
    if (!competitorPrice) {
      next.competitorPrice = "Required";
    } else if (selectedProduct && Number(competitorPrice) >= selectedProduct.price) {
      next.competitorPrice = `Must be lower than our price ($${selectedProduct.price.toFixed(2)})`;
    }
    if (!email.trim()) {
      next.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("productId", selectedProductId);
      formData.append("competitorName", competitorName);
      formData.append("competitorUrl", competitorUrl);
      formData.append("competitorPrice", competitorPrice);
      formData.append("email", email);
      formData.append("notes", notes);
      if (screenshot) formData.append("screenshot", screenshot);

      const response = await fetch("/api/price-match", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("shopclone-token")}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to submit");
      }

      const data = await response.json();
      setRequests((prev) => [data.request, ...prev]);

      // Reset form
      setSelectedProductId("");
      setSearchQuery("");
      setCompetitorName("");
      setCompetitorUrl("");
      setCompetitorPrice("");
      setEmail("");
      setNotes("");
      setScreenshot(null);

      setToastMessage("Price match request submitted!");
      setToastVisible(true);
    } catch (err) {
      setToastMessage(err instanceof Error ? err.message : "Failed to submit");
      setToastVisible(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="h-8 skeleton-shimmer w-64 mb-3" />
          <div className="h-4 skeleton-shimmer w-96 mb-10" />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-10">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <div className="h-4 skeleton-shimmer w-28 mb-2" />
                  <div className="h-11 skeleton-shimmer w-full" />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="h-48 skeleton-shimmer" />
              <div className="h-32 skeleton-shimmer" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const savings = selectedProduct && competitorPrice
    ? selectedProduct.price - Number(competitorPrice)
    : null;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h10v10M7 17L17 7" />
              </svg>
            </div>
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Price Match
              </h1>
            </div>
          </div>
          <p className="text-[var(--color-text-secondary)] max-w-lg">
            Found the same product for less? Submit the details below and we&apos;ll review your request within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_22rem] gap-8 lg:gap-12 items-start">

          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="space-y-0">
            {/* Product selection */}
            <fieldset className="rounded-2xl border border-[var(--color-border)] bg-white p-5 sm:p-6">
              <legend className="font-heading text-[0.6875rem] font-semibold uppercase tracking-widest text-[var(--color-primary)] px-1">
                Product
              </legend>

              <div className="relative mt-1">
                <input
                  type="text"
                  placeholder="Search for a product..."
                  value={selectedProduct ? selectedProduct.title : searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedProductId("");
                    if (errors.product) setErrors((prev) => ({ ...prev, product: "" }));
                  }}
                  className={`input ${errors.product ? "input--error" : ""}`}
                />
                {selectedProduct && (
                  <button
                    type="button"
                    onClick={() => { setSelectedProductId(""); setSearchQuery(""); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                    aria-label="Clear selection"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {searchQuery && !selectedProductId && (
                <div className="border border-[var(--color-border)] rounded-lg mt-2 max-h-48 overflow-y-auto bg-white shadow-md">
                  {filteredProducts.length === 0 ? (
                    <p className="text-sm text-[var(--color-text-secondary)] p-3">No products found</p>
                  ) : (
                    filteredProducts.slice(0, 8).map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          setSelectedProductId(String(p.id));
                          setSearchQuery("");
                          setErrors((prev) => ({ ...prev, product: "" }));
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-[var(--color-surface-alt)] text-sm flex items-center justify-between gap-3 transition-colors"
                      >
                        <span className="truncate font-medium text-[var(--color-text)]">{p.title}</span>
                        <span className="font-heading text-xs font-semibold text-[var(--color-text-secondary)] flex-shrink-0 tabular-nums">
                          ${p.price.toFixed(2)}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
              {errors.product && <p className="text-xs text-[var(--color-danger)] mt-1.5">{errors.product}</p>}
              {selectedProduct && (
                <div className="flex items-center gap-2 mt-2 text-xs text-[var(--color-text-secondary)]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-surface-alt)] px-2.5 py-1 font-heading font-semibold">
                    Our price: <span className="text-[var(--color-text)]">${selectedProduct.price.toFixed(2)}</span>
                  </span>
                </div>
              )}
            </fieldset>

            {/* Competitor details */}
            <fieldset className="rounded-2xl border border-[var(--color-border)] bg-white p-5 sm:p-6 -mt-px">
              <legend className="font-heading text-[0.6875rem] font-semibold uppercase tracking-widest text-[var(--color-primary)] px-1">
                Competitor Details
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                <div>
                  <label className="block text-xs font-heading font-medium text-[var(--color-text)] mb-1.5">
                    Store Name
                  </label>
                  <input
                    type="text"
                    value={competitorName}
                    onChange={(e) => {
                      setCompetitorName(e.target.value);
                      if (errors.competitorName) setErrors((prev) => ({ ...prev, competitorName: "" }));
                    }}
                    placeholder="e.g., Amazon"
                    className={`input ${errors.competitorName ? "input--error" : ""}`}
                  />
                  {errors.competitorName && <p className="text-xs text-[var(--color-danger)] mt-1">{errors.competitorName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-heading font-medium text-[var(--color-text)] mb-1.5">
                    Their Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)] font-heading text-sm">$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={competitorPrice}
                      onChange={(e) => {
                        setCompetitorPrice(e.target.value);
                        if (errors.competitorPrice) setErrors((prev) => ({ ...prev, competitorPrice: "" }));
                      }}
                      placeholder="0.00"
                      className={`input pl-7 ${errors.competitorPrice ? "input--error" : ""}`}
                    />
                  </div>
                  {errors.competitorPrice && <p className="text-xs text-[var(--color-danger)] mt-1">{errors.competitorPrice}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-heading font-medium text-[var(--color-text)] mb-1.5">
                  Product URL
                </label>
                <input
                  type="url"
                  value={competitorUrl}
                  onChange={(e) => {
                    setCompetitorUrl(e.target.value);
                    if (errors.competitorUrl) setErrors((prev) => ({ ...prev, competitorUrl: "" }));
                  }}
                  placeholder="https://competitor.com/product"
                  className={`input ${errors.competitorUrl ? "input--error" : ""}`}
                />
                {errors.competitorUrl && <p className="text-xs text-[var(--color-danger)] mt-1">{errors.competitorUrl}</p>}
              </div>

              <div className="mt-4">
                <label className="block text-xs font-heading font-medium text-[var(--color-text)] mb-1.5">
                  Screenshot
                  <span className="text-[var(--color-muted)] font-normal ml-1">Optional</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-dashed border-[var(--color-border)] px-4 py-3 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-colors">
                  <svg className="h-5 w-5 text-[var(--color-muted)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="min-w-0 flex-1">
                    {screenshot ? (
                      <span className="text-sm text-[var(--color-text)] truncate block">{screenshot.name}</span>
                    ) : (
                      <span className="text-sm text-[var(--color-muted)]">Upload a screenshot of the competitor&apos;s price</span>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                    className="sr-only"
                  />
                  {screenshot && (
                    <button
                      type="button"
                      onClick={(e) => { e.preventDefault(); setScreenshot(null); }}
                      className="text-[var(--color-muted)] hover:text-[var(--color-danger)] transition-colors flex-shrink-0"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </label>
              </div>
            </fieldset>

            {/* Contact */}
            <fieldset className="rounded-2xl border border-[var(--color-border)] bg-white p-5 sm:p-6 -mt-px">
              <legend className="font-heading text-[0.6875rem] font-semibold uppercase tracking-widest text-[var(--color-primary)] px-1">
                Contact
              </legend>

              <div className="mt-1">
                <label className="block text-xs font-heading font-medium text-[var(--color-text)] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  placeholder="you@example.com"
                  className={`input ${errors.email ? "input--error" : ""}`}
                />
                {errors.email && <p className="text-xs text-[var(--color-danger)] mt-1">{errors.email}</p>}
              </div>

              <div className="mt-4">
                <label className="block text-xs font-heading font-medium text-[var(--color-text)] mb-1.5">
                  Notes
                  <span className="text-[var(--color-muted)] font-normal ml-1">Optional</span>
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any additional context..."
                  rows={3}
                  className="input"
                  style={{ resize: "vertical" }}
                />
              </div>
            </fieldset>

            {/* Submit row */}
            <div className="flex items-center justify-between gap-4 pt-6">
              <p className="text-xs text-[var(--color-muted)] hidden sm:block">
                We&apos;ll review and respond to your email within 1&ndash;2 business days.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className={`btn btn--primary ${submitting ? "btn--loading" : ""} flex-shrink-0`}
              >
                {submitting && <span className="btn__spinner" />}
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>

          {/* Right sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Savings preview card */}
            {selectedProduct && savings !== null && savings > 0 && (
              <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary-light)] p-5">
                <p className="font-heading text-[0.6875rem] font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
                  Potential Savings
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-bold text-[var(--color-primary)] tabular-nums">
                    ${savings.toFixed(2)}
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    saved
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted)]" />
                    Ours: ${selectedProduct.price.toFixed(2)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    Theirs: ${Number(competitorPrice).toFixed(2)}
                  </div>
                </div>
              </div>
            )}

            {/* How it works */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <p className="font-heading text-[0.6875rem] font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] mb-4">
                How It Works
              </p>
              <ol className="space-y-4">
                {[
                  { step: "1", title: "Submit", desc: "Fill out the form with competitor details" },
                  { step: "2", title: "Review", desc: "Our team verifies the competitor listing" },
                  { step: "3", title: "Match", desc: "If approved, we adjust the price for you" },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-surface-alt)] font-heading text-xs font-bold text-[var(--color-text-secondary)] flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-[var(--color-text)]">{item.title}</p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Policy info */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <p className="font-heading text-[0.6875rem] font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] mb-3">
                Policy
              </p>
              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <li className="flex items-start gap-2">
                  <svg className="h-3.5 w-3.5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Must be the exact same product &amp; condition
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-3.5 w-3.5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Competitor must be an authorized retailer
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-3.5 w-3.5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Item must be currently in stock at the listed price
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-3.5 w-3.5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Valid for 14 days from submission
                </li>
              </ul>
            </div>

            {/* Past requests */}
            {requests.length > 0 && (
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                <p className="font-heading text-[0.6875rem] font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] mb-4">
                  Your Requests
                  <span className="ml-2 inline-flex items-center justify-center rounded-full bg-[var(--color-surface-alt)] px-2 py-0.5 text-[0.625rem] font-bold tabular-nums">
                    {requests.length}
                  </span>
                </p>
                <div className="space-y-3">
                  {requests.map((req) => (
                    <div
                      key={req.id}
                      className="rounded-xl border border-[var(--color-border)] p-3 transition-colors hover:bg-[var(--color-surface-alt)]"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-heading font-medium text-[var(--color-text)] line-clamp-1">{req.productTitle}</p>
                        <span className={`status-badge status-badge--${req.status} flex-shrink-0`}>
                          {req.status}
                        </span>
                      </div>
                      <p className="text-[0.6875rem] text-[var(--color-text-secondary)]">
                        {req.competitorName} &middot; ${req.competitorPrice.toFixed(2)} &middot;{" "}
                        {new Date(req.createdAt).toLocaleDateString()}
                      </p>
                      {req.adminNotes && (
                        <div className="mt-2 rounded-lg bg-[var(--color-surface-alt)] px-3 py-2">
                          <p className="text-[0.6875rem] text-[var(--color-text-secondary)]">
                            <span className="font-heading font-semibold text-[var(--color-text)]">Response:</span>{" "}
                            {req.adminNotes}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
