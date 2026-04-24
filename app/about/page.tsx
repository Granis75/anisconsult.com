import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | Operations Systems Specialist | AnisConsult",
  description:
    "Operations perspective built inside real environments where execution matters, friction repeats and clearer systems improve the work.",
};

const focusItems = [
  {
    title: "Systems",
    detail: "Built to remove recurring friction.",
  },
  {
    title: "Ownership",
    detail: "Clearer responsibility keeps work moving.",
  },
  {
    title: "Execution",
    detail: "The work should move properly every day.",
  },
] as const;

const backgroundItems = [
  "Guests waiting",
  "Vehicles moving",
  "Incidents happening",
  "Money flowing",
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
                Operations Systems Specialist
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                I come from operations first.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                My perspective was built inside environments where execution matters daily: guests waiting, vehicles moving, incidents happening, money flowing.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Tools came later — as a way to remove recurring friction.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Today I focus on cleaner systems, clearer ownership and work that moves properly.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/work" className="premium-cta h-12 px-6">
                  View Work
                </Link>
                <Link href="/#contact" className="premium-cta-outline h-12 px-6">
                  Connect
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
                    Cleaner systems.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    Clearer ownership. Better execution.
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
