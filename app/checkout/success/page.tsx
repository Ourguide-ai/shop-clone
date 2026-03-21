"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-24 text-center">
      <div className="mx-auto w-16 h-16 bg-[var(--color-success)] rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-2xl font-bold font-heading text-gray-900 mb-2">
        Order Placed Successfully!
      </h1>

      {orderId && (
        <p className="text-sm text-gray-500 mb-1">
          Order ID:{" "}
          <span className="font-mono font-medium text-gray-700">
            {orderId}
          </span>
        </p>
      )}

      <p className="text-gray-600 mb-8">
        Thank you for your purchase. You can track your order in your orders
        page.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/orders"
          className="btn btn--primary inline-block"
        >
          View Your Orders
        </Link>
        <Link
          href="/"
          className="inline-block border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-24 text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
