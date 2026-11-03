import type { Metadata } from "next";
import { DigitalBusinessCard } from "@/components/digital-business-card";

export const metadata: Metadata = {
  title: "Carte de visite — Anis Allouache",
  description: "Retrouvez les coordonnées professionnelles d'Anis Allouache et enregistrez sa fiche contact en un clic.",
  alternates: {
    canonical: "/carte",
    languages: { "fr-FR": "/carte", "en-US": "/en/card" },
  },
  openGraph: {
    title: "Anis Allouache — Carte de visite",
    description: "Organisation opérationnelle, processus et outils métiers. Contact et coordonnées.",
    url: "/carte",
  },
};

export default function BusinessCardPage() {
  return <DigitalBusinessCard locale="fr" />;
}
