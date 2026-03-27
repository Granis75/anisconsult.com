export function AutomationPreview() {
  return (
    <div className="rounded-[20px] bg-neutral-50 p-4">
      <div className="space-y-4">
        <div>
          <div className="text-3xl font-semibold tracking-[-0.04em] text-neutral-800">
            100%
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
            Automation
          </div>
        </div>

        <div className="h-2 rounded-full bg-neutral-200">
          <div className="h-full w-full rounded-full bg-emerald-500" />
        </div>

        <div className="rounded-[16px] border border-neutral-200 bg-white px-3 py-3">
          <div className="text-[0.7rem] uppercase tracking-[0.14em] text-neutral-400">
            Time saved
          </div>
          <div className="mt-2 text-lg font-semibold text-neutral-800">10h / week</div>
        </div>
      </div>
    </div>
  );
}
