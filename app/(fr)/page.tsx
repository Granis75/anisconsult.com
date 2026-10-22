import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Anis Allouache — Organisation opérationnelle et outils métiers",
  description: "Coordination opérationnelle, amélioration des processus et conception d'outils métiers adaptés aux besoins du terrain.",
  alternates: { canonical: "/", languages: { "fr-FR": "/", "en-US": "/en" } },
};

const expertises = [
  { num: "01", title: "Coordination opérationnelle", text: "Organiser le quotidien, suivre les interventions, les prestataires, les incidents et la qualité du travail réalisé." },
  { num: "02", title: "Amélioration des processus", text: "Identifier les frictions, clarifier les responsabilités et mettre en place des méthodes de suivi simples." },
  { num: "03", title: "Outils métiers", text: "Concevoir des tableaux de bord et des applications qui répondent à des besoins opérationnels identifiés." },
] as const;

const cases = [
  { area: "Résidences de services", title: "Résidence Cadet", summary: "Coordination des activités d'une résidence de 23 unités : séjours, accès, interventions, incidents et reporting.", href: "/case-study/vesper" },
  { area: "Transport et logistique", title: "Kepler Express", summary: "Structuration du suivi des missions, des dépenses et de la facturation, avec conception d'un outil métier.", href: "/case-study/kepler-express" },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-ink">
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Organisation opérationnelle · Processus · Outils métiers</p>
            <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">Des opérations mieux organisées. Des outils vraiment utiles.</h1>
            <p className="mt-9 max-w-3xl text-xl leading-9 text-muted">Mon travail consiste à comprendre le fonctionnement d'une activité, organiser son suivi et résoudre les problèmes concrets du quotidien.</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">Je combine une expérience de terrain en coordination opérationnelle avec la capacité à concevoir des méthodes de suivi, des tableaux de bord et des applications métiers.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/work" className="premium-cta h-12 px-6">Voir les réalisations</Link>
              <Link href="/services" className="premium-cta-outline h-12 px-6">Mes expertises</Link>
            </div>
            <p className="mt-9 text-sm text-muted">Expérience en hôtellerie, résidences de services et coordination d'activités.</p>
          </div>
        </section>
        <section className="border-b border-line bg-[#f8f7f3]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Mon activité</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Du problème constaté à une solution utilisable.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {expertises.map((item) => (
                <article key={item.num} className="rounded-[24px] border border-line bg-white p-7">
                  <span className="text-sm font-semibold text-muted">{item.num}</span>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
            <Link href="/services" className="mt-9 inline-block font-semibold underline underline-offset-4">Découvrir les expertises →</Link>
          </div>
        </section>
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Réalisations</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Des situations concrètes, pas des promesses.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {cases.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-line p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{item.area}</p>
                  <h3 className="mt-5 font-display text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-5 leading-8 text-muted">{item.summary}</p>
                  <Link href={item.href} className="mt-7 inline-block font-semibold underline underline-offset-4">Voir le cas →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="border-b border-line bg-[#f8f7f3]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Approche</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">Partir du terrain, pas de l'outil.</h2></div>
            <div><p className="text-base leading-8 text-muted">Observer le travail réel, comprendre les points de friction, clarifier les responsabilités, puis choisir la bonne réponse : une méthode, un suivi partagé ou un outil numérique.</p><Link href="/about" className="mt-6 inline-block font-semibold underline underline-offset-4">Ma façon de travailler →</Link></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><ContactSection headingLevel="h2" /></section>
      </main>
      <SiteFooter />
    </>
  );
}
