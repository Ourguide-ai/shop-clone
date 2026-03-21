import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-plus-jakarta-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-source-serif-4)', 'Source Serif 4', 'Georgia', 'serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-plus-jakarta-sans)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          light: "var(--color-primary-light)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          alt: "var(--color-surface-alt)",
        },
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        "out-back": "var(--ease-out-back)",
        smooth: "var(--ease-in-out-smooth)",
      },
    },
  },
  plugins: [],
};
export default config;
