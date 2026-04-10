import { SectionKicker } from "@/components/section-kicker";

const workflowSteps = ["Client", "Mission", "Invoice", "Payment"] as const;

export function MyBiHomeSection() {
  return (
    <section id="mybi" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <SectionKicker label="Internal Tool" />

            <h2 className="text-balance mt-5 max-w-3xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.6rem]">
              MyBi
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-[1.2rem]">
              Built to keep client work, invoices and payments in one place.
            </p>

            <div className="mt-8 border-t border-black/8 pt-6">
              <p className="max-w-xl text-sm leading-7 text-ink">
                Client → Mission → Invoice → Payment
              </p>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                It came from real admin work that was too easy to lose across separate files.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://mybi-business-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="premium-cta h-12 px-6"
              >
                Open tool
              </a>
            </div>

            <div className="mt-6 border-t border-black/8 pt-4">
              <p className="text-sm leading-7 text-neutral-600">
                Kepler Express came from the same idea in logistics: missions, costs and billing in one place.
              </p>
              <a
                href="https://kepler-express.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-[gap,color] duration-200 hover:gap-3 hover:text-black"
              >
                Open live tool
              </a>
            </div>
          </div>

          <div className="w-full max-w-[35rem] lg:ml-auto">
            <div className="premium-card p-6 sm:p-8">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/42">
                  Working Flow
                </p>
                <h3 className="text-balance mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-[2rem]">
                  Client work to payment in one place.
                </h3>
              </div>

              <div className="mt-8 rounded-[24px] border border-black/8 bg-[#f8f7f3] px-5 py-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/40">
                  Core flow
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
                  What stays tied together
                </p>
                <p className="mt-4 max-w-md text-sm leading-7 text-ink">
                  Mission details, invoices and payment status stay connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
