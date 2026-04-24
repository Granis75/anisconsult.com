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
  title: "AnisConsult — Operations Systems Specialist",
  description: "Fix messy operations. Reduce manual work. Build systems teams actually use.",
  icons: {
    icon: "/brand/favicon-32x32.png",
    apple: "/brand/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/brand/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    title: "AnisConsult — Operations Systems Specialist",
    description: "Fix messy operations. Reduce manual work. Build systems teams actually use.",
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
    title: "AnisConsult — Operations Systems Specialist",
    description: "Fix messy operations. Reduce manual work. Build systems teams actually use.",
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
