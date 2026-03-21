"use client";

import { useEffect, useState } from "react";
import { apiGet, apiPatch } from "@/lib/api";
import type { IssueReport } from "@/lib/types";

const ISSUE_TYPE_LABELS: Record<string, string> = {
  damaged: "Damaged",
  wrong_item: "Wrong Item",
  missing_parts: "Missing Parts",
  defective: "Defective",
  not_as_described: "Not as Described",
};

const RESOLUTION_LABELS: Record<string, string> = {
  refund: "Refund",
  replacement: "Replacement",
  repair: "Repair",
  store_credit: "Store Credit",
};

export default function AdminIssuesPage() {
  const [reports, setReports] = useState<IssueReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet<{ reports: IssueReport[] }>("/api/issues");
        setReports(data.reports);
      } catch {
        // handle error
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleUpdate(reportId: string) {
    setUpdating(true);
    try {
      const data = await apiPatch<{ report: IssueReport }>(`/api/issues/${reportId}`, {
        status: editStatus,
        adminNotes: editNotes,
      });
      setReports((prev) =>
        prev.map((r) => (r.id === reportId ? data.report : r))
      );
      setEditingId(null);
    } catch {
      // handle error
    } finally {
      setUpdating(false);
    }
  }

  const filtered = filter === "all" ? reports : reports.filter((r) => r.status === filter);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Issue Reports</h1>
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
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Issue Reports</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "submitted", "under_review", "resolved", "rejected"].map((s) => (
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
        <p className="text-gray-500 text-sm">No reports found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((report) => (
            <div key={report.id} className="admin-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <p className="font-semibold text-gray-900">Order #{report.orderId}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(report.createdAt).toLocaleDateString()} &middot;{" "}
                    {ISSUE_TYPE_LABELS[report.issueType] || report.issueType}
                  </p>
                </div>
                <span className={`status-badge status-badge--${report.status}`}>
                  {report.status.replace("_", " ")}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-2">{report.description}</p>

              <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                <span>Items: {report.items.map((i) => i.productTitle).join(", ")}</span>
                <span>&middot; Resolution: {RESOLUTION_LABELS[report.resolutionPreference]}</span>
                {report.evidenceUrls.length > 0 && (
                  <span>&middot; {report.evidenceUrls.length} file(s)</span>
                )}
              </div>

              {report.adminNotes && (
                <div className="bg-gray-50 rounded p-2 mb-3">
                  <p className="text-xs font-medium text-gray-700">Admin notes:</p>
                  <p className="text-sm text-gray-600">{report.adminNotes}</p>
                </div>
              )}

              {editingId === report.id ? (
                <div className="space-y-3 pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {["submitted", "under_review", "resolved", "rejected"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setEditStatus(s)}
                        className={`btn btn--sm ${editStatus === s ? "btn--info" : "btn--outline"}`}
                      >
                        {s.replace("_", " ")}
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Admin notes..."
                    rows={2}
                    className="price-match-form__input w-full"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(report.id)}
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
                    setEditingId(report.id);
                    setEditStatus(report.status);
                    setEditNotes(report.adminNotes || "");
                  }}
                  className="btn btn--sm btn--outline"
                >
                  Update Status
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
