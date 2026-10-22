import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Kepler Express — Organisation et outil métier | Anis Allouache",
  description: "Structurer le suivi de missions de transport, des coûts, de la facturation et des paiements.",
  alternates: { canonical: "/case-study/kepler-express", languages: { "fr-FR": "/case-study/kepler-express", "en-US": "/en/case-study/kepler-express" } },
};
const actions = [
  "Définir les étapes de suivi d'une mission, de la demande à l'exécution.",
  "Structurer les informations liées aux intervenants et aux dépenses.",
  "Relier les missions effectuées aux éléments de facturation et au suivi des paiements.",
  "Concevoir une interface réunissant ces informations selon le déroulement réel du travail.",
] as const;
export default function KeplerCase() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Link href="/work" className="text-sm font-semibold text-muted underline underline-offset-4">← Toutes les réalisations</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Logistique · Organisation et outil métier</p>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Kepler Express : relier les missions au suivi administratif.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Un exemple de structuration d'un processus opérationnel et de conception d'un outil de suivi.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <aside><h2 className="font-display text-2xl font-semibold">Le contexte</h2>
        <p className="mt-5 leading-8 text-muted">Missions de transport, frais associés, informations clients, suivi des factures et règlements.</p></aside>
        <div className="space-y-12">
          <div><h2 className="font-display text-3xl font-semibold">La difficulté</h2>
          <p className="mt-5 leading-8 text-muted">Quand les missions, les frais et la facturation sont suivis séparément, il est difficile d'obtenir une vue fiable de chaque opération.</p></div>
          <div><h2 className="font-display text-3xl font-semibold">La réponse conçue</h2>
          <ul className="mt-6 space-y-4">{actions.map(item=><li key={item} className="border-l-2 border-ink pl-5 leading-8 text-muted">{item}</li>)}</ul></div>
          <div><h2 className="font-display text-3xl font-semibold">Ce que ce projet démontre</h2>
          <p className="mt-5 leading-8 text-muted">Une capacité à traduire un processus opérationnel en règles de suivi et en interfaces. Ce cas présente le système conçu ; il ne prétend pas démontrer des résultats commerciaux mesurés.</p>
          <p className="mt-6 leading-8 text-muted">La partie logicielle est également présentée sur <a href="https://www.lyanstudio.com/work.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">Lyan Studio</a>.</p></div>
        </div>
      </div></section>
    </main><SiteFooter /></>
  );
}
