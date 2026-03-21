"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet, apiPatch, apiDelete } from "@/lib/api";
import type { Coupon } from "@/lib/types";

function getCouponStatus(coupon: Coupon): { label: string; className: string } {
  if (new Date(coupon.expiresAt) <= new Date()) {
    return { label: "Expired", className: "status-badge--expired" };
  }
  if (!coupon.isActive) {
    return { label: "Inactive", className: "status-badge--inactive" };
  }
  if (coupon.usedCount >= coupon.usageLimit) {
    return { label: "Exhausted", className: "status-badge--expired" };
  }
  return { label: "Active", className: "status-badge--active" };
}

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ coupons: Coupon[] }>("/api/coupons");
        setCoupons(data.coupons);
      } catch {
        // handle error
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleToggle(couponId: string, currentActive: boolean) {
    try {
      const data = await apiPatch<{ coupon: Coupon }>(`/api/coupons/${couponId}`, {
        isActive: !currentActive,
      });
      setCoupons((prev) =>
        prev.map((c) => (c.id === couponId ? data.coupon : c))
      );
    } catch {
      // handle error
    }
  }

  async function handleDelete(couponId: string) {
    try {
      await apiDelete(`/api/coupons/${couponId}`);
      setCoupons((prev) => prev.filter((c) => c.id !== couponId));
    } catch {
      // handle error
    }
  }

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Coupons</h1>
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Coupons</h1>
        <Link href="/admin/coupons/new" className="btn btn--primary">
          Create Coupon
        </Link>
      </div>

      {coupons.length === 0 ? (
        <p className="text-gray-500 text-sm">No coupons yet.</p>
      ) : (
        <div className="space-y-4">
          {coupons.map((coupon) => {
            const status = getCouponStatus(coupon);
            return (
              <div key={coupon.id} className="admin-card">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <p className="font-mono font-bold text-gray-900 text-lg">{coupon.code}</p>
                    <p className="text-sm text-gray-500">
                      {coupon.discountType === "percentage"
                        ? `${coupon.discountValue}% off`
                        : `$${coupon.discountValue.toFixed(2)} off`}
                      {coupon.minOrderAmount > 0 && ` on orders over $${coupon.minOrderAmount.toFixed(2)}`}
                      {coupon.maxDiscount && ` (max $${coupon.maxDiscount.toFixed(2)})`}
                    </p>
                  </div>
                  <span className={`status-badge ${status.className}`}>
                    {status.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                  <span>Usage: {coupon.usedCount} / {coupon.usageLimit}</span>
                  <span>Expires: {new Date(coupon.expiresAt).toLocaleDateString()}</span>
                  <span>Created: {new Date(coupon.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleToggle(coupon.id, coupon.isActive)}
                    className={`btn btn--sm ${coupon.isActive ? "btn--outline" : "btn--success"}`}
                  >
                    {coupon.isActive ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => handleDelete(coupon.id)}
                    className="btn btn--sm btn--danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
