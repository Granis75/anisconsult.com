import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Kepler Express — Operations & Business Tool | Anis Allouache",
  description: "Structuring transport missions, expenses, billing and payment follow-up in a connected workflow.",
  alternates: { canonical: "/en/case-study/kepler-express", languages: { "fr-FR": "/case-study/kepler-express", "en-US": "/en/case-study/kepler-express" } },
};
const actions = [
  "Mapping the mission lifecycle from request to execution.",
  "Organising information on people involved and the related expenses.",
  "Linking completed missions to billable items and payment follow-up.",
  "Designing an interface that brings this information together around the actual workflow.",
] as const;
export default function EnglishKeplerCase() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Link href="/en/work" className="text-sm font-semibold text-muted underline underline-offset-4">← All selected work</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Logistics · Operations and business tools</p>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Kepler Express: connecting mission tracking with administrative follow-up.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">An example of structuring an operational process and designing a tracking application around it.</p>
      </div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <aside><h2 className="font-display text-2xl font-semibold">Context</h2>
        <p className="mt-5 leading-8 text-muted">Transport missions, related expenses, customer information, invoices and payment follow-up.</p></aside>
        <div className="space-y-12">
          <div><h2 className="font-display text-3xl font-semibold">The challenge</h2>
          <p className="mt-5 leading-8 text-muted">When missions, costs and billing are tracked separately, it becomes difficult to build a reliable picture of each operation.</p></div>
          <div><h2 className="font-display text-3xl font-semibold">The solution designed</h2>
          <ul className="mt-6 space-y-4">{actions.map(item=><li key={item} className="border-l-2 border-ink pl-5 leading-8 text-muted">{item}</li>)}</ul></div>
          <div><h2 className="font-display text-3xl font-semibold">What this case demonstrates</h2>
          <p className="mt-5 leading-8 text-muted">The ability to translate an operational process into tracking rules and usable interfaces. It documents the system design, not independently measured commercial outcomes.</p>
          <p className="mt-6 leading-8 text-muted">The software itself is also presented on <a href="https://www.lyanstudio.com/work.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">Lyan Studio</a>.</p></div>
        </div>
      </div></section>
    </main><SiteFooter locale="en" /></>
  );
}
