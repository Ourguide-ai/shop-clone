export {};

declare global {
  interface Window {
    argide?: (command: string, payload?: unknown) => void;
  }
}
