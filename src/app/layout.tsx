import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const suit = localFont({
  src: [
    {
      path: "../assets/fonts/SUIT-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-suit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jk Portfolio",
  description: "Jk Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${suit.variable} antialiased`}>{children}</body>
    </html>
  );
}
