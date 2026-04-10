import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Anis — Operations and Workflow",
  description:
    "Operations work across hospitality and logistics, with hands-on follow-up, invoicing, expenses and internal tools built from real needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
