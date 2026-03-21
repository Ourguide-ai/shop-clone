"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiPost } from "@/lib/api";

export default function CreateCouponPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">("percentage");
  const [discountValue, setDiscountValue] = useState("");
  const [minOrderAmount, setMinOrderAmount] = useState("");
  const [maxDiscount, setMaxDiscount] = useState("");
  const [usageLimit, setUsageLimit] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!code.trim()) next.code = "Code is required";
    if (!discountValue || Number(discountValue) <= 0) next.discountValue = "Must be positive";
    if (discountType === "percentage" && Number(discountValue) > 100) {
      next.discountValue = "Percentage must be 1-100";
    }
    if (!usageLimit || Number(usageLimit) < 1) next.usageLimit = "Must be at least 1";
    if (!expiresAt) {
      next.expiresAt = "Required";
    } else if (new Date(expiresAt) <= new Date()) {
      next.expiresAt = "Must be in the future";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setServerError("");

    try {
      await apiPost("/api/coupons", {
        code: code.trim(),
        discountType,
        discountValue: Number(discountValue),
        minOrderAmount: minOrderAmount ? Number(minOrderAmount) : 0,
        maxDiscount: discountType === "percentage" && maxDiscount ? Number(maxDiscount) : undefined,
        usageLimit: Number(usageLimit),
        expiresAt: new Date(expiresAt).toISOString(),
      });
      router.push("/admin/coupons");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Failed to create coupon");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Link href="/admin/coupons" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Coupons
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Coupon</h1>

      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        {serverError && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3">{serverError}</p>
        )}

        {/* Code */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Coupon Code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase());
              if (errors.code) setErrors((p) => ({ ...p, code: "" }));
            }}
            placeholder="e.g., SAVE20"
            className={`price-match-form__input ${errors.code ? "price-match-form__input--error" : ""}`}
            style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
          />
          {errors.code && <p className="price-match-form__error">{errors.code}</p>}
        </div>

        {/* Discount Type */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Discount Type</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                checked={discountType === "percentage"}
                onChange={() => setDiscountType("percentage")}
              />
              Percentage (%)
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                checked={discountType === "fixed"}
                onChange={() => setDiscountType("fixed")}
              />
              Fixed Amount ($)
            </label>
          </div>
        </div>

        {/* Discount Value */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">
            Discount Value {discountType === "percentage" ? "(%)" : "($)"}
          </label>
          <input
            type="number"
            step={discountType === "percentage" ? "1" : "0.01"}
            min="0"
            max={discountType === "percentage" ? "100" : undefined}
            value={discountValue}
            onChange={(e) => {
              setDiscountValue(e.target.value);
              if (errors.discountValue) setErrors((p) => ({ ...p, discountValue: "" }));
            }}
            className={`price-match-form__input ${errors.discountValue ? "price-match-form__input--error" : ""}`}
          />
          {errors.discountValue && <p className="price-match-form__error">{errors.discountValue}</p>}
        </div>

        {/* Max Discount (percentage only) */}
        {discountType === "percentage" && (
          <div className="price-match-form__field">
            <label className="price-match-form__label">Max Discount Cap ($) — optional</label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={maxDiscount}
              onChange={(e) => setMaxDiscount(e.target.value)}
              placeholder="No limit"
              className="price-match-form__input"
            />
          </div>
        )}

        {/* Min Order Amount */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Minimum Order Amount ($) — optional</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={minOrderAmount}
            onChange={(e) => setMinOrderAmount(e.target.value)}
            placeholder="0.00"
            className="price-match-form__input"
          />
        </div>

        {/* Usage Limit */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Usage Limit</label>
          <input
            type="number"
            min="1"
            value={usageLimit}
            onChange={(e) => {
              setUsageLimit(e.target.value);
              if (errors.usageLimit) setErrors((p) => ({ ...p, usageLimit: "" }));
            }}
            placeholder="e.g., 100"
            className={`price-match-form__input ${errors.usageLimit ? "price-match-form__input--error" : ""}`}
          />
          {errors.usageLimit && <p className="price-match-form__error">{errors.usageLimit}</p>}
        </div>

        {/* Expiry Date */}
        <div className="price-match-form__field">
          <label className="price-match-form__label">Expiry Date</label>
          <input
            type="datetime-local"
            value={expiresAt}
            onChange={(e) => {
              setExpiresAt(e.target.value);
              if (errors.expiresAt) setErrors((p) => ({ ...p, expiresAt: "" }));
            }}
            className={`price-match-form__input ${errors.expiresAt ? "price-match-form__input--error" : ""}`}
          />
          {errors.expiresAt && <p className="price-match-form__error">{errors.expiresAt}</p>}
        </div>

        <button type="submit" disabled={submitting} className="btn btn--primary btn--lg w-full">
          {submitting ? "Creating..." : "Create Coupon"}
        </button>
      </form>
    </div>
  );
}
