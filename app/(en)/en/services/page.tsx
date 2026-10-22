import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Expertise — Anis Allouache",
  description: "Operations coordination, process improvement, quality follow-up and practical business systems.",
  alternates: { canonical: "/en/services", languages: { "fr-FR": "/services", "en-US": "/en/services" } },
};
const domains = [
  { title: "Operations coordination", detail: "Organising daily workflows and tracking tasks, service providers, interventions and incidents.", purpose: "Making priorities and responsibilities clear." },
  { title: "Processes and quality control", detail: "Reviewing existing ways of working, tracking issues, improving procedures and operational reporting.", purpose: "Reducing overlooked tasks, duplicate work and avoidable manual follow-up." },
  { title: "Business tools and dashboards", detail: "Structuring information, designing interfaces, targeted automation and management tool prototypes.", purpose: "Supporting an identified workflow rather than adding another application by default." },
] as const;
export default function EnglishExpertisePage() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Expertise</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Organise. Make reliable. Simplify.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">My work brings together operations, practical working methods and digital tools, drawing on real coordination and follow-up challenges.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="space-y-5">
        {domains.map((item, index) => <article key={item.title} className="grid gap-7 rounded-[28px] border border-line p-8 md:grid-cols-[80px_1fr] md:p-10">
          <span className="font-display text-3xl font-semibold text-neutral-400">0{index+1}</span><div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">{item.title}</h2>
          <p className="mt-5 leading-8 text-muted">{item.detail}</p>
          <p className="mt-5 border-l-2 border-ink pl-5 leading-7">{item.purpose}</p></div>
        </article>)}
      </div>
        <p className="mt-12 max-w-3xl leading-8 text-muted">Areas of experience: hospitality, serviced residences, service provider coordination and on-site operations. I do not claim expertise in every industry.</p>
        <Link href="/en/work" className="mt-7 inline-block font-semibold underline underline-offset-4">See practical examples →</Link>
      </section>
    </main><SiteFooter locale="en" /></>
  );
}
