import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Expertise — Anis Allouache",
  description: "Business operations, process analysis, workflow improvement and tailored digital solutions.",
  alternates: { canonical: "/en/services", languages: { "fr-FR": "/services", "en-US": "/en/services" } },
};
const domains = [
  { title: "Business operations", detail: "Analysing how day-to-day work is organised, coordinating activities and translating field experience into operational requirements.", purpose: "Know what needs to happen, who is involved and which information matters." },
  { title: "Process improvement", detail: "Mapping workflows, clarifying responsibilities, structuring data and improving reporting and follow-up.", purpose: "Make work easier to follow and reduce fragmented or duplicated information." },
  { title: "Digital solutions & implementation", detail: "Designing tailored interfaces and internal tools, or helping choose appropriate existing software.", purpose: "Use technology for a defined need rather than creating a system by default." },
] as const;
export default function EnglishExpertisePage() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Expertise</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Operations, processes and digital solutions.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">I work from operational needs to clearer processes and appropriate tools — as part of an organisation or through an independent assignment.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="space-y-5">
        {domains.map((item, index) => <article key={item.title} className="grid gap-7 rounded-[28px] border border-line p-8 md:grid-cols-[80px_1fr] md:p-10">
          <span className="font-display text-3xl font-semibold text-neutral-400">0{index+1}</span><div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">{item.title}</h2>
          <p className="mt-5 leading-8 text-muted">{item.detail}</p>
          <p className="mt-5 border-l-2 border-ink pl-5 leading-7">{item.purpose}</p></div>
        </article>)}
      </div>
        <p className="mt-12 max-w-3xl leading-8 text-muted">Experience across hospitality, logistics and services, with transferable methods for analysing and improving operational workflows.</p>
        <Link href="/en/work" className="mt-7 inline-block font-semibold underline underline-offset-4">See practical examples →</Link>
      </section>
    </main><SiteFooter locale="en" /></>
  );
}
