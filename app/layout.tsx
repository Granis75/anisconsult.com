import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "anisconsult — Operations, CRM & Automatisation",
  description:
    "anisconsult — Structuration des flux métier, CRM, automatisation et systèmes opérationnels pour des opérations plus claires, plus fiables et plus pilotables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
