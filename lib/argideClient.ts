"use client";

type ArgideCommand = "identify" | "resetUser";

type ArgideIdentifyPayload = {
  token: string;
  name?: string;
};

function safeArgideCall(command: ArgideCommand, payload?: ArgideIdentifyPayload) {
  if (typeof window === "undefined") return;
  const fn = window.argide;
  if (typeof fn !== "function") return;
  fn(command, payload);
}

export function argideIdentify(payload: ArgideIdentifyPayload) {
  safeArgideCall("identify", payload);
}

export function argideResetUser() {
  safeArgideCall("resetUser");
}
