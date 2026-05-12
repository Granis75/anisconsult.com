"use client";

import { SectionKicker } from "@/components/section-kicker";

const valueCards = [
  {
    title: "Follow-up",
    pain: "Requests get opened, answered once, then disappear into inboxes.",
    improvement: "Every request has an owner, a status and a next action.",
    meta: ["Status", "Owner", "Next action"],
    size: "large",
  },
  {
    title: "Ownership",
    pain: "The team knows the work exists, but nobody knows who is driving it.",
    improvement: "Responsibility is explicit before the task starts drifting.",
    meta: ["One accountable owner"],
    size: "small",
  },
  {
    title: "Reporting",
    pain: "Weekly reporting starts from scratch because the work was not structured.",
    improvement: "The update is already visible before the meeting starts.",
    meta: ["Clean weekly view"],
    size: "small",
  },
  {
    title: "Blockers",
    pain: "Problems stay hidden until they become urgent.",
    improvement: "Blockers stop hiding in inboxes, chats and memory.",
    meta: ["Open", "Blocked", "Done"],
    size: "medium",
  },
  {
    title: "Internal tools",
    pain: "Generic tools force the team to bend around someone else's workflow.",
    improvement: "The system is shaped around the real operating flow.",
    meta: ["Built around the work"],
    size: "small",
  },
  {
    title: "Team adoption",
    pain: "Complex systems look impressive, then quietly stop being used.",
    improvement: "The system stays simple enough for the team to actually use.",
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
            What stops breaking once the workflow is clear.
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
              <p className="mt-4 text-sm leading-7 text-muted">{card.pain}</p>
              <p className="mt-3 text-base font-medium leading-7 text-ink/82">
                {card.improvement}
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
