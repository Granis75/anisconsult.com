export function ImpactChartMiniPreview() {
  const bars = [34, 48, 62, 78, 94] as const;

  return (
    <div className="rounded-[20px] bg-neutral-50 p-4">
      <div className="flex h-[124px] flex-col justify-between">
        <div className="text-xs font-semibold text-neutral-800">+32%</div>

        <div className="flex h-20 items-end gap-2">
          {bars.map((height, index) => (
            <div key={height} className="flex-1">
              <div
                className={`w-full rounded-full bg-neutral-200 ${
                  index === bars.length - 1 ? "relative overflow-hidden" : ""
                }`}
                style={{ height: `${height}%` }}
              >
                {index === bars.length - 1 ? (
                  <div className="absolute inset-x-0 top-0 h-2 rounded-full bg-emerald-500" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
