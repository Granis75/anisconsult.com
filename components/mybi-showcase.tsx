"use client";

import { useEffect, useState } from "react";

type Period = "Week" | "Month" | "Quarter";

type Metric = {
  label: string;
  value: string;
  note: string;
};

type ChartPoint = {
  label: string;
  revenue: number;
  collected: number;
};

type Priority = {
  title: string;
  meta: string;
  tone: "warning" | "neutral" | "success";
};

type ActivityItem = {
  id: string;
  kind: string;
  title: string;
  client: string;
  amount: string;
  status: string;
  summary: string;
  details: string[];
};

type Snapshot = {
  metrics: Metric[];
  chart: ChartPoint[];
  payments: {
    paid: string;
    unpaid: string;
    collectionRate: string;
    splits: Array<{
      label: string;
      value: string;
      width: number;
      tone: "dark" | "mid" | "light";
    }>;
  };
  priorities: Priority[];
  activity: ActivityItem[];
};

const PERIODS: Period[] = ["Week", "Month", "Quarter"];
const MODULES = ["Dashboard", "Clients", "Missions", "Invoices", "Payments"];

const SNAPSHOTS: Record<Period, Snapshot> = {
  Week: {
    metrics: [
      { label: "Revenue", value: "€3.2k", note: "+12% vs last week" },
      { label: "Open invoices", value: "€480", note: "2 awaiting payment" },
      { label: "Clients", value: "7", note: "4 active this week" },
      { label: "Payments", value: "9", note: "Latest cleared today" },
    ],
    chart: [
      { label: "Mon", revenue: 46, collected: 30 },
      { label: "Tue", revenue: 52, collected: 39 },
      { label: "Wed", revenue: 60, collected: 42 },
      { label: "Thu", revenue: 78, collected: 57 },
      { label: "Fri", revenue: 66, collected: 48 },
      { label: "Sat", revenue: 34, collected: 25 },
      { label: "Sun", revenue: 29, collected: 18 },
    ],
    payments: {
      paid: "€2.7k",
      unpaid: "€480",
      collectionRate: "84%",
      splits: [
        { label: "Paid", value: "84%", width: 84, tone: "dark" },
        { label: "Due", value: "11%", width: 11, tone: "mid" },
        { label: "Overdue", value: "5%", width: 5, tone: "light" },
      ],
    },
    priorities: [
      {
        title: "Invoice #1048 pending",
        meta: "Maison Orme · due in 2 days",
        tone: "warning",
      },
      {
        title: "Mission handoff this afternoon",
        meta: "Atelier Nord · documents complete",
        tone: "neutral",
      },
      {
        title: "Payment cleared",
        meta: "Studio Aster · matched automatically",
        tone: "success",
      },
    ],
    activity: [
      {
        id: "week-invoice",
        kind: "Invoice",
        title: "Invoice #1048 sent",
        client: "Maison Orme",
        amount: "€1.2k",
        status: "Awaiting payment",
        summary: "CRM cleanup mission · sent today",
        details: [
          "Mission linked to March CRM cleanup.",
          "Due date set for March 29.",
          "Payment reminder scheduled automatically.",
        ],
      },
      {
        id: "week-payment",
        kind: "Payment",
        title: "Payment received",
        client: "Studio Aster",
        amount: "€860",
        status: "Matched",
        summary: "Bank transfer reconciled without manual update",
        details: [
          "Invoice reconciliation completed.",
          "Client balance updated immediately.",
          "Payment status reflected across dashboard cards.",
        ],
      },
      {
        id: "week-mission",
        kind: "Mission",
        title: "Kickoff confirmed",
        client: "Atelier Nord",
        amount: "€1.1k",
        status: "Scheduled",
        summary: "Operations mapping session confirmed for tomorrow",
        details: [
          "Timeline moved into active delivery.",
          "Client notes attached to the mission record.",
          "Invoice draft prepared for the next milestone.",
        ],
      },
    ],
  },
  Month: {
    metrics: [
      { label: "Revenue", value: "€12.4k", note: "Current month" },
      { label: "Open invoices", value: "€2.1k", note: "4 awaiting payment" },
      { label: "Clients", value: "18", note: "12 active this month" },
      { label: "Payments", value: "36", note: "Collection flow stable" },
    ],
    chart: [
      { label: "W1", revenue: 38, collected: 28 },
      { label: "W2", revenue: 56, collected: 42 },
      { label: "W3", revenue: 63, collected: 50 },
      { label: "W4", revenue: 74, collected: 60 },
      { label: "W5", revenue: 82, collected: 69 },
      { label: "W6", revenue: 68, collected: 53 },
    ],
    payments: {
      paid: "€10.3k",
      unpaid: "€2.1k",
      collectionRate: "83%",
      splits: [
        { label: "Paid", value: "83%", width: 83, tone: "dark" },
        { label: "Due", value: "12%", width: 12, tone: "mid" },
        { label: "Overdue", value: "5%", width: 5, tone: "light" },
      ],
    },
    priorities: [
      {
        title: "2 invoices due this week",
        meta: "Maison Orme · Nordline",
        tone: "warning",
      },
      {
        title: "Mission pipeline aligned",
        meta: "4 active missions · 2 in setup",
        tone: "neutral",
      },
      {
        title: "Collections running cleanly",
        meta: "36 payments logged this month",
        tone: "success",
      },
    ],
    activity: [
      {
        id: "month-client",
        kind: "Client",
        title: "Client record updated",
        client: "Nordline",
        amount: "€2.8k",
        status: "Active",
        summary: "Arrival notes and billing contact synced into one record",
        details: [
          "Mission, invoice and payment history now linked.",
          "Priority tags updated for the current delivery cycle.",
          "Open balance remains visible from the dashboard.",
        ],
      },
      {
        id: "month-invoice",
        kind: "Invoice",
        title: "Invoice #2084 pending",
        client: "Maison Orme",
        amount: "€1.9k",
        status: "Due in 3 days",
        summary: "Retainer invoice is open with one reminder scheduled",
        details: [
          "Issued after milestone approval.",
          "Reminder sequence remains in the pending state.",
          "Client exposure is visible in the priorities panel.",
        ],
      },
      {
        id: "month-payment",
        kind: "Payment",
        title: "Payment reconciled",
        client: "Studio Aster",
        amount: "€2.4k",
        status: "Cleared",
        summary: "Transfer matched to the correct invoice automatically",
        details: [
          "Invoice status switched to paid.",
          "Revenue card updated with no manual step.",
          "Timeline remains attached to the original mission.",
        ],
      },
      {
        id: "month-mission",
        kind: "Mission",
        title: "Discovery mission extended",
        client: "Atelier Nord",
        amount: "€1.4k",
        status: "In progress",
        summary: "Scope expanded after operating review workshop",
        details: [
          "Additional deliverable moved into the active phase.",
          "Follow-up invoice draft prepared in the same record.",
          "Client notes remain centralized for the team.",
        ],
      },
    ],
  },
  Quarter: {
    metrics: [
      { label: "Revenue", value: "€37.8k", note: "Quarter to date" },
      { label: "Open invoices", value: "€4.6k", note: "7 awaiting payment" },
      { label: "Clients", value: "29", note: "Retention remains stable" },
      { label: "Payments", value: "94", note: "Execution remains clean" },
    ],
    chart: [
      { label: "Jan", revenue: 52, collected: 39 },
      { label: "Feb", revenue: 61, collected: 47 },
      { label: "Mar", revenue: 78, collected: 63 },
      { label: "Apr", revenue: 70, collected: 57 },
      { label: "May", revenue: 83, collected: 69 },
      { label: "Jun", revenue: 76, collected: 60 },
    ],
    payments: {
      paid: "€33.2k",
      unpaid: "€4.6k",
      collectionRate: "88%",
      splits: [
        { label: "Paid", value: "88%", width: 88, tone: "dark" },
        { label: "Due", value: "8%", width: 8, tone: "mid" },
        { label: "Overdue", value: "4%", width: 4, tone: "light" },
      ],
    },
    priorities: [
      {
        title: "Quarter collections on track",
        meta: "Exposure concentrated on 3 large invoices",
        tone: "warning",
      },
      {
        title: "Delivery load remains balanced",
        meta: "Mission flow stable across active clients",
        tone: "neutral",
      },
      {
        title: "Paid share remains high",
        meta: "88% already collected this quarter",
        tone: "success",
      },
    ],
    activity: [
      {
        id: "quarter-growth",
        kind: "Client",
        title: "New client added",
        client: "Maison Atlas",
        amount: "€3.6k",
        status: "Onboarding",
        summary: "Client entered the system with full billing structure",
        details: [
          "Primary contacts and payment terms are centralized.",
          "Mission templates generated from the client record.",
          "Future invoices inherit the agreed structure automatically.",
        ],
      },
      {
        id: "quarter-invoice",
        kind: "Invoice",
        title: "Quarterly invoice batch ready",
        client: "Portfolio view",
        amount: "€6.8k",
        status: "Prepared",
        summary: "Invoice drafts consolidated before dispatch",
        details: [
          "Drafts grouped by client and due window.",
          "Outstanding balances remain visible before sending.",
          "Collections forecast updates from the same batch.",
        ],
      },
      {
        id: "quarter-payment",
        kind: "Payment",
        title: "Largest payment matched",
        client: "Nordline",
        amount: "€4.2k",
        status: "Cleared",
        summary: "The biggest transfer of the quarter has been reconciled",
        details: [
          "Payment linked to the correct invoice chain.",
          "Client balance returned to zero immediately.",
          "Quarter dashboard totals refreshed with no manual action.",
        ],
      },
    ],
  },
};

function priorityToneClass(tone: Priority["tone"]) {
  if (tone === "warning") {
    return "bg-amber-500";
  }

  if (tone === "success") {
    return "bg-emerald-500";
  }

  return "bg-slate-300";
}

function paymentToneClass(tone: Snapshot["payments"]["splits"][number]["tone"]) {
  if (tone === "dark") {
    return "bg-[var(--ink)]";
  }

  if (tone === "mid") {
    return "bg-slate-400";
  }

  return "bg-slate-200";
}

type MyBiShowcaseProps = {
  className?: string;
};

export function MyBiShowcase({ className = "" }: MyBiShowcaseProps) {
  const [period, setPeriod] = useState<Period>("Month");
  const [selectedActivityId, setSelectedActivityId] = useState(
    SNAPSHOTS.Month.activity[0].id
  );

  const snapshot = SNAPSHOTS[period];

  useEffect(() => {
    setSelectedActivityId(SNAPSHOTS[period].activity[0].id);
  }, [period]);

  const selectedActivity =
    snapshot.activity.find((item) => item.id === selectedActivityId) ??
    snapshot.activity[0];

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_50px_rgba(15,23,42,0.06)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,16,32,0.06),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.12),transparent_36%)]" />

      <div className="relative">
        <div className="border-b border-line px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <div className="showcase-float flex h-12 w-12 items-center justify-center rounded-[18px] bg-[var(--ink)] text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]">
                MB
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Product showcase
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-ink">
                  MyBi dashboard
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Client, mission, invoice and payment flow
                </p>
              </div>
            </div>

            <div className="inline-flex rounded-full border border-line bg-[var(--soft)] p-1">
              {PERIODS.map((item) => {
                const isActive = item === period;

                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setPeriod(item)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-ink shadow-[0_8px_18px_rgba(15,23,42,0.08)]"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {MODULES.map((item, index) => (
              <div
                key={item}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  index === 0
                    ? "border-[var(--line)] bg-[var(--ink)] text-white"
                    : "border-[var(--line)] bg-white text-muted"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:p-6 xl:grid-cols-[1.42fr_0.9fr]">
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {snapshot.metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-[22px] border border-line bg-[var(--soft)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <p className="text-xs font-medium text-muted">{metric.label}</p>
                  <p className="mt-3 text-2xl font-bold tracking-[-0.03em] text-ink">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-muted">{metric.note}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.45fr_0.85fr]">
              <article className="rounded-[24px] border border-line bg-[var(--soft)] p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ink">Revenue & cash</p>
                    <p className="mt-1 text-xs text-muted">
                      Deterministic demo view of the current period
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                      Revenue
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="showcase-pulse h-2.5 w-2.5 rounded-full bg-[var(--ink)]" />
                      Collected
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex h-56 items-end gap-3">
                  {snapshot.chart.map((point) => (
                    <div
                      key={point.label}
                      className="group flex flex-1 flex-col items-center gap-3"
                    >
                      <div className="relative flex h-full w-full items-end justify-center rounded-[20px] bg-white px-2 pb-3 pt-4">
                        <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full border border-line bg-white px-2 py-1 text-[10px] font-medium text-ink opacity-0 shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition group-hover:opacity-100">
                          {point.revenue}% / {point.collected}%
                        </div>

                        <div className="relative h-full w-full">
                          <div
                            className="absolute inset-x-1 bottom-0 rounded-[16px] bg-slate-200 transition-all duration-700 ease-out"
                            style={{ height: `${point.revenue}%` }}
                          />
                          <div
                            className="absolute inset-x-3 bottom-0 rounded-[14px] bg-[var(--ink)] transition-all duration-700 ease-out"
                            style={{ height: `${point.collected}%` }}
                          />
                        </div>
                      </div>

                      <span className="text-xs font-medium text-muted">{point.label}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[24px] border border-line bg-white p-5">
                <p className="text-sm font-semibold text-ink">Invoices & payments</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-[18px] border border-line bg-[var(--soft)] p-4">
                    <p className="text-xs text-muted">Paid</p>
                    <p className="mt-2 text-xl font-bold text-ink">
                      {snapshot.payments.paid}
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-line bg-[var(--soft)] p-4">
                    <p className="text-xs text-muted">Open</p>
                    <p className="mt-2 text-xl font-bold text-ink">
                      {snapshot.payments.unpaid}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-[20px] border border-line bg-[var(--soft)] p-4">
                  <p className="text-xs text-muted">Collection rate</p>
                  <p className="mt-2 text-2xl font-bold text-ink">
                    {snapshot.payments.collectionRate}
                  </p>

                  <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-white">
                    {snapshot.payments.splits.map((split) => (
                      <div
                        key={split.label}
                        className={`${paymentToneClass(split.tone)} transition-all duration-700`}
                        style={{ width: `${split.width}%` }}
                      />
                    ))}
                  </div>

                  <div className="mt-4 space-y-2">
                    {snapshot.payments.splits.map((split) => (
                      <div
                        key={split.label}
                        className="flex items-center justify-between text-xs text-muted"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${paymentToneClass(split.tone)}`}
                          />
                          {split.label}
                        </div>
                        <span className="font-medium text-ink">{split.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
              <article className="rounded-[24px] border border-line bg-white p-3">
                <div className="flex items-center justify-between px-2 pb-3 pt-2">
                  <p className="text-sm font-semibold text-ink">Recent activity</p>
                  <p className="text-xs text-muted">Click an item</p>
                </div>

                <div className="space-y-2">
                  {snapshot.activity.map((item) => {
                    const isSelected = item.id === selectedActivity.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedActivityId(item.id)}
                        className={`w-full rounded-[20px] border px-4 py-4 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-slate-300 bg-[var(--soft)] shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                            : "border-transparent bg-white hover:border-[var(--line)] hover:bg-[var(--soft)]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                              {item.kind}
                            </p>
                            <h4 className="mt-2 text-sm font-semibold text-ink">
                              {item.title}
                            </h4>
                            <p className="mt-1 text-sm text-muted">{item.summary}</p>
                          </div>

                          <div className="text-right">
                            <p className="text-sm font-semibold text-ink">{item.amount}</p>
                            <p className="mt-1 text-xs text-muted">{item.status}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </article>

              <article className="rounded-[24px] border border-line bg-[var(--soft)] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Detail panel
                    </p>
                    <h4 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink">
                      {selectedActivity.title}
                    </h4>
                  </div>

                  <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink">
                    {selectedActivity.status}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-[18px] border border-line bg-white p-4">
                    <p className="text-xs text-muted">Client</p>
                    <p className="mt-2 text-sm font-semibold text-ink">
                      {selectedActivity.client}
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-line bg-white p-4">
                    <p className="text-xs text-muted">Amount</p>
                    <p className="mt-2 text-sm font-semibold text-ink">
                      {selectedActivity.amount}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-[20px] border border-line bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Summary
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {selectedActivity.summary}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Signals
                  </p>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-muted">
                    {selectedActivity.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>

          <div className="space-y-4">
            <article className="rounded-[24px] border border-line bg-[var(--soft)] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">Priorities</p>
                <span className="text-xs text-muted">Focused view</span>
              </div>

              <div className="mt-5 space-y-3">
                {snapshot.priorities.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[18px] border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 h-2.5 w-2.5 rounded-full ${priorityToneClass(item.tone)}`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.title}</p>
                        <p className="mt-1 text-sm text-muted">{item.meta}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[24px] border border-line bg-white p-5">
              <p className="text-sm font-semibold text-ink">Operating flow</p>
              <div className="mt-5 flex flex-col gap-3">
                {["Client", "Mission", "Invoice", "Payment"].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[18px] border border-line bg-[var(--soft)] px-4 py-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-ink">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium text-ink">{item}</div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
