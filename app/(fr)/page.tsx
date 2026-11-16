import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Anis Allouache — Business Operations & Digital Solutions",
  description: "Opérations métier, amélioration des processus et solutions numériques : relier les besoins aux méthodes et aux outils adaptés.",
  alternates: { canonical: "/", languages: { "fr-FR": "/", "en-US": "/en" } },
};

const expertises = [
  { num: "01", title: "Opérations métier", text: "Comprendre le fonctionnement d'une organisation, coordonner les activités et identifier les besoins du terrain." },
  { num: "02", title: "Amélioration des processus", text: "Cartographier les flux, clarifier les responsabilités et structurer l'information pour mieux décider." },
  { num: "03", title: "Solutions numériques", text: "Concevoir et mettre en place des outils utiles, du suivi partagé à l'application métier adaptée au besoin." },
] as const;

const cases = [
  { area: "Projet actuel · En cours", title: "Modernisation d'un hôtel parisien", summary: "Structuration d'archives opérationnelles et prototype interactif pour préparer les prochaines décisions.", href: "/case-study/hotel-modernization" },
  { area: "Résidences de services", title: "Résidence Cadet", summary: "Coordination d'une résidence de 23 unités : prestataires, interventions et reporting.", href: "/case-study/vesper" },
  { area: "Transport et logistique", title: "Kepler Express", summary: "Structuration du suivi des missions, des frais, de la facturation et des paiements, avec un outil métier.", href: "/case-study/kepler-express" },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-ink">
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Business Operations & Digital Solutions</p>
            <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">Comprendre les opérations. Améliorer leur fonctionnement.</h1>
            <p className="mt-9 max-w-3xl text-xl leading-9 text-muted">Je relie les opérations métier aux solutions numériques : comprendre les flux existants, améliorer les processus et concevoir des outils utiles.</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">Mon approche associe expérience opérationnelle, analyse des besoins et développement logiciel, sans complexité inutile.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/work" className="premium-cta h-12 px-6">Voir les réalisations</Link>
              <Link href="/services" className="premium-cta-outline h-12 px-6">Mes expertises</Link>
            </div>
            <p className="mt-9 text-sm text-muted">Expérience dans l'hôtellerie, la logistique et les activités de services.</p>
          </div>
        </section>
        <section className="border-b border-line bg-[#f8f7f3]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Mon activité</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Des besoins métier aux solutions concrètes.</h2>
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
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Des réalisations, de l'opérationnel au numérique.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
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
            <div><p className="text-base leading-8 text-muted">Partir du fonctionnement réel, organiser l'information et définir le besoin avant de choisir le bon processus ou la bonne technologie.</p><Link href="/about" className="mt-6 inline-block font-semibold underline underline-offset-4">Ma façon de travailler →</Link></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><ContactSection headingLevel="h2" /></section>
      </main>
      <SiteFooter />
    </>
  );
}
