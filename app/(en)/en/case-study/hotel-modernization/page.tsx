import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Paris Hotel Modernisation — Work in Progress | Anis Allouache",
  description: "An ongoing hotel operations project: organising historical records and building a prototype before field verification and software implementation.",
  alternates: { canonical: "/en/case-study/hotel-modernization", languages: { "fr-FR": "/case-study/hotel-modernization", "en-US": "/en/case-study/hotel-modernization" } },
};
const stages = [
  { title: "Review the source material", detail: "Examine historical plans, tables and operational records to identify what information is available." },
  { title: "Structure a working base", detail: "Organise technical and business information, keeping archive references distinct from items that require on-site confirmation." },
  { title: "Build an interactive prototype", detail: "Use a digital demonstration to discuss possible workflows, priorities and the direction of the project with management." },
] as const;

export default function HotelModernisationCase() {
  return <><SiteHeader /><main className="bg-white text-ink">
    <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Link href="/en/work" className="text-sm font-semibold text-muted underline underline-offset-4">← All selected work</Link>
      <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Hospitality · Current project · In progress</p>
      <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">From historical records to a clearer operational picture.</h1>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">An ongoing hotel modernisation project in Paris. The establishment is not identified, and no internal documents or personal data are displayed.</p>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <aside><h2 className="font-display text-2xl font-semibold">The challenge</h2>
          <p className="mt-5 leading-8 text-muted">Fragmented historical information must become a traceable starting point for operational decisions. The archive does not necessarily reflect current conditions on site.</p>
        </aside>
        <div className="space-y-10">
          <div><h2 className="font-display text-3xl font-semibold">Work undertaken</h2>
            <ol className="mt-6 space-y-4">{stages.map((s,i)=><li key={s.title} className="rounded-[22px] border border-line p-6">
              <span className="text-xs font-semibold text-muted">0{i+1}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-8 text-muted">{s.detail}</p>
            </li>)}</ol>
          </div>
          <div className="rounded-[22px] border border-line bg-[#f8f7f3] p-7">
            <h2 className="font-display text-2xl font-semibold">Next stages — not yet completed</h2>
            <p className="mt-4 leading-8 text-muted">On-site verification, process prioritisation and software selection or implementation remain future steps. This case does not claim a finished deployment or measured performance gains.</p>
          </div>
          <Link href="/en/contact" className="inline-block font-semibold underline underline-offset-4">Discuss a similar challenge →</Link>
        </div>
      </div>
    </section>
  </main><SiteFooter locale="en" /></>;
}
