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
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-xl mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-8" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="price-match-form">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Request a Price Match</h1>
        <p className="text-sm text-gray-500 mb-8">
          Found a lower price elsewhere? Let us know and we&apos;ll try to match it.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Product selection */}
          <div className="price-match-form__field">
            <label className="price-match-form__label">Product</label>
            <input
              type="text"
              placeholder="Search for a product..."
              value={selectedProduct ? selectedProduct.title : searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedProductId("");
                if (errors.product) setErrors((prev) => ({ ...prev, product: "" }));
              }}
              className={`price-match-form__input ${errors.product ? "price-match-form__input--error" : ""}`}
            />
            {searchQuery && !selectedProductId && (
              <div className="border border-gray-200 rounded-md mt-1 max-h-48 overflow-y-auto bg-white shadow-sm">
                {filteredProducts.length === 0 ? (
                  <p className="text-sm text-gray-500 p-3">No products found</p>
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
                      className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm flex justify-between"
                    >
                      <span className="truncate">{p.title}</span>
                      <span className="text-gray-500 ml-2 flex-shrink-0">${p.price.toFixed(2)}</span>
                    </button>
                  ))
                )}
              </div>
            )}
            {errors.product && <p className="price-match-form__error">{errors.product}</p>}
            {selectedProduct && (
              <p className="text-xs text-gray-500 mt-1">Our price: ${selectedProduct.price.toFixed(2)}</p>
            )}
          </div>

          {/* Competitor name */}
          <div className="price-match-form__field">
            <label className="price-match-form__label">Competitor Name</label>
            <input
              type="text"
              value={competitorName}
              onChange={(e) => {
                setCompetitorName(e.target.value);
                if (errors.competitorName) setErrors((prev) => ({ ...prev, competitorName: "" }));
              }}
              placeholder="e.g., Amazon, Best Buy"
              className={`price-match-form__input ${errors.competitorName ? "price-match-form__input--error" : ""}`}
            />
            {errors.competitorName && <p className="price-match-form__error">{errors.competitorName}</p>}
          </div>

          {/* Competitor URL */}
          <div className="price-match-form__field">
            <label className="price-match-form__label">Competitor URL</label>
            <input
              type="url"
              value={competitorUrl}
              onChange={(e) => {
                setCompetitorUrl(e.target.value);
                if (errors.competitorUrl) setErrors((prev) => ({ ...prev, competitorUrl: "" }));
              }}
              placeholder="https://competitor.com/product"
              className={`price-match-form__input ${errors.competitorUrl ? "price-match-form__input--error" : ""}`}
            />
            {errors.competitorUrl && <p className="price-match-form__error">{errors.competitorUrl}</p>}
          </div>

          {/* Competitor price */}
          <div className="price-match-form__field">
            <label className="price-match-form__label">Competitor Price ($)</label>
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
              className={`price-match-form__input ${errors.competitorPrice ? "price-match-form__input--error" : ""}`}
            />
            {errors.competitorPrice && <p className="price-match-form__error">{errors.competitorPrice}</p>}
          </div>

          {/* Screenshot */}
          <div className="price-match-form__field">
            <label className="price-match-form__label">Screenshot (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
            {screenshot && (
              <p className="text-xs text-gray-500 mt-1">{screenshot.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="price-match-form__field">
            <label className="price-match-form__label">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
              }}
              placeholder="you@example.com"
              className={`price-match-form__input ${errors.email ? "price-match-form__input--error" : ""}`}
            />
            {errors.email && <p className="price-match-form__error">{errors.email}</p>}
          </div>

          {/* Notes */}
          <div className="price-match-form__field">
            <label className="price-match-form__label">Additional Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any additional information..."
              rows={3}
              className="price-match-form__input"
              style={{ resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn--primary btn--lg w-full mt-2"
          >
            {submitting ? "Submitting..." : "Submit Price Match Request"}
          </button>
        </form>

        {/* Past requests */}
        {requests.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Requests</h2>
            <div className="space-y-3">
              {requests.map((req) => (
                <div key={req.id} className="admin-card">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <p className="text-sm font-medium text-gray-900">{req.productTitle}</p>
                    <span className={`status-badge status-badge--${req.status}`}>
                      {req.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {req.competitorName} — ${req.competitorPrice.toFixed(2)} &middot;{" "}
                    {new Date(req.createdAt).toLocaleDateString()}
                  </p>
                  {req.adminNotes && (
                    <p className="text-xs text-gray-600 mt-1 bg-gray-50 rounded p-2">
                      Response: {req.adminNotes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
