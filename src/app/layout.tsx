import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { StoreProvider } from "@/lib/redux/StoreProvider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { JSX } from "react";
import TanStackProvider from "@/shared/tanstack-provider";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <TanStackProvider>
            <div className="flex flex-col min-h-screen">
              <SiteHeader />
              <main className="flex-grow bg-gray-50">{children}</main>
              <SiteFooter />
            </div>
            <Toaster richColors />
          </TanStackProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
export const metadata: Metadata = {
  title: "Falcon E-commerce",
  description: "A modern e-commerce platform.",
};
