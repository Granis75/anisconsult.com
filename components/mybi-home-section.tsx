import { SectionKicker } from "@/components/section-kicker";

const flow = ["Client", "Mission", "Invoice", "Payment"] as const;

export function MyBiHomeSection() {
  return (
    <section id="mybi" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="rounded-[32px] bg-neutral-50 p-6 shadow-sm lg:p-8 xl:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_0.92fr] lg:items-center lg:gap-16">
            <div className="max-w-xl">
              <SectionKicker label="MYBI" />

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
                MyBi — Business Operating System
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600 sm:text-xl">
                A lightweight system designed to structure freelance activity.
              </p>

              <div className="mt-6 space-y-1.5 text-base leading-7 text-neutral-600 sm:text-lg">
                <p>From client to payment, everything stays connected.</p>
                <p>Clear visibility. Less manual friction.</p>
              </div>

              <div className="mt-10">
                <a
                  href="https://mybi-business-app.vercel.app/dashboard"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-neutral-100"
                >
                  Explore MyBi
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-neutral-200/80 bg-white/80 p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                {flow.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="inline-flex min-h-11 items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800">
                      {item}
                    </span>
                    {index < flow.length - 1 ? (
                      <span className="text-sm text-neutral-300">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
