"use client";

import { useMemo, useState } from "react";

type RatingValue = 0 | 1 | 2 | 3 | 4 | 5;

export type ProductFiltersState = {
  category: string;
  priceMin: number;
  priceMax: number;
  minRating: RatingValue;
};

type Props = {
  categories: string[];
  state: ProductFiltersState;
  priceBounds: { min: number; max: number };
  counts?: {
    total: number;
    shown: number;
  };
  onChange: (next: ProductFiltersState) => void;
  onReset: () => void;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function formatMoney(n: number) {
  return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

function Stars({ value }: { value: number }) {
  const rounded = Math.round(value);
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const on = i + 1 <= rounded;
        return (
          <svg
            key={i}
            className={`h-4 w-4 ${on ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            fill={on ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        );
      })}
    </span>
  );
}

function Section({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border-t border-gray-200 pt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="text-sm font-heading font-semibold text-gray-900">{title}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={
          open
            ? "mt-3 max-h-[520px] opacity-100 transition-[max-height,opacity] duration-200 ease-out"
            : "mt-3 max-h-0 opacity-0 overflow-hidden transition-[max-height,opacity] duration-200 ease-out"
        }
      >
        {children}
      </div>
    </section>
  );
}

export default function ProductFilters({
  categories,
  state,
  priceBounds,
  counts,
  onChange,
  onReset,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const normalizedBounds = useMemo(() => {
    const min = Number.isFinite(priceBounds.min) ? priceBounds.min : 0;
    const max = Number.isFinite(priceBounds.max) ? priceBounds.max : 0;
    return {
      min: Math.min(min, max),
      max: Math.max(min, max),
    };
  }, [priceBounds.max, priceBounds.min]);

  const hasActive =
    state.category !== "All" ||
    state.minRating !== 0 ||
    state.priceMin !== normalizedBounds.min ||
    state.priceMax !== normalizedBounds.max;

  const wrapperClass =
    "rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl shadow-sm";

  return (
    <div className={wrapperClass}>
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-heading font-semibold text-gray-900">Filters</h2>
            {counts && (
              <span className="text-xs text-gray-500">
                {counts.shown} of {counts.total}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Narrow results by category, price, and rating.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {hasActive && (
            <button
              type="button"
              onClick={onReset}
              className="hidden sm:inline-flex rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex lg:hidden rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div
        className={
          mobileOpen
            ? "px-4 pb-4 lg:block"
            : "hidden px-4 pb-4 lg:block"
        }
      >
        <div className="animate-slide-up">
          <div className="flex items-center justify-between gap-2">
            {hasActive && (
              <button
                type="button"
                onClick={onReset}
                className="sm:hidden w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>

          <Section title="Category" defaultOpen>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = state.category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onChange({ ...state, category: cat })}
                    className={`rounded-full px-3.5 py-2 text-xs font-heading font-semibold transition-all duration-200 ${
                      active
                        ? "bg-[var(--color-primary)] text-white shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </Section>

          <Section title="Price Range" defaultOpen>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3 text-xs text-gray-600">
                <span>
                  ${formatMoney(state.priceMin)} – ${formatMoney(state.priceMax)}
                </span>
                <span>
                  ${formatMoney(normalizedBounds.min)} – ${formatMoney(normalizedBounds.max)}
                </span>
              </div>

              {/* Dual-range slider */}
              <div className="relative h-8">
                <input
                  type="range"
                  min={normalizedBounds.min}
                  max={normalizedBounds.max}
                  value={state.priceMin}
                  onChange={(e) => {
                    const nextMin = clamp(Number(e.target.value), normalizedBounds.min, state.priceMax);
                    onChange({ ...state, priceMin: nextMin });
                  }}
                  className="absolute inset-0 w-full accent-[var(--color-primary)]"
                />
                <input
                  type="range"
                  min={normalizedBounds.min}
                  max={normalizedBounds.max}
                  value={state.priceMax}
                  onChange={(e) => {
                    const nextMax = clamp(Number(e.target.value), state.priceMin, normalizedBounds.max);
                    onChange({ ...state, priceMax: nextMax });
                  }}
                  className="absolute inset-0 w-full accent-[var(--color-primary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="block text-xs font-medium text-gray-700 mb-1">Min</span>
                  <input
                    inputMode="numeric"
                    type="number"
                    value={state.priceMin}
                    min={normalizedBounds.min}
                    max={state.priceMax}
                    onChange={(e) => {
                      const nextMin = clamp(Number(e.target.value || 0), normalizedBounds.min, state.priceMax);
                      onChange({ ...state, priceMin: nextMin });
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-medium text-gray-700 mb-1">Max</span>
                  <input
                    inputMode="numeric"
                    type="number"
                    value={state.priceMax}
                    min={state.priceMin}
                    max={normalizedBounds.max}
                    onChange={(e) => {
                      const nextMax = clamp(Number(e.target.value || 0), state.priceMin, normalizedBounds.max);
                      onChange({ ...state, priceMax: nextMax });
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </label>
              </div>
            </div>
          </Section>

          <Section title="Minimum Rating" defaultOpen>
            <div className="grid grid-cols-2 gap-2">
              {([
                { label: "Any", value: 0 as const, stars: 0 },
                { label: "4+", value: 4 as const, stars: 4 },
                { label: "3+", value: 3 as const, stars: 3 },
                { label: "2+", value: 2 as const, stars: 2 },
              ] as const).map((opt) => {
                const active = state.minRating === opt.value;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => onChange({ ...state, minRating: opt.value })}
                    className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-xs font-heading font-semibold transition-all duration-200 ${
                      active
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {opt.stars > 0 ? <Stars value={opt.stars} /> : <span className="text-gray-400">—</span>}
                  </button>
                );
              })}
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Rating is based on the average of product reviews.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
