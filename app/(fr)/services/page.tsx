import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Expertises — Anis Allouache",
  description: "Opérations métier, analyse des besoins, amélioration des processus et conception ou intégration de solutions numériques.",
  alternates: { canonical: "/services", languages: { "fr-FR": "/services", "en-US": "/en/services" } },
};
const domains = [
  { title: "Opérations métier", detail: "Analyser l'organisation du travail, coordonner les activités et traduire les besoins du terrain en exigences opérationnelles.", purpose: "Identifier les priorités, les intervenants et les informations utiles." },
  { title: "Amélioration des processus", detail: "Cartographier les flux, clarifier les responsabilités, structurer les données et améliorer le reporting.", purpose: "Rendre le travail plus lisible et limiter la dispersion ou la duplication des informations." },
  { title: "Solutions numériques & intégration", detail: "Concevoir des interfaces et des outils métier, ou accompagner le choix de logiciels existants.", purpose: "Mettre la technologie au service d'un besoin réel, sans outil supplémentaire inutile." },
] as const;
export default function ServicesPage() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Expertises</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Opérations, processus et solutions numériques.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">Je pars des besoins opérationnels pour définir des processus plus clairs et des outils adaptés, au sein d'une organisation ou en mission indépendante.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="space-y-5">
        {domains.map((item, index) => <article key={item.title} className="grid gap-7 rounded-[28px] border border-line p-8 md:grid-cols-[80px_1fr] md:p-10">
          <span className="font-display text-3xl font-semibold text-neutral-400">0{index+1}</span><div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">{item.title}</h2>
          <p className="mt-5 leading-8 text-muted">{item.detail}</p>
          <p className="mt-5 border-l-2 border-ink pl-5 leading-7">{item.purpose}</p></div>
        </article>)}
      </div>
        <p className="mt-12 max-w-3xl leading-8 text-muted">Expérience en hôtellerie, logistique et services, avec une méthode transversale d'analyse et d'amélioration des activités.</p>
        <Link href="/work" className="mt-7 inline-block font-semibold underline underline-offset-4">Voir des exemples concrets →</Link>
      </section>
    </main><SiteFooter /></>
  );
}
