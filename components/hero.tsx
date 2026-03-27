"use client";

import Link from "next/link";

type HeroProps = {
  onContactClick?: () => void;
  caseStudyHref?: string;
};

const points = [
  {
    title: "No extra tools.",
    description: "Use what you have, optimized.",
  },
  {
    title: "No complexity.",
    description: "Lean, fast, and scalable.",
  },
  {
    title: "Better execution.",
    description: "Focus on results, not maintenance.",
  },
] as const;

export function Hero({
  onContactClick,
  caseStudyHref = "/case-study/vesper",
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
        <div className="max-w-4xl">
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
            Operations. Systemized.
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.02em] text-neutral-600 sm:text-3xl">
            From fragmented workflows to a clear, reliable operating system.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {points.map((point) => (
              <div key={point.title} className="space-y-2">
                <p className="text-base font-semibold tracking-[-0.02em] text-neutral-800">
                  {point.title}
                </p>
                <p className="text-sm leading-6 text-neutral-500">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            {contactCta}

            <Link
              href={caseStudyHref}
              className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-6 text-sm font-semibold text-neutral-800 transition-all duration-200 hover:bg-neutral-50"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
