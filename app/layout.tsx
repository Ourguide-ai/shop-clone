import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/AppContext";
import { OurguideToolsRegistrar } from "@/components/OurguideToolsRegistrar";
import { OurguideCopilot , OurguideProvider} from "@/components/OurguideCopilot";

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
        className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
      >
        <OurguideProvider
          productId="prod_35db7bb0-caad-423e-ba29-ebf34e7c206a"
          apiUrl="http://localhost:3000"
          agentName="Assistant"
        >
          <AuthProvider>
            <AppProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <OurguideToolsRegistrar />
            </AppProvider>
          </AuthProvider>
          <OurguideCopilot position="right" width={400} />
        </OurguideProvider>
      </body>
    </html>
  );
}
