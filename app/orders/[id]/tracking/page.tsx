"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RequireAuth from "@/components/RequireAuth";
import { apiGet } from "@/lib/api";

const WAYPOINTS = [
  { label: "Warehouse", description: "Order confirmed and packed" },
  { label: "Regional Sorting Hub", description: "Shipment sorted for your region" },
  { label: "City Distribution Center", description: "Arrived at your city" },
  { label: "Local Delivery Hub", description: "At your local hub" },
  { label: "Out for Delivery", description: "On the way to you" },
  { label: "Delivered", description: "Package delivered" },
];

interface OrderTracking {
  id: string;
  date: string;
  status: string;
  total: number;
  items: { product: { title: string; image: string }; quantity: number }[];
  tracking: {
    currentWaypoint: number;
    estimatedDelivery: string;
  };
}

export default function TrackingPage() {
  return (
    <RequireAuth>
      <TrackingContent />
    </RequireAuth>
  );
}

function TrackingContent() {
  const params = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<OrderTracking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ order: OrderTracking }>(`/api/orders/${params.id}`);
        setOrder(data.order);
      } catch {
        setError("Order not found or access denied.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.id]);

  if (loading) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-6" />
          <div className="space-y-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gray-200 rounded-full" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-40 mb-1" />
                  <div className="h-3 bg-gray-200 rounded w-56" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 mb-4">{error || "Order not found."}</p>
        <button onClick={() => router.push("/orders")} className="btn btn--primary">
          Back to Orders
        </button>
      </div>
    );
  }

  const currentStep = order.tracking.currentWaypoint;
  const isDelivered = currentStep >= 5 || order.status === "delivered";
  const isCancelled = order.status === "cancelled";
  const orderDate = new Date(order.date);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/orders/${order.id}`} className="text-sm text-blue-600 hover:underline mb-2 inline-block">
            &larr; Back to order
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Track Order #{order.id}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Placed on {orderDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          {!isCancelled && (
            <p className="text-sm mt-1" style={{ color: isDelivered ? "var(--color-success)" : "var(--color-info)" }}>
              {isDelivered
                ? "Delivered"
                : `Estimated delivery: ${new Date(order.tracking.estimatedDelivery).toLocaleDateString("en-US", { month: "long", day: "numeric" })}`}
            </p>
          )}
          {isCancelled && (
            <p className="text-sm mt-1" style={{ color: "var(--color-danger)" }}>
              This order has been cancelled
            </p>
          )}
        </div>

        {/* Timeline */}
        {!isCancelled && (
          <div className="tracking-timeline">
            {WAYPOINTS.map((wp, i) => {
              const isCompleted = i < currentStep || isDelivered;
              const isCurrent = i === currentStep && !isDelivered;

              const stepDate = new Date(orderDate.getTime() + i * 86400000);

              let stepClass = "tracking-timeline__step";
              if (isCompleted) stepClass += " tracking-timeline__step--completed";
              else if (isCurrent) stepClass += " tracking-timeline__step--current";
              else stepClass += " tracking-timeline__step--upcoming";

              return (
                <div key={i} className={stepClass}>
                  <div className="tracking-timeline__dot">
                    {isCompleted ? "✓" : i + 1}
                  </div>
                  <div className="tracking-timeline__info">
                    <p className="tracking-timeline__label">{wp.label}</p>
                    <p className="tracking-timeline__date">
                      {wp.description}
                      {(isCompleted || isCurrent) && (
                        <> &middot; {stepDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Order items summary */}
        <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Items in this order</h2>
          <div className="space-y-3">
            {order.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                  {item.product.image && (
                    <Image src={item.product.image} alt="" fill sizes="48px" className="object-cover" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.product.title}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
