"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { CategoryMeta } from "@/lib/categories";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

type SortOption = "newest" | "price-asc" | "price-desc" | "top-rated" | "popularity";

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

        {/* Sort & Filter controls */}
        <div className="flex flex-wrap items-end gap-4 mb-6">
          <div className="category-sort">
            <label className="category-sort__label" htmlFor="sort-select">
              Sort by
            </label>
            <select
              id="sort-select"
              className="category-sort__select"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="top-rated">Top Rated</option>
              <option value="popularity">Most Popular</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <input
              type="number"
              placeholder="Min $"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="category-sort__select w-24"
            />
            <span className="text-sm text-gray-400">—</span>
            <input
              type="number"
              placeholder="Max $"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="category-sort__select w-24"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Rating</span>
            {[0, 2, 3, 4].map((r) => (
              <button
                key={r}
                onClick={() => setMinRating(r)}
                className={`btn btn--sm ${minRating === r ? "btn--info" : "btn--outline"}`}
              >
                {r === 0 ? "Any" : `${r}+`}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            No products match your filters.
          </p>
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
