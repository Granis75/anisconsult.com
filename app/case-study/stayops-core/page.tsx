import type { Metadata } from "next";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "StayOps Core — PMS Prototype | AnisConsult",
  description:
    "StayOps Core is a functional PMS prototype for boutique hotels and serviced apartments — reservations, room assignment, billing, housekeeping readiness and invoice preview in one clear workspace.",
};

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "Workflow", href: "#workflow" },
  { label: "Stack", href: "#stack" },
  { label: "Scope", href: "#scope" },
] as const;

const problemItems = [
  "Many PMS tools are powerful but too complex for small hospitality teams",
  "Modern alternatives are clean but rigid — no room to adapt the workflow",
  "Room status, guest balances and housekeeping readiness are tracked separately",
  "Billing, invoicing and checkout are disconnected from the reservation flow",
  "Front-desk teams have no single clear workspace for the day's work",
] as const;

const featureAreas = [
  {
    title: "Reservation workflow",
    detail: "Create, assign and manage reservations with guest context from one view.",
  },
  {
    title: "Room assignment",
    detail: "Link reservations to specific rooms with readiness status at a glance.",
  },
  {
    title: "Check-in / Checkout",
    detail: "Guided check-in and checkout flow with status tracking throughout.",
  },
  {
    title: "Billing control",
    detail: "Add charges, track balances and manage payments against the stay.",
  },
  {
    title: "Invoice preview",
    detail: "Preview and generate invoices at checkout without leaving the workflow.",
  },
  {
    title: "Housekeeping readiness",
    detail: "Track room cleaning status linked to departures and upcoming arrivals.",
  },
  {
    title: "Guest requests",
    detail: "Lightweight request logging connected to the active stay.",
  },
  {
    title: "Integration readiness",
    detail: "Prepared for Supabase, Stripe and webhook-based integrations.",
  },
] as const;

const stackItems = [
  { label: "Framework", value: "Next.js (App Router)" },
  { label: "Language", value: "TypeScript" },
  { label: "Styling", value: "Tailwind CSS" },
  { label: "Data layer", value: "localStorage mock store" },
  { label: "Integration-ready", value: "Supabase · Stripe · Webhooks" },
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
    role: "PMS Prototype",
    covers: "Reservations, room assignment, check-in / checkout, billing, invoicing and front-desk clarity.",
  },
  {
    name: "Ops Core",
    role: "Operations Layer",
    covers: "Incidents, vendor management, maintenance, expenses and daily execution follow-up.",
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
              <SectionKicker label="PMS Prototype" />
              <h1 className="mt-6 max-w-5xl font-display text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
                StayOps Core
              </h1>
              <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                Hospitality SaaS / PMS Prototype / Product Design
              </p>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                A functional PMS prototype for boutique hotels and serviced apartments, designed around reservations, rooms, billing and daily front-desk clarity.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Built from real front-desk and operations experience. StayOps Core demonstrates how a small hospitality team can manage arrivals, departures, room assignment, guest balances, housekeeping readiness and billing from one clear workspace.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://stayops.anisconsult.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View Live Prototype
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-[gap,color] duration-200 hover:gap-3 hover:text-ink"
                >
                  ← Back to Work
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
                <SectionKicker label="Context" />
                <p className="mt-6 text-base leading-8 text-ink">
                  Hospitality operations experience reveals a consistent gap: small teams are caught between PMS tools that are too complex to adapt and modern products that are too rigid to extend. StayOps Core is a prototype built to show what the operational PMS core could look like when clarity comes first.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  What it demonstrates
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  A complete reservation-to-invoice workflow — from arrival to checkout — in one clear front-desk workspace. Reservation management, room status, guest billing and housekeeping readiness are connected rather than scattered.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Problem" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Small hospitality teams are caught between tools that are too complex and tools that are too rigid.
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
              <SectionKicker label="Workflow" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                The full front-desk flow in one connected workspace.
              </p>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                Core Workflow
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
              <SectionKicker label="Stack" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Built lean. Integration-ready.
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
                  Prototype and product demonstration. Not production PMS software.
                </p>
                <p className="mt-5 text-base leading-8 text-muted">
                  StayOps Core is built to demonstrate a coherent PMS workflow for boutique hotels and serviced apartments. It uses a localStorage mock store, not a live database, and is not intended for production use.
                </p>
              </article>

              <div className="flex flex-col gap-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Two distinct products
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
                View Live Prototype
              </a>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-[gap,color] duration-200 hover:gap-3 hover:text-ink"
              >
                ← Back to Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
