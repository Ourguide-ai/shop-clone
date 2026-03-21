"use client";

import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import Toast from "@/components/Toast";
import RequireAuth from "@/components/RequireAuth";
import { useState, useCallback } from "react";
import { Product } from "@/lib/types";

const STATUS_CONFIG: Record<string, { label: string; class: string; icon: JSX.Element }> = {
  delivered: {
    label: "Delivered",
    class: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />,
  },
  shipped: {
    label: "Shipped",
    class: "bg-blue-50 text-blue-700 border border-blue-200",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />,
  },
  processing: {
    label: "Processing",
    class: "bg-amber-50 text-amber-700 border border-amber-200",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  pending: {
    label: "Pending",
    class: "bg-gray-50 text-gray-600 border border-gray-200",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  cancelled: {
    label: "Cancelled",
    class: "bg-red-50 text-red-600 border border-red-200",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />,
  },
  return_requested: {
    label: "Return Requested",
    class: "bg-orange-50 text-orange-700 border border-orange-200",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />,
  },
  replacement_requested: {
    label: "Replacement Requested",
    class: "bg-violet-50 text-violet-700 border border-violet-200",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function OrdersPage() {
  return (
    <RequireAuth>
      <OrdersContent />
    </RequireAuth>
  );
}

function OrdersContent() {
  const { orders, addToCart, updateOrderStatus } = useApp();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [orderActionLoading, setOrderActionLoading] = useState<
    Record<string, "cancel" | "return" | "replace" | undefined>
  >({});

  const handleBuyAgain = useCallback(
    (product: Product) => {
      addToCart(product, 1);
      setToastMessage(`${product.title} added to cart`);
      setToastVisible(true);
    },
    [addToCart]
  );

  const handleOrderAction = useCallback(
    async (orderId: string, action: "cancel" | "return" | "replace") => {
      const confirmMessages: Record<typeof action, string> = {
        cancel: "Cancel this order?",
        return: "Request a return for this order?",
        replace: "Request a replacement for this order?",
      };

      if (!window.confirm(confirmMessages[action])) return;

      setOrderActionLoading((prev) => ({ ...prev, [orderId]: action }));
      const result = await updateOrderStatus(orderId, action);
      setOrderActionLoading((prev) => ({ ...prev, [orderId]: undefined }));

      if (result.success) {
        const successMessages: Record<typeof action, string> = {
          cancel: "Order cancelled successfully",
          return: "Return request submitted",
          replace: "Replacement request submitted",
        };
        setToastMessage(successMessages[action]);
      } else {
        setToastMessage(result.error ?? "Action failed");
      }
      setToastVisible(true);
    },
    [updateOrderStatus]
  );

  if (orders.length === 0) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-24 text-center">
        <svg
          className="mx-auto h-16 w-16 text-gray-300 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">
          No orders yet
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Once you place an order, it will appear here.
        </p>
        <Link href="/" className="btn btn--primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Your Orders
            </h1>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              {orders.length} order{orders.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Orders list */}
        <div className="space-y-5">
          {orders.map((order) => {
            const statusConfig = STATUS_CONFIG[order.status] ?? STATUS_CONFIG.pending;
            const loadingAction = orderActionLoading[order.id];
            const busy = Boolean(loadingAction);
            const canCancel = order.status === "pending" || order.status === "processing";
            const canReturnReplace = order.status === "delivered";
            const canTrack = order.status === "shipped" || order.status === "delivered" || order.status === "processing";

            return (
              <article
                key={order.id}
                className="rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                {/* Card header */}
                <div className="px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface-alt)]/50">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {/* Status badge */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-semibold ${statusConfig.class}`}>
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {statusConfig.icon}
                      </svg>
                      {statusConfig.label}
                    </span>

                    {/* Date */}
                    <span className="text-xs text-[var(--color-text-secondary)] font-heading">
                      {formatDate(order.date)}
                    </span>

                    {/* Order ID */}
                    <span className="text-xs text-[var(--color-muted)] font-mono">
                      #{order.id.slice(-8).toUpperCase()}
                    </span>
                  </div>

                  {/* Total + View */}
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-lg font-bold text-[var(--color-text)] tabular-nums">
                      ${order.total.toFixed(2)}
                    </span>
                    <Link
                      href={`/orders/${order.id}`}
                      className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
                    >
                      Details
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Items */}
                <div className="px-5 sm:px-6 py-4">
                  <ul className="space-y-3">
                    {order.items.map(({ product, quantity }) => (
                      <li
                        key={product.id}
                        className="flex items-center gap-4"
                      >
                        <Link
                          href={`/product/${product.id}`}
                          className="relative w-14 h-14 flex-shrink-0 bg-[var(--color-surface-alt)] rounded-xl overflow-hidden group"
                        >
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="56px"
                            className="object-cover transition-transform duration-200 group-hover:scale-105"
                          />
                        </Link>

                        <div className="min-w-0 flex-1">
                          <Link
                            href={`/product/${product.id}`}
                            className="text-sm font-heading font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors line-clamp-1"
                          >
                            {product.title}
                          </Link>
                          <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                            Qty: {quantity}
                            <span className="mx-1.5 text-[var(--color-border)]">&middot;</span>
                            <span className="font-heading font-semibold tabular-nums">${(product.price * quantity).toFixed(2)}</span>
                          </p>
                        </div>

                        <button
                          onClick={() => handleBuyAgain(product)}
                          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary-light)] transition-all duration-150"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Buy Again
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer — actions */}
                <div className="px-5 sm:px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]/30 flex flex-wrap items-center gap-2">
                  {/* Track Order — always visible for trackable statuses */}
                  {canTrack && (
                    <Link
                      href={`/orders/${order.id}/tracking`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white text-xs font-heading font-semibold hover:bg-[var(--color-primary-hover)] transition-all duration-150 hover:-translate-y-px"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Track Order
                    </Link>
                  )}

                  {/* Report Issue — for delivered orders */}
                  {order.status === "delivered" && (
                    <Link
                      href={`/orders/${order.id}/report`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-heading font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-muted)] hover:bg-[var(--color-surface-alt)] transition-all duration-150"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      Report Issue
                    </Link>
                  )}

                  {/* Spacer pushes secondary actions to right */}
                  <div className="flex-1" />

                  {/* Cancel */}
                  {canCancel && (
                    <button
                      type="button"
                      onClick={() => handleOrderAction(order.id, "cancel")}
                      disabled={busy}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-heading font-semibold text-red-600 border border-red-200 hover:bg-red-50 transition-all duration-150 disabled:opacity-50"
                    >
                      {loadingAction === "cancel" ? (
                        <span className="btn__spinner" style={{ width: "0.875em", height: "0.875em", borderWidth: "1.5px" }} />
                      ) : (
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      Cancel
                    </button>
                  )}

                  {/* Return */}
                  {canReturnReplace && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleOrderAction(order.id, "return")}
                        disabled={busy}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-heading font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-orange-300 hover:text-orange-700 hover:bg-orange-50 transition-all duration-150 disabled:opacity-50"
                      >
                        {loadingAction === "return" ? (
                          <span className="btn__spinner" style={{ width: "0.875em", height: "0.875em", borderWidth: "1.5px" }} />
                        ) : (
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                        )}
                        Return
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOrderAction(order.id, "replace")}
                        disabled={busy}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-heading font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 transition-all duration-150 disabled:opacity-50"
                      >
                        {loadingAction === "replace" ? (
                          <span className="btn__spinner" style={{ width: "0.875em", height: "0.875em", borderWidth: "1.5px" }} />
                        ) : (
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        )}
                        Replace
                      </button>
                    </>
                  )}

                  {/* Mobile: Buy Again for first item */}
                  {order.items.length > 0 && (
                    <button
                      onClick={() => handleBuyAgain(order.items[0].product)}
                      className="sm:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-heading font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-surface-alt)] transition-all duration-150"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Buy Again
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
