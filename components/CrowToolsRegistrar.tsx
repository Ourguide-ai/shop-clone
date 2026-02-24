"use client";

import { useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { apiPost } from "@/lib/api";

declare global {
  interface Window {
    crow: (action: string, payload?: unknown) => void;
  }
}

export function CrowToolsRegistrar() {
  const { items, placeOrder, cartTotal } = useApp();
  useEffect(() => {
    const register = () => {
      if (typeof window.crow === "function") {
        console.log("[CrowTools] Registering tools. Cart items:", items.length, "| Total:", cartTotal);
        window.crow("registerTools", {
          buyAllCartProducts: async () => {
            console.log("[CrowTools] buyAllCartProducts called. Items:", items.length, "| Total:", cartTotal);

            if (items.length === 0) {
              console.warn("[CrowTools] buyAllCartProducts → cart is empty");
              return { status: "error", error: "Your cart is empty." };
            }

            let orderId: string;
            try {
              orderId = await placeOrder(items, cartTotal);
              console.log("[CrowTools] Order placed. orderId:", orderId);
            } catch (err) {
              console.error("[CrowTools] placeOrder failed:", err);
              return { status: "error", error: "Failed to place order." };
            }

            try {
              const payment = await apiPost<{ success: boolean }>(
                "/api/payment/process",
                { orderId, amount: cartTotal },
              );
              console.log("[CrowTools] Payment response:", payment);
              if (!payment.success) {
                console.warn("[CrowTools] Payment not successful:", payment);
                return { status: "error", error: "Payment failed." };
              }
            } catch (err) {
              console.error("[CrowTools] Payment request failed:", err);
              return { status: "error", error: "Payment request failed." };
            }

            const result = {
              status: "success",
              order_id: orderId,
              items_purchased: items.length,
              total: cartTotal,
            };
            console.log("[CrowTools] buyAllCartProducts succeeded:", result);
            return result;
          },
        });
        console.log("[CrowTools] Tools registered successfully.");
      } else {
        console.log("[CrowTools] window.crow not ready, retrying in 150ms...");
        setTimeout(register, 2000);
      }
    };

    register();
  }, [items, placeOrder, cartTotal]);

  return null;
}
