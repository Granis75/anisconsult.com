import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kepler Express Ops — Case Study | anisconsult",
  description:
    "A logistics operations system designed to replace Excel, calls, and manual tracking with a structured operational workflow.",
};

const sectionLinks = [
  { label: "Context", href: "#context" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Product", href: "#product" },
  { label: "Impact", href: "#impact" },
  { label: "Thinking", href: "#product-thinking" },
] as const;

const contextPoints = [
  "Small logistics company running daily missions with a lean team.",
  "Excel, paper notes, and calls were doing the work of a system.",
  "Expenses were tracked manually, often after the mission was already complete.",
  "There was no reliable view of costs or profitability at mission level.",
] as const;

const problemItems = [
  {
    title: "No real-time visibility on missions",
    text: "Execution status depended on calls, memory, and scattered files instead of one readable operational view.",
  },
  {
    title: "Driver expenses unmanaged",
    text: "Fuel, tolls, and mission costs were advanced in the field without clear ownership or follow-up.",
  },
  {
    title: "Vehicle maintenance not tracked",
    text: "Operational continuity relied on vans, but maintenance and readiness were not part of the same system.",
  },
  {
    title: "Invoicing disconnected from operations",
    text: "Billing happened outside the mission flow, making revenue follow-up slower and less reliable.",
  },
] as const;

const flowSteps = ["Client", "Mission", "Expense", "Invoice", "Payment"] as const;

const solutionItems = [
  {
    title: "Structured data model",
    text: "Each client, mission, expense, invoice, and payment belongs to the same chain instead of living in separate files.",
  },
  {
    title: "Centralized workflows",
    text: "Operational actions move through one system, from intake to delivery tracking to billing follow-up.",
  },
  {
    title: "Operational dashboard",
    text: "The dashboard surfaces active missions, billing state, maintenance needs, and pending actions in one place.",
  },
  {
    title: "Expense tracking and profitability logic",
    text: "Mission costs are attached directly to execution, with clear separation between driver advances and company expenses.",
  },
] as const;

const impactItems = [
  {
    title: "Improved clarity",
    text: "Operations became easier to read, follow, and coordinate without relying on scattered manual updates.",
  },
  {
    title: "Reduced manual tracking",
    text: "Daily follow-up no longer depended on Excel sheets, paper notes, and repeated phone calls.",
  },
  {
    title: "Better cost visibility",
    text: "Expenses could be understood in context, with mission-level profitability becoming readable instead of assumed.",
  },
  {
    title: "Structured operations",
    text: "The business moved from fragmented handling to a more consistent operating system.",
  },
] as const;

const thinkingItems = [
  {
    title: "Simplicity over features",
    text: "The priority was not to add modules. It was to make the core logistics chain usable every day.",
  },
  {
    title: "Consistency over exceptions",
    text: "A clear system matters more than flexible but messy handling. The structure had to stay readable under pressure.",
  },
  {
    title: "Built for real constraints",
    text: "The product reflects drivers, missions, expenses, vehicles, and invoicing as they actually behave in a small logistics company.",
  },
] as const;

export default function KeplerExpressCaseStudyPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-ink antialiased">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
            <div className="max-w-5xl">
              <SectionKicker label="Case Study" />
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-black/40">
                Kepler Express Ops · Logistics Operations System
              </p>
              <h1 className="mt-5 max-w-5xl text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-ink sm:text-5xl lg:text-6xl">
                Turning fragmented logistics operations into a structured
                system.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                A real-world system designed to replace Excel, calls, and
                manual tracking in a small logistics company.
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

        <section id="context" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
              <div className="max-w-2xl">
                <SectionKicker label="Context" />
                <p className="mt-6 text-base leading-8 text-ink sm:text-lg">
                  A small logistics company was running core operations through
                  spreadsheets, paper, and calls. Costs existed, but not as a
                  reliable system. The business could execute missions, yet it
                  lacked a clear operational structure behind them.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {contextPoints.map((item) => (
                  <article key={item} className="border-t border-line pt-4">
                    <p className="text-sm leading-7 text-muted sm:text-base">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Problem" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                Key operating gaps were visible immediately.
              </p>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {problemItems.map((item) => (
                <article key={item.title} className="border-t border-line pt-4">
                  <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="Solution" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                The product was designed around one connected operational chain.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Client data, mission execution, expenses, invoicing, and
                payments were brought into one logic so each step could inform
                the next without manual reconciliation.
              </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-line bg-surface p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-3">
                {flowSteps.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink">
                      {item}
                    </span>
                    {index < flowSteps.length - 1 ? (
                      <span className="text-sm text-black/25">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {solutionItems.map((item) => (
                <article key={item.title} className="border-t border-line pt-4">
                  <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="product" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="Product" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                A compact product layer for daily operations.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              <VisualPanel
                label="Dashboard"
                title="One operational view instead of fragmented updates."
                description="The dashboard gives a live read on active missions, pending invoices, maintenance signals, and expense pressure without forcing teams back into spreadsheets."
              >
                <DashboardPreview />
              </VisualPanel>

              <VisualPanel
                label="Missions"
                title="Every mission becomes a structured unit of execution."
                description="Mission records connect the client, route, vehicle, timeline, and billing state so operations and admin are working from the same source."
                reverse
              >
                <MissionsPreview />
              </VisualPanel>

              <VisualPanel
                label="Expenses"
                title="Cost tracking is attached to the mission, not handled after the fact."
                description="Expenses are separated by owner, visible in context, and usable for mission profitability instead of remaining scattered receipts and assumptions."
              >
                <ExpensesPreview />
              </VisualPanel>
            </div>
          </div>
        </section>

        <section id="impact" className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <SectionKicker label="Impact" />
              <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                The result was better structure, not more software.
              </p>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {impactItems.map((item) => (
                <article key={item.title} className="border-t border-line pt-4">
                  <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="product-thinking"
          className="border-b border-line bg-surface"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-4xl">
              <SectionKicker label="Product Thinking" />
              <p className="mt-6 text-base leading-8 text-ink sm:text-lg">
                This was not approached as a generic SaaS tool. The product was
                shaped around a specific operating reality, with consistency,
                adoption, and day-to-day usefulness taking priority over feature
                volume.
              </p>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-3">
              {thinkingItems.map((item) => (
                <article key={item.title} className="border-t border-line pt-4">
                  <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                Back to home →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

type VisualPanelProps = {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
  reverse?: boolean;
};

function VisualPanel({
  label,
  title,
  description,
  children,
  reverse = false,
}: VisualPanelProps) {
  return (
    <article className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center">
      <div className={reverse ? "lg:order-2" : undefined}>{children}</div>

      <div className={reverse ? "lg:order-1" : undefined}>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
          {label}
        </p>
        <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}

function DashboardPreview() {
  const summary = [
    { label: "Active missions", value: "Live" },
    { label: "Pending invoices", value: "Queued" },
    { label: "Vehicles to review", value: "Due" },
  ] as const;

  const liveItems = [
    {
      title: "Regional mission",
      meta: "Driver assigned · documents ready",
    },
    {
      title: "Priority delivery",
      meta: "Expense submitted · invoice pending",
    },
    {
      title: "Cross-border mission",
      meta: "Delay flagged · client updated",
    },
  ] as const;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03),0_18px_40px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between border-b border-line bg-surface px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-ink">Operations dashboard</p>
          <p className="mt-1 text-xs leading-5 text-muted">
            Live mission, cost, and billing visibility.
          </p>
        </div>
        <span className="rounded-full border border-line bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
          Today
        </span>
      </div>

      <div className="p-5 lg:p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {summary.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.15rem] border border-line bg-surface px-4 py-4"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-bold tracking-[-0.04em] text-ink">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <div className="rounded-[1.35rem] border border-line bg-surface p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Mission watch</p>
              <span className="text-xs font-medium text-muted">Updated live</span>
            </div>

            <div className="mt-4 space-y-3">
              {liveItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1rem] border border-line bg-white px-4 py-3"
                >
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-xs leading-5 text-muted">{item.meta}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.35rem] border border-line bg-surface p-4">
              <p className="text-sm font-semibold text-ink">Billing state</p>
              <div className="mt-4 space-y-3">
                <ProgressRow
                  label="Ready to invoice"
                  value="Connected"
                  width="w-3/4"
                />
                <ProgressRow
                  label="Awaiting payment"
                  value="Follow-up"
                  width="w-1/2"
                />
                <ProgressRow label="Paid" value="Closed" width="w-1/3" />
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-line bg-ink px-4 py-4 text-white">
              <p className="text-sm font-semibold">Attention points</p>
              <div className="mt-4 space-y-2 text-sm leading-6 text-white/80">
                <p>Toll expense still missing for the active mission.</p>
                <p>Assigned van reaches service check this week.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionsPreview() {
  const missions = [
    {
      code: "Mission",
      client: "Pharma client",
      route: "Regional delivery",
      status: "In transit",
      tone: "bg-ink text-white",
    },
    {
      code: "Mission",
      client: "Retail client",
      route: "Priority route",
      status: "Ready to invoice",
      tone: "bg-white text-ink",
    },
    {
      code: "Mission",
      client: "Medical client",
      route: "Cross-border route",
      status: "Expense review",
      tone: "bg-white text-ink",
    },
  ] as const;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03),0_18px_40px_rgba(15,23,42,0.05)]">
      <div className="border-b border-line bg-surface px-5 py-4">
        <p className="text-sm font-semibold text-ink">Mission board</p>
        <p className="mt-1 text-xs leading-5 text-muted">
          Client, route, execution, and billing state in one record.
        </p>
      </div>

      <div className="space-y-3 p-5 lg:p-6">
        {missions.map((mission) => (
          <div
            key={mission.code}
            className="rounded-[1.35rem] border border-line bg-surface p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {mission.code}
                </p>
                <p className="mt-2 text-base font-semibold text-ink">
                  {mission.client}
                </p>
                <p className="mt-2 text-sm text-muted">{mission.route}</p>
              </div>

              <span
                className={`rounded-full border border-line px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${mission.tone}`}
              >
                {mission.status}
              </span>
            </div>

            <div className="mt-4 grid gap-3 border-t border-line pt-4 sm:grid-cols-3">
              <MissionMeta label="Vehicle" value="Assigned" />
              <MissionMeta label="Expense log" value="Linked" />
              <MissionMeta label="Invoice" value="Draft ready" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpensesPreview() {
  const columns = [
    {
      title: "Driver advances",
      items: [
        { label: "Fuel", value: "Submitted" },
        { label: "Tolls", value: "Pending receipt" },
      ],
    },
    {
      title: "Company expenses",
      items: [
        { label: "Vehicle rental", value: "Logged" },
        { label: "Maintenance", value: "Scheduled" },
      ],
    },
  ] as const;

  const totals = [
    { label: "Mission revenue", value: "Linked to mission" },
    { label: "Recorded expenses", value: "Visible by owner" },
    { label: "Mission margin", value: "Readable before invoicing" },
  ] as const;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03),0_18px_40px_rgba(15,23,42,0.05)]">
      <div className="border-b border-line bg-surface px-5 py-4">
        <p className="text-sm font-semibold text-ink">
          Expenses and profitability
        </p>
        <p className="mt-1 text-xs leading-5 text-muted">
          Costs stay linked to execution and ownership.
        </p>
      </div>

      <div className="p-5 lg:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {columns.map((column) => (
            <div
              key={column.title}
              className="rounded-[1.35rem] border border-line bg-surface p-4"
            >
              <p className="text-sm font-semibold text-ink">{column.title}</p>
              <div className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-[1rem] border border-line bg-white px-4 py-3"
                  >
                    <span className="text-sm text-muted">{item.label}</span>
                    <span className="text-sm font-semibold text-ink">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[1.35rem] border border-line bg-ink px-5 py-5 text-white">
          <div className="grid gap-4 sm:grid-cols-3">
            {totals.map((item) => (
              <div key={item.label}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/55">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type ProgressRowProps = {
  label: string;
  value: string;
  width: string;
};

function ProgressRow({ label, value, width }: ProgressRowProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-xs font-medium text-muted">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white">
        <div className={`h-full rounded-full bg-ink ${width}`} />
      </div>
    </div>
  );
}

type MissionMetaProps = {
  label: string;
  value: string;
};

function MissionMeta({ label, value }: MissionMetaProps) {
  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
