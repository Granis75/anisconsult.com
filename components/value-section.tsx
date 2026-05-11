"use client";

import { SectionKicker } from "@/components/section-kicker";

const valueCards = [
  {
    title: "Follow-up",
    description: "Every request has a status, an owner and a next action.",
    meta: ["Status", "Owner", "Next action"],
    size: "large",
  },
  {
    title: "Ownership",
    description: "No more unclear responsibility or lost tasks.",
    meta: ["One accountable owner"],
    size: "small",
  },
  {
    title: "Reporting",
    description: "Weekly visibility without rebuilding reports manually.",
    meta: ["Clean weekly view"],
    size: "small",
  },
  {
    title: "Tasks & blockers",
    description: "Blockers stop hiding in chats, emails and memory.",
    meta: ["Open", "Blocked", "Done"],
    size: "medium",
  },
  {
    title: "Internal tools",
    description: "Simple systems teams actually use and maintain.",
    meta: ["Built around the work"],
    size: "small",
  },
  {
    title: "Team adoption",
    description: "Workflows that fit how the team already works.",
    meta: ["Clear enough to keep using"],
    size: "small",
  },
] as const;

export function ValueSection() {
  return (
    <section className="scroll-mt-32 border-t border-line bg-white md:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mb-16 max-w-3xl">
          <SectionKicker label="Value" />
          <h2 className="text-balance mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.5rem]">
            One working view for daily operations.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueCards.map((card) => (
            <article
              key={card.title}
              className={[
                "premium-soft-card flex min-h-[15rem] flex-col overflow-hidden",
                card.size === "large" ? "md:col-span-2 lg:col-span-2" : "",
                card.size === "medium" ? "md:row-span-2" : "",
              ].join(" ")}
            >
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {card.description}
              </p>

              <div className="mt-auto pt-8">
                <div className="rounded-[22px] border border-black/8 bg-white/72 p-4">
                  <div className="flex flex-wrap gap-2">
                    {card.meta.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-center text-xs font-medium text-ink/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
