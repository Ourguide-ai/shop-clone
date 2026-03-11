import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/AppContext";
import { OurguideToolsRegistrar } from "@/components/OurguideToolsRegistrar";
import { CrowProvider, CrowCopilot } from "@/components/CopilotWrapper";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <AppProvider>
            <CrowProvider
              productId="prod_74024eae-02e6-4942-8377-f89b7774b164"
              apiUrl="http://localhost:3000"
              agentName="Assistant"
              defaultOpen={true}
            >
              <div className="flex h-screen overflow-hidden">
                {/* Left column: navbar + scrollable content */}
                <div className="flex flex-col flex-1 min-w-0 min-h-0">
                  <Navbar />
                  <div className="flex-1 overflow-y-auto">
                    <main>{children}</main>
                    <Footer />
                  </div>
                </div>
                {/* Right column: full-height copilot */}
                <CrowCopilot position="right" width={400} />
              </div>
            </CrowProvider>
            <OurguideToolsRegistrar />
          </AppProvider>
        </AuthProvider>

      </body>
    </html>
  );
}
