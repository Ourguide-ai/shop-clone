import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/AppContext";
import { ArgideToolsRegistrar } from "@/components/ArgideToolsRegistrar";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif-4",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "eBay",
    template: "%s | eBay",
  },
  description: "Your one-stop online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${sourceSerif4.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <AuthProvider>
          <AppProvider>
            <Navbar />
            {children}
            <Footer />
            <ArgideToolsRegistrar />
          </AppProvider>
        </AuthProvider>
        <script>window.argide = window.argide || [];</script>
        <script
          src="https://dashboard.argide.ai/argide-b2b.iife.js"
          data-product-id="prod_ba70c68d-5282-4da1-ba99-c46daddf4fa3"
          data-api-url="https://api.argide.ai"
          data-position="right"
          data-width="400"
          data-trigger="both"
        ></script>
      </body>
    </html>
  );
}
