import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Réalisations — Anis Allouache",
  description: "Exemples concrets de coordination, structuration et conception d'outils métiers : Résidence Cadet et Kepler Express.",
  alternates: { canonical: "/work", languages: { "fr-FR": "/work", "en-US": "/en/work" } },
};

const cases = [
  {
    num: "01", area: "Résidences de services", title: "Résidence Cadet",
    context: "Exploitation quotidienne d'une résidence de 23 unités.",
    challenge: "Suivi des séjours, demandes, accès, incidents et interventions réparti entre plusieurs supports.",
    response: "Coordination des activités, clarification des routines et mise en place d'un suivi plus structuré des sujets opérationnels.",
    href: "/case-study/vesper",
  },
  {
    num: "02", area: "Transport et logistique", title: "Kepler Express",
    context: "Gestion et suivi de missions de transport.",
    challenge: "Missions, frais et facturation suivis séparément, avec une vision partielle des opérations.",
    response: "Structuration d'un flux de suivi et conception d'un outil reliant missions, dépenses et informations de facturation.",
    href: "/case-study/kepler-express",
  },
] as const;

export default function WorkPage() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Réalisations</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Des exemples concrets de mon travail.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Pour chaque situation : le contexte, la difficulté rencontrée et ce que j'ai contribué à structurer. Sans confondre expérience de terrain et démonstration d'un logiciel.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="space-y-8">{cases.map((item) =>
          <article key={item.num} className="rounded-[28px] border border-line p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[80px_1fr]">
              <span className="font-display text-4xl font-semibold text-neutral-400">{item.num}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{item.area}</p>
                <h2 className="mt-4 font-display text-4xl font-semibold">{item.title}</h2>
                <p className="mt-4 text-lg text-muted">{item.context}</p>
                <div className="mt-9 grid gap-8 md:grid-cols-2">
                  <div><h3 className="font-semibold">La situation</h3><p className="mt-3 leading-8 text-muted">{item.challenge}</p></div>
                  <div><h3 className="font-semibold">Ma contribution</h3><p className="mt-3 leading-8 text-muted">{item.response}</p></div>
                </div>
                <Link href={item.href} className="mt-9 inline-block font-semibold underline underline-offset-4">Lire le cas détaillé →</Link>
              </div>
            </div>
          </article>
        )}</div>
        <p className="mt-14 max-w-3xl border-t border-line pt-10 leading-8 text-muted">Les applications et expérimentations logicielles sont présentées sur <a href="https://www.lyanstudio.com/work.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">Lyan Studio</a>.</p>
      </section>
    </main><SiteFooter /></>
  );
}
