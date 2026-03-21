"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SignInPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const next: Record<string, string> = {};

    if (!email.trim()) {
      next.email = "Enter your email";
    }
    if (!password) {
      next.password = "Enter your password";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const result = await signIn(email, password);
    setSubmitting(false);

    if (result.success) {
      router.push("/");
    } else {
      setErrors({ form: result.error ?? "Sign in failed" });
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="block text-center text-2xl font-bold font-heading text-gray-900 mb-8">
          ShopClone
        </Link>

        {/* Card */}
        <div className="shadow-lg rounded-xl border border-[var(--color-border)] p-8">
          <h1 className="text-xl font-semibold font-heading text-gray-900 mb-6">
            Sign In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {errors.form && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                {errors.form}
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email || errors.form) setErrors((prev) => ({ ...prev, email: "", form: "" }));
                }}
                className={`input${errors.email ? " input--error" : ""}`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password || errors.form) setErrors((prev) => ({ ...prev, password: "", form: "" }));
                }}
                className={`input${errors.password ? " input--error" : ""}`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-xs text-red-600 mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`btn btn--primary btn--lg w-full${submitting ? " btn--loading" : ""}`}
            >
              {submitting && <span className="btn__spinner" />}
              {submitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="border-t border-gray-200 mt-6 pt-4">
            <p className="text-sm text-gray-600 text-center">
              New here?{" "}
              <Link href="/signup" className="text-[var(--color-primary)] hover:underline hover:text-[var(--color-primary-hover)] font-medium">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
