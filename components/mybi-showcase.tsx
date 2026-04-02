import type { LucideIcon } from "lucide-react";
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileText,
  Plus,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";

export type DashboardMode = "default" | "loading" | "empty";

interface MetricCardData {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
  tone?: "default" | "alert";
}

interface ActivityItem {
  id: string;
  title: string;
  detail: string;
  time: string;
  icon: LucideIcon;
  tone?: "default" | "positive";
}

interface AttentionData {
  title: string;
  amount: string;
  note: string;
  action: string;
}

interface InsightData {
  title: string;
  summary: string;
  secondary: string;
}

interface DashboardSnapshot {
  metrics: MetricCardData[];
  attention: AttentionData;
  activities: ActivityItem[];
  insight: InsightData;
}

interface MyBiShowcaseProps {
  mode?: DashboardMode;
}

const pipelineStages = ["Client", "Mission", "Invoice", "Payment"] as const;

const populatedDashboard: DashboardSnapshot = {
  metrics: [
    {
      label: "Total Revenue",
      value: "€12,450",
      note: "+2 invoices this week",
      icon: CircleDollarSign,
    },
    {
      label: "Unpaid Invoices",
      value: "€2,150",
      note: "3 overdue invoices need attention",
      icon: FileText,
      tone: "alert",
    },
    {
      label: "Active Clients",
      value: "8",
      note: "2 clients active this month",
      icon: Users,
    },
    {
      label: "Missions in Progress",
      value: "4",
      note: "1 mission delayed",
      icon: Briefcase,
      tone: "alert",
    },
  ],
  attention: {
    title: "3 invoices are overdue",
    amount: "€1,450 unpaid",
    note: "Review the oldest unpaid invoices first to protect collections this week.",
    action: "Review invoices",
  },
  activities: [
    {
      id: "invoice-sent",
      title: "Invoice sent",
      detail: "Invoice #1048 sent to Atelier Faye",
      time: "2h ago",
      icon: FileText,
    },
    {
      id: "payment-received",
      title: "Payment received",
      detail: "€860 matched to Studio Lune",
      time: "4h ago",
      icon: CheckCircle2,
      tone: "positive",
    },
    {
      id: "mission-created",
      title: "New mission created",
      detail: "Operations review scheduled for Maison Nord",
      time: "Yesterday",
      icon: Briefcase,
    },
    {
      id: "client-added",
      title: "Client added",
      detail: "Pine Studio moved into active pipeline",
      time: "Yesterday",
      icon: UserPlus,
    },
  ],
  insight: {
    title: "Cash flow is healthy, but 3 unpaid invoices are slowing collections.",
    summary: "Most current activity is concentrated in 2 active clients.",
    secondary: "No mission risk detected this week.",
  },
};

export function MyBiShowcase({
  mode = "default",
}: MyBiShowcaseProps) {
  return (
    <section className="min-h-screen bg-[#F9F9FB] text-slate-950">
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="space-y-6">
          <header className="flex flex-col gap-6 rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] sm:p-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                MyBi
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Dashboard
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-600 sm:text-xl">
                Your activity at a glance
              </p>
            </div>

            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[24px] bg-[#0066FF] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0057d9]"
            >
              <Plus className="h-4 w-4" />
              New invoice
            </button>
          </header>

          {mode === "loading" ? <LoadingDashboard /> : null}
          {mode === "empty" ? <EmptyDashboard /> : null}
          {mode === "default" ? (
            <PopulatedDashboard snapshot={populatedDashboard} />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function PopulatedDashboard({ snapshot }: { snapshot: DashboardSnapshot }) {
  return (
    <div className="grid gap-6 xl:grid-cols-12">
      {snapshot.metrics.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}

      <div className="xl:col-span-7">
        <AttentionCard attention={snapshot.attention} />
      </div>

      <div className="xl:col-span-5">
        <RecentActivityCard activities={snapshot.activities} />
      </div>

      <div className="xl:col-span-4">
        <WorkflowCard />
      </div>

      <div className="xl:col-span-8">
        <InsightCard insight={snapshot.insight} />
      </div>
    </div>
  );
}

function MetricCard({ metric }: { metric: MetricCardData }) {
  const Icon = metric.icon;
  const isAlert = metric.tone === "alert";

  return (
    <article className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_30px_rgba(15,23,42,0.04)] xl:col-span-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{metric.label}</p>
          <p className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-slate-950">
            {metric.value}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-[18px] border ${
            isAlert
              ? "border-orange-100 bg-orange-50 text-orange-600"
              : "border-slate-100 bg-slate-50 text-slate-500"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p
        className={`mt-6 text-sm leading-6 ${
          isAlert ? "text-orange-600" : "text-slate-500"
        }`}
      >
        {metric.note}
      </p>
    </article>
  );
}

function AttentionCard({ attention }: { attention: AttentionData }) {
  return (
    <article className="h-full rounded-[32px] border border-orange-100 bg-[#FFF7F2] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
      <div className="flex h-full flex-col gap-8">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">
              Financial attention
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              {attention.title}
            </h2>
            <p className="mt-4 text-xl font-medium text-slate-700">
              {attention.amount}
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-orange-100 bg-white text-orange-600">
            <AlertCircle className="h-6 w-6" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p className="max-w-xl text-base leading-7 text-slate-600">
            {attention.note}
          </p>

          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[24px] bg-[#0066FF] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0057d9]"
          >
            {attention.action}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

function RecentActivityCard({
  activities,
}: {
  activities: ActivityItem[];
}) {
  return (
    <article className="h-full rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Recent activity
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            What is moving
          </h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-slate-100 bg-slate-50 text-slate-500">
          <Clock3 className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-[24px] border border-slate-100 bg-slate-50/70 px-4 py-4"
            >
              <div
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] border ${
                  item.tone === "positive"
                    ? "border-[#DCE8FF] bg-[#F3F7FF] text-[#0066FF]"
                    : "border-slate-100 bg-white text-slate-500"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-950">
                    {item.title}
                  </p>
                  <span className="text-xs font-medium text-slate-400">
                    {item.time}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function WorkflowCard() {
  return (
    <article className="h-full rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
        Workflow
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
        Client to payment
      </h2>
      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
        A clear operational chain keeps activity, billing, and follow-up in the
        same place.
      </p>

      <div className="mt-8 space-y-3">
        {pipelineStages.map((stage, index) => (
          <div key={stage}>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-slate-100 bg-slate-50 text-sm font-semibold text-slate-500">
                {index + 1}
              </div>
              <div className="rounded-[18px] border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
                {stage}
              </div>
            </div>

            {index < pipelineStages.length - 1 ? (
              <div className="ml-[18px] mt-2 h-5 w-px bg-slate-200" />
            ) : null}
          </div>
        ))}
      </div>
    </article>
  );
}

function InsightCard({ insight }: { insight: InsightData }) {
  return (
    <article className="h-full rounded-[32px] border border-[#DCE8FF] bg-[#F3F7FF] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0066FF]">
            Insight
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            {insight.title}
          </h2>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-[#DCE8FF] bg-white text-[#0066FF]">
          <Sparkles className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-[24px] border border-white/80 bg-white/80 px-5 py-5">
          <p className="text-sm font-medium leading-6 text-slate-600">
            {insight.summary}
          </p>
        </div>
        <div className="rounded-[24px] border border-white/80 bg-white/80 px-5 py-5">
          <p className="text-sm font-medium leading-6 text-slate-600">
            {insight.secondary}
          </p>
        </div>
      </div>
    </article>
  );
}

function LoadingDashboard() {
  return (
    <div className="grid gap-6 xl:grid-cols-12">
      {Array.from({ length: 4 }).map((_, index) => (
        <article
          key={`metric-${index}`}
          className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_30px_rgba(15,23,42,0.04)] xl:col-span-3"
        >
          <div className="animate-pulse space-y-6">
            <SkeletonLine className="h-4 w-28" />
            <SkeletonLine className="h-10 w-32" />
            <SkeletonLine className="h-4 w-40" />
          </div>
        </article>
      ))}

      <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] xl:col-span-7 sm:p-8">
        <div className="animate-pulse space-y-5">
          <SkeletonLine className="h-4 w-36" />
          <SkeletonLine className="h-10 w-72" />
          <SkeletonLine className="h-8 w-40" />
          <SkeletonLine className="h-4 w-full max-w-xl" />
          <SkeletonLine className="h-12 w-40 rounded-[24px]" />
        </div>
      </article>

      <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] xl:col-span-5 sm:p-8">
        <div className="animate-pulse space-y-4">
          <SkeletonLine className="h-4 w-36" />
          <SkeletonLine className="h-8 w-44" />
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`activity-${index}`}
              className="rounded-[24px] border border-slate-100 bg-slate-50/70 px-4 py-4"
            >
              <div className="flex items-start gap-4">
                <SkeletonCircle />
                <div className="min-w-0 flex-1 space-y-2">
                  <SkeletonLine className="h-4 w-24" />
                  <SkeletonLine className="h-4 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] xl:col-span-4 sm:p-8">
        <div className="animate-pulse space-y-4">
          <SkeletonLine className="h-4 w-28" />
          <SkeletonLine className="h-8 w-40" />
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={`stage-${index}`} className="flex items-center gap-3">
              <SkeletonCircle className="h-9 w-9 rounded-[14px]" />
              <SkeletonLine className="h-12 w-full rounded-[18px]" />
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] xl:col-span-8 sm:p-8">
        <div className="animate-pulse space-y-5">
          <SkeletonLine className="h-4 w-20" />
          <SkeletonLine className="h-10 w-full max-w-3xl" />
          <div className="grid gap-4 lg:grid-cols-2">
            <SkeletonLine className="h-24 w-full rounded-[24px]" />
            <SkeletonLine className="h-24 w-full rounded-[24px]" />
          </div>
        </div>
      </article>
    </div>
  );
}

function EmptyDashboard() {
  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] xl:col-span-7 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
          No activity yet
        </p>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
          Start by adding a client or creating your first invoice.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          Once activity starts, MyBi will show what needs attention, what is
          moving, and where cash flow may slow down.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[24px] bg-[#0066FF] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0057d9]"
          >
            <Plus className="h-4 w-4" />
            Create first invoice
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[24px] border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Add client
          </button>
        </div>
      </article>

      <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] xl:col-span-5 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Overview
          </p>
          <div className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-slate-100 bg-slate-50 text-slate-400">
            <Users className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "No revenue recorded yet",
            "No invoices in progress",
            "No active clients",
            "No missions started",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[24px] border border-slate-100 bg-slate-50/70 px-5 py-5"
            >
              <p className="text-sm font-medium leading-6 text-slate-500">
                {item}
              </p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] xl:col-span-4 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
          Workflow
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Ready when activity starts
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Your core chain stays the same from the first client to the first
          payment.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {pipelineStages.map((stage, index) => (
            <div key={stage} className="flex items-center gap-3">
              <div className="rounded-[18px] border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                {stage}
              </div>
              {index < pipelineStages.length - 1 ? (
                <ArrowRight className="h-4 w-4 text-slate-300" />
              ) : null}
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[32px] border border-[#DCE8FF] bg-[#F3F7FF] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_rgba(15,23,42,0.04)] xl:col-span-8 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-[#DCE8FF] bg-white text-[#0066FF]">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0066FF]">
              Insight
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              No data yet
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              MyBi will start surfacing collection risk, concentration, and
              follow-up priorities as soon as you record your first client,
              mission, or invoice.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

function SkeletonLine({ className = "" }: { className?: string }) {
  return <div className={`rounded-full bg-slate-100 ${className}`.trim()} />;
}

function SkeletonCircle({ className = "" }: { className?: string }) {
  return (
    <div className={`h-10 w-10 rounded-[16px] bg-slate-100 ${className}`.trim()} />
  );
}
