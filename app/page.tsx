"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import CategoryFilter from "@/components/CategoryFilter";
import { apiGet } from "@/lib/api";

const DEFAULT_CATEGORIES = ["All", "Electronics", "Clothing", "Home", "Books"];

export default function Home() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "All";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(
    DEFAULT_CATEGORIES.includes(categoryParam) ? categoryParam : "All"
  );

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
    const next = DEFAULT_CATEGORIES.includes(categoryParam) ? categoryParam : "All";
    setSelectedCategory(next);
    fetchProducts(next);
  }, [categoryParam, fetchProducts]);

  function handleCategorySelect(category: string) {
    setSelectedCategory(category);
    fetchProducts(category);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Shop All Products
        </h1>
        <CategoryFilter
          categories={DEFAULT_CATEGORIES}
          selected={selectedCategory}
          onSelect={handleCategorySelect}
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <p className="text-center text-gray-500 mt-12">
              No products found in this category.
            </p>
          )}
        </>
      )}
    </div>
  );
}
