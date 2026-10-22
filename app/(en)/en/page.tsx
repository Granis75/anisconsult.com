import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Anis Allouache — Operations & Business Systems",
  description: "Operations coordination, process improvement and practical business tools built around real workflows.",
  alternates: { canonical: "/en", languages: { "fr-FR": "/", "en-US": "/en" } },
};

const expertise = [
  { num: "01", title: "Operations coordination", text: "Organising day-to-day work, tracking service providers, interventions, incidents and the quality of execution." },
  { num: "02", title: "Process improvement", text: "Identifying friction, clarifying responsibilities and introducing straightforward follow-up methods." },
  { num: "03", title: "Business tools", text: "Designing dashboards and applications for specific operational needs, not adding software for its own sake." },
] as const;

const cases = [
  { area: "Serviced residences", title: "Résidence Cadet", summary: "Coordinating operations in a 23-unit serviced residence, including stays, access, interventions, incidents and reporting.", href: "/en/case-study/vesper" },
  { area: "Transport and logistics", title: "Kepler Express", summary: "Structuring mission, expense and invoicing workflows, alongside the design of an operational tracking tool.", href: "/en/case-study/kepler-express" },
] as const;

export default function EnglishHome() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-ink">
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Operations · Processes · Business systems</p>
            <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">Better organised operations. Tools that actually help.</h1>
            <p className="mt-9 max-w-3xl text-xl leading-9 text-muted">My work starts with understanding how an organisation runs, improving day-to-day coordination and solving practical operational problems.</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">I combine hands-on operations experience with the ability to design tracking methods, dashboards and business applications.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/en/work" className="premium-cta h-12 px-6">View selected work</Link>
              <Link href="/en/services" className="premium-cta-outline h-12 px-6">Explore expertise</Link>
            </div>
            <p className="mt-9 text-sm text-muted">Experience in hospitality, serviced residences and operational coordination.</p>
          </div>
        </section>
        <section className="border-b border-line bg-[#f8f7f3]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">What I do</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">From operational friction to a solution people can use.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {expertise.map((item) => (
                <article key={item.num} className="rounded-[24px] border border-line bg-white p-7">
                  <span className="text-sm font-semibold text-muted">{item.num}</span>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
            <Link href="/en/services" className="mt-9 inline-block font-semibold underline underline-offset-4">Explore areas of expertise →</Link>
          </div>
        </section>
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Selected work</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Real situations, not sales promises.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {cases.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-line p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{item.area}</p>
                  <h3 className="mt-5 font-display text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-5 leading-8 text-muted">{item.summary}</p>
                  <Link href={item.href} className="mt-7 inline-block font-semibold underline underline-offset-4">Read the case →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="border-b border-line bg-[#f8f7f3]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">My approach</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">Start with the work, not the technology.</h2></div>
            <div><p className="text-base leading-8 text-muted">Observe how work actually gets done, find the points of friction, clarify ownership and choose a useful response: a better process, shared tracking or a digital tool.</p><Link href="/en/about" className="mt-6 inline-block font-semibold underline underline-offset-4">How I work →</Link></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><ContactSection headingLevel="h2" locale="en" /></section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
