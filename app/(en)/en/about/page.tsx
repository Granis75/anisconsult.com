import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Approach — Anis Allouache",
  description: "Understand actual operations, clarify processes and choose solutions that fit how teams work.",
  alternates: { canonical: "/en/about", languages: { "fr-FR": "/about", "en-US": "/en/about" } },
};
const steps = [
  { title: "Understand", text: "Observe the work, the people involved and the existing tools. Identify where information, time and accountability get lost." },
  { title: "Structure", text: "Clarify each step, the people responsible and the information needed to track progress." },
  { title: "Simplify", text: "Remove duplicate tasks and unnecessary reporting so daily work becomes easier to follow." },
  { title: "Build tools when needed", text: "Design a dashboard, a focused automation or an application when the operational need justifies it." },
] as const;
export default function EnglishApproachPage() {
  return (
    <><SiteHeader /><main className="bg-white text-ink">
      <section className="border-b border-line"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Approach</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Understand first. Then improve.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Working in operational coordination has taught me that a process only works if it fits the constraints people face on the ground. That is also how I approach digital tools.</p>
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
          <h2 className="font-display text-3xl font-semibold">Technology is a means, not the goal.</h2>
          <p className="mt-5 leading-8 text-muted">I can build interfaces and management tools. But not every problem needs new software: clearer procedures and better coordination can be enough.</p>
          <p className="mt-5 leading-8 text-muted">For the software side of my work, see the projects on <a href="https://www.lyanstudio.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">Lyan Studio</a>.</p>
          <Link href="/en/work" className="mt-7 inline-block font-semibold underline underline-offset-4">Explore selected work →</Link>
        </div>
      </section>
    </main><SiteFooter locale="en" /></>
  );
}
