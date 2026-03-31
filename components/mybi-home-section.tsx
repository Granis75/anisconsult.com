import { SectionKicker } from "@/components/section-kicker";

const workflowSteps = ["Client", "Mission", "Invoice", "Payment"] as const;

const controlSignals = [
  {
    label: "Overdue invoices",
    value: "3",
  },
  {
    label: "Unpaid amount",
    value: "EUR 1,450",
  },
  {
    label: "Active mission",
    value: "1",
  },
] as const;

const proofPoints = [
  "One connected chain from client record to payment follow-up.",
  "Useful signals for mission status, invoice state and next action.",
] as const;

export function MyBiHomeSection() {
  return (
    <section id="mybi" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <SectionKicker label="MyBi" />

            <h2 className="text-balance mt-5 max-w-3xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.6rem]">
              A product proof-point built around real service operations.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-[1.2rem]">
              MyBi is a live business app that keeps client records, missions,
              invoices and payment follow-up in one working chain.
            </p>

            <div className="mt-8 grid gap-3">
              {proofPoints.map((item) => (
                <div key={item} className="border-t border-black/8 pt-3.5">
                  <p className="max-w-xl text-sm leading-7 text-ink/76">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://mybi-business-app.vercel.app/dashboard"
                target="_blank"
                rel="noreferrer"
                className="premium-cta h-12 px-6"
              >
                Open MyBi dashboard
              </a>
            </div>
          </div>

          <div className="w-full max-w-[35rem] lg:ml-auto">
            <div className="premium-card p-6 sm:p-8">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Workflow Logic
                </p>
                <h3 className="text-balance mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                  The workflow reads instantly.
                </h3>
              </div>

              <div className="mt-8 rounded-[24px] border border-black/8 bg-[#f8f7f3] px-5 py-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Core chain
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  {workflowSteps.map((item, index) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="inline-flex items-center rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-sm font-medium text-ink">
                        {item}
                      </span>
                      {index < workflowSteps.length - 1 ? (
                        <span className="text-sm text-black/25">→</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Control signals
                </p>
                <div className="mt-4 grid gap-3">
                  {controlSignals.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-[18px] border border-black/8 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3"
                    >
                      <span className="text-sm text-neutral-700">{item.label}</span>
                      <span className="text-sm font-semibold text-ink">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600">
                Real workflow modeling, kept light enough for daily use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
