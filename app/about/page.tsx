import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Approche — Anis Allouache",
  description: "Partir des réalités du terrain, structurer les processus et choisir des outils utiles.",
  alternates: { canonical: "/about" },
};
const steps = [
  { title: "Comprendre", text: "Observer les opérations, les personnes impliquées et les outils existants. Identifier où se perdent l'information et le temps." },
  { title: "Structurer", text: "Clarifier les étapes, les responsabilités et les informations indispensables au suivi." },
  { title: "Simplifier", text: "Écarter les doublons et les suivis inutiles pour rendre le fonctionnement plus lisible." },
  { title: "Outiller si nécessaire", text: "Concevoir un tableau de bord, une automatisation ou une application lorsque le besoin est démontré." },
] as const;
export default function AboutPage() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Approche</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Comprendre avant de proposer.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Mon expérience en coordination opérationnelle m'a appris qu'un processus n'est utile que s'il correspond aux contraintes du terrain. C'est aussi ce qui guide ma manière de concevoir des outils numériques.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => <article key={step.title} className="rounded-[28px] border border-line bg-[#f8f7f3] p-8">
            <span className="text-sm font-semibold text-muted">0{index+1}</span>
            <h2 className="mt-8 font-display text-3xl font-semibold">{step.title}</h2>
            <p className="mt-5 leading-8 text-muted">{step.text}</p>
          </article>)}
        </div>
        <div className="mt-14 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold">Le numérique est un moyen, pas une finalité.</h2>
          <p className="mt-5 leading-8 text-muted">Je sais développer des interfaces et des outils de gestion. Mais tous les problèmes ne nécessitent pas un logiciel supplémentaire : une procédure claire ou un meilleur suivi suffit parfois.</p>
          <p className="mt-5 leading-8 text-muted">Pour la dimension exclusivement logicielle de mon travail, mes projets sont présentés sur <a href="https://www.lyanstudio.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">Lyan Studio</a>.</p>
          <Link href="/work" className="mt-7 inline-block font-semibold underline underline-offset-4">Voir les réalisations →</Link>
        </div>
      </section>
    </main><SiteFooter /></>
  );
}
