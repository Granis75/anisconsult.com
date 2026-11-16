import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

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
  title: "Anis Allouache — Business Operations & Digital Solutions",
  description:
    "Opérations métier, amélioration des processus et solutions numériques adaptées aux besoins des organisations.",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/", "en-US": "/en" },
  },
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
    title: "Anis Allouache — Business Operations & Digital Solutions",
    description:
      "Opérations métier, analyse des processus et solutions numériques.",
    url: "/",
    siteName: "ANIS ALLOUACHE",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anis Allouache — opérations métier et solutions numériques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anis Allouache — Business Operations & Digital Solutions",
    description:
      "Opérations métier, analyse des processus et solutions numériques.",
    images: ["/brand/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${interTight.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
