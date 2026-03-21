"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { CategoryMeta } from "@/lib/categories";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

type SortOption = "newest" | "price-asc" | "price-desc" | "top-rated" | "popularity";

const SORT_OPTIONS: { value: SortOption; label: string; icon: string }[] = [
  { value: "newest", label: "Newest", icon: "✦" },
  { value: "price-asc", label: "Price ↑", icon: "$" },
  { value: "price-desc", label: "Price ↓", icon: "$" },
  { value: "top-rated", label: "Top Rated", icon: "★" },
  { value: "popularity", label: "Popular", icon: "♥" },
];

const RATING_OPTIONS = [
  { value: 0, label: "All", stars: 0 },
  { value: 2, label: "2+", stars: 2 },
  { value: 3, label: "3+", stars: 3 },
  { value: 4, label: "4+", stars: 4 },
];

function StarIcons({ count }: { count: number }) {
  return (
    <span className="cat-filter-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="cat-filter-stars__icon">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

interface Props {
  category: CategoryMeta;
  products: Product[];
  totalCount: number;
}

export default function CategoryPageContent({ category, products, totalCount }: Props) {
  const [sort, setSort] = useState<SortOption>("newest");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const hasActiveFilters = minPrice !== "" || maxPrice !== "" || minRating > 0;

  const clearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setMinRating(0);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    if (min > 0 || max < Infinity) {
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (minRating > 0) {
      result = result.filter((p) => (p.avgRating ?? 0) >= minRating);
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "top-rated":
        result.sort((a, b) => (b.avgRating ?? 0) - (a.avgRating ?? 0));
        break;
      case "popularity":
        result.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
        break;
      default:
        break;
    }

    return result;
  }, [products, sort, minPrice, maxPrice, minRating]);

  const activeFilterCount = (minPrice ? 1 : 0) + (maxPrice ? 1 : 0) + (minRating > 0 ? 1 : 0);

  return (
    <div>
      {/* Hero */}
      <section className="category-hero">
        <h1 className="category-hero__title">{category.name}</h1>
        <p className="category-hero__description">{category.description}</p>
        <p className="category-hero__count">
          {totalCount} product{totalCount !== 1 ? "s" : ""}
        </p>
      </section>

      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-6">
        {/* Breadcrumbs */}
        <nav className="category-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="category-breadcrumb__link">
            Home
          </Link>
          <span className="category-breadcrumb__separator">/</span>
          <span className="category-breadcrumb__current">{category.name}</span>
        </nav>

        {/* ── Filter Bar ── */}
        <div className="cat-filter-bar">
          {/* Top row: sort pills + filter toggle + result count */}
          <div className="cat-filter-bar__top">
            <div className="cat-filter-bar__sort">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSort(opt.value)}
                  className={`cat-filter-pill ${sort === opt.value ? "cat-filter-pill--active" : ""}`}
                >
                  <span className="cat-filter-pill__icon">{opt.icon}</span>
                  <span className="cat-filter-pill__label">{opt.label}</span>
                </button>
              ))}
            </div>

            <div className="cat-filter-bar__actions">
              <span className="cat-filter-bar__count">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </span>

              <button
                onClick={() => setFiltersOpen((v) => !v)}
                className={`cat-filter-toggle ${filtersOpen ? "cat-filter-toggle--open" : ""}`}
                aria-expanded={filtersOpen}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="cat-filter-toggle__icon">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="cat-filter-toggle__badge">{activeFilterCount}</span>
                )}
              </button>
            </div>
          </div>

          {/* Expandable filter panel */}
          <div className={`cat-filter-panel ${filtersOpen ? "cat-filter-panel--open" : ""}`}>
            <div className="cat-filter-panel__inner">
              {/* Price Range */}
              <div className="cat-filter-group">
                <span className="cat-filter-group__label">Price Range</span>
                <div className="cat-filter-group__row">
                  <div className="cat-filter-input-wrap">
                    <span className="cat-filter-input-wrap__prefix">$</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="cat-filter-input"
                    />
                  </div>
                  <span className="cat-filter-group__divider" />
                  <div className="cat-filter-input-wrap">
                    <span className="cat-filter-input-wrap__prefix">$</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="cat-filter-input"
                    />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="cat-filter-group">
                <span className="cat-filter-group__label">Minimum Rating</span>
                <div className="cat-filter-rating">
                  {RATING_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setMinRating(opt.value)}
                      className={`cat-filter-rating__btn ${minRating === opt.value ? "cat-filter-rating__btn--active" : ""}`}
                    >
                      {opt.stars > 0 ? <StarIcons count={opt.stars} /> : null}
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear */}
              {hasActiveFilters && (
                <button onClick={clearFilters} className="cat-filter-clear">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="cat-filter-clear__icon">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="cat-empty">
            <div className="cat-empty__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <p className="cat-empty__title">No products found</p>
            <p className="cat-empty__text">Try adjusting your filters to find what you&apos;re looking for.</p>
            <button onClick={clearFilters} className="cat-empty__btn">
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
