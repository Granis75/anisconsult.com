"use client";

const proofPoints = [
  "7.6 → 9.2 guest satisfaction",
  "Top 30 of ~450",
  "+50% revenue segment",
  "~10h/week saved on admin work",
] as const;

export function ProofBar() {
  return (
    <div className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-ink/78">
          {proofPoints.map((point, index) => (
            <div key={point} className="flex items-center gap-8">
              <span>{point}</span>
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
