type ResultsVariant = "clean" | "compact";

type ResultItem = {
  title: string;
  description: string;
};

const resultItems: ResultItem[] = [
  {
    title: "9.2/10 Customer Satisfaction",
    description: "Immediate increase in internal rating (up from a 7.6 baseline).",
  },
  {
    title: "+32% Execution Speed",
    description: "Operational bottlenecks eliminated.",
  },
  {
    title: "Live Project Tracking",
    description: "Automated statuses (In Progress / Delivered) without manual check-ins.",
  },
  {
    title: "10h Time Saved / Week",
    description: "Focus shifted to high-value-added tasks.",
  },
] as const;

export function ResultsClean() {
  return (
    <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 xl:grid-cols-4">
      {resultItems.map((item) => (
        <div key={item.title} className="border-t border-neutral-200 pt-4">
          <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ResultsCompactCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {resultItems.map((item) => (
        <div key={item.title} className="border-t border-neutral-200 pt-4">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

type MyBiResultsGridProps = {
  variant?: ResultsVariant;
};

export function MyBiResultsGrid({
  variant = "clean",
}: MyBiResultsGridProps) {
  if (variant === "compact") {
    return <ResultsCompactCards />;
  }

  return <ResultsClean />;
}
