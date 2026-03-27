"use client";

import { ArgideWidget } from "@argide/ui";
import "@argide/ui/styles.css";

export function ArgideWidgetClient() {
  return (
    <ArgideWidget
      productId="prod_ba70c68d-5282-4da1-ba99-c46daddf4fa3"
      apiUrl="http://localhost:3000"
      agentName="Assistant"
    />
  );
}
