import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sectionLinks = [
  { label: "KPI", href: "#kpi" },
  { label: "Context", href: "#context" },
  { label: "System", href: "#system" },
  { label: "Transformation", href: "#transformation" },
  { label: "Results", href: "#results" },
] as const;

const executiveKpis = [
  {
    label: "Review Score",
    value: "9.2",
    meta: "from 7.6",
  },
  {
    label: "TripAdvisor",
    value: "Top 30",
    meta: "from ~450",
  },
  {
    label: "Admin time saved",
    value: "~10h/week",
    meta: "saved",
  },
  {
    label: "New market revenue",
    value: "50%",
    meta: "from a new market",
  },
] as const;

const systemFlow = [
  {
    title: "Acquisition",
    text: "Website & platforms",
  },
  {
    title: "Booking",
    text: "Booking intake",
  },
  {
    title: "Data",
    text: "Customer data (PMS)",
  },
  {
    title: "CRM",
    text: "CRM logic (preferences, follow-ups)",
  },
  {
    title: "Access",
    text: "RFID / Bluetooth access",
  },
  {
    title: "Operations",
    text: "Internal tools & reporting",
  },
] as const;

const transformationCards = [
  {
    title: "Experience & Identity",
    text: "Customer journey redesigned around comfort and clarity.",
  },
  {
    title: "Access & Autonomy",
    text: "Operating model no longer tied to 24/7 desk presence.",
  },
  {
    title: "Multilingual Layer",
    text: "Communication made more scalable for international clientele.",
  },
  {
    title: "CRM Logic",
    text: "Better preparation before customer arrival.",
  },
  {
    title: "Payments & Processes",
    text: "Reduced repetitive administrative handling.",
  },
  {
    title: "Internal Tools",
    text: "Clearer operating workflows.",
  },
] as const;

const resultThemes = [
  "Less friction.",
  "More autonomy.",
  "Stronger execution.",
] as const;

export default function VesperCaseStudyPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Operational Systems · CRM · Customer Experience
              </p>

              <h1 className="mt-6 max-w-5xl text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                Business Systems Transformation
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                From aging operations to a structured, data-driven operating model.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Reconstruction of a post-COVID service business through systems
                redesign, customer experience orchestration, process automation,
                multilingual support and operating model simplification.
              </p>
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

        <section id="kpi" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                KPI
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {executiveKpis.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[2rem] border border-line bg-surface p-7 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm font-medium text-muted">{item.label}</p>
                  <p className="mt-4 text-3xl font-extrabold tracking-tighter2 text-ink">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="context" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-line bg-surface p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Context
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  A fragmented operation with heavy front-desk dependence, weak
                  system structure, and limited use of customer data.
                </p>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Target
                </p>
                <p className="mt-6 text-base leading-8 text-ink">
                  A more autonomous, structured and scalable operating model.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="system" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                System
              </p>
              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                Acquisition → Booking → Data → CRM → Access → Operations
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {systemFlow.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-xl font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="transformation" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Transformation
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {transformationCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-line bg-surface p-8"
                >
                  <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)] lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Results
                </p>
                <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                  Operations became easier to run, easier to understand and more
                  scalable.
                </p>
              </article>

              <div className="grid gap-4">
                {resultThemes.map((item) => (
                  <article
                    key={item}
                    className="rounded-[2rem] border border-line bg-white px-6 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <p className="text-sm font-semibold text-ink">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Closing
              </p>
              <p className="mt-5 max-w-4xl text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                This is not a hospitality project.
              </p>
              <p className="mt-4 max-w-4xl text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                This is an operating system redesign.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
