import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | AnisConsult — Operational Systems Lab",
  description:
    "An Operational Systems Lab built from real field experience in hospitality, serviced residences, logistics and business operations.",
};

const focusItems = [
  {
    title: "Operational software prototypes",
    detail: "Small, focused products shaped around real operating problems.",
  },
  {
    title: "Internal workflow tools",
    detail: "Tools that make ownership, status and next actions easier to see.",
  },
  {
    title: "AI-powered operational workflows",
    detail: "Practical workflows for follow-up, tracking, reporting and support.",
  },
  {
    title: "Hospitality and service-business systems",
    detail: "Systems for reservations, housekeeping, incidents, payments and daily control.",
  },
  {
    title: "Dashboards and tracking layers",
    detail: "Simple visibility layers for work that is currently hidden across tools.",
  },
  {
    title: "Product experiments",
    detail: "Experiments built from operating pain, tested against real workflow constraints.",
  },
] as const;

const backgroundItems = [
  "Hospitality & serviced residences",
  "Operations & workflow management",
  "Logistics & field coordination",
  "Reservations, incidents & housekeeping",
  "Payments, suppliers & reporting",
  "Business software & operational systems",
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
                Operational Systems Lab
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                I build operational software for service businesses — informed by the operations I've run myself.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                AnisConsult started from a simple operational problem: service businesses often run on scattered tools, manual follow-up and invisible work.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                I'm a product builder focused on operational software, with deep domain experience across hospitality, serviced residences, logistics and daily business operations.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                I build for service operations because I've run them — serviced-residence workflows, logistics coordination, incident resolution and daily work inside business software. That experience made one thing obvious: most operational problems are not people problems. They are visibility problems.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Having handled incidents, reservations, payments, suppliers, housekeeping, reporting and back-office workflows myself, I now build the systems I wish those operations had — ones that make the work visible and easy to run.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/#ops-core" className="premium-cta h-12 px-6">
                  Explore the systems
                </Link>
                <Link href="/work" className="premium-cta-outline h-12 px-6">
                  View the work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start lg:gap-8">
              <article className="premium-card p-8 lg:p-10">
                <SectionKicker label="Why I build what I build" />
                <div className="mt-6 grid gap-5">
                  <p className="text-base leading-8 text-ink sm:text-lg">
                    One pattern was constant across those operations: most teams do not lack effort. They lack a usable operating layer.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    Work lives across messages, spreadsheets, PMS tools, emails and memory. AnisConsult exists to turn that scattered work into systems people can actually run.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    That field experience includes a 23-unit serviced residence, PMS and hospitality systems exposure, logistics workflows, operational visibility work, reduced manual follow-up and internal tools built around real constraints.
                  </p>
                  <p className="text-base leading-8 text-muted sm:text-lg">
                    Current product directions include StayOps Core for hospitality operations, MyBi for business administration, and AI-assisted workflow tooling. Each project explores the same question: how can operational work become more visible, more structured and easier to execute?
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
            <div className="mb-10 max-w-3xl">
              <SectionKicker label="What AnisConsult builds" />
            </div>
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

        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
            <p className="max-w-2xl text-sm leading-7 text-muted">
              This is not a traditional consulting firm built around slide decks and abstract recommendations. The focus is on practical systems, working tools and visible operational flows.{" "}
              <Link href="/work" className="font-medium text-ink underline-offset-2 hover:underline">
                View the work.
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
