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
    <div className="adm-form-page">
      <Link href="/admin/coupons" className="adm-form-back">
        <svg viewBox="0 0 20 20" fill="currentColor" className="adm-form-back__icon">
          <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
        </svg>
        Back to Coupons
      </Link>

      <div className="adm-form-header">
        <div className="adm-form-header__icon adm-form-header__icon--coupon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>
        </div>
        <div>
          <h1 className="adm-form-header__title">Create Coupon</h1>
          <p className="adm-form-header__subtitle">Set up a new discount code for your customers</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="adm-form">
        {serverError && (
          <div className="adm-form-alert adm-form-alert--error">
            <svg viewBox="0 0 20 20" fill="currentColor" className="adm-form-alert__icon">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
            {serverError}
          </div>
        )}

        {/* Coupon Code */}
        <div className="adm-form-card">
          <h2 className="adm-form-card__title">Coupon Code</h2>
          <p className="adm-form-card__desc">Choose a memorable code customers will enter at checkout</p>
          <div className="adm-form-field">
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
                if (errors.code) setErrors((p) => ({ ...p, code: "" }));
              }}
              placeholder="e.g., SAVE20"
              className={`adm-form-input adm-form-input--code ${errors.code ? "adm-form-input--error" : ""}`}
            />
            {errors.code && <p className="adm-form-error">{errors.code}</p>}
          </div>
        </div>

        {/* Discount Configuration */}
        <div className="adm-form-card">
          <h2 className="adm-form-card__title">Discount</h2>
          <p className="adm-form-card__desc">Configure the type and value of the discount</p>

          <div className="adm-form-field">
            <label className="adm-form-label">Type</label>
            <div className="adm-form-toggle-group">
              <button
                type="button"
                onClick={() => setDiscountType("percentage")}
                className={`adm-form-toggle ${discountType === "percentage" ? "adm-form-toggle--active" : ""}`}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="adm-form-toggle__icon">
                  <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.06l5.25-5.25a.75.75 0 011.06 0l3.046 3.046a20.902 20.902 0 015.441-5.185l-2.752.736a.75.75 0 01-.388-1.45z" clipRule="evenodd" />
                </svg>
                Percentage
              </button>
              <button
                type="button"
                onClick={() => setDiscountType("fixed")}
                className={`adm-form-toggle ${discountType === "fixed" ? "adm-form-toggle--active" : ""}`}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="adm-form-toggle__icon">
                  <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603c-.481.243-.9.571-1.137.876-.208.266-.247.478-.1.68.12.166.356.327.317-.1z" />
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.214.14.462.246.737.332v-2.907c-.698-.093-1.383-.32-1.959-.696C6.754 9.216 6.25 8.46 6.25 7.6c0-.86.504-1.616 1.29-2.13.576-.377 1.261-.603 1.96-.696V4.75A.75.75 0 0110 4z" clipRule="evenodd" />
                </svg>
                Fixed Amount
              </button>
            </div>
          </div>

          <div className="adm-form-row">
            <div className="adm-form-field adm-form-field--grow">
              <label className="adm-form-label">
                Value {discountType === "percentage" ? "(%)" : "($)"}
              </label>
              <div className="adm-form-input-wrap">
                <span className="adm-form-input-wrap__prefix">
                  {discountType === "percentage" ? "%" : "$"}
                </span>
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
                  placeholder="0"
                  className={`adm-form-input ${errors.discountValue ? "adm-form-input--error" : ""}`}
                />
              </div>
              {errors.discountValue && <p className="adm-form-error">{errors.discountValue}</p>}
            </div>

            {discountType === "percentage" && (
              <div className="adm-form-field adm-form-field--grow">
                <label className="adm-form-label">Max Cap ($)</label>
                <div className="adm-form-input-wrap">
                  <span className="adm-form-input-wrap__prefix">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={maxDiscount}
                    onChange={(e) => setMaxDiscount(e.target.value)}
                    placeholder="No limit"
                    className="adm-form-input"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rules */}
        <div className="adm-form-card">
          <h2 className="adm-form-card__title">Rules</h2>
          <p className="adm-form-card__desc">Set constraints for this coupon</p>

          <div className="adm-form-row">
            <div className="adm-form-field adm-form-field--grow">
              <label className="adm-form-label">Min. Order Amount ($)</label>
              <div className="adm-form-input-wrap">
                <span className="adm-form-input-wrap__prefix">$</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={minOrderAmount}
                  onChange={(e) => setMinOrderAmount(e.target.value)}
                  placeholder="0.00"
                  className="adm-form-input"
                />
              </div>
            </div>

            <div className="adm-form-field adm-form-field--grow">
              <label className="adm-form-label">Usage Limit</label>
              <input
                type="number"
                min="1"
                value={usageLimit}
                onChange={(e) => {
                  setUsageLimit(e.target.value);
                  if (errors.usageLimit) setErrors((p) => ({ ...p, usageLimit: "" }));
                }}
                placeholder="e.g., 100"
                className={`adm-form-input ${errors.usageLimit ? "adm-form-input--error" : ""}`}
              />
              {errors.usageLimit && <p className="adm-form-error">{errors.usageLimit}</p>}
            </div>
          </div>

          <div className="adm-form-field">
            <label className="adm-form-label">Expiry Date</label>
            <div
              className="adm-form-date-trigger"
              onClick={(e) => {
                const input = (e.currentTarget as HTMLElement).querySelector("input");
                if (input) input.showPicker();
              }}
            >
              <input
                type="datetime-local"
                value={expiresAt}
                onChange={(e) => {
                  setExpiresAt(e.target.value);
                  if (errors.expiresAt) setErrors((p) => ({ ...p, expiresAt: "" }));
                }}
                className={`adm-form-input ${errors.expiresAt ? "adm-form-input--error" : ""}`}
              />
            </div>
            {errors.expiresAt && <p className="adm-form-error">{errors.expiresAt}</p>}
          </div>
        </div>

        {/* Submit */}
        <div className="adm-form-actions">
          <Link href="/admin/coupons" className="adm-form-btn adm-form-btn--secondary">
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className="adm-form-btn adm-form-btn--primary">
            {submitting ? (
              <>
                <span className="adm-form-btn__spinner" />
                Creating...
              </>
            ) : (
              "Create Coupon"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
