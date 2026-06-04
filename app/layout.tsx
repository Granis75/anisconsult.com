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
  metadataBase: new URL("https://anisconsult.com"),
  title: "AnisConsult — Operational Improvement & Process Clarity",
  description:
    "AnisConsult helps small service businesses improve daily operations, clarify responsibilities, reduce manual friction and structure execution.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/brand/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/brand/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "AnisConsult — Operational Improvement & Process Clarity",
    description:
      "Operational improvement, workflow analysis and practical process optimization for service-based businesses.",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AnisConsult brand preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnisConsult — Operational Improvement & Process Clarity",
    description:
      "Operational improvement, workflow analysis and practical process optimization for service-based businesses.",
    images: ["/brand/og-image.jpg"],
  },
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
