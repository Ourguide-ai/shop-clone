"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import ProductFilters, { ProductFiltersState } from "@/components/ProductFilters";
import ScrollReveal from "@/components/ScrollReveal";
import { apiGet } from "@/lib/api";

const DEFAULT_CATEGORIES = ["All", "Electronics", "Clothing", "Home", "Books"];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "All";

  const initialCategory = DEFAULT_CATEGORIES.includes(categoryParam) ? categoryParam : "All";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<ProductFiltersState>({
    category: initialCategory,
    priceMin: 0,
    priceMax: 0,
    minRating: 0,
  });

  const fetchProducts = useCallback(async (category: string) => {
    setLoading(true);
    try {
      const params = category !== "All" ? `?category=${encodeURIComponent(category)}` : "";
      const data = await apiGet<{ products: Product[] }>(`/api/products${params}`);
      setProducts(data.products);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const nextCategory = DEFAULT_CATEGORIES.includes(categoryParam) ? categoryParam : "All";
    setFilters((prev) => ({ ...prev, category: nextCategory, priceMin: 0, priceMax: 0 }));
    fetchProducts(nextCategory);
  }, [categoryParam, fetchProducts]);

  const priceBounds = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 0 };
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for (const p of products) {
      min = Math.min(min, p.price);
      max = Math.max(max, p.price);
    }
    return { min: Math.floor(min), max: Math.ceil(max) };
  }, [products]);

  useEffect(() => {
    if (products.length === 0) return;
    setFilters((prev) => {
      const nextMin = prev.priceMin === 0 ? priceBounds.min : Math.max(priceBounds.min, prev.priceMin);
      const nextMax = prev.priceMax === 0 ? priceBounds.max : Math.min(priceBounds.max, prev.priceMax);
      return {
        ...prev,
        priceMin: Math.min(nextMin, nextMax),
        priceMax: Math.max(nextMin, nextMax),
      };
    });
  }, [priceBounds.max, priceBounds.min, products.length]);

  const shownProducts = useMemo(() => {
    if (loading) return [] as Product[];
    const effectiveMin = filters.priceMin === 0 ? priceBounds.min : filters.priceMin;
    const effectiveMax = filters.priceMax === 0 ? priceBounds.max : filters.priceMax;
    return products.filter((p) => {
      const priceOk = p.price >= effectiveMin && p.price <= effectiveMax;
      const ratingOk = filters.minRating === 0 ? true : (p.avgRating ?? 0) >= filters.minRating;
      return priceOk && ratingOk;
    });
  }, [filters.minRating, filters.priceMax, filters.priceMin, loading, priceBounds.max, priceBounds.min, products]);

  function pushCategory(nextCategory: string) {
    if (nextCategory !== "All") {
      router.push(`/category/${nextCategory.toLowerCase()}`);
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    const qs = params.toString();
    router.push(qs ? `/?${qs}` : "/");
  }

  function handleFiltersChange(next: ProductFiltersState) {
    if (next.category !== filters.category) {
      pushCategory(next.category);
      return;
    }
    setFilters(next);
  }

  function handleReset() {
    pushCategory("All");
    setFilters({ category: "All", priceMin: priceBounds.min, priceMax: priceBounds.max, minRating: 0 });
  }

  return (
    <>
    <div className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 2xl:px-12">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-[var(--color-primary)]/3 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-gray-900 tracking-tight leading-[1.1]">Discover What&apos;s Next.</h1>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-xl leading-relaxed">Curated products from brands you love. Browse, compare, and find exactly what you need.</p>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <Link href="#products" className="mt-8 inline-flex items-center gap-2 btn btn--primary btn--lg">Browse Products <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></Link>
        </ScrollReveal>
      </div>
    </div>

    <div id="products" className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-gray-900">Shop All Products</h1>
          {!loading && (
            <p className="text-sm text-gray-500 mt-1">
              Showing {shownProducts.length} of {products.length}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-6 lg:gap-8 items-start">
        <aside className="lg:sticky lg:top-20">
          <ProductFilters
            categories={DEFAULT_CATEGORIES}
            state={{
              ...filters,
              priceMin: filters.priceMin === 0 ? priceBounds.min : filters.priceMin,
              priceMax: filters.priceMax === 0 ? priceBounds.max : filters.priceMax,
            }}
            priceBounds={priceBounds}
            counts={!loading ? { total: products.length, shown: shownProducts.length } : undefined}
            onChange={handleFiltersChange}
            onReset={handleReset}
          />
        </aside>

        <section>
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : shownProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
              {shownProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl p-10 text-center">
              <h2 className="text-lg font-semibold text-gray-900">No matches</h2>
              <p className="text-sm text-gray-500 mt-2">Try widening your filters.</p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-950 transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
    </>
  );
}
