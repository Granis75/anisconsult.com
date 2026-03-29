"use client";

import Link from "next/link";

type HeroProps = {
  onContactClick?: () => void;
  caseStudyHref?: string;
};

const points = [
  {
    title: "Use what you already have.",
    description: "Improve existing tools before adding anything new.",
  },
  {
    title: "Reduce manual work.",
    description: "Cut repetitive admin, follow-up and handoffs.",
  },
  {
    title: "Improve visibility.",
    description: "Track activity, costs and pending actions with less guesswork.",
  },
] as const;

export function Hero({
  onContactClick,
  caseStudyHref = "/work",
}: HeroProps) {
  const contactCta = onContactClick ? (
    <button
      type="button"
      onClick={onContactClick}
      className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md"
    >
      Contact
    </button>
  ) : (
    <Link
      href="/#contact"
      className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md"
    >
      Contact
    </Link>
  );

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="max-w-5xl">
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
            Run your business with less manual work.
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.02em] text-neutral-600 sm:text-3xl">
            I help service businesses connect CRM, admin and billing, reduce
            repetition, and keep daily operations easier to manage.
          </p>

          <div className="mt-14 border-t border-neutral-200/80 pt-8">
            <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 xl:gap-x-0">
              {points.map((point, index) => (
                <div
                  key={point.title}
                  className={[
                    "space-y-2.5",
                    index === 0 ? "xl:pr-8" : "xl:border-l xl:border-neutral-200/80 xl:px-8",
                    index === points.length - 1 ? "xl:pr-0" : "",
                  ].join(" ")}
                >
                  <p className="text-base font-semibold tracking-[-0.02em] text-neutral-800">
                    {point.title}
                  </p>
                  <p className="max-w-[18rem] text-sm leading-6 text-neutral-500">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            {contactCta}

            <Link
              href={caseStudyHref}
              className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-6 text-sm font-semibold text-neutral-800 transition-all duration-200 hover:bg-neutral-50"
            >
              View work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
