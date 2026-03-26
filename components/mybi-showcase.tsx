"use client";

import { useEffect, useState } from "react";

type Period = "Week" | "Month" | "Quarter";

type SignalStat = {
  label: string;
  value: string;
};

type InsightCard = {
  label: string;
  value: string;
  note: string;
  tone: "dark" | "light" | "accent";
};

type FinanceCard = {
  label: string;
  value: string;
  note: string;
  tone: "dark" | "light" | "accent";
};

type ProjectionPoint = {
  label: string;
  actual: number;
  target: number;
};

type Priority = {
  title: string;
  meta: string;
  tone: "warning" | "neutral" | "accent";
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
  signal: {
    title: string;
    summary: string;
    stats: SignalStat[];
  };
  insights: InsightCard[];
  finance: FinanceCard[];
  projection: {
    title: string;
    value: string;
    note: string;
    points: ProjectionPoint[];
  };
  summary: {
    title: string;
    note: string;
    priorities: Priority[];
  };
  activity: ActivityItem[];
};

const PERIODS: Period[] = ["Week", "Month", "Quarter"];
const MODULES = ["Overview", "Clients", "Missions", "Invoices", "Payments"];

const SNAPSHOTS: Record<Period, Snapshot> = {
  Week: {
    signal: {
      title: "Cash is moving faster than new exposure is growing.",
      summary:
        "The operating view keeps collections, open invoices and current delivery load readable in one place.",
      stats: [
        { label: "Cash collected", value: "EUR 2.7k" },
        { label: "Open invoices", value: "EUR 480" },
        { label: "Current activity", value: "4 active clients" },
      ],
    },
    insights: [
      {
        label: "Execution score",
        value: "86/100",
        note: "Collection cadence stays ahead of invoice pressure.",
        tone: "dark",
      },
      {
        label: "Client concentration",
        value: "24%",
        note: "No account concentration alert this week.",
        tone: "light",
      },
      {
        label: "Priority window",
        value: "2 due",
        note: "Invoices to resolve before Friday.",
        tone: "accent",
      },
    ],
    finance: [
      {
        label: "Revenue",
        value: "EUR 3.2k",
        note: "+12% vs last week",
        tone: "light",
      },
      {
        label: "Cash collected",
        value: "EUR 2.7k",
        note: "Matched without manual follow-up",
        tone: "dark",
      },
      {
        label: "Open invoices",
        value: "EUR 480",
        note: "2 invoices remain active",
        tone: "accent",
      },
    ],
    projection: {
      title: "Weekly projection",
      value: "EUR 3.7k",
      note: "Collections remain within the expected window.",
      points: [
        { label: "Mon", actual: 30, target: 38 },
        { label: "Tue", actual: 39, target: 44 },
        { label: "Wed", actual: 42, target: 49 },
        { label: "Thu", actual: 57, target: 62 },
        { label: "Fri", actual: 48, target: 55 },
        { label: "Sat", actual: 25, target: 31 },
        { label: "Sun", actual: 18, target: 26 },
      ],
    },
    summary: {
      title: "Priorities",
      note: "The dashboard highlights what needs action now, not just what exists in the system.",
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
          tone: "accent",
        },
      ],
    },
    activity: [
      {
        id: "week-invoice",
        kind: "Invoice",
        title: "Invoice #1048 sent",
        client: "Maison Orme",
        amount: "EUR 1.2k",
        status: "Awaiting payment",
        summary: "CRM cleanup mission sent today with one reminder scheduled.",
        details: [
          "Mission linked to March CRM cleanup.",
          "Due date set for March 29.",
          "Reminder timing stays visible from the dashboard.",
        ],
      },
      {
        id: "week-payment",
        kind: "Payment",
        title: "Payment received",
        client: "Studio Aster",
        amount: "EUR 860",
        status: "Matched",
        summary: "Transfer reconciled without manual status changes.",
        details: [
          "Invoice reconciliation completed immediately.",
          "Client balance updated across the operating view.",
          "Cash collected card reflects the match directly.",
        ],
      },
      {
        id: "week-mission",
        kind: "Mission",
        title: "Kickoff confirmed",
        client: "Atelier Nord",
        amount: "EUR 1.1k",
        status: "Scheduled",
        summary: "Operations mapping session confirmed for tomorrow.",
        details: [
          "Timeline moved into active delivery.",
          "Client notes remain attached to the mission record.",
          "Invoice draft prepared for the next milestone.",
        ],
      },
    ],
  },
  Month: {
    signal: {
      title: "Collection flow is stable while open exposure stays contained.",
      summary:
        "MyBi keeps revenue, cash collected, invoices and active work visible in one operating layer.",
      stats: [
        { label: "Cash collected", value: "EUR 10.3k" },
        { label: "Open invoices", value: "EUR 2.1k" },
        { label: "Active clients", value: "12 this month" },
      ],
    },
    insights: [
      {
        label: "Execution score",
        value: "83/100",
        note: "Collections are strong enough to keep pressure low.",
        tone: "dark",
      },
      {
        label: "Client concentration",
        value: "31%",
        note: "Largest client share remains readable and contained.",
        tone: "light",
      },
      {
        label: "Priority window",
        value: "4 open",
        note: "2 invoices need action this week.",
        tone: "accent",
      },
    ],
    finance: [
      {
        label: "Revenue",
        value: "EUR 12.4k",
        note: "Current month",
        tone: "light",
      },
      {
        label: "Cash collected",
        value: "EUR 10.3k",
        note: "Most payments already cleared",
        tone: "dark",
      },
      {
        label: "Open invoices",
        value: "EUR 2.1k",
        note: "4 invoices remain active",
        tone: "accent",
      },
    ],
    projection: {
      title: "Monthly projection",
      value: "EUR 13.8k",
      note: "If current collection speed holds, month-end remains on track.",
      points: [
        { label: "W1", actual: 28, target: 35 },
        { label: "W2", actual: 42, target: 48 },
        { label: "W3", actual: 50, target: 56 },
        { label: "W4", actual: 60, target: 68 },
        { label: "W5", actual: 69, target: 76 },
        { label: "W6", actual: 53, target: 61 },
      ],
    },
    summary: {
      title: "Priorities",
      note: "The product surfaces where follow-up is needed and where execution is already healthy.",
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
          tone: "accent",
        },
      ],
    },
    activity: [
      {
        id: "month-client",
        kind: "Client",
        title: "Client record updated",
        client: "Nordline",
        amount: "EUR 2.8k",
        status: "Active",
        summary: "Billing contact and delivery notes remain linked in one record.",
        details: [
          "Mission, invoice and payment history stay attached.",
          "Priority tags updated for the current delivery cycle.",
          "Open balance remains visible without manual reporting.",
        ],
      },
      {
        id: "month-invoice",
        kind: "Invoice",
        title: "Invoice #2084 pending",
        client: "Maison Orme",
        amount: "EUR 1.9k",
        status: "Due in 3 days",
        summary: "Retainer invoice is open with one reminder already planned.",
        details: [
          "Issued after milestone approval.",
          "Reminder sequence remains visible from the same view.",
          "Client exposure is surfaced in the priorities panel.",
        ],
      },
      {
        id: "month-payment",
        kind: "Payment",
        title: "Payment reconciled",
        client: "Studio Aster",
        amount: "EUR 2.4k",
        status: "Cleared",
        summary: "Transfer matched to the correct invoice automatically.",
        details: [
          "Invoice status switched to paid immediately.",
          "Revenue and cash metrics updated without manual action.",
          "Timeline remained attached to the original mission.",
        ],
      },
      {
        id: "month-mission",
        kind: "Mission",
        title: "Discovery mission extended",
        client: "Atelier Nord",
        amount: "EUR 1.4k",
        status: "In progress",
        summary: "Scope expanded after the operating review workshop.",
        details: [
          "Additional deliverable moved into the active phase.",
          "Follow-up invoice draft prepared in the same record.",
          "Client notes remain centralized for the team.",
        ],
      },
    ],
  },
  Quarter: {
    signal: {
      title: "Quarter performance stays readable as the business scales.",
      summary:
        "The operating layer keeps cash, exposure and client concentration aligned while delivery volume increases.",
      stats: [
        { label: "Cash collected", value: "EUR 33.2k" },
        { label: "Open invoices", value: "EUR 4.6k" },
        { label: "Retention", value: "29 active clients" },
      ],
    },
    insights: [
      {
        label: "Execution score",
        value: "88/100",
        note: "Quarter collections remain strong relative to exposure.",
        tone: "dark",
      },
      {
        label: "Client concentration",
        value: "28%",
        note: "Largest account share remains visible and manageable.",
        tone: "light",
      },
      {
        label: "Priority window",
        value: "7 open",
        note: "Exposure is concentrated on a few larger invoices.",
        tone: "accent",
      },
    ],
    finance: [
      {
        label: "Revenue",
        value: "EUR 37.8k",
        note: "Quarter to date",
        tone: "light",
      },
      {
        label: "Cash collected",
        value: "EUR 33.2k",
        note: "Execution remains clean",
        tone: "dark",
      },
      {
        label: "Open invoices",
        value: "EUR 4.6k",
        note: "7 invoices remain active",
        tone: "accent",
      },
    ],
    projection: {
      title: "Quarter projection",
      value: "EUR 40.9k",
      note: "The pipeline supports steady quarter-end revenue without sharp operational strain.",
      points: [
        { label: "Jan", actual: 39, target: 46 },
        { label: "Feb", actual: 47, target: 54 },
        { label: "Mar", actual: 63, target: 69 },
        { label: "Apr", actual: 57, target: 65 },
        { label: "May", actual: 69, target: 75 },
        { label: "Jun", actual: 60, target: 68 },
      ],
    },
    summary: {
      title: "Priorities",
      note: "The view stays focused on concentration, collections and delivery stability across the quarter.",
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
          tone: "accent",
        },
      ],
    },
    activity: [
      {
        id: "quarter-growth",
        kind: "Client",
        title: "New client added",
        client: "Maison Atlas",
        amount: "EUR 3.6k",
        status: "Onboarding",
        summary: "Billing structure and active work were initialized in one flow.",
        details: [
          "Primary contacts and payment terms remain centralized.",
          "Mission templates generated from the client record.",
          "Future invoices inherit the same structure automatically.",
        ],
      },
      {
        id: "quarter-invoice",
        kind: "Invoice",
        title: "Quarterly invoice batch ready",
        client: "Portfolio view",
        amount: "EUR 6.8k",
        status: "Prepared",
        summary: "Invoice drafts are consolidated before dispatch.",
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
        amount: "EUR 4.2k",
        status: "Cleared",
        summary: "The biggest transfer of the quarter has been reconciled.",
        details: [
          "Payment linked to the correct invoice chain.",
          "Client balance returned to zero immediately.",
          "Quarter totals refreshed without manual reporting.",
        ],
      },
    ],
  },
};

function insightToneClass(tone: InsightCard["tone"]) {
  if (tone === "dark") {
    return "border-slate-800/80 bg-[#0f1728] text-white";
  }

  if (tone === "accent") {
    return "border-blue-200 bg-blue-50 text-[#0b1020]";
  }

  return "border-slate-200 bg-white text-[#0b1020]";
}

function financeToneClass(tone: FinanceCard["tone"]) {
  if (tone === "dark") {
    return "border-slate-800/80 bg-[#0b1220] text-white";
  }

  if (tone === "accent") {
    return "border-blue-200 bg-blue-50 text-[#0b1020]";
  }

  return "border-slate-200 bg-white text-[#0b1020]";
}

function priorityDotClass(tone: Priority["tone"]) {
  if (tone === "warning") {
    return "bg-amber-500";
  }

  if (tone === "accent") {
    return "bg-blue-500";
  }

  return "bg-slate-300";
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
  const selectedActivity =
    snapshot.activity.find((item) => item.id === selectedActivityId) ??
    snapshot.activity[0];

  useEffect(() => {
    setSelectedActivityId(SNAPSHOTS[period].activity[0].id);
  }, [period]);

  const chartMax =
    Math.max(
      ...snapshot.projection.points.flatMap((point) => [point.actual, point.target]),
      1
    ) || 1;

  const linePoints = snapshot.projection.points
    .map((point, index) => {
      const x =
        snapshot.projection.points.length === 1
          ? 50
          : 6 + (index * 88) / (snapshot.projection.points.length - 1);
      const y = 52 - (point.actual / chartMax) * 38;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div
      className={`relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_22%,#f4f7fb_100%)] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_28px_90px_rgba(15,23,42,0.10)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_34%)]" />

      <div className="relative">
        <div className="border-b border-slate-200/80 bg-white/80 px-6 py-5 backdrop-blur xl:px-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                <div className="showcase-float flex h-10 w-10 items-center justify-center rounded-full bg-[#0b1220] text-sm font-semibold text-white">
                  MB
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    MyBi
                  </p>
                  <p className="text-sm text-slate-600">Business operating system</p>
                </div>
              </div>

              <div className="hidden flex-wrap gap-2 lg:flex">
                {MODULES.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                      index === 0
                        ? "border-slate-200 bg-white text-[#0b1020] shadow-[0_8px_18px_rgba(15,23,42,0.06)]"
                        : "border-transparent bg-transparent text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
              {PERIODS.map((item) => {
                const isActive = item === period;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPeriod(item)}
                    aria-pressed={isActive}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#0b1220] text-white"
                        : "text-slate-500 hover:text-[#0b1020]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 lg:p-8 xl:p-10">
          <div className="grid gap-6 xl:grid-cols-[1.48fr_0.84fr]">
            <article className="relative overflow-hidden rounded-[30px] border border-slate-900/80 bg-[#0b1220] p-7 text-white shadow-[0_22px_60px_rgba(15,23,42,0.22)] lg:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Business signal
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-100">
                    <span className="showcase-pulse h-2 w-2 rounded-full bg-blue-300" />
                    Live operating view
                  </span>
                </div>

                <h3 className="mt-8 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[2.5rem] sm:leading-[1.05]">
                  {snapshot.signal.title}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {snapshot.signal.summary}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {snapshot.signal.stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              {snapshot.insights.map((item) => (
                <article
                  key={item.label}
                  className={`rounded-[28px] border p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] ${insightToneClass(item.tone)}`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      item.tone === "dark" ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
                    {item.value}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      item.tone === "dark" ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {snapshot.finance.map((item) => (
              <article
                key={item.label}
                className={`rounded-[28px] border p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)] lg:p-7 ${financeToneClass(item.tone)}`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    item.tone === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
                  {item.value}
                </p>
                <p
                  className={`mt-3 text-sm leading-7 ${
                    item.tone === "dark" ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.note}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.28fr_0.72fr]">
            <article className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.07)] lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {snapshot.projection.title}
                  </p>
                  <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#0b1020]">
                    {snapshot.projection.value}
                  </p>
                </div>
                <p className="max-w-sm text-sm leading-7 text-slate-600">
                  {snapshot.projection.note}
                </p>
              </div>

              <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#f8fbff] px-4 py-5 lg:px-6">
                <div className="grid grid-cols-6 gap-3 text-[11px] uppercase tracking-[0.14em] text-slate-400">
                  <span>Low</span>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span className="text-right">High</span>
                </div>

                <div className="relative mt-5 h-72">
                  <div className="absolute inset-0">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="absolute inset-x-0 border-t border-dashed border-slate-200"
                        style={{ top: `${index * 33.3}%` }}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-end gap-3">
                    {snapshot.projection.points.map((point) => {
                      const targetHeight = `${(point.target / chartMax) * 100}%`;
                      const actualHeight = `${(point.actual / chartMax) * 100}%`;

                      return (
                        <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                          <div className="relative flex h-full w-full items-end justify-center rounded-[22px] border border-slate-200 bg-white px-2 pb-3 pt-4">
                            <div
                              className="absolute inset-x-2 bottom-3 rounded-[18px] bg-slate-100 transition-all duration-700 ease-out"
                              style={{ height: targetHeight }}
                            />
                            <div
                              className="absolute inset-x-4 bottom-3 rounded-[16px] bg-[#0b1220] transition-all duration-700 ease-out"
                              style={{ height: actualHeight }}
                            />
                          </div>
                          <span className="text-xs font-medium text-slate-500">{point.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  <svg
                    viewBox="0 0 100 60"
                    className="pointer-events-none absolute inset-x-0 top-3 h-[75%] w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polyline
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.18)"
                      strokeWidth="4"
                      points={linePoints}
                    />
                    <polyline
                      key={period}
                      pathLength={1}
                      className="showcase-line"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={linePoints}
                    />
                  </svg>
                </div>
              </div>
            </article>

            <article className="rounded-[30px] border border-slate-800/80 bg-[#0f1728] p-6 text-white shadow-[0_22px_60px_rgba(15,23,42,0.18)] lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {snapshot.summary.title}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {snapshot.summary.note}
              </p>

              <div className="mt-8 space-y-4">
                {snapshot.summary.priorities.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-2 h-2.5 w-2.5 rounded-full ${priorityDotClass(item.tone)}`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm leading-7 text-slate-300">{item.meta}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <article className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_18px_44px_rgba(15,23,42,0.06)] sm:p-5">
              <div className="flex items-center justify-between gap-4 px-2 pb-4 pt-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Recent activity
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Click a record to inspect the operating context.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {snapshot.activity.map((item) => {
                  const isSelected = item.id === selectedActivity.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedActivityId(item.id)}
                      className={`w-full rounded-[24px] border px-5 py-5 text-left transition-all duration-300 ${
                        isSelected
                          ? "border-blue-200 bg-blue-50 shadow-[0_16px_34px_rgba(37,99,235,0.10)]"
                          : "border-transparent bg-[#f7f9fc] hover:border-slate-200 hover:bg-white hover:shadow-[0_14px_28px_rgba(15,23,42,0.05)]"
                      }`}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {item.kind}
                          </p>
                          <h4 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[#0b1020]">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {item.summary}
                          </p>
                        </div>

                        <div className="sm:text-right">
                          <p className="text-base font-semibold text-[#0b1020]">
                            {item.amount}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">{item.status}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </article>

            <article className="rounded-[30px] border border-slate-200 bg-[#f8fbff] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] lg:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Detail panel
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0b1020]">
                    {selectedActivity.title}
                  </h4>
                </div>

                <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#0b1020]">
                  {selectedActivity.status}
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Client
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#0b1020]">
                    {selectedActivity.client}
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Amount
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#0b1020]">
                    {selectedActivity.amount}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Context
                </p>
                <p className="mt-3 text-sm leading-8 text-slate-600">
                  {selectedActivity.summary}
                </p>
              </div>

              <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Signals
                </p>
                <ul className="mt-4 space-y-3">
                  {selectedActivity.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
