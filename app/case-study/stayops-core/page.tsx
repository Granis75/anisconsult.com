import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "StayOps Core — Hospitality Operations Prototype | AnisConsult",
  description:
    "StayOps Core is a prototype workspace in development for serviced residences and small hospitality operators.",
};

const sectionLinks = [
  { label: "Operations", href: "#context" },
  { label: "For", href: "#problem" },
  { label: "Covers", href: "#workflow" },
  { label: "Status", href: "#stack" },
  { label: "Scope", href: "#scope" },
] as const;

const problemItems = [
  "Serviced residences",
  "Small hospitality operators",
  "Hybrid hotel/apartment operations",
  "Teams that need operational clarity without enterprise complexity",
] as const;

const featureAreas = [
  {
    title: "Reservations",
    detail: "Create, assign and manage reservations with guest context from one view.",
  },
  {
    title: "Rooms",
    detail: "Link reservations to rooms with readiness and occupancy context.",
  },
  {
    title: "Housekeeping",
    detail: "Track room cleaning readiness around departures and upcoming arrivals.",
  },
  {
    title: "Incidents",
    detail: "Log operational issues and keep follow-up visible.",
  },
  {
    title: "Supplier follow-up",
    detail: "Keep supplier-related operational follow-up connected to the daily workflow.",
  },
  {
    title: "Operational reporting",
    detail: "Keep daily operating information easier to review and act on.",
  },
  {
    title: "Activity visibility",
    detail: "See what moved, what is waiting and what needs attention.",
  },
  {
    title: "Payment/billing visibility",
    detail: "Track balances, charges and invoice context against the stay.",
  },
] as const;

const stackItems = [
  {
    label: "Current capabilities",
    value: "Reservations, rooms, housekeeping, incidents, balances, activity visibility and reporting.",
  },
  {
    label: "Planned integrations",
    value: "Payments, messaging, smart locks, channel connectivity and automation workflows.",
  },
] as const;

const flowSteps = [
  "Reservation",
  "Room Assignment",
  "Check-in",
  "Charges",
  "Payment",
  "Checkout",
  "Invoice Preview",
] as const;

const distinctionItems = [
  {
    name: "StayOps Core",
    role: "Prototype in development",
    covers: "Reservations, rooms, housekeeping, incidents, supplier follow-up, operational reporting and activity visibility.",
  },
  {
    name: "Ops Core",
    role: "Concept exploration",
    covers: "Tasks, incidents, follow-up, reporting and internal workflows for service-based businesses.",
  },
] as const;

export default function StayOpsCasePage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="Prototype in development" />
              <h1 className="mt-6 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                StayOps Core
              </h1>
              <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                Hospitality operations / Serviced residences / Small operators
              </p>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                A prototype workspace in development for serviced residences and small operators.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                StayOps Core is built from real serviced-residence constraints. It explores reservations, rooms, housekeeping, incidents, supplier follow-up and reporting in one practical workspace.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://stayops.anisconsult.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Open the demo
                </a>
                <Link
                  href="/#systems-prototypes"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-[gap,color] duration-200 hover:gap-3 hover:text-ink"
                >
                  View systems & prototypes
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
            <nav
              aria-label="Section navigation"
              className="-mx-1 flex gap-6 overflow-x-auto px-1"
            >
              {sectionLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-muted transition hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section id="context" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-line bg-surface p-8">
                <SectionKicker label="Built from real operations" />
                <p className="mt-6 text-base leading-8 text-ink">
                  The prototype direction comes from daily operational experience managing serviced residence workflows: arrivals, departures, rooms, housekeeping, incidents, payments, suppliers and reporting.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Why StayOps exists
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  StayOps Core was created to solve a simple operational problem.
                </p>
                <p className="mt-5 text-base leading-8 text-ink">
                  Small hospitality teams often manage reservations, housekeeping, incidents, payments and daily follow-up across multiple tools, messages and spreadsheets.
                </p>
                <p className="mt-5 text-base leading-8 text-ink">
                  StayOps explores how that daily work could sit in one focused workspace designed around ownership, status and follow-up.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Who it is for" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Built for operators who need practical clarity without enterprise complexity.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {problemItems.map((item) => (
                <article
                  key={item}
                  className="rounded-[2rem] border border-line bg-white p-6"
                >
                  <p className="text-sm leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="What it covers" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                The core operating layer connects daily hospitality work that is usually spread across tools and memory.
              </p>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                Core workflow
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {flowSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink">
                      {step}
                    </span>
                    {index < flowSteps.length - 1 ? (
                      <span className="text-sm text-black/25">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {featureAreas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-line bg-surface p-8"
                >
                  <p className="text-sm font-semibold leading-6 text-ink">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Prototype status" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Prototype in development.
              </p>
            </div>

            <div className="mt-10 max-w-2xl">
              {stackItems.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between border-t border-line py-4">
                  <p className="text-sm font-semibold text-ink">{item.label}</p>
                  <p className="text-sm leading-7 text-muted">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="scope" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10">
                <SectionKicker label="Scope" />
                <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  Prototype in development with a public demo workspace.
                </p>
                <p className="mt-5 text-base leading-8 text-muted">
                  StayOps Core demonstrates a practical workspace for serviced residences and small hospitality operators. No real hotel, guest or payment data is implied.
                </p>
                <p className="mt-5 text-base leading-8 text-muted">
                  The focus is operational visibility, room readiness, reservation management, housekeeping coordination and daily execution.
                </p>
                <p className="mt-5 text-base leading-8 text-muted">
                  Demo workspace. No real hotel, guest or payment data is implied. Payments, messaging, smart locks and channel connectivity remain planned integrations.
                </p>
              </article>

              <div className="flex flex-col gap-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Related systems
                </p>
                {distinctionItems.map((item) => (
                  <article
                    key={item.name}
                    className="rounded-[2rem] border border-line bg-white px-6 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <p className="text-sm font-semibold text-ink">
                      {item.name}
                      <span className="ml-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-black/40">
                        {item.role}
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.covers}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-6">
              <a
                href="https://stayops.anisconsult.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Open the demo
              </a>
              <Link
                href="/#systems-prototypes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-[gap,color] duration-200 hover:gap-3 hover:text-ink"
              >
                View other systems
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
