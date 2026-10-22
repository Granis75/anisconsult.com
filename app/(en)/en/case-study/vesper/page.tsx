import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Résidence Cadet — Operations Case | Anis Allouache",
  description: "Operations coordination at a 23-unit serviced residence: stays, interventions, incidents and reporting.",
  alternates: { canonical: "/en/case-study/vesper", languages: { "fr-FR": "/case-study/vesper", "en-US": "/en/case-study/vesper" } },
};
const actions = [
  "Clarifying daily tasks and ownership.",
  "Tracking requests, incidents and their resolution.",
  "Organising access, interventions and shift handovers.",
  "Structuring recurring checks and operational reporting.",
] as const;
export default function EnglishResidenceCadetCase() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Link href="/en/work" className="text-sm font-semibold text-muted underline underline-offset-4">← All selected work</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Hospitality · Operations coordination</p>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Résidence Cadet: building clearer processes for a serviced residence.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">A practical example of day-to-day coordination and process improvement at a 23-unit property.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <aside><h2 className="font-display text-2xl font-semibold">Context</h2>
        <p className="mt-5 leading-8 text-muted">Managing stay-related follow-up, access, resident communication, interventions, quality checks and reporting.</p></aside>
        <div className="space-y-12">
          <div><h2 className="font-display text-3xl font-semibold">The challenge</h2>
          <p className="mt-5 leading-8 text-muted">Information was spread across tools, with manual follow-up and open issues that could get lost between people or shifts.</p></div>
          <div><h2 className="font-display text-3xl font-semibold">Work carried out</h2>
          <ul className="mt-6 space-y-4">{actions.map(item=><li key={item} className="border-l-2 border-ink pl-5 leading-8 text-muted">{item}</li>)}</ul></div>
          <div><h2 className="font-display text-3xl font-semibold">Operational value</h2>
          <p className="mt-5 leading-8 text-muted">Clearer routines, better visibility of pending issues and handovers that rely less on individual memory. Historical performance figures without an accessible measurement method are not presented here as independently verified evidence.</p></div>
        </div>
      </div></section>
    </main><SiteFooter locale="en" /></>
  );
}
