import { AutomationPreview } from "@/components/automation-preview";
import { ClientListMiniPreview } from "@/components/client-list-mini-preview";
import { ImpactChartMiniPreview } from "@/components/impact-chart-mini-preview";
import { StatusPreview } from "@/components/status-preview";

const resultCards = [
  {
    title: "Clearer operations",
    description: "A cleaner view of what is happening and what is already done.",
    Preview: ClientListMiniPreview,
  },
  {
    title: "Less friction",
    description: "Fewer manual steps, faster execution, smoother workflows.",
    Preview: ImpactChartMiniPreview,
  },
  {
    title: "More stable execution",
    description: "Clear states and less ambiguity across the workflow.",
    Preview: StatusPreview,
  },
  {
    title: "Better scalability",
    description: "A system that handles more activity without complexity.",
    Preview: AutomationPreview,
  },
] as const;

export function MyBiResultsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {resultCards.map(({ title, description, Preview }) => (
        <article
          key={title}
          className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <Preview />

          <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
        </article>
      ))}
    </div>
  );
}
