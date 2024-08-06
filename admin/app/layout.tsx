import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <EdgeStoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <ModalProvider />
            <ToastProvider />
            {children}
          </body>
        </html>
      </EdgeStoreProvider>
    </ClerkProvider>
  );
}
