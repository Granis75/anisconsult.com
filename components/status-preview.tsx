export function StatusPreview() {
  return (
    <div className="rounded-[20px] bg-neutral-50 p-4">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <div className="rounded-full bg-neutral-800 px-3 py-1.5 text-xs font-semibold text-white">
            In Progress
          </div>
          <div className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white">
            Done
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[16px] border border-neutral-200 bg-white px-3 py-3">
            <div className="text-[0.7rem] uppercase tracking-[0.14em] text-neutral-400">
              Active
            </div>
            <div className="mt-2 text-lg font-semibold text-neutral-800">04</div>
          </div>

          <div className="rounded-[16px] border border-neutral-200 bg-white px-3 py-3">
            <div className="text-[0.7rem] uppercase tracking-[0.14em] text-neutral-400">
              Completed
            </div>
            <div className="mt-2 text-lg font-semibold text-neutral-800">12</div>
          </div>
        </div>
      </div>
    </div>
  );
}
