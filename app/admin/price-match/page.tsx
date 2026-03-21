"use client";

import { useEffect, useState } from "react";
import { apiGet, apiPatch } from "@/lib/api";
import type { PriceMatchRequest } from "@/lib/types";

export default function AdminPriceMatchPage() {
  const [requests, setRequests] = useState<PriceMatchRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ requests: PriceMatchRequest[] }>("/api/price-match");
        setRequests(data.requests);
      } catch {
        // handle error
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleUpdate(requestId: string) {
    setUpdating(true);
    try {
      const data = await apiPatch<{ request: PriceMatchRequest }>(
        `/api/price-match/${requestId}`,
        { status: editStatus, adminNotes: editNotes }
      );
      setRequests((prev) =>
        prev.map((r) => (r.id === requestId ? data.request : r))
      );
      setEditingId(null);
    } catch {
      // handle error
    } finally {
      setUpdating(false);
    }
  }

  const filtered = filter === "all" ? requests : requests.filter((r) => r.status === filter);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Price Match Requests</h1>
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
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Price Match Requests</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "pending", "approved", "rejected"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`btn btn--sm ${filter === s ? "btn--info" : "btn--outline"}`}
          >
            {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm">No requests found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((req) => (
            <div key={req.id} className="admin-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{req.productTitle}</p>
                  <p className="text-sm text-gray-500">
                    {req.competitorName} &middot; ${req.competitorPrice.toFixed(2)} &middot;{" "}
                    {new Date(req.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span className={`status-badge status-badge--${req.status}`}>
                  {req.status}
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-2">
                <p>
                  URL:{" "}
                  <a
                    href={req.competitorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    {req.competitorUrl}
                  </a>
                </p>
                <p>Contact: {req.email}</p>
                {req.notes && <p>Notes: {req.notes}</p>}
              </div>

              {req.screenshotUrl && (
                <div className="mb-3">
                  <a
                    href={req.screenshotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View screenshot
                  </a>
                </div>
              )}

              {req.adminNotes && (
                <div className="bg-gray-50 rounded p-2 mb-3">
                  <p className="text-xs font-medium text-gray-700">Admin response:</p>
                  <p className="text-sm text-gray-600">{req.adminNotes}</p>
                </div>
              )}

              {editingId === req.id ? (
                <div className="space-y-3 pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setEditStatus("approved")}
                      className={`btn btn--sm ${editStatus === "approved" ? "btn--success" : "btn--outline"}`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => setEditStatus("rejected")}
                      className={`btn btn--sm ${editStatus === "rejected" ? "btn--danger" : "btn--outline"}`}
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => setEditStatus("pending")}
                      className={`btn btn--sm ${editStatus === "pending" ? "btn--info" : "btn--outline"}`}
                    >
                      Pending
                    </button>
                  </div>
                  <textarea
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Response note for the buyer..."
                    rows={2}
                    className="price-match-form__input w-full"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(req.id)}
                      disabled={updating}
                      className="btn btn--sm btn--success"
                    >
                      {updating ? "Saving..." : "Save"}
                    </button>
                    <button onClick={() => setEditingId(null)} className="btn btn--sm btn--outline">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setEditingId(req.id);
                    setEditStatus(req.status);
                    setEditNotes(req.adminNotes || "");
                  }}
                  className="btn btn--sm btn--outline"
                >
                  Review
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
