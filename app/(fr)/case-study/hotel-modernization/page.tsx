import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Modernisation d'un hôtel parisien — Projet en cours | Anis Allouache",
  description: "Projet hôtelier en cours : structuration d'archives et prototype interactif avant vérification sur place et intégration d'outils.",
  alternates: { canonical: "/case-study/hotel-modernization", languages: { "fr-FR": "/case-study/hotel-modernization", "en-US": "/en/case-study/hotel-modernization" } },
};
const stages = [
  { title: "Analyser les documents sources", detail: "Examiner les anciens plans, tableaux et archives opérationnelles pour identifier les informations disponibles." },
  { title: "Structurer une base de travail", detail: "Organiser les informations techniques et métier, en distinguant les archives des éléments à confirmer sur place." },
  { title: "Concevoir un prototype interactif", detail: "S'appuyer sur une démonstration numérique pour discuter des futurs processus et des priorités avec la direction." },
] as const;

export default function HotelModernisationCase() {
  return <><SiteHeader /><main className="bg-white text-ink">
    <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Link href="/work" className="text-sm font-semibold text-muted underline underline-offset-4">← Toutes les réalisations</Link>
      <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Hôtellerie · Projet actuel · En cours</p>
      <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Des archives à une vision opérationnelle plus claire.</h1>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Modernisation en cours dans un hôtel parisien. L'établissement n'est pas identifié et aucun document interne ni donnée personnelle n'est publié.</p>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <aside><h2 className="font-display text-2xl font-semibold">La problématique</h2>
          <p className="mt-5 leading-8 text-muted">Transformer des informations historiques dispersées en une base de travail traçable. Les archives ne correspondent pas nécessairement à l'état réel des lieux.</p>
        </aside>
        <div className="space-y-10">
          <div><h2 className="font-display text-3xl font-semibold">Travail engagé</h2>
            <ol className="mt-6 space-y-4">{stages.map((s,i)=><li key={s.title} className="rounded-[22px] border border-line p-6">
              <span className="text-xs font-semibold text-muted">0{i+1}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-8 text-muted">{s.detail}</p>
            </li>)}</ol>
          </div>
          <div className="rounded-[22px] border border-line bg-[#f8f7f3] p-7">
            <h2 className="font-display text-2xl font-semibold">Étapes suivantes — non achevées</h2>
            <p className="mt-4 leading-8 text-muted">Vérification sur site, priorisation des améliorations et choix ou intégration des logiciels restent à conduire. Ce cas ne revendique ni déploiement terminé ni résultat chiffré.</p>
          </div>
          <Link href="/contact" className="inline-block font-semibold underline underline-offset-4">Échanger sur un besoin similaire →</Link>
        </div>
      </div>
    </section>
  </main><SiteFooter /></>;
}
