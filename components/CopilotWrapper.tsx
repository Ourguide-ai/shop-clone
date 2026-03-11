"use client";

import { CrowCopilot } from "@ourguide/ui";


export function CopilotWrapper() {
  return (
    <CrowCopilot
      productId="prod_74024eae-02e6-4942-8377-f89b7774b164"
      apiUrl="http://localhost:3000"
      agentName="Assistant"
      position="right"
      width={400}
      defaultOpen={true}
    />
  );
}
