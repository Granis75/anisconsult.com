"use client";

const proofPoints = [
  { metric: "7.6 → 9.2", source: "Guest satisfaction · Résidence Cadet" },
  { metric: "Top 30 of ~450", source: "Platform ranking · Résidence Cadet" },
  { metric: "New segment", source: "Launch control · Kepler Express" },
  { metric: "~10h/week saved", source: "Admin work · Résidence Cadet" },
] as const;

export function ProofBar() {
  return (
    <div className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-ink/78">
          {proofPoints.map((point, index) => (
            <div key={point.metric} className="flex items-center gap-8">
              <span className="inline-flex flex-col gap-1 text-center sm:text-left">
                <span className="font-semibold text-ink">{point.metric}</span>
                <span className="text-xs text-ink/52">{point.source}</span>
              </span>
              {index < proofPoints.length - 1 && (
                <div className="hidden h-1 w-1 rounded-full bg-ink/20 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
