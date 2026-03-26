"use client";

import type { ReactNode } from "react";
import { ArgideProvider } from "@argide/ui";
import { useOurguideTools } from "@/components/OurguideToolsRegistrar";

/**
 * Wraps ArgideProvider and forwards the live tools map built from React context.
 * Must be rendered inside AuthProvider and AppProvider.
 */
export function ArgideProviderWithTools({
  children,
  productId,
  apiUrl,
}: {
  children: ReactNode;
  productId: string;
  apiUrl: string;
}) {
  const tools = useOurguideTools();

  return (
    <ArgideProvider productId={productId} apiUrl={apiUrl} tools={tools}>
      {children}
    </ArgideProvider>
  );
}
