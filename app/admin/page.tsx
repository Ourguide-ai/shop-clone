"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

interface AdminStats {
  totalOrders: number;
  pendingIssues: number;
  pendingPriceMatch: number;
  activeCoupons: number;
  publishedPosts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({
    totalOrders: 0,
    pendingIssues: 0,
    pendingPriceMatch: 0,
    activeCoupons: 0,
    publishedPosts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const [ordersRes, issuesRes, priceMatchRes, couponsRes, blogRes] = await Promise.allSettled([
          apiGet<{ orders: unknown[] }>("/api/orders?admin=true"),
          apiGet<{ reports: unknown[] }>("/api/issues?status=submitted"),
          apiGet<{ requests: unknown[] }>("/api/price-match?status=pending"),
          apiGet<{ coupons: { isActive: boolean }[] }>("/api/coupons"),
          apiGet<{ posts: unknown[]; total: number }>("/api/blog?admin=true&limit=1"),
        ]);

        setStats({
          totalOrders: ordersRes.status === "fulfilled" ? ordersRes.value.orders.length : 0,
          pendingIssues: issuesRes.status === "fulfilled" ? issuesRes.value.reports.length : 0,
          pendingPriceMatch: priceMatchRes.status === "fulfilled" ? priceMatchRes.value.requests.length : 0,
          activeCoupons: couponsRes.status === "fulfilled" ? couponsRes.value.coupons.filter((c) => c.isActive).length : 0,
          publishedPosts: blogRes.status === "fulfilled" ? blogRes.value.total : 0,
        });
      } catch {
        // Stats will show 0
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

      {loading ? (
        <div className="admin-stats">
          {[1, 2, 3].map((i) => (
            <div key={i} className="admin-card animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
              <div className="h-8 bg-gray-200 rounded w-16" />
            </div>
          ))}
        </div>
      ) : (
        <div className="admin-stats">
          <div className="admin-card">
            <p className="admin-card__title">Total Orders</p>
            <p className="admin-card__value">{stats.totalOrders}</p>
          </div>
          <div className="admin-card">
            <p className="admin-card__title">Pending Issues</p>
            <p className="admin-card__value">{stats.pendingIssues}</p>
          </div>
          <div className="admin-card">
            <p className="admin-card__title">Pending Price Match</p>
            <p className="admin-card__value">{stats.pendingPriceMatch}</p>
          </div>
          <div className="admin-card">
            <p className="admin-card__title">Active Coupons</p>
            <p className="admin-card__value">{stats.activeCoupons}</p>
          </div>
          <div className="admin-card">
            <p className="admin-card__title">Blog Posts</p>
            <p className="admin-card__value">{stats.publishedPosts}</p>
          </div>
        </div>
      )}
    </div>
  );
}
