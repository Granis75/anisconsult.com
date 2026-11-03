import type { Metadata } from "next";
import { DigitalBusinessCard } from "@/components/digital-business-card";

export const metadata: Metadata = {
  title: "Digital Business Card — Anis Allouache",
  description: "View Anis Allouache's professional contact details and save a contact card to your phone.",
  alternates: {
    canonical: "/en/card",
    languages: { "fr-FR": "/carte", "en-US": "/en/card" },
  },
  openGraph: {
    title: "Anis Allouache — Digital Business Card",
    description: "Operations, process improvement and business tools. Contact information.",
    url: "/en/card",
  },
};

export default function BusinessCardPage() {
  return <DigitalBusinessCard locale="en" />;
}
