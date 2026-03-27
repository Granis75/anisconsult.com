type ResultsVariant = "clean" | "compact";

type ResultItem = {
  value: string;
  label: string;
  subtext: string;
};

const resultItems: ResultItem[] = [
  {
    value: "9.2",
    label: "Review score",
    subtext: "from 7.6",
  },
  {
    value: "+32%",
    label: "Efficiency",
    subtext: "faster execution",
  },
  {
    value: "In Progress / Done",
    label: "Project states",
    subtext: "clear status",
  },
  {
    value: "100%",
    label: "Automation",
    subtext: "10h saved / week",
  },
] as const;

export function ResultsClean() {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 xl:gap-x-16 xl:grid-cols-4">
      {resultItems.map((item) => (
        <div key={item.label} className="space-y-3">
          <p className="text-3xl font-semibold tracking-tight text-neutral-950">
            {item.value}
          </p>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-neutral-600">{item.label}</p>
            <p className="text-xs text-neutral-400">{item.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResultsCompactCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {resultItems.map((item) => (
        <article
          key={item.label}
          className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-5 py-4"
        >
          <p className="max-w-[8.5rem] text-2xl font-semibold tracking-tight text-neutral-950">
            {item.value}
          </p>

          <div className="pl-4 text-right">
            <p className="text-sm font-medium text-neutral-600">{item.label}</p>
            <p className="mt-1 text-xs text-neutral-400">{item.subtext}</p>
          </div>
        </article>
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
