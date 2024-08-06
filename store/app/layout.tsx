import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  );
}
