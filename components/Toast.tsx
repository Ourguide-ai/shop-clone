"use client";

import { useEffect, useState, useCallback } from "react";

type ToastVariant = "success" | "error" | "warning" | "info";

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
  variant?: ToastVariant;
  duration?: number;
}

const ICONS: Record<ToastVariant, JSX.Element> = {
  success: (
    <svg className="toast__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: (
    <svg className="toast__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  warning: (
    <svg className="toast__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3l9.66 16.59A1 1 0 0120.66 21H3.34a1 1 0 01-.86-1.41L12 3z" />
    </svg>
  ),
  info: (
    <svg className="toast__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  ),
};

export default function Toast({
  message,
  visible,
  onClose,
  variant = "success",
  duration = 3000,
}: ToastProps) {
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      setExiting(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!visible) return;
    setExiting(false);
    const timer = setTimeout(dismiss, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, dismiss]);

  if (!visible) return null;

  return (
    <div
      className={`toast toast--${variant} ${exiting ? "toast--exiting" : ""}`}
      role="alert"
      aria-live="polite"
    >
      <div className="toast__body">
        {ICONS[variant]}
        <span className="toast__message">{message}</span>
        <button
          type="button"
          className="toast__close"
          onClick={dismiss}
          aria-label="Dismiss"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div
        className="toast__progress"
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
}
