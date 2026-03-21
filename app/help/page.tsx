"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useApp } from "@/context/AppContext";
import type { Order } from "@/lib/types";

type HelpCategory = "orders" | "returns" | "payments" | "account" | "shipping";

type FaqItem = {
  id: string;
  category: HelpCategory;
  q: string;
  a: string;
};

const CATEGORIES: { key: HelpCategory; label: string }[] = [
  { key: "orders", label: "Orders" },
  { key: "returns", label: "Returns" },
  { key: "payments", label: "Payments" },
  { key: "account", label: "Account" },
  { key: "shipping", label: "Shipping" },
];

const FAQ: FaqItem[] = [
  // Orders
  {
    id: "orders-track",
    category: "orders",
    q: "How do I track my order?",
    a: "Open Your Orders to see real-time status updates. Once shipped, we’ll show the carrier and tracking link.",
  },
  {
    id: "orders-change",
    category: "orders",
    q: "Can I change or cancel an order after placing it?",
    a: "You can cancel while the order is still Pending. If it’s Processing, contact support immediately—we’ll do our best, but changes aren’t guaranteed.",
  },
  {
    id: "orders-missing",
    category: "orders",
    q: "My order says delivered, but I can’t find it—what now?",
    a: "Check your mailbox, front desk, or neighbors first. If it’s still missing, contact support within 48 hours and we’ll investigate and resolve it.",
  },
  {
    id: "orders-split",
    category: "orders",
    q: "Why did my items ship separately?",
    a: "Some items ship from different warehouses to get them to you faster. You’ll see separate tracking numbers in Your Orders.",
  },
  {
    id: "orders-invoice",
    category: "orders",
    q: "Where can I download my invoice?",
    a: "Invoices are available in Your Orders. Open an order to download the receipt for reimbursement or records.",
  },

  // Returns
  {
    id: "returns-policy",
    category: "returns",
    q: "What is your return window?",
    a: "Most items can be returned within 30 days of delivery. Items must be unused and in original packaging.",
  },
  {
    id: "returns-label",
    category: "returns",
    q: "Do you provide free return labels?",
    a: "Yes—eligible returns include a prepaid label. Once your request is approved, we’ll email the label within 24 hours.",
  },
  {
    id: "returns-exceptions",
    category: "returns",
    q: "Are there any return exceptions?",
    a: "Certain categories (like electronics) may have shorter windows, and final-sale items are not returnable. If you’re unsure, contact us before shipping the item back.",
  },
  {
    id: "returns-refund-time",
    category: "returns",
    q: "How long do refunds take?",
    a: "After inspection, refunds typically post in 3–5 business days to your original payment method. PayPal may be faster.",
  },
  {
    id: "returns-exchange",
    category: "returns",
    q: "Can I exchange an item instead of returning it?",
    a: "For select items, we can process a replacement request. Use the support form and choose High priority for urgent sizing issues.",
  },

  // Payments
  {
    id: "payments-methods",
    category: "payments",
    q: "What payment methods do you accept?",
    a: "We accept major credit/debit cards, PayPal, Apple Pay, and Google Pay. Availability may vary by region.",
  },
  {
    id: "payments-charged-twice",
    category: "payments",
    q: "Why do I see two charges for one order?",
    a: "Often one is an authorization that drops off automatically. If both settle, contact support and we’ll fix it quickly.",
  },
  {
    id: "payments-failed",
    category: "payments",
    q: "My payment failed—what should I try?",
    a: "Double-check billing details, try another payment method, or contact your bank. If it still fails, reach out and we’ll help troubleshoot.",
  },
  {
    id: "payments-gift",
    category: "payments",
    q: "Can I pay with store credit or a gift card?",
    a: "Yes—store credit applies automatically at checkout when available. Gift cards can be applied on the payment step.",
  },
  {
    id: "payments-tax",
    category: "payments",
    q: "How is sales tax calculated?",
    a: "Sales tax is calculated based on shipping destination and local regulations. You’ll see the final amount before placing the order.",
  },

  // Account
  {
    id: "account-reset",
    category: "account",
    q: "How do I reset my password?",
    a: "Go to Account Settings → Security to change your password. If you’re locked out, sign out and use the reset flow from Sign In.",
  },
  {
    id: "account-email",
    category: "account",
    q: "How do I change my email address?",
    a: "Update it in Account Settings → Profile, then save. For security, we may prompt you to re-authenticate.",
  },
  {
    id: "account-2fa",
    category: "account",
    q: "Do you support two-factor authentication (2FA)?",
    a: "Yes—enable 2FA in Account Settings → Security. We recommend an authenticator app for best protection.",
  },
  {
    id: "account-sessions",
    category: "account",
    q: "How do I sign out of other devices?",
    a: "In Account Settings → Security, you can revoke active sessions you don’t recognize.",
  },
  {
    id: "account-privacy",
    category: "account",
    q: "How do you use my data?",
    a: "We only use your data to fulfill orders and improve the experience. You can manage marketing preferences in Account Settings → Notifications.",
  },

  // Shipping
  {
    id: "shipping-times",
    category: "shipping",
    q: "How long does shipping take?",
    a: "Standard shipping is typically 5–7 business days. Express options are available at checkout.",
  },
  {
    id: "shipping-cost",
    category: "shipping",
    q: "Do you offer free shipping?",
    a: "Orders over $35 qualify for free standard shipping. You’ll see eligibility at checkout.",
  },
  {
    id: "shipping-address",
    category: "shipping",
    q: "Can I update my shipping address after ordering?",
    a: "If the order is still Pending, contact us immediately. Once Processing, address changes might not be possible.",
  },
  {
    id: "shipping-po",
    category: "shipping",
    q: "Do you ship to P.O. boxes?",
    a: "Standard shipping is available to P.O. boxes. Express services may require a street address.",
  },
  {
    id: "shipping-international",
    category: "shipping",
    q: "Do you ship internationally?",
    a: "International shipping may be available depending on the destination. If you don’t see it at checkout, contact support.",
  },
];

type Priority = "low" | "medium" | "high";
type IssueType =
  | "order"
  | "return"
  | "shipping"
  | "payment"
  | "account"
  | "product"
  | "other";

const ISSUE_TYPES: { value: IssueType; label: string; hint: string }[] = [
  { value: "order", label: "Order issue", hint: "Tracking, missing items, status" },
  { value: "return", label: "Return / refund", hint: "Start a return, refund timeline" },
  { value: "shipping", label: "Shipping question", hint: "Address changes, delivery delays" },
  { value: "payment", label: "Payment problem", hint: "Charges, failed payments" },
  { value: "account", label: "Account help", hint: "Login, profile, security" },
  { value: "product", label: "Product question", hint: "Specs, availability" },
  { value: "other", label: "Other", hint: "Anything else" },
];

export default function HelpPage() {
  const { user } = useAuth();
  const { orders } = useApp();

  const faqRef = useRef<HTMLDivElement | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | HelpCategory>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Support form
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [orderNumber, setOrderNumber] = useState("");
  const [issueType, setIssueType] = useState<IssueType | "">("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success">("idle");
  const [toast, setToast] = useState<string | null>(null);

  // Order tracker
  const [trackId, setTrackId] = useState("");

  useEffect(() => {
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
  }, [user?.name, user?.email]);

  const filteredFaq = useMemo(() => {
    const q = search.trim().toLowerCase();
    return FAQ.filter((item) => {
      const categoryMatch = activeCategory === "all" || item.category === activeCategory;
      if (!categoryMatch) return false;
      if (!q) return true;
      return (item.q + " " + item.a).toLowerCase().includes(q);
    });
  }, [search, activeCategory]);

  const liveChatOnline = useMemo(() => {
    const hour = new Date().getHours();
    return hour >= 9 && hour <= 19;
  }, []);

  function scrollToFaq(category?: HelpCategory) {
    if (category) setActiveCategory(category);
    // Staggered UI can render above — scroll after state flush.
    window.setTimeout(() => faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }

  function validateSupportForm(): boolean {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    if (!issueType) next.issueType = "Select an issue type";
    if (!message.trim()) next.message = "Tell us what happened";
    if (message.trim() && message.trim().length < 10) next.message = "Please add a bit more detail (10+ characters)";
    if (attachments.length > 5) next.attachments = "You can attach up to 5 files";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitState !== "idle") return;
    setToast(null);
    if (!validateSupportForm()) return;

    setSubmitState("loading");

    // Demo “submit”: simulate request latency; keep UX production-grade.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitState("success");
    setToast("Support request submitted — we’ll email you within 24 hours.");

    await new Promise((r) => setTimeout(r, 900));
    setSubmitState("idle");
    setMessage("");
    setIssueType("");
    setPriority("medium");
    setOrderNumber("");
    setAttachments([]);
    setErrors({});
  }

  const messageCount = message.length;
  const messageLimit = 800;

  const tracked = useMemo(() => resolveOrderTracking(trackId, orders), [trackId, orders]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
      {/* HERO */}
      <div className="enter d0 relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-b from-white/80 to-white/50 backdrop-blur shadow-sm">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_circle_at_20%_-10%,rgba(250,204,21,0.18),transparent_55%),radial-gradient(700px_circle_at_90%_10%,rgba(17,24,39,0.08),transparent_55%)]" />

        <div className="relative px-6 sm:px-8 py-8 sm:py-10">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-gray-700 tracking-wide">Customer Service</p>
              <h1 className="font-heading mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">How can we help you?</h1>
              <p className="mt-2 text-sm text-gray-600">
                Search help topics, track an order, or contact support — we’re here to help.
              </p>
            </div>
            <div className="hidden sm:block">
              <Link
                href="/orders"
                className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white transition"
              >
                <OrdersIcon />
                Your Orders
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search help topics (returns, refunds, shipping, payment…)"
                className="input w-full rounded-2xl pl-11 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
              />
              {!!search.trim() && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setOpenFaqId(null);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-white transition"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => scrollToFaq(c.key)}
                  className="chip inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-3 py-1.5 text-xs font-semibold text-gray-800 hover:bg-white transition"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left column: FAQ + tracker */}
        <div className="xl:col-span-7 space-y-6">
          {/* FAQ */}
          <div ref={faqRef} className="enter d1 rounded-3xl border border-gray-200 bg-gradient-to-b from-white/80 to-white/50 backdrop-blur shadow-sm">
            <div className="px-6 pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-heading text-base sm:text-lg font-bold tracking-tight text-gray-900">FAQs</h2>
                  <p className="text-sm text-gray-600 mt-1">Quick answers, organized by category.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-600">
                  <span className="rounded-full bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 px-2 py-0.5 text-gray-800">Tip</span>
                  Try searching “refund” or “tracking”.
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 overflow-x-auto -mx-2 px-2 pb-2">
                <Pill
                  active={activeCategory === "all"}
                  onClick={() => setActiveCategory("all")}
                  label="All"
                />
                {CATEGORIES.map((c) => (
                  <Pill
                    key={c.key}
                    active={activeCategory === c.key}
                    onClick={() => setActiveCategory(c.key)}
                    label={c.label}
                  />
                ))}
              </div>
            </div>

            <div className="px-6 pb-6 pt-4">
              {filteredFaq.length === 0 ? (
                <div className="rounded-2xl border border-gray-200 bg-white/70 p-5">
                  <h3 className="font-heading text-sm font-semibold text-gray-900">No results</h3>
                  <p className="text-sm text-gray-600 mt-1">Try a different keyword or browse a category.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredFaq.map((item) => (
                    <FaqAccordionItem
                      key={item.id}
                      item={item}
                      open={openFaqId === item.id}
                      onToggle={() => setOpenFaqId((prev) => (prev === item.id ? null : item.id))}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ORDER TRACKER */}
          <div className="enter d2 rounded-3xl border border-gray-200 bg-gradient-to-b from-white/80 to-white/50 backdrop-blur shadow-sm">
            <div className="px-6 pt-6">
              <h2 className="font-heading text-base sm:text-lg font-bold tracking-tight text-gray-900">Order Issue Tracker</h2>
              <p className="text-sm text-gray-600 mt-1">Enter an order number to see its current status instantly.</p>
            </div>
            <div className="px-6 pb-6 pt-5">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-end">
                <FloatingInput
                  id="track"
                  label="Order Number"
                  value={trackId}
                  onChange={(v) => setTrackId(v)}
                  placeholder="e.g. ORD-1042"
                />
                <Link
                  href="/orders"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition"
                >
                  <ArrowIcon />
                  View orders
                </Link>
              </div>

              <div className="mt-4">
                <OrderProgressView tracked={tracked} />
              </div>
            </div>
          </div>
        </div>

        {/* Right column: contact cards + form */}
        <div className="xl:col-span-5 space-y-6">
          {/* CONTACT OPTIONS */}
          <div className="enter d1 rounded-3xl border border-gray-200 bg-gradient-to-b from-white/80 to-white/50 backdrop-blur shadow-sm">
            <div className="px-6 pt-6">
              <h2 className="font-heading text-base sm:text-lg font-bold tracking-tight text-gray-900">Contact options</h2>
              <p className="text-sm text-gray-600 mt-1">Choose the fastest way to get help.</p>
            </div>
            <div className="px-6 pb-6 pt-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-3">
                <ContactOptionCard
                  icon={<ChatIcon />}
                  title="Live chat"
                  description={liveChatOnline ? "Agents are online now." : "Currently offline. Try email support."}
                  meta={
                    <span className={`inline-flex items-center gap-2 text-xs font-semibold ${liveChatOnline ? "text-green-700" : "text-gray-600"}`}>
                      <span className={`h-2 w-2 rounded-full ${liveChatOnline ? "bg-green-500 pulse-dot" : "bg-gray-300"}`} />
                      {liveChatOnline ? "Online" : "Offline"}
                    </span>
                  }
                  cta={liveChatOnline ? "Start chat" : "Leave a message"}
                  onClick={() => setToast("Chat is a demo in this build — please use the form below.")}
                />
                <ContactOptionCard
                  icon={<MailIcon />}
                  title="Email support"
                  description="Best for receipts, refunds, and detailed requests."
                  meta={<span className="text-xs font-semibold text-gray-600">Avg response: ~24 hours</span>}
                  cta="Email us"
                  onClick={() => {
                    setToast(null);
                    scrollToFaq();
                    window.setTimeout(() => {
                      const el = document.getElementById("support-form");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 120);
                  }}
                />
                <ContactOptionCard
                  icon={<PhoneIcon />}
                  title="Phone support"
                  description="For urgent delivery issues and billing disputes."
                  meta={<span className="text-xs font-semibold text-gray-600">Mon–Fri, 9am–6pm</span>}
                  cta="Call support"
                  onClick={() => setToast("Phone support is a demo in this build — please use the form below.")}
                />
              </div>
            </div>
          </div>

          {/* SUPPORT FORM */}
          <div id="support-form" className="enter d2 rounded-3xl border border-gray-200 bg-gradient-to-b from-white/80 to-white/50 backdrop-blur shadow-sm">
            <div className="px-6 pt-6">
              <h2 className="font-heading text-base sm:text-lg font-bold tracking-tight text-gray-900">Contact support</h2>
              <p className="text-sm text-gray-600 mt-1">We’ll respond as fast as possible — typically within 24 hours.</p>
            </div>

            <div className="px-6 pb-6 pt-5">
              {toast && <ToastInline message={toast} onClose={() => setToast(null)} />}

              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput
                    id="support-name"
                    label="Name"
                    value={name}
                    onChange={(v) => {
                      setName(v);
                      if (errors.name) setErrors((p) => ({ ...p, name: "" }));
                    }}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <FloatingInput
                    id="support-email"
                    label="Email"
                    value={email}
                    onChange={(v) => {
                      setEmail(v);
                      if (errors.email) setErrors((p) => ({ ...p, email: "" }));
                    }}
                    error={errors.email}
                    type="email"
                    autoComplete="email"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput
                    id="support-order"
                    label="Order Number (optional)"
                    value={orderNumber}
                    onChange={(v) => setOrderNumber(v)}
                    placeholder="ORD-1042"
                  />
                  <Listbox
                    label="Issue Type"
                    value={issueType}
                    options={ISSUE_TYPES.map((x) => ({ value: x.value, label: x.label, hint: x.hint }))}
                    placeholder="Select an issue type"
                    error={errors.issueType}
                    onChange={(v) => {
                      setIssueType(v);
                      if (errors.issueType) setErrors((p) => ({ ...p, issueType: "" }));
                    }}
                  />
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Priority</p>
                      <p className="text-xs text-gray-600">Choose High for urgent time-sensitive issues.</p>
                    </div>
                    <div className="inline-flex rounded-2xl border border-gray-200 bg-white/60 p-1">
                      {([
                        { key: "low", label: "Low" },
                        { key: "medium", label: "Medium" },
                        { key: "high", label: "High" },
                      ] as const).map((p) => (
                        <button
                          key={p.key}
                          type="button"
                          onClick={() => setPriority(p.key)}
                          className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                            priority === p.key
                              ? "bg-[var(--color-primary)] text-white shadow-sm"
                              : "text-gray-700 hover:bg-white"
                          }`}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <FloatingTextarea
                    id="support-message"
                    label="Message"
                    value={message}
                    onChange={(v) => {
                      if (v.length <= messageLimit) setMessage(v);
                      if (errors.message) setErrors((p) => ({ ...p, message: "" }));
                    }}
                    error={errors.message}
                    rows={5}
                    placeholder="Describe the issue. Include what you expected vs what happened."
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <p className={`text-xs ${errors.message ? "text-red-600" : "text-gray-500"}`}>
                      {errors.message ? errors.message : ""}
                    </p>
                    <p className={`text-xs font-semibold ${messageCount > messageLimit * 0.9 ? "text-orange-600" : "text-gray-500"}`}>
                      {messageCount}/{messageLimit}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">Attachments</p>
                  <p className="text-xs text-gray-600">Add screenshots or receipts (up to 5 files).</p>

                  <div
                    className={`mt-2 rounded-2xl border border-dashed bg-white/60 p-4 transition ${
                      dragging
                        ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20"
                        : errors.attachments
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-gray-200 hover:border-gray-300"
                    }`}
                    onDragEnter={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDragging(true);
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDragging(true);
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDragging(false);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDragging(false);
                      const dropped = Array.from(e.dataTransfer.files || []);
                      if (dropped.length === 0) return;
                      setAttachments((prev) => [...prev, ...dropped].slice(0, 5));
                      if (errors.attachments) setErrors((p) => ({ ...p, attachments: "" }));
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`h-10 w-10 rounded-2xl border border-gray-200 bg-white/70 flex items-center justify-center ${dragging ? "upload-bounce" : ""}`}>
                        <UploadIcon />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">Drag & drop files here</p>
                        <p className="text-xs text-gray-600">or click to browse</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="rounded-xl border border-gray-200 bg-white/70 px-3 py-2 text-xs font-semibold text-gray-900 hover:bg-white transition"
                      >
                        Browse
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        multiple
                        onChange={(e) => {
                          const picked = Array.from(e.target.files || []);
                          if (picked.length === 0) return;
                          setAttachments((prev) => [...prev, ...picked].slice(0, 5));
                          if (errors.attachments) setErrors((p) => ({ ...p, attachments: "" }));
                          e.currentTarget.value = "";
                        }}
                      />
                    </div>

                    {errors.attachments && <p className="mt-2 text-xs text-red-600">{errors.attachments}</p>}

                    {attachments.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {attachments.map((f, idx) => (
                          <div key={`${f.name}-${idx}`} className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white/70 px-3 py-2">
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-900 truncate">{f.name}</p>
                              <p className="text-[11px] text-gray-600">{formatBytes(f.size)}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setAttachments((prev) => prev.filter((_, i) => i !== idx))}
                              className="rounded-lg px-2 py-1 text-xs font-semibold text-gray-700 hover:bg-white transition"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitState !== "idle"}
                  className="btn btn--primary w-full rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] font-semibold py-3 transition flex items-center justify-center gap-2"
                >
                  {submitState === "idle" && (
                    <>
                      <SendIcon />
                      Submit request
                    </>
                  )}
                  {submitState === "loading" && (
                    <>
                      <span className="spinner" aria-hidden />
                      Sending…
                    </>
                  )}
                  {submitState === "success" && (
                    <>
                      <span className="check" aria-hidden />
                      Sent
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .enter { opacity: 0; animation: fadeUp 520ms cubic-bezier(.2,.8,.2,1) forwards; }
        .d0 { animation-delay: 0ms; }
        .d1 { animation-delay: 100ms; }
        .d2 { animation-delay: 200ms; }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: .9; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        .pulse-dot { animation: pulseDot 1200ms ease-in-out infinite; }

        @keyframes uploadBounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        .upload-bounce { animation: uploadBounce 700ms ease-in-out infinite; }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          border: 2px solid rgba(17, 24, 39, 0.25);
          border-top-color: rgba(17, 24, 39, 0.9);
          animation: spin 700ms linear infinite;
        }

        @keyframes checkIn {
          0% { transform: scale(.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .check {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: rgba(34, 197, 94, 0.18);
          border: 1px solid rgba(34, 197, 94, 0.35);
          position: relative;
          animation: checkIn 220ms ease-out;
        }
        .check:after {
          content: "";
          position: absolute;
          left: 5px;
          top: 7px;
          width: 6px;
          height: 3px;
          border-left: 2px solid rgba(21, 128, 61, 1);
          border-bottom: 2px solid rgba(21, 128, 61, 1);
          transform: rotate(-45deg);
        }
      `}</style>
    </div>
  );
}

function Pill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition border ${
        active
          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
          : "bg-white/60 text-gray-800 border-gray-200 hover:bg-white"
      }`}
    >
      {label}
    </button>
  );
}

function FaqAccordionItem({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-white transition"
      >
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900 pr-6">{item.q}</p>
          <p className="mt-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">{labelForCategory(item.category)}</p>
        </div>
        <span className={`mt-0.5 h-9 w-9 rounded-xl border border-gray-200 bg-white/70 flex items-center justify-center transition ${open ? "rotate-180" : ""}`}>
          <ChevronIcon />
        </span>
      </button>
      <div className={`px-5 transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pb-5">
          <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function ContactOptionCard({
  icon,
  title,
  description,
  meta,
  cta,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  meta: ReactNode;
  cta: string;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-5 hover:bg-white transition">
      <div className="flex items-start justify-between gap-3">
        <div className="h-10 w-10 rounded-2xl border border-gray-200 bg-white/70 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">{title}</p>
          <p className="mt-1 text-xs text-gray-600">{description}</p>
          <div className="mt-2">{meta}</div>
        </div>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="mt-4 w-full rounded-xl border border-gray-200 bg-white/70 py-2 text-sm font-semibold text-gray-900 hover:bg-white transition"
      >
        {cta}
      </button>
    </div>
  );
}

function ToastInline({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onClose, 2800);
    return () => window.clearTimeout(t);
  }, [onClose]);

  return (
    <div className="mb-4 rounded-2xl border border-green-200 bg-green-50/60 px-4 py-3 flex items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 h-9 w-9 rounded-xl bg-green-500/10 border border-green-200 flex items-center justify-center">
          <CheckIcon />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Success</p>
          <p className="text-sm text-gray-700">{message}</p>
        </div>
      </div>
      <button type="button" onClick={onClose} className="rounded-xl px-2 py-1 text-sm font-semibold text-gray-700 hover:bg-white transition">
        Close
      </button>
    </div>
  );
}

function FloatingInput({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  inputMode,
  placeholder = " ",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
}) {
  return (
    <div>
      <div className={`relative rounded-2xl border bg-white/70 transition shadow-sm ${error ? "border-red-400 ring-2 ring-red-100" : "border-gray-200 focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20 focus-within:border-[var(--color-primary)]"}`}>
        <input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className="peer w-full bg-transparent px-4 pb-3 pt-5 text-sm text-gray-900 placeholder:text-transparent focus:outline-none"
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 top-4 origin-left -translate-y-1 scale-90 text-xs font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-sm ${error ? "text-red-600" : "text-gray-600 peer-focus:text-gray-900"}`}
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  error,
  rows,
  placeholder = " ",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  rows: number;
  placeholder?: string;
}) {
  return (
    <div>
      <div className={`relative rounded-2xl border bg-white/70 transition shadow-sm ${error ? "border-red-400 ring-2 ring-red-100" : "border-gray-200 focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20 focus-within:border-[var(--color-primary)]"}`}>
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className="peer w-full bg-transparent px-4 pb-3 pt-5 text-sm text-gray-900 placeholder:text-transparent focus:outline-none resize-y"
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 top-4 origin-left -translate-y-1 scale-90 text-xs font-semibold transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-sm ${error ? "text-red-600" : "text-gray-600 peer-focus:text-gray-900"}`}
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function Listbox<T extends string>({
  label,
  value,
  options,
  onChange,
  placeholder,
  error,
}: {
  label: string;
  value: T | "";
  options: { value: T; label: string; hint?: string }[];
  onChange: (value: T) => void;
  placeholder: string;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      // Close the popover when clicking outside the component.
      if (!rootRef.current) return;
      const target = e.target as Node;
      if (!rootRef.current.contains(target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={rootRef}>
      <div className={`relative rounded-2xl border bg-white/70 transition shadow-sm ${error ? "border-red-400 ring-2 ring-red-100" : "border-gray-200 focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20 focus-within:border-[var(--color-primary)]"}`}>
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="w-full text-left px-4 pb-3 pt-5 focus:outline-none"
          aria-expanded={open}
        >
          <span className={`block text-sm ${selected ? "text-gray-900" : "text-gray-500"}`}>
            {selected ? selected.label : placeholder}
          </span>
        </button>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <ChevronIcon />
        </div>
        <span className={`pointer-events-none absolute left-4 top-4 origin-left -translate-y-1 scale-90 text-xs font-semibold transition-all ${error ? "text-red-600" : "text-gray-600"}`}>
          {label}
        </span>

        <div className={`absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition ${open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"}`}>
          <div className="max-h-72 overflow-auto">
            {options.map((o) => {
              const active = o.value === value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 transition ${active ? "bg-[var(--color-primary)]/5" : "hover:bg-gray-50"}`}
                >
                  <p className="text-sm font-semibold text-gray-900">{o.label}</p>
                  {o.hint && <p className="text-xs text-gray-600 mt-0.5">{o.hint}</p>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function OrderProgressView({ tracked }: { tracked: ReturnType<typeof resolveOrderTracking> }) {
  if (!tracked.input) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white/70 p-5">
        <p className="text-sm font-semibold text-gray-900">Enter an order number</p>
        <p className="text-sm text-gray-600 mt-1">We’ll show the current step instantly.</p>
      </div>
    );
  }

  if (!tracked.found && tracked.input.trim().length < 4) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white/70 p-5">
        <p className="text-sm font-semibold text-gray-900">Keep typing…</p>
        <p className="text-sm text-gray-600 mt-1">Use an ID like <span className="font-semibold">{tracked.example}</span>.</p>
      </div>
    );
  }

  if (tracked.status === "cancelled") {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50/60 p-5">
        <p className="text-sm font-semibold text-gray-900">Order cancelled</p>
        <p className="text-sm text-gray-700 mt-1">If this looks wrong, contact support with your order number.</p>
      </div>
    );
  }

  const steps = ["Placed", "Processing", "Shipped", "Delivered"] as const;
  const currentIndex = tracked.stepIndex;
  const barWidthClass = ["w-[5%]", "w-[35%]", "w-[67%]", "w-full"][currentIndex] ?? "w-[5%]";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">{tracked.found ? "Status from your order" : "Estimated status"}</p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold text-gray-900">{tracked.displayId}</span> · {steps[currentIndex]}
          </p>
        </div>
        <span className="text-xs font-semibold rounded-full border border-gray-200 bg-white/70 px-2 py-1 text-gray-700">
          {tracked.statusLabel}
        </span>
      </div>

      <div className="mt-4">
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div className={`h-full bg-[var(--color-primary)] transition-all duration-500 ${barWidthClass}`} />
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {steps.map((s, idx) => {
            const isCurrent = idx === currentIndex;
            const isDone = idx < currentIndex;
            return (
              <div key={s} className="text-center">
                <div className="flex items-center justify-center">
                  <span
                    className={`h-3 w-3 rounded-full border ${
                      isCurrent
                        ? "bg-[var(--color-primary)] border-[var(--color-primary)] pulse-dot"
                        : isDone
                          ? "bg-gray-900 border-gray-900"
                          : "bg-white border-gray-300"
                    }`}
                  />
                </div>
                <p className={`mt-2 text-xs font-semibold ${isCurrent ? "text-gray-900" : "text-gray-600"}`}>{s}</p>
              </div>
            );
          })}
        </div>

        {tracked.status === "return_requested" && (
          <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50/60 px-4 py-3">
            <p className="text-sm font-semibold text-gray-900">Return requested</p>
            <p className="text-sm text-gray-700 mt-1">We’ll email the next steps and a prepaid label if eligible.</p>
          </div>
        )}
        {tracked.status === "replacement_requested" && (
          <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50/60 px-4 py-3">
            <p className="text-sm font-semibold text-gray-900">Replacement requested</p>
            <p className="text-sm text-gray-700 mt-1">We’re preparing your replacement and will update tracking soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function resolveOrderTracking(input: string, orders: Order[]) {
  const trimmed = input.trim();
  const example = orders[0]?.id ?? "ORD-1042";
  if (!trimmed) {
    return {
      input: "",
      found: false,
      displayId: "",
      status: "pending" as Order["status"],
      stepIndex: 0,
      statusLabel: "Pending",
      example,
    };
  }

  const exact = orders.find((o) => o.id.toLowerCase() === trimmed.toLowerCase());
  const status = exact?.status ?? estimateStatus(trimmed);
  const stepIndex = statusToStepIndex(status);
  return {
    input: trimmed,
    found: Boolean(exact),
    displayId: exact?.id ?? trimmed,
    status,
    stepIndex,
    statusLabel: labelForStatus(status),
    example,
  };
}

function estimateStatus(seed: string): Order["status"] {
  // Deterministic status based on input (demo-only).
  const n = Math.abs(hashString(seed)) % 100;
  if (n < 6) return "pending";
  if (n < 40) return "processing";
  if (n < 80) return "shipped";
  if (n < 94) return "delivered";
  return "return_requested";
}

function statusToStepIndex(status: Order["status"]) {
  switch (status) {
    case "pending":
      return 0;
    case "processing":
      return 1;
    case "shipped":
      return 2;
    case "delivered":
      return 3;
    case "return_requested":
    case "replacement_requested":
      return 2;
    case "cancelled":
      return 0;
    default:
      return 0;
  }
}

function labelForStatus(status: Order["status"]) {
  switch (status) {
    case "pending":
      return "Pending";
    case "processing":
      return "Processing";
    case "shipped":
      return "Shipped";
    case "delivered":
      return "Delivered";
    case "cancelled":
      return "Cancelled";
    case "return_requested":
      return "Return requested";
    case "replacement_requested":
      return "Replacement requested";
    default:
      return status;
  }
}

function labelForCategory(cat: HelpCategory) {
  return CATEGORIES.find((c) => c.key === cat)?.label ?? "";
}

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
}

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  const kb = n / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(1)} MB`;
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-5 w-5 text-gray-500 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function OrdersIcon() {
  return (
    <svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 8h10M7 12h6m-7 8l3-3h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.9 1.37l.6 1.8a2 2 0 01-.46 2.03l-1.2 1.2a16 16 0 006.6 6.6l1.2-1.2a2 2 0 012.03-.46l1.8.6A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 4V3a2 2 0 012-2z" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 16V6m0 0l-3 3m3-3l3 3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 18a2 2 0 002 2h12a2 2 0 002-2" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="h-5 w-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 12l16-8-6 16-2.5-6L4 12z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
