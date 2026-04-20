import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | Operations & Internal Tools Coordinator | Anis",
  description:
    "Hands-on operational work across hospitality and logistics, with retail proof and internal tools shaped by execution.",
};

const focusItems = [
  {
    title: "Execution",
    detail: "Ownership, handoffs and follow-up stay clear.",
  },
  {
    title: "Internal tools",
    detail: "Built to support the work, not sit beside it.",
  },
  {
    title: "Reporting",
    detail: "Status, incidents and money stay readable.",
  },
] as const;

const backgroundItems = [
  "Hospitality",
  "Logistics",
  "Retail proof work",
  "Workflow control",
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="About" />
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-black/42">
                Operations & Internal Tools Coordinator
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                I work inside the operation.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                Execution first. Structure second. Tools where they matter.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                My work starts in the day-to-day: follow-up, handoffs, reporting, incidents and admin.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                I approach tooling from inside the workflow, not as a developer, but as an operator who knows what the workflow needs.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/work" className="premium-cta h-12 px-6">
                  View Work
                </Link>
                <Link href="/#contact" className="premium-cta-outline h-12 px-6">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start lg:gap-8">
              <article className="premium-card p-8 lg:p-10">
                <SectionKicker label="How I Work" />
                <div className="mt-6 grid gap-5">
                  <p className="text-base leading-8 text-ink sm:text-lg">
                    I focus on ownership, control and clean follow-through.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    That usually means tighter coordination, lighter admin and reporting people can trust.
                  </p>
                </div>
              </article>

              <article className="premium-soft-card p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Background
                </p>
                <div className="mt-6 grid gap-4">
                  {backgroundItems.map((item) => (
                    <div key={item} className="border-t border-black/8 pt-4">
                      <p className="text-sm font-semibold leading-7 text-ink/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-3">
              {focusItems.map((item) => (
                <article key={item.title} className="premium-soft-card flex h-full flex-col">
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
