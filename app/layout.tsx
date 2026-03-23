import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/AppContext";
import { OurguideToolsRegistrar } from "@/components/OurguideToolsRegistrar";
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
    default: "ShopClone",
    template: "%s | ShopClone",
  },
  description: "Your one-stop online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${sourceSerif4.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <AppProvider>
            <Navbar />
            {children}
            <Footer />
            <OurguideToolsRegistrar />
          </AppProvider>
        </AuthProvider>
        <Script
          src="https://dashboard.ourguide.ai/ourguide-b2b-widget.iife.js"
          data-api-url="https://dashboard.ourguide.ai"
          data-product-id="prod_e755e441-382e-4156-93ac-56948bd00fbe"
          data-agent-name="Assistant"
        ></Script>
      </body>
    </html>
  );
}
