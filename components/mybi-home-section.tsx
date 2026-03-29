import { SectionKicker } from "@/components/section-kicker";

const systemSteps = ["Client", "Mission", "Invoice", "Payment"] as const;

const signalBadges = [
  "3 overdue",
  "€1,450 unpaid",
  "2 clients",
  "1 mission",
] as const;

export function MyBiHomeSection() {
  return (
    <section id="mybi" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="max-w-xl">
          <SectionKicker label="MYBI" />

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
            MyBi — Business Operating System
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600 sm:text-xl">
            A system built from real operational needs.
          </p>

          <div className="mt-6 space-y-1.5 text-base leading-7 text-neutral-600 sm:text-lg">
            <p>
              It brings client records, missions, invoicing and payment
              follow-up into one place.
            </p>
            <p>
              A concrete example of how manual admin can be structured and
              easier to manage.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            System
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {systemSteps.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">
                  {item}
                </span>
                {index < systemSteps.length - 1 ? (
                  <span className="text-sm text-slate-300">→</span>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Signals
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {signalBadges.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-xl">
          <a
            href="https://mybi-business-app.vercel.app/dashboard"
            className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-neutral-100"
          >
            Explore MyBi
          </a>
        </div>
      </div>
    </section>
  );
}
