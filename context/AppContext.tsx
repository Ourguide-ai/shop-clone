"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { Product, CartItem, Order, Review, AppliedCoupon } from "@/lib/types";
import { useAuth } from "@/context/AuthContext";
import { apiGet, apiPost, apiPut, apiDelete, apiPatch } from "@/lib/api";

interface AppContextType {
  // Cart
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;

  // Coupons
  appliedCoupon: AppliedCoupon | null;
  applyCoupon: (code: string) => Promise<{ success: boolean; error?: string }>;
  removeCoupon: () => void;
  discountedTotal: number;

  // Orders
  orders: Order[];
  placeOrder: (items: CartItem[], total: number) => Promise<string>;
  updateOrderStatus: (orderId: string, action: "cancel" | "return" | "replace") => Promise<{ success: boolean; error?: string }>;

  // Wishlist
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;

  // Reviews
  reviews: Review[];
  addReview: (review: Omit<Review, "id" | "date">) => void;
  getProductReviews: (productId: number) => Review[];
  fetchProductReviews: (productId: number) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuth();

  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Fetch user data from API when user changes
  useEffect(() => {
    if (!isAuthenticated) {
      setItems([]);
      setOrders([]);
      setWishlist([]);
      return;
    }

    async function fetchUserData() {
      try {
        const [cartData, ordersData, wishlistData] = await Promise.all([
          apiGet<{ items: CartItem[] }>("/api/cart"),
          apiGet<{ orders: Order[] }>("/api/orders"),
          apiGet<{ products: Product[] }>("/api/wishlist"),
        ]);
        setItems(cartData.items);
        setOrders(ordersData.orders);
        setWishlist(wishlistData.products);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    }

    fetchUserData();
  }, [isAuthenticated, user?.id]);

  const addToCart = useCallback(
    (product: Product, quantity: number = 1) => {
      // Optimistic update
      setItems((prev) => {
        const existing = prev.find((item) => item.product.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prev, { product, quantity }];
      });

      // Sync with API
      apiPost<{ items: CartItem[] }>("/api/cart", {
        productId: product.id,
        quantity,
      }).then((data) => setItems(data.items))
        .catch(console.error);
    },
    []
  );

  const removeFromCart = useCallback((productId: number) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));

    apiDelete<{ items: CartItem[] }>(`/api/cart/${productId}`)
      .then((data) => setItems(data.items))
      .catch(console.error);
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      apiDelete<{ items: CartItem[] }>(`/api/cart/${productId}`)
        .then((data) => setItems(data.items))
        .catch(console.error);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );

    apiPut<{ items: CartItem[] }>("/api/cart", { productId, quantity })
      .then((data) => setItems(data.items))
      .catch(console.error);
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    apiDelete<{ items: CartItem[] }>("/api/cart").catch(console.error);
  }, []);

  const cartTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const cartCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  // Clear coupon when cart items change (discount may become invalid)
  useEffect(() => {
    setAppliedCoupon(null);
  }, [items.length]);

  const applyCoupon = useCallback(
    async (code: string): Promise<{ success: boolean; error?: string }> => {
      try {
        const data = await apiPost<{
          valid: boolean;
          code: string;
          discountType: "percentage" | "fixed";
          discountValue: number;
          discountAmount: number;
          error?: string;
        }>("/api/coupons/validate", { code, cartTotal });

        if (!data.valid) {
          return { success: false, error: data.error || "Invalid coupon" };
        }

        setAppliedCoupon({
          code: data.code,
          discountType: data.discountType,
          discountValue: data.discountValue,
          discountAmount: data.discountAmount,
        });
        return { success: true };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to apply coupon";
        return { success: false, error: message };
      }
    },
    [cartTotal]
  );

  const removeCoupon = useCallback(() => {
    setAppliedCoupon(null);
  }, []);

  const discountedTotal = useMemo(
    () => Math.max(0, cartTotal - (appliedCoupon?.discountAmount ?? 0)),
    [cartTotal, appliedCoupon]
  );

  const placeOrder = useCallback(
    async (orderItems: CartItem[], total: number): Promise<string> => {
      try {
        const data = await apiPost<{ order: Order }>("/api/orders", {
          items: orderItems,
          total,
          couponCode: appliedCoupon?.code || undefined,
        });
        setOrders((prev) => [data.order, ...prev]);
        setItems([]);
        setAppliedCoupon(null);
        return data.order.id;
      } catch (err) {
        console.error("Failed to place order:", err);
        throw err;
      }
    },
    [appliedCoupon]
  );

  const updateOrderStatus = useCallback(
    async (orderId: string, action: "cancel" | "return" | "replace"): Promise<{ success: boolean; error?: string }> => {
      try {
        const data = await apiPatch<{ order: Order }>(`/api/orders/${orderId}`, { action });
        setOrders((prev) =>
          prev.map((o) => (o.id === orderId ? data.order : o))
        );
        return { success: true };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Update failed";
        return { success: false, error: message };
      }
    },
    []
  );

  // Wishlist
  const addToWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });

    apiPost<{ products: Product[] }>("/api/wishlist", { productId: product.id })
      .then((data) => setWishlist(data.products))
      .catch(console.error);
  }, []);

  const removeFromWishlist = useCallback((productId: number) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));

    apiDelete<{ products: Product[] }>(`/api/wishlist/${productId}`)
      .then((data) => setWishlist(data.products))
      .catch(console.error);
  }, []);

  const isInWishlist = useCallback(
    (productId: number) => wishlist.some((p) => p.id === productId),
    [wishlist]
  );

  // Reviews
  const fetchProductReviews = useCallback(async (productId: number) => {
    try {
      const data = await apiGet<{ reviews: Review[] }>(`/api/reviews/${productId}`);
      setReviews((prev) => {
        const filtered = prev.filter((r) => r.productId !== productId);
        return [...filtered, ...data.reviews];
      });
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  }, []);

  const addReview = useCallback((review: Omit<Review, "id" | "date">) => {
    apiPost<{ review: Review }>("/api/reviews", {
      productId: review.productId,
      rating: review.rating,
      title: review.title,
      body: review.body,
    })
      .then((data) => {
        setReviews((prev) => [data.review, ...prev]);
      })
      .catch(console.error);
  }, []);

  const getProductReviews = useCallback(
    (productId: number) => reviews.filter((r) => r.productId === productId),
    [reviews]
  );

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount,
      appliedCoupon,
      applyCoupon,
      removeCoupon,
      discountedTotal,
      orders,
      placeOrder,
      updateOrderStatus,
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      reviews,
      addReview,
      getProductReviews,
      fetchProductReviews,
    }),
    [items, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount, appliedCoupon, applyCoupon, removeCoupon, discountedTotal, orders, placeOrder, updateOrderStatus, wishlist, addToWishlist, removeFromWishlist, isInWishlist, reviews, addReview, getProductReviews, fetchProductReviews]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
