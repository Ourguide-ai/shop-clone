"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet, apiPatch } from "@/lib/api";
import type { Order } from "@/lib/types";

const STATUS_STYLES: Record<string, string> = {
  pending: "status-badge--pending",
  processing: "status-badge--pending",
  shipped: "status-badge--submitted",
  delivered: "status-badge--delivered",
  cancelled: "status-badge--rejected",
  return_requested: "status-badge--pending",
  replacement_requested: "status-badge--pending",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ orders: Order[] }>("/api/orders?admin=true");
        setOrders(data.orders);
      } catch {
        // empty
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleStatusChange(orderId: string, action: string) {
    try {
      await apiPatch(`/api/orders/${orderId}`, { action });
      setOrders((prev) =>
        prev.map((o) => {
          if (o.id !== orderId) return o;
          const statusMap: Record<string, Order["status"]> = {
            cancel: "cancelled",
            return: "return_requested",
            replace: "replacement_requested",
            deliver: "delivered",
          };
          return { ...o, status: statusMap[action] || o.status };
        })
      );
    } catch {
      // handle error
    }
  }

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6 font-heading">All Orders</h1>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="admin-card">
              <div className="h-4 bg-gray-200 rounded w-48 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-32" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6 font-heading">All Orders</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "pending", "processing", "shipped", "delivered", "cancelled", "return_requested", "replacement_requested"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`btn btn--sm ${filter === s ? "btn--info" : "btn--outline"}`}
          >
            {s === "all" ? "All" : s.replace("_", " ")}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((order) => (
            <div key={order.id} className="admin-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <Link href={`/orders/${order.id}`} className="font-semibold text-gray-900 hover:text-[var(--color-primary)]">
                    Order #{order.id}
                  </Link>
                  <p className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`status-badge ${STATUS_STYLES[order.status] || ""}`}>
                    {order.status.replace("_", " ")}
                  </span>
                  <span className="font-semibold">${order.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-3">
                {order.items.length} item{order.items.length > 1 ? "s" : ""}:{" "}
                {order.items.map((i) => i.product.title).join(", ")}
              </div>

              <div className="flex flex-wrap gap-2">
                {(order.status === "pending" || order.status === "processing") && (
                  <>
                    <button onClick={() => handleStatusChange(order.id, "deliver")} className="btn btn--sm btn--success">
                      Mark Delivered
                    </button>
                    <button onClick={() => handleStatusChange(order.id, "cancel")} className="btn btn--sm btn--danger">
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
