"use client";

import { SectionKicker } from "@/components/section-kicker";

const flowSteps = ["Owner", "Status", "Next action", "Outcome"] as const;

const visibleFields = [
  { label: "Status", value: "Open", tone: "Needs movement" },
  { label: "Due date", value: "Friday", tone: "Time-bound" },
  { label: "Priority", value: "High", tone: "Clear order" },
  { label: "Blocker", value: "Waiting on supplier", tone: "No longer hidden" },
] as const;

const operatingRows = [
  {
    work: "Guest issue",
    owner: "Front desk",
    action: "Confirm access",
    status: "In progress",
  },
  {
    work: "Driver billing",
    owner: "Ops lead",
    action: "Match costs",
    status: "Blocked",
  },
  {
    work: "Store task",
    owner: "Manager",
    action: "Close checklist",
    status: "Due today",
  },
] as const;

export function OperatingViewSection() {
  return (
    <section className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <SectionKicker label="Operating view" />
            <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
              Every piece of work needs a simple operating path.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              A responsible person, a clear status, a next step and a result. That is the basic structure behind follow-up, reporting and daily control.
            </p>
          </div>

          <div className="premium-card overflow-hidden bg-[#fbfaf7] p-5 sm:p-6">
            <div className="rounded-[24px] border border-black/8 bg-white p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2.5">
                {flowSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-2.5">
                    <span className="rounded-full border border-black/8 bg-[#f8f7f3] px-3.5 py-1.5 text-sm font-medium text-ink">
                      {step}
                    </span>
                    {index < flowSteps.length - 1 ? (
                      <span className="text-sm text-black/25">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {visibleFields.map((field) => (
                <div key={field.label} className="rounded-[22px] border border-black/8 bg-white p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                    {field.label}
                  </p>
                  <p className="mt-2 text-base font-semibold tracking-[-0.02em] text-ink">
                    {field.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{field.tone}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-[24px] border border-black/8 bg-white">
              <div className="grid grid-cols-[1.05fr_0.9fr_1fr_0.82fr] border-b border-line px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-black/38">
                <span>Work</span>
                <span>Owner</span>
                <span>Action</span>
                <span>Status</span>
              </div>
              {operatingRows.map((row) => (
                <div
                  key={row.work}
                  className="grid grid-cols-1 gap-2 border-b border-line px-4 py-4 text-sm last:border-b-0 sm:grid-cols-[1.05fr_0.9fr_1fr_0.82fr] sm:gap-4"
                >
                  <span className="font-medium text-ink">{row.work}</span>
                  <span className="text-muted">{row.owner}</span>
                  <span className="text-muted">{row.action}</span>
                  <span className="font-medium text-ink/78">{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
