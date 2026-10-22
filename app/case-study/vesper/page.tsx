import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Résidence Cadet — Réalisation opérationnelle | Anis Allouache",
  description: "Organisation des opérations d'une résidence de 23 unités : suivi des séjours, interventions, incidents et reporting.",
  alternates: { canonical: "/case-study/vesper" },
};
const actions = [
  "Clarifier les tâches et les responsabilités au quotidien.",
  "Suivre les demandes, les incidents et leur résolution.",
  "Organiser les accès, les interventions et les transmissions.",
  "Structurer le reporting et les contrôles récurrents.",
] as const;
export default function ResidenceCadetCase() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Link href="/work" className="text-sm font-semibold text-muted underline underline-offset-4">← Toutes les réalisations</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Hôtellerie · Organisation opérationnelle</p>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Résidence Cadet : structurer le suivi d'une résidence de services.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Un exemple concret de coordination et d'amélioration des pratiques quotidiennes dans une résidence de 23 unités.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <aside><h2 className="font-display text-2xl font-semibold">Le contexte</h2>
        <p className="mt-5 leading-8 text-muted">Suivi des séjours, accès, échanges avec les occupants, coordination des interventions, contrôle de la qualité et reporting.</p></aside>
        <div className="space-y-12">
          <div><h2 className="font-display text-3xl font-semibold">La difficulté</h2>
          <p className="mt-5 leading-8 text-muted">Des informations dispersées entre plusieurs outils, des suivis manuels et des sujets susceptibles de se perdre entre les personnes ou les changements de service.</p></div>
          <div><h2 className="font-display text-3xl font-semibold">Le travail réalisé</h2>
          <ul className="mt-6 space-y-4">{actions.map(item=><li key={item} className="border-l-2 border-ink pl-5 leading-8 text-muted">{item}</li>)}</ul></div>
          <div><h2 className="font-display text-3xl font-semibold">L'apport opérationnel</h2>
          <p className="mt-5 leading-8 text-muted">Des routines plus lisibles, des sujets à traiter mieux identifiés et des transmissions moins dépendantes de la mémoire individuelle. Les indicateurs historiques non accompagnés de leur méthode de mesure ne sont pas utilisés ici comme preuve chiffrée.</p></div>
        </div>
      </div></section>
    </main><SiteFooter /></>
  );
}
