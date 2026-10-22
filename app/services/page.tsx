import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Expertises — Anis Allouache",
  description: "Coordination opérationnelle, contrôle qualité, amélioration des processus et conception d'outils de suivi.",
  alternates: { canonical: "/services" },
};
const domains = [
  { title: "Coordination opérationnelle", detail: "Organisation du travail quotidien, suivi des tâches, des prestataires, des interventions et des incidents.", purpose: "Donner de la visibilité aux priorités et aux responsabilités." },
  { title: "Processus et contrôle qualité", detail: "Analyse du fonctionnement existant, suivi des écarts, procédures, indicateurs et reporting.", purpose: "Réduire les oublis, les doublons et les reprises manuelles." },
  { title: "Outils métiers et tableaux de bord", detail: "Structuration des informations, conception d'interfaces, automatisations ciblées et prototypes de gestion.", purpose: "Outiller un processus seulement lorsque cela répond à un besoin réel." },
] as const;
export default function ServicesPage() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Expertises</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Organiser, fiabiliser, simplifier.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">Mes compétences réunissent les opérations, les méthodes de travail et les outils numériques. Elles viennent de problèmes concrets de coordination et de suivi.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="space-y-5">
        {domains.map((item, index) => <article key={item.title} className="grid gap-7 rounded-[28px] border border-line p-8 md:grid-cols-[80px_1fr] md:p-10">
          <span className="font-display text-3xl font-semibold text-neutral-400">0{index+1}</span><div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">{item.title}</h2>
          <p className="mt-5 leading-8 text-muted">{item.detail}</p>
          <p className="mt-5 border-l-2 border-ink pl-5 leading-7">{item.purpose}</p></div>
        </article>)}
      </div>
        <p className="mt-12 max-w-3xl leading-8 text-muted">Domaines d'expérience : hôtellerie, résidences de services, coordination de prestataires et activités de terrain. Je ne prétends pas couvrir tous les secteurs.</p>
        <Link href="/work" className="mt-7 inline-block font-semibold underline underline-offset-4">Voir des exemples concrets →</Link>
      </section>
    </main><SiteFooter /></>
  );
}
