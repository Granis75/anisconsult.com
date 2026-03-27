import { SectionKicker } from "@/components/section-kicker";

const flow = ["Client", "Mission", "Invoice", "Payment"] as const;

export function MyBiHomeSection() {
  return (
    <section id="mybi" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="rounded-[32px] bg-neutral-50 p-6 shadow-sm lg:p-8 xl:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-14">
            <div className="max-w-xl">
              <SectionKicker label="MYBI" />

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
                Business Operating System
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600 sm:text-xl">
                A lightweight system designed to structure freelance activity.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium text-neutral-700 sm:text-base">
                {flow.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-white px-4 py-2">
                      {item}
                    </span>
                    {index < flow.length - 1 ? (
                      <span className="text-neutral-300">→</span>
                    ) : null}
                  </div>
                ))}
              </div>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
                A clear view of revenue, payments and execution — without complexity.
              </p>
            </div>

            <div className="grid gap-4">
              <article className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Revenue
                    </p>
                    <p className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">
                      +12 400 €
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-emerald-600">+12%</span>
                </div>

                <p className="mt-6 text-sm text-neutral-400">Updated this month</p>
              </article>

              <article className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Invoices
                    </p>
                    <p className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">
                      3 pending
                    </p>
                  </div>

                  <div className="flex items-end gap-1.5 pt-1" aria-hidden="true">
                    <span className="h-5 w-2 rounded-full bg-neutral-200" />
                    <span className="h-8 w-2 rounded-full bg-neutral-300" />
                    <span className="h-11 w-2 rounded-full bg-neutral-800" />
                  </div>
                </div>

                <p className="mt-6 text-sm text-neutral-400">Awaiting payment</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
