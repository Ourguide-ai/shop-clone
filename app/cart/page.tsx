"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import RequireAuth from "@/components/RequireAuth";

export default function CartPage() {
  return (
    <RequireAuth>
      <CartContent />
    </RequireAuth>
  );
}

function CartContent() {
  const { items, removeFromCart, updateQuantity, cartTotal, cartCount, appliedCoupon, applyCoupon, removeCoupon, discountedTotal } =
    useApp();
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [applyingCoupon, setApplyingCoupon] = useState(false);

  async function handleApplyCoupon() {
    if (!couponCode.trim()) return;
    setApplyingCoupon(true);
    setCouponError("");
    const result = await applyCoupon(couponCode.trim());
    if (!result.success) {
      setCouponError(result.error || "Invalid coupon");
    } else {
      setCouponCode("");
    }
    setApplyingCoupon(false);
  }

  if (items.length === 0) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-24 text-center">
        <svg className="mx-auto h-20 w-20 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h1 className="text-2xl font-bold font-heading text-gray-900 mb-2">
          Your cart is empty
        </h1>
        <p className="text-gray-500 mb-8">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/"
          className="btn btn--primary inline-block"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
      <h1 className="text-2xl font-bold font-heading text-gray-900 mb-6">Shopping Cart</h1>

      {/* Header row — hidden on mobile */}
      <div className="hidden sm:grid sm:grid-cols-[1fr_100px_120px_100px_40px] gap-4 text-sm font-medium text-gray-500 border-b border-gray-200 pb-3 mb-2">
        <span>Product</span>
        <span className="text-right">Price</span>
        <span className="text-center">Quantity</span>
        <span className="text-right">Subtotal</span>
        <span />
      </div>

      {/* Cart items */}
      <ul className="divide-y divide-gray-200">
        {items.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="py-5 flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_100px_120px_100px_40px] sm:gap-4 sm:items-center"
          >
            {/* Product — image + title */}
            <div className="flex items-center gap-4">
              <Link
                href={`/product/${product.id}`}
                className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </Link>
              <div className="min-w-0">
                <Link
                  href={`/product/${product.id}`}
                  className="text-sm font-medium text-gray-900 hover:text-[var(--color-primary)] hover:underline line-clamp-2"
                >
                  {product.title}
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">
                  {product.category}
                </p>
              </div>
            </div>

            {/* Mobile price + quantity + subtotal + remove */}
            <div className="flex items-center justify-between gap-3 sm:contents">
              {/* Unit price — mobile only */}
              <span className="text-sm text-gray-700 sm:hidden">
                ${product.price.toFixed(2)}
              </span>

              {/* Unit price — desktop only */}
              <div className="hidden sm:block text-sm text-gray-700 text-right">
                ${product.price.toFixed(2)}
              </div>

            {/* Quantity selector */}
            <div className="flex items-center sm:justify-center">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    updateQuantity(product.id, Math.max(1, quantity - 1))
                  }
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="px-3 py-1 text-sm font-medium text-gray-900 min-w-[2.5rem] text-center border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(product.id, Math.min(10, quantity + 1))
                  }
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="text-sm font-semibold text-gray-900 text-right">
              ${(product.price * quantity).toFixed(2)}
            </div>

            {/* Remove */}
            <div className="flex justify-end">
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label={`Remove ${product.title}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Coupon */}
      <div className="border-t border-gray-200 mt-4 pt-4 pb-4">
        {appliedCoupon ? (
          <div className="coupon-input__applied">
            <div className="flex items-center justify-between">
              <div>
                <span className="coupon-badge">{appliedCoupon.code}</span>
                <span className="text-xs text-gray-500 ml-2">
                  {appliedCoupon.discountType === "percentage"
                    ? `${appliedCoupon.discountValue}% off`
                    : `$${appliedCoupon.discountValue.toFixed(2)} off`}
                </span>
              </div>
              <button type="button" onClick={removeCoupon} className="text-sm text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="coupon-input">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => {
                  setCouponCode(e.target.value.toUpperCase());
                  if (couponError) setCouponError("");
                }}
                placeholder="Promo code"
                className="coupon-input__field"
              />
              <button type="button" onClick={handleApplyCoupon} disabled={applyingCoupon || !couponCode.trim()} className="coupon-input__button">
                {applyingCoupon ? "..." : "Apply"}
              </button>
            </div>
            {couponError && <p className="text-xs mt-1" style={{ color: "var(--color-danger)" }}>{couponError}</p>}
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="border border-gray-200 rounded-xl p-6 mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg text-gray-700">
            Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"})
          </span>
          <span className="text-lg font-semibold text-gray-900">
            ${cartTotal.toFixed(2)}
          </span>
        </div>
        {appliedCoupon && (
          <div className="discount-line mb-2">
            <span>Discount ({appliedCoupon.code})</span>
            <span>-${appliedCoupon.discountAmount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-gray-900">
            ${discountedTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <Link
            href="/"
            className="text-center text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/checkout"
            className="text-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
