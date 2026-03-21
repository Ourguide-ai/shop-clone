"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RequireAuth from "@/components/RequireAuth";
import { useApp } from "@/context/AppContext";
import Toast from "@/components/Toast";

const ISSUE_TYPES = [
  { value: "damaged", label: "Damaged", desc: "Item arrived damaged or broken" },
  { value: "wrong_item", label: "Wrong Item", desc: "Received a different item than ordered" },
  { value: "missing_parts", label: "Missing Parts", desc: "Item is incomplete or missing components" },
  { value: "defective", label: "Defective", desc: "Item doesn't function as expected" },
  { value: "not_as_described", label: "Not as Described", desc: "Item differs from the product listing" },
] as const;

const RESOLUTION_TYPES = [
  { value: "refund", label: "Full Refund", desc: "Get your money back" },
  { value: "replacement", label: "Replacement", desc: "Receive a new item" },
  { value: "repair", label: "Repair", desc: "Have the item repaired" },
  { value: "store_credit", label: "Store Credit", desc: "Receive store credit" },
] as const;

const TOTAL_STEPS = 6;

export default function ReportIssuePage() {
  return (
    <RequireAuth>
      <ReportIssueContent />
    </RequireAuth>
  );
}

function ReportIssueContent() {
  const params = useParams();
  const router = useRouter();
  const { orders } = useApp();
  const orderId = params.id as string;
  const order = orders.find((o) => o.id === orderId);

  const [step, setStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [evidence, setEvidence] = useState<File[]>([]);
  const [resolution, setResolution] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  if (!order) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 mb-4">Order not found.</p>
        <Link href="/orders" className="btn btn--primary">Back to Orders</Link>
      </div>
    );
  }

  if (order.status !== "delivered") {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 mb-4">Issues can only be reported for delivered orders.</p>
        <Link href={`/orders/${orderId}`} className="btn btn--primary">Back to Order</Link>
      </div>
    );
  }

  function canProceed(): boolean {
    switch (step) {
      case 1: return selectedItems.length > 0;
      case 2: return issueType !== "";
      case 3: return description.trim().length >= 20;
      case 4: return true; // evidence is optional
      case 5: return resolution !== "";
      case 6: return true;
      default: return false;
    }
  }

  function handleFileChange(files: FileList | null) {
    if (!files) return;
    const newFiles = Array.from(files).slice(0, 5 - evidence.length);
    setEvidence((prev) => [...prev, ...newFiles].slice(0, 5));
  }

  function removeFile(index: number) {
    setEvidence((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      const items = selectedItems.map((productId) => {
        const orderItem = order!.items.find((i) => i.product.id === productId);
        return {
          productId,
          productTitle: orderItem?.product.title || "",
          productImage: orderItem?.product.image || "",
        };
      });

      const formData = new FormData();
      formData.append("orderId", orderId);
      formData.append("items", JSON.stringify(items));
      formData.append("issueType", issueType);
      formData.append("description", description);
      formData.append("resolutionPreference", resolution);
      evidence.forEach((file) => formData.append("evidence", file));

      const response = await fetch("/api/issues", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("shopclone-token")}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to submit report");
      }

      setToastMessage("Issue report submitted successfully!");
      setToastVisible(true);
      setTimeout(() => router.push(`/orders/${orderId}`), 1500);
    } catch (err) {
      setToastMessage(err instanceof Error ? err.message : "Failed to submit");
      setToastVisible(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="report-form">
        <Link
          href={`/orders/${orderId}`}
          className="text-sm text-blue-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to order
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Report an Issue</h1>

        {/* Step indicator */}
        <div className="report-form__stepper">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} className="report-form__step-indicator">
              <div
                className={`report-form__step-dot ${
                  i + 1 < step
                    ? "report-form__step-dot--completed"
                    : i + 1 === step
                    ? "report-form__step-dot--active"
                    : ""
                }`}
              >
                {i + 1 < step ? "✓" : i + 1}
              </div>
              {i < TOTAL_STEPS - 1 && (
                <div
                  className={`report-form__step-line ${
                    i + 1 < step ? "report-form__step-line--completed" : ""
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="report-form__body">
          {/* Step 1: Select items */}
          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Select affected item(s)</h2>
              <div className="space-y-3">
                {order.items.map(({ product, quantity }) => (
                  <label
                    key={product.id}
                    className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedItems.includes(product.id)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(product.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedItems((prev) => [...prev, product.id]);
                        } else {
                          setSelectedItems((prev) => prev.filter((id) => id !== product.id));
                        }
                      }}
                      className="w-4 h-4 rounded"
                    />
                    <div className="relative w-12 h-12 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                      <Image src={product.image} alt={product.title} fill sizes="48px" className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
                      <p className="text-xs text-gray-500">Qty: {quantity}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Issue type */}
          {step === 2 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s the issue?</h2>
              <div className="space-y-3">
                {ISSUE_TYPES.map((type) => (
                  <label
                    key={type.value}
                    className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                      issueType === type.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="issueType"
                      value={type.value}
                      checked={issueType === type.value}
                      onChange={() => setIssueType(type.value)}
                      className="mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{type.label}</p>
                      <p className="text-xs text-gray-500">{type.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Description */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Describe the issue</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please describe what happened in detail (minimum 20 characters)..."
                rows={5}
                className="price-match-form__input w-full"
                style={{ resize: "vertical" }}
              />
              <p className="text-xs text-gray-500 mt-1">
                {description.length}/20 characters minimum
              </p>
            </div>
          )}

          {/* Step 4: Upload evidence */}
          {step === 4 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload evidence (optional)</h2>
              <p className="text-sm text-gray-500 mb-4">
                Photos or videos help us process your report faster. Up to 5 files.
              </p>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={(e) => handleFileChange(e.target.files)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              {evidence.length > 0 && (
                <div className="mt-4 space-y-2">
                  {evidence.map((file, i) => (
                    <div key={i} className="flex items-center justify-between gap-2 p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700 truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 5: Resolution preference */}
          {step === 5 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Preferred resolution</h2>
              <div className="space-y-3">
                {RESOLUTION_TYPES.map((type) => (
                  <label
                    key={type.value}
                    className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                      resolution === type.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="resolution"
                      value={type.value}
                      checked={resolution === type.value}
                      onChange={() => setResolution(type.value)}
                      className="mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{type.label}</p>
                      <p className="text-xs text-gray-500">{type.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Review & Submit */}
          {step === 6 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Review your report</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Affected items:</p>
                  <ul className="mt-1 space-y-1">
                    {selectedItems.map((productId) => {
                      const item = order.items.find((i) => i.product.id === productId);
                      return (
                        <li key={productId} className="text-gray-600">
                          {item?.product.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Issue type:</p>
                  <p className="text-gray-600 capitalize mt-1">
                    {ISSUE_TYPES.find((t) => t.value === issueType)?.label}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Description:</p>
                  <p className="text-gray-600 mt-1">{description}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Evidence:</p>
                  <p className="text-gray-600 mt-1">
                    {evidence.length > 0 ? `${evidence.length} file(s) attached` : "No files attached"}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Preferred resolution:</p>
                  <p className="text-gray-600 mt-1">
                    {RESOLUTION_TYPES.find((t) => t.value === resolution)?.label}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="report-form__nav">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="btn btn--outline"
            >
              Back
            </button>
            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(TOTAL_STEPS, s + 1))}
                disabled={!canProceed()}
                className="btn btn--info"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="btn btn--success"
              >
                {submitting ? "Submitting..." : "Submit Report"}
              </button>
            )}
          </div>
        </div>
      </div>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
