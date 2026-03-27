export function ClientListMiniPreview() {
  return (
    <div className="rounded-[20px] bg-neutral-50 p-4">
      <div className="space-y-3">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-full bg-neutral-200" />
            <div className="min-w-0 flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={`block h-2 rounded-full bg-neutral-200 ${
                    row === 0 ? "w-20" : row === 1 ? "w-16" : "w-12"
                  }`}
                />
                {row === 1 ? (
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                ) : null}
              </div>
              <span
                className={`block h-2 rounded-full bg-neutral-100 ${
                  row === 0 ? "w-28" : row === 1 ? "w-20" : "w-24"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
