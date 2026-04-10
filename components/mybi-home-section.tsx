import { SectionKicker } from "@/components/section-kicker";

const workflowSteps = ["Client", "Mission", "Invoice", "Payment"] as const;
const signalSteps = ["Incident", "Action", "Expense", "Impact"] as const;

export function MyBiHomeSection() {
  return (
    <section id="mybi" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <SectionKicker label="Operational System" />

            <h2 className="text-balance mt-5 max-w-3xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.6rem]">
              Ops Core — Operational System
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-[1.2rem]">
              A system designed to structure daily operations based on real hospitality workflows.
            </p>

            <div className="mt-8 border-t border-black/8 pt-6">
              <p className="max-w-xl text-sm leading-7 text-ink">
                The goal is not to add more tools. The goal is to make operations clear, consistent and controllable.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-neutral-600">
                <li>Maintenance tracking</li>
                <li>Operational tasks</li>
                <li>Expense flow</li>
                <li>Guest feedback signals</li>
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="https://mybi-business-app.vercel.app/dashboard"
                target="_blank"
                rel="noreferrer"
                className="premium-cta h-12 px-6"
              >
                Open MyBi
              </a>
            </div>
          </div>

          <div className="w-full max-w-[35rem] lg:ml-auto">
            <div className="premium-card p-6 sm:p-8">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Operational System
                </p>
                <h3 className="text-balance mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                  Two operating chains, kept clear.
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

              <div className="mt-6 rounded-[24px] border border-black/8 bg-[#f8f7f3] px-5 py-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Signal chain
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  {signalSteps.map((item, index) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="inline-flex items-center rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-sm font-medium text-ink">
                        {item}
                      </span>
                      {index < signalSteps.length - 1 ? (
                        <span className="text-sm text-black/25">→</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
