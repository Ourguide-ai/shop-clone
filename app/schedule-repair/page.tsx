"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import RequireAuth from "@/components/RequireAuth";
import Toast from "@/components/Toast";
import { useApp } from "@/context/AppContext";
import { RepairRequest } from "@/lib/types";

interface AvailabilitySlot {
  date: string;
  startTime: string;
  endTime: string;
}

const STATUS_DOT: Record<string, string> = {
  pending: "bg-amber-500",
  scheduled: "bg-blue-500",
  in_progress: "bg-indigo-500",
  completed: "bg-emerald-500",
  cancelled: "bg-stone-300",
};

const STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  scheduled: "Scheduled",
  in_progress: "In Progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getMinDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
}

function StepLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[11px] font-mono text-stone-300 tabular-nums select-none">
        {number}
      </span>
      <span className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.15em]">
        {label}
      </span>
      <div className="h-px flex-1 bg-stone-100" />
    </div>
  );
}

export default function ScheduleRepairPage() {
  return (
    <RequireAuth>
      <ScheduleRepairContent />
    </RequireAuth>
  );
}

function ScheduleRepairContent() {
  const { orders } = useApp();
  const deliveredOrders = orders.filter((o) => o.status === "delivered");

  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [defectDescription, setDefectDescription] = useState("");
  const [availabilitySlots, setAvailabilitySlots] = useState<
    AvailabilitySlot[]
  >([{ date: "", startTime: "09:00", endTime: "12:00" }]);
  const [warrantySlipFile, setWarrantySlipFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [submitting, setSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [existingRepairs, setExistingRepairs] = useState<RepairRequest[]>([]);
  const [loadingRepairs, setLoadingRepairs] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchRepairs() {
      try {
        const token = localStorage.getItem("shopclone-token");
        const res = await fetch("/api/repairs", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (res.ok) {
          const data = await res.json();
          setExistingRepairs(data);
        }
      } catch {
        // silently fail
      } finally {
        setLoadingRepairs(false);
      }
    }
    fetchRepairs();
  }, []);

  const selectedOrder = deliveredOrders.find((o) => o.id === selectedOrderId);
  const orderProducts = selectedOrder?.items ?? [];

  useEffect(() => {
    setSelectedProductId(null);
  }, [selectedOrderId]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "application/pdf",
      ];
      if (!allowedTypes.includes(file.type)) {
        setToastMessage(
          "Invalid file type. Please upload JPG, PNG, WebP, or PDF."
        );
        setToastVisible(true);
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setToastMessage("File size must be less than 10MB.");
        setToastVisible(true);
        return;
      }

      setWarrantySlipFile(file);
      if (file.type.startsWith("image/")) {
        setFilePreview(URL.createObjectURL(file));
      } else {
        setFilePreview(null);
      }
    },
    []
  );

  const removeFile = useCallback(() => {
    setWarrantySlipFile(null);
    if (filePreview) URL.revokeObjectURL(filePreview);
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [filePreview]);

  const addSlot = useCallback(() => {
    if (availabilitySlots.length >= 5) return;
    setAvailabilitySlots((prev) => [
      ...prev,
      { date: "", startTime: "09:00", endTime: "12:00" },
    ]);
  }, [availabilitySlots.length]);

  const removeSlot = useCallback((index: number) => {
    setAvailabilitySlots((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateSlot = useCallback(
    (index: number, field: keyof AvailabilitySlot, value: string) => {
      setAvailabilitySlots((prev) =>
        prev.map((slot, i) =>
          i === index ? { ...slot, [field]: value } : slot
        )
      );
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !selectedOrderId ||
      selectedProductId === null ||
      !phoneNumber ||
      !defectDescription
    ) {
      setToastMessage("Please fill in all required fields.");
      setToastVisible(true);
      return;
    }

    if (!warrantySlipFile) {
      setToastMessage("Please upload your warranty slip.");
      setToastVisible(true);
      return;
    }

    const validSlots = availabilitySlots.filter(
      (s) => s.date && s.startTime && s.endTime
    );
    if (validSlots.length === 0) {
      setToastMessage("Please provide at least one availability slot.");
      setToastVisible(true);
      return;
    }

    for (const slot of validSlots) {
      if (slot.endTime <= slot.startTime) {
        setToastMessage("End time must be after start time for each slot.");
        setToastVisible(true);
        return;
      }
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("orderId", selectedOrderId);
      formData.append("productId", String(selectedProductId));
      formData.append("phoneNumber", phoneNumber);
      formData.append("defectDescription", defectDescription);
      formData.append("availabilitySlots", JSON.stringify(validSlots));
      formData.append("warrantySlip", warrantySlipFile);

      const token = localStorage.getItem("shopclone-token");
      const res = await fetch("/api/repairs", {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit repair request");
      }

      setSelectedOrderId("");
      setSelectedProductId(null);
      setPhoneNumber("");
      setDefectDescription("");
      setAvailabilitySlots([
        { date: "", startTime: "09:00", endTime: "12:00" },
      ]);
      removeFile();
      setShowForm(false);

      setExistingRepairs((prev) => [data, ...prev]);

      setToastMessage(
        "Repair scheduled successfully! A technician will visit on " +
          formatDate(data.scheduledDate) +
          "."
      );
      setToastVisible(true);
    } catch (error) {
      setToastMessage(
        error instanceof Error ? error.message : "Failed to submit request"
      );
      setToastVisible(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase = "input w-full";
  const slotInputBase = "input w-full";

  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-12">
        <h1 className="font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          Schedule a Repair
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-md text-balance">
          Got a product under warranty that needs attention? We&apos;ll dispatch
          a technician to your door.
        </p>
      </header>

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          disabled={deliveredOrders.length === 0}
          className="btn btn--primary group inline-flex items-center gap-3 font-medium text-sm tracking-wide px-7 py-3.5 rounded-full disabled:opacity-30 disabled:pointer-events-none"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Repair Request
        </button>
      )}

      {deliveredOrders.length === 0 && !showForm && (
        <div className="mt-12 py-16 text-center">
          <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-stone-100 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-stone-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <p className="text-sm text-stone-500">No delivered orders found.</p>
          <p className="text-xs text-stone-400 mt-1.5">
            Repairs can only be scheduled for delivered products.
          </p>
          <Link
            href="/orders"
            className="inline-block mt-6 text-sm font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors"
          >
            View Your Orders
          </Link>
        </div>
      )}

      {showForm && (
        <div className="mt-10 mb-4 bg-white border border-stone-200 rounded-2xl overflow-hidden animate-step-reveal">
          <div className="px-6 sm:px-8 py-5 flex items-center justify-between border-b border-stone-100">
            <h2 className="font-heading font-display text-xl text-stone-900">
              New Request
            </h2>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="px-6 sm:px-8 py-8 space-y-10"
          >
            <section>
              <StepLabel number="01" label="Select Order" />
              <select
                value={selectedOrderId}
                onChange={(e) => setSelectedOrderId(e.target.value)}
                className={inputBase}
              >
                <option value="">Choose a delivered order...</option>
                {deliveredOrders.map((order) => (
                  <option key={order.id} value={order.id}>
                    Order #{order.id} &mdash; {formatDate(order.date)} &mdash; $
                    {order.total.toFixed(2)}
                  </option>
                ))}
              </select>
            </section>

            {selectedOrderId && (
              <section className="animate-step-reveal">
                <StepLabel number="02" label="Select Product" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {orderProducts.map(({ product }) => {
                    const isSelected = selectedProductId === product.id;
                    return (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => setSelectedProductId(product.id)}
                        className={`group flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                          isSelected
                            ? "border-stone-900 bg-stone-50"
                            : "border-stone-200 hover:border-stone-300"
                        }`}
                      >
                        <div className="relative w-14 h-14 flex-shrink-0 bg-stone-100 rounded-lg overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-stone-900 line-clamp-1">
                            {product.title}
                          </p>
                          <p className="text-xs text-stone-400 mt-1">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-stone-900 flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={3}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {selectedProductId !== null && (
              <section className="animate-step-reveal">
                <StepLabel number="03" label="Describe the Issue" />
                <textarea
                  value={defectDescription}
                  onChange={(e) => setDefectDescription(e.target.value)}
                  rows={3}
                  placeholder="What's wrong with the product?"
                  className={`${inputBase} resize-none`}
                />
              </section>
            )}

            {selectedProductId !== null && (
              <section className="animate-step-reveal">
                <StepLabel number="04" label="Phone Number" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className={inputBase}
                />
              </section>
            )}

            {selectedProductId !== null && (
              <section className="animate-step-reveal">
                <StepLabel number="05" label="Availability" />
                <p className="text-xs text-stone-400 mb-4 -mt-1">
                  When can our technician visit? Add up to 5 time slots.
                </p>
                <div className="space-y-3">
                  {availabilitySlots.map((slot, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap items-end gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100"
                    >
                      <div className="flex-1 min-w-[140px]">
                        <label className="block text-[11px] font-medium text-stone-400 uppercase tracking-wider mb-1.5">
                          Date
                        </label>
                        <input
                          type="date"
                          value={slot.date}
                          min={getMinDate()}
                          onChange={(e) =>
                            updateSlot(index, "date", e.target.value)
                          }
                          className={slotInputBase}
                        />
                      </div>
                      <div className="min-w-[110px]">
                        <label className="block text-[11px] font-medium text-stone-400 uppercase tracking-wider mb-1.5">
                          From
                        </label>
                        <input
                          type="time"
                          value={slot.startTime}
                          onChange={(e) =>
                            updateSlot(index, "startTime", e.target.value)
                          }
                          className={slotInputBase}
                        />
                      </div>
                      <div className="min-w-[110px]">
                        <label className="block text-[11px] font-medium text-stone-400 uppercase tracking-wider mb-1.5">
                          To
                        </label>
                        <input
                          type="time"
                          value={slot.endTime}
                          onChange={(e) =>
                            updateSlot(index, "endTime", e.target.value)
                          }
                          className={slotInputBase}
                        />
                      </div>
                      {availabilitySlots.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSlot(index)}
                          className="p-2 text-stone-300 hover:text-red-500 transition-colors"
                          title="Remove slot"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {availabilitySlots.length < 5 && (
                  <button
                    type="button"
                    onClick={addSlot}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add another slot
                  </button>
                )}
              </section>
            )}

            {selectedProductId !== null && (
              <section className="animate-step-reveal">
                <StepLabel number="06" label="Warranty Slip" />
                <p className="text-xs text-stone-400 mb-4 -mt-1">
                  Upload a photo or scan &mdash; JPG, PNG, WebP, or PDF up to
                  10MB.
                </p>

                {!warrantySlipFile ? (
                  <label className="flex flex-col items-center justify-center w-full py-12 border border-dashed border-stone-300 rounded-xl cursor-pointer hover:border-stone-400 hover:bg-stone-50/50 transition-all">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                      <svg
                        className="w-5 h-5 text-stone-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-stone-600">
                      Upload warranty slip
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                      Click or drag to upload
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp,application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-stone-50 border border-stone-200 rounded-xl">
                    {filePreview ? (
                      <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border border-stone-200">
                        <Image
                          src={filePreview}
                          alt="Warranty slip preview"
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-stone-100 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-stone-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-700 truncate">
                        {warrantySlipFile.name}
                      </p>
                      <p className="text-xs text-stone-400 mt-0.5">
                        {(warrantySlipFile.size / 1024).toFixed(0)} KB
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-2 text-stone-300 hover:text-red-500 transition-colors"
                      title="Remove file"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </section>
            )}

            {selectedProductId !== null && (
              <div className="flex items-center justify-end gap-6 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn--primary inline-flex items-center gap-2.5 font-medium text-sm px-7 py-3 rounded-full disabled:opacity-40"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Scheduling&hellip;
                    </>
                  ) : (
                    "Schedule Repair"
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      )}

      <div className="h-px bg-stone-200 my-16" />

      <section className="pb-24">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-heading font-display text-2xl text-stone-900">
            Your Repairs
          </h2>
          {!loadingRepairs && existingRepairs.length > 0 && (
            <span className="text-xs text-stone-400 tabular-nums">
              {existingRepairs.length} request
              {existingRepairs.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        {loadingRepairs ? (
          <div className="divide-y divide-stone-100">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-5 py-7 animate-pulse">
                <div className="w-16 h-16 bg-stone-100 rounded-xl" />
                <div className="flex-1 space-y-3 py-0.5">
                  <div className="h-4 bg-stone-100 rounded w-2/5" />
                  <div className="h-3 bg-stone-50 rounded w-1/4" />
                  <div className="h-3 bg-stone-50 rounded w-3/5" />
                </div>
              </div>
            ))}
          </div>
        ) : existingRepairs.length === 0 ? (
          <div className="py-16 text-center">
            <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-stone-100 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-stone-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                />
              </svg>
            </div>
            <p className="text-sm text-stone-500">No repair requests yet.</p>
            <p className="text-xs text-stone-400 mt-1.5">
              Schedule a repair above for warranty issues.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {existingRepairs.map((repair) => (
              <article key={repair.id} className="flex gap-5 py-6 sm:py-7">
                <div className="relative w-16 h-16 flex-shrink-0 bg-stone-100 rounded-xl overflow-hidden">
                  <Image
                    src={repair.productImage}
                    alt={repair.productTitle}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-sm font-medium text-stone-900 line-clamp-1">
                        {repair.productTitle}
                      </h3>
                      <p className="text-xs text-stone-400 mt-0.5">
                        Order #{repair.orderId}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          STATUS_DOT[repair.status] ?? STATUS_DOT.pending
                        }`}
                      />
                      <span className="text-xs font-medium text-stone-500">
                        {STATUS_LABELS[repair.status] ?? repair.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-stone-500 mt-2.5 line-clamp-2">
                    {repair.defectDescription}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs text-stone-400">
                    {repair.scheduledDate && (
                      <span>{formatDate(repair.scheduledDate)}</span>
                    )}
                    {repair.scheduledTime && (
                      <span>{repair.scheduledTime}</span>
                    )}
                    <span>{repair.phoneNumber}</span>
                    <span>Submitted {formatDate(repair.createdAt)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
