import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sectionLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Challenge", href: "#challenge" },
  { label: "Transformation", href: "#transformation" },
  { label: "Results", href: "#results" },
  { label: "Architecture", href: "#architecture" },
] as const;

const introBlocks = [
  {
    label: "Business context",
    text: "23 units · ~€1.2M annual revenue · aging model requiring repositioning and operational reset.",
  },
  {
    label: "Transformation scope",
    text: "Experience, CRM, payments, internal tools, multilingual information flow, access systems and reporting.",
  },
  {
    label: "Execution approach",
    text: "Reduce friction, increase autonomy, centralize information and build cleaner operating workflows.",
  },
  {
    label: "Outcome",
    text: "Higher reputation, stronger customer experience, reduced admin load and successful acquisition of a new market.",
  },
] as const;

const executiveKpis = [
  {
    label: "Review score",
    value: "7.6 → 9.2",
    meta: "+1.6 points",
  },
  {
    label: "TripAdvisor rank",
    value: "450 → Top 30",
    meta: "Visibility breakthrough",
  },
  {
    label: "Admin time saved",
    value: "~10h",
    meta: "per week",
  },
  {
    label: "New market revenue",
    value: "50%",
    meta: "from Korean clientele",
  },
] as const;

const strategicMoves = [
  "Shift from manual presence-heavy operations toward guided autonomy.",
  "Replace fragile magnetic access with connected RFID / Bluetooth infrastructure.",
  "Upgrade customer information delivery through multilingual QR-based digital content.",
  "Build CRM-enabled personalization using PMS customer data and service signals.",
] as const;

const challengeBefore = [
  "Post-COVID business with aging operating logic and weak differentiation.",
  "24/7 front-desk dependence with high manual coordination.",
  "Magnetic cards prone to demagnetization and repeated customer friction.",
  "Static room directories with limited language coverage.",
  "Fragmented customer information and low personalization capacity.",
  "Underused reputation and weak penetration of high-value international demand.",
] as const;

const challengeTarget = [
  "Experience closer to a premium serviced living model than a classic hospitality setup.",
  "Autonomy-first operating model with focused human support from 9am to 6pm.",
  "Connected access, simplified onboarding and smoother information delivery.",
  "CRM-backed customer follow-up using preferences, arrival time and special notes.",
  "Multilingual digital communication at scale.",
  "Better reputation outcomes and acquisition of a new Korean customer base.",
] as const;

const transformationLevers = [
  {
    title: "Experience & identity",
    description:
      "Reframed the environment around a more residential, premium and welcoming experience inspired by Scandinavian coliving principles.",
    points: [
      "Less transactional, more “feel at home”.",
      "Clearer identity beyond a standard lodging product.",
      "Customer journey redesigned around comfort and clarity.",
    ],
  },
  {
    title: "Access & autonomy",
    description:
      "Replaced unreliable magnetic card systems with connected RFID / Bluetooth access and reduced physical friction in the arrival journey.",
    points: [
      "Lower support load from card failures.",
      "More dependable access experience.",
      "Operating model no longer tied to 24/7 desk presence.",
    ],
  },
  {
    title: "Multilingual information layer",
    description:
      "Converted static printed room documentation into QR-driven HTML pages with multilingual support for better customer understanding and smoother information transfer.",
    points: [
      "Improved self-service information access.",
      "Reduced repeated front-desk explanations.",
      "Made communication more scalable for international clientele.",
    ],
  },
  {
    title: "CRM-enabled personalization",
    description:
      "Built a customer experience layer that retrieved PMS data such as arrival times, preferences, special notes and birthdays to improve follow-up and reputation outcomes.",
    points: [
      "Better preparation before customer arrival.",
      "More personalized interactions.",
      "Direct support for e-reputation strategy.",
    ],
  },
  {
    title: "Payments & process simplification",
    description:
      "Integrated payments and internal process logic to reduce administrative friction and simplify recurring operational tasks.",
    points: [
      "Cleaner financial flow.",
      "Reduced repetitive administrative handling.",
      "More consistent execution across the team.",
    ],
  },
  {
    title: "Internal tools & communication",
    description:
      "Introduced internal tools and communication channels to improve autonomy, execution quality and day-to-day coordination.",
    points: [
      "Faster information circulation.",
      "Clearer operating workflows.",
      "More stable team execution.",
    ],
  },
] as const;

const performanceKpis = [
  {
    label: "Reputation score",
    value: "9.2",
    meta: "from 7.6 previously",
  },
  {
    label: "TripAdvisor ranking",
    value: "Top 30",
    meta: "from around 450th",
  },
  {
    label: "Admin time reduction",
    value: "~10h",
    meta: "saved each week",
  },
  {
    label: "New market contribution",
    value: "50%",
    meta: "revenue from Korean clientele",
  },
] as const;

const resultIndicators = [
  "Review score",
  "Reputation rank",
  "Operational efficiency",
  "New market share",
] as const;

const architectureFlow = [
  {
    title: "Acquisition",
    text: "Website · Platforms · Naver",
  },
  {
    title: "Reservation Layer",
    text: "Booking & customer intake",
  },
  {
    title: "PMS / Data",
    text: "Arrival time · notes · preferences",
  },
  {
    title: "CRM Experience",
    text: "Follow-up & personalization",
  },
  {
    title: "Payment & Access",
    text: "Automation · RFID · Bluetooth",
  },
  {
    title: "Support & Reporting",
    text: "Internal tools · dashboards",
  },
] as const;

const operationalChanges = [
  "Less dependence on permanent human presence.",
  "Clearer information delivery before and during the stay.",
  "More stable access infrastructure.",
  "More structured communication inside the team.",
  "Better preparation and follow-up using customer data signals.",
] as const;

const commercialChanges = [
  "Reputation moved from acceptable to high-performing.",
  "Experience became distinctive rather than generic.",
  "Korean market acquisition created a major new revenue source.",
  "The business gained stronger credibility with international customers.",
  "Operations became more scalable without increasing friction proportionally.",
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
                Case Study — Business Systems Transformation
              </h1>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                From aging operations to a structured, data-driven service model.
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

        <section id="overview" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {introBlocks.map((item) => (
                <article
                  key={item.label}
                  className="rounded-3xl border border-line bg-surface p-7"
                >
                  <p className="text-sm font-semibold text-muted">{item.label}</p>
                  <p className="mt-4 text-sm leading-7 text-ink">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Executive KPI Snapshot
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {executiveKpis.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-3xl border border-line bg-white p-7 shadow-card"
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

            <div className="mt-16 rounded-[2rem] border border-line bg-surface p-8 lg:p-10">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Core Strategic Moves
                </p>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {strategicMoves.map((item) => (
                  <article
                    key={item}
                    className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-ink"
                  >
                    {item}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="challenge" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Initial challenge
              </p>
              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The objective was not to operate a legacy environment as-is, but to
                rebuild it into a more coherent system: cleaner customer flows,
                stronger identity, more autonomy and better operational control.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-line bg-surface p-8">
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                  Before
                </h2>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  {challengeBefore.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-card">
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                  Design target
                </h2>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  {challengeTarget.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="transformation" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Transformation levers
              </p>
              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The work combined operating model redesign, infrastructure
                modernization, customer experience systems, multilingual
                communication and performance visibility.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {transformationLevers.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-line bg-white p-8 shadow-card"
                >
                  <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                    {item.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Performance dashboard
              </p>
              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The transformation produced operational, reputational and
                commercial effects. The business became easier to run, easier to
                understand and more attractive to a broader international customer
                base.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {performanceKpis.map((item) => (
                <article
                  key={item.label}
                  className="rounded-3xl border border-line bg-surface p-7"
                >
                  <p className="text-sm font-medium text-muted">{item.label}</p>
                  <p className="mt-4 text-3xl font-extrabold tracking-tighter2 text-ink">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.meta}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[2rem] border border-line bg-surface p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Transformation Results
                </p>
                <p className="mt-5 text-sm leading-7 text-muted">
                  Before / after view across reputation, operations and market
                  reach
                </p>

                <div className="mt-8 rounded-3xl border border-line bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Dashboard View
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-ink">
                    Key indicators
                  </h2>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {resultIndicators.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-line bg-surface px-4 py-4 text-sm font-medium text-ink"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <div className="space-y-8">
                <article className="rounded-[2rem] border border-line bg-white p-8 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Highlight
                  </p>
                  <p className="mt-5 text-sm font-semibold text-muted">
                    Reputation uplift
                  </p>
                  <p className="mt-3 text-5xl font-extrabold tracking-tighter2 text-ink">
                    Top 30
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    TripAdvisor position
                  </p>
                </article>

                <article className="rounded-[2rem] border border-line bg-surface p-8">
                  <p className="text-base leading-8 text-muted">
                    Major shift from low visibility into a high-performing
                    reputation tier.
                  </p>
                  <p className="mt-6 text-base leading-8 text-muted">
                    The outcome was not just better service delivery. It was a
                    cleaner operating system: less friction, more autonomy,
                    stronger personalization and clearer performance visibility.
                  </p>
                </article>
              </div>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-line bg-surface p-8">
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                  What changed operationally
                </h2>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  {operationalChanges.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[2rem] border border-line bg-white p-8 shadow-card">
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                  What changed commercially
                </h2>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  {commercialChanges.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="architecture" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                System architecture
              </p>
              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                The value of the work sits in the orchestration layer: customer
                information, access, support, communication and performance were
                no longer isolated functions but part of one connected operating
                logic.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {architectureFlow.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-line bg-white p-7 shadow-card"
                >
                  <p className="text-sm font-semibold text-muted">{item.title}</p>
                  <p className="mt-4 text-base leading-7 text-ink">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 rounded-[2rem] border border-line bg-white p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Closing note
              </p>
              <p className="mt-5 max-w-5xl text-base leading-8 text-muted">
                This page is intentionally framed as a business systems
                transformation case study rather than a hospitality profile. The
                focus is on operating model redesign, customer experience systems,
                automation, multilingual communication and performance outcomes.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Retour à l’accueil
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
