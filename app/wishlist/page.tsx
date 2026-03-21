"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import { Product } from "@/lib/types";
import RequireAuth from "@/components/RequireAuth";
import Toast from "@/components/Toast";

export default function WishlistPage() {
  return (
    <RequireAuth>
      <WishlistContent />
    </RequireAuth>
  );
}

function WishlistContent() {
  const { wishlist, removeFromWishlist, addToCart } = useApp();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = useCallback(
    (product: Product) => {
      if (!isAuthenticated) {
        router.push("/signin");
        return;
      }
      addToCart(product);
      setToastMessage(`${product.title} added to cart`);
      setToastVisible(true);
    },
    [addToCart, isAuthenticated, router]
  );

  if (wishlist.length === 0) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-24 text-center">
        <svg
          className="h-16 w-16 text-gray-300 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h2 className="mt-4 text-xl font-heading font-semibold text-gray-900">Your wishlist is empty</h2>
        <p className="mt-2 text-sm text-gray-500">Save products you love for later.</p>
        <Link href="/" className="mt-6 inline-flex btn btn--primary">Start Browsing</Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
      <h1 className="text-2xl font-heading font-bold text-gray-900 mb-6">
        Your Wishlist ({wishlist.length} {wishlist.length === 1 ? "item" : "items"})
      </h1>

      <div className="space-y-4">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <Link
              href={`/product/${product.id}`}
              className="relative w-full sm:w-20 aspect-square sm:aspect-square flex-shrink-0 bg-gray-100 rounded-md overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 639px) 100vw, 80px"
                className="object-cover"
              />
            </Link>

            <div className="min-w-0 flex-1">
              <Link
                href={`/product/${product.id}`}
                className="text-sm font-medium text-gray-900 hover:text-[var(--color-primary)] hover:underline line-clamp-1"
              >
                {product.title}
              </Link>
              <p className="text-xs text-gray-500 mt-0.5">{product.category}</p>
              <p className="text-base font-bold text-gray-900 mt-1">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-row gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn--primary btn--sm"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
