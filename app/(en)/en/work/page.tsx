import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Selected Work — Anis Allouache",
  description: "Examples of operations coordination and business workflow design: Résidence Cadet and Kepler Express.",
  alternates: { canonical: "/en/work", languages: { "fr-FR": "/work", "en-US": "/en/work" } },
};

const cases = [
  {
    num: "01", area: "Serviced residences", title: "Résidence Cadet",
    context: "Daily operations at a 23-unit serviced residence.",
    challenge: "Stay information, requests, access, incidents and interventions spread across several tools and channels.",
    response: "Coordinating activities, clarifying routines and establishing more structured follow-up for operational issues.",
    href: "/en/case-study/vesper",
  },
  {
    num: "02", area: "Transport and logistics", title: "Kepler Express",
    context: "Operational tracking for transport missions.",
    challenge: "Missions, expenses and billing managed separately, with no clear end-to-end overview.",
    response: "Structuring the workflow and designing a tool that connects missions, costs and billing information.",
    href: "/en/case-study/kepler-express",
  },
] as const;

export default function EnglishWorkPage() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Selected work</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Practical examples of my work.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Each case explains the context, the operational challenge and my contribution. The aim is to show what was done, not to turn field experience into a software sales pitch.</p>
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
                  <div><h3 className="font-semibold">The situation</h3><p className="mt-3 leading-8 text-muted">{item.challenge}</p></div>
                  <div><h3 className="font-semibold">My contribution</h3><p className="mt-3 leading-8 text-muted">{item.response}</p></div>
                </div>
                <Link href={item.href} className="mt-9 inline-block font-semibold underline underline-offset-4">Read the full case →</Link>
              </div>
            </div>
          </article>
        )}</div>
        <p className="mt-14 max-w-3xl border-t border-line pt-10 leading-8 text-muted">Software applications and experiments are presented separately on <a href="https://www.lyanstudio.com/work.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">Lyan Studio</a>.</p>
      </section>
    </main><SiteFooter locale="en" /></>
  );
}
