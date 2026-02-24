"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { apiGet } from "@/lib/api";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    async function search() {
      setLoading(true);
      try {
        const data = await apiGet<{ products: Product[] }>(
          `/api/products?q=${encodeURIComponent(query)}`
        );
        setResults(data.products);
      } catch (err) {
        console.error("Search failed:", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    search();
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {query.trim() ? (
        <>
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Search Results
            </h1>
            {!loading && (
              <p className="text-sm text-gray-500">
                {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
              </p>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-16 w-16 text-gray-300 mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">No products found</h2>
              <p className="text-gray-500 mb-6">
                Try a different search term or browse our categories.
              </p>
              <Link
                href="/"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Search Products</h1>
          <p className="text-gray-500">Use the search bar above to find products.</p>
        </div>
      )}
    </div>
  );
}
