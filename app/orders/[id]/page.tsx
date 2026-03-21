"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import RequireAuth from "@/components/RequireAuth";
import Toast from "@/components/Toast";

const STATUS_ORDER = ["pending", "processing", "shipped", "delivered"] as const;

const STATUS_LABELS: Record<string, string> = {
  pending: "Order Placed",
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
  return_requested: "Return Requested",
  replacement_requested: "Replacement Requested",
};

const STATUS_STYLES: Record<string, string> = {
  delivered: "bg-green-100 text-green-700",
  shipped: "bg-blue-100 text-blue-700",
  processing: "bg-yellow-100 text-yellow-700",
  pending: "bg-gray-100 text-gray-700",
  cancelled: "bg-red-100 text-red-700",
  return_requested: "bg-orange-100 text-orange-700",
  replacement_requested: "bg-purple-100 text-purple-700",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function OrderDetailPage() {
  return (
    <RequireAuth>
      <OrderDetailContent />
    </RequireAuth>
  );
}

function OrderDetailContent() {
  const params = useParams();
  const { orders, updateOrderStatus } = useApp();
  const { user } = useAuth();
  const orderId = params.id as string;
  const order = orders.find((o) => o.id === orderId);

  const [actionLoading, setActionLoading] = useState<
    null | "cancel" | "return" | "replace"
  >(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  if (!order) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Not Found</h1>
        <p className="text-gray-500 mb-6">
          We couldn&apos;t find an order with ID {orderId}.
        </p>
        <Link
          href="/orders"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
        >
          View All Orders
        </Link>
      </div>
    );
  }

  async function handleOrderAction(action: "cancel" | "return" | "replace") {
    setActionLoading(action);
    const result = await updateOrderStatus(orderId, action);
    setActionLoading(null);
    if (result.success) {
      const messages = {
        cancel: "Order cancelled successfully",
        return: "Return request submitted",
        replace: "Replacement request submitted",
      };
      setToastMessage(messages[action]);
    } else {
      setToastMessage(result.error ?? "Action failed");
    }
    setToastVisible(true);
  }

  const currentStepIndex = ["cancelled", "return_requested", "replacement_requested"].includes(order.status)
    ? (order.status === "cancelled" ? -1 : STATUS_ORDER.indexOf("delivered"))
    : STATUS_ORDER.indexOf(order.status as (typeof STATUS_ORDER)[number]);

  // Generate simulated timeline dates based on order date
  const orderDate = new Date(order.date);
  const timelineEvents = STATUS_ORDER.map((status, i) => {
    const date = new Date(orderDate);
    date.setDate(date.getDate() + i);
    return {
      status,
      label: STATUS_LABELS[status],
      date: date.toISOString(),
      completed: i <= currentStepIndex,
    };
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
      {/* Back link */}
      <Link
        href="/orders"
        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline font-medium mb-6"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Orders
      </Link>

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Order Details</h1>
          <p className="text-sm text-gray-500">
            Order <span className="font-mono font-medium text-gray-900">{order.id}</span>
            {" "}&middot; Placed on {formatDate(order.date)}
          </p>
        </div>
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
            STATUS_STYLES[order.status] ?? STATUS_STYLES.pending
          }`}
        >
          {STATUS_LABELS[order.status] ?? order.status}
        </span>
      </div>

      {/* Tracking Timeline */}
      {order.status !== "cancelled" && order.status !== "return_requested" && order.status !== "replacement_requested" ? (
        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Tracking Timeline</h2>
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-200" />
            <div
              className="absolute left-[15px] top-2 w-0.5 bg-green-500 transition-all"
              style={{ height: currentStepIndex >= 0 ? `${(currentStepIndex / (STATUS_ORDER.length - 1)) * 100}%` : "0%" }}
            />

            <div className="space-y-8">
              {timelineEvents.map((event) => (
                <div key={event.status} className="relative flex items-start gap-4 pl-10">
                  <div
                    className={`absolute left-1.5 top-0.5 w-[18px] h-[18px] rounded-full border-2 ${
                      event.completed
                        ? "bg-green-500 border-green-500"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {event.completed && (
                      <svg className="h-3.5 w-3.5 text-white m-auto mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${event.completed ? "text-gray-900" : "text-gray-400"}`}>
                      {event.label}
                    </p>
                    <p className={`text-xs ${event.completed ? "text-gray-500" : "text-gray-300"}`}>
                      {event.completed ? formatDateTime(event.date) : "Pending"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : order.status === "cancelled" ? (
        <div className="border border-red-200 rounded-lg p-6 mb-6 bg-red-50">
          <p className="text-sm text-red-700 font-medium">This order has been cancelled.</p>
        </div>
      ) : (
        <div className="border border-yellow-200 rounded-lg p-6 mb-6 bg-yellow-50">
          <p className="text-sm text-yellow-800 font-medium">
            {order.status === "return_requested"
              ? "Your return request is being processed. We will notify you once approved."
              : "Your replacement request is being processed. We will notify you once approved."}
          </p>
        </div>
      )}

      {/* Order Summary */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">Items ({order.items.length})</h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {order.items.map(({ product, quantity }) => (
            <li key={product.id} className="px-5 py-4 flex items-center gap-4">
              <Link
                href={`/product/${product.id}`}
                className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </Link>
              <div className="min-w-0 flex-1">
                <Link
                  href={`/product/${product.id}`}
                  className="text-sm font-medium text-gray-900 hover:text-blue-600 hover:underline line-clamp-1"
                >
                  {product.title}
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">{product.category}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-medium text-gray-900">${(product.price * quantity).toFixed(2)}</p>
                <p className="text-xs text-gray-500">Qty: {quantity} &times; ${product.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Payment Summary */}
      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Payment Summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">${(order.subtotal ?? order.total).toFixed(2)}</span>
          </div>
          {order.couponCode && order.discountAmount && order.discountAmount > 0 && (
            <div className="discount-line">
              <span>Discount ({order.couponCode})</span>
              <span>-${order.discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-bold text-gray-900">${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Order Actions */}
      {(order.status === "pending" || order.status === "processing") && (
        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Order Actions</h2>
          <button
            onClick={() => handleOrderAction("cancel")}
            disabled={Boolean(actionLoading)}
            className="bg-white border border-red-300 text-red-700 hover:bg-red-50 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm disabled:opacity-60"
          >
            {actionLoading === "cancel" ? "Processing..." : "Cancel Order"}
          </button>
        </div>
      )}

      {/* Quick links */}
      {!["cancelled"].includes(order.status) && (
        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/orders/${order.id}/tracking`}
              className="btn btn--info btn--sm"
            >
              Track Order
            </Link>
            {order.status === "delivered" && (
              <Link
                href={`/orders/${order.id}/report`}
                className="btn btn--outline btn--sm"
              >
                Report an Issue
              </Link>
            )}
          </div>
        </div>
      )}

      {order.status === "delivered" && (
        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Order Actions</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleOrderAction("return")}
              disabled={Boolean(actionLoading)}
              className="bg-white border border-orange-300 text-orange-700 hover:bg-orange-50 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm disabled:opacity-60"
            >
              {actionLoading === "return" ? "Processing..." : "Request Return"}
            </button>
            <button
              onClick={() => handleOrderAction("replace")}
              disabled={Boolean(actionLoading)}
              className="bg-white border border-purple-300 text-purple-700 hover:bg-purple-50 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm disabled:opacity-60"
            >
              {actionLoading === "replace" ? "Processing..." : "Request Replacement"}
            </button>
          </div>
        </div>
      )}

      {/* Shipping & Payment Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Shipping Address</h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium text-gray-900">{user?.name}</p>
            {user?.address?.street && <p>{user.address.street}</p>}
            {(user?.address?.city || user?.address?.state || user?.address?.zipCode) && (
              <p>
                {[user?.address?.city, user?.address?.state, user?.address?.zipCode]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            )}
            {user?.address?.country && <p>{user.address.country}</p>}
            {!user?.address?.street && !user?.address?.city && (
              <p className="text-gray-400 italic">
                No address on file.{" "}
                <Link href="/account" className="text-blue-600 hover:underline not-italic">
                  Add address
                </Link>
              </p>
            )}
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Payment Method</h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium text-gray-900">Visa ending in 1234</p>
            <p>Expires 12/2027</p>
          </div>
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
