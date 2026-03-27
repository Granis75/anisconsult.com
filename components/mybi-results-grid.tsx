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
    <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
      <div className="flex flex-col gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          9.2/10
        </span>
        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          Satisfaction client
        </span>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Hausse immédiate de la notation interne (base précédente à 7.6).
        </p>
      </div>

      <div className="flex flex-col gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          +32%
        </span>
        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          Vitesse d&apos;exécution
        </span>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Élimination des goulots d&apos;étranglement opérationnels.
        </p>
      </div>

      <div className="flex flex-col gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Live
        </span>
        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          Suivi des projets
        </span>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Statuts automatisés (En cours / Livré) sans point de synchro manuel.
        </p>
      </div>

      <div className="flex flex-col gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          10h
        </span>
        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          Temps récupéré / semaine
        </span>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Focus réorienté sur les tâches à forte valeur ajoutée.
        </p>
      </div>
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
