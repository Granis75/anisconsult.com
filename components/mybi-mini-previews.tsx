import type { PropsWithChildren } from "react";

type PreviewProps = {
  className?: string;
};

function PreviewShell({ children, className = "" }: PropsWithChildren<PreviewProps>) {
  return (
    <div
      className={`rounded-[20px] border border-neutral-200 bg-white p-4 transition-transform duration-200 hover:-translate-y-0.5 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function ClientListMiniPreview() {
  return (
    <PreviewShell>
      <div className="space-y-3">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-full bg-neutral-200" />
            <div className="min-w-0 flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={`block h-2 rounded-full bg-neutral-200 ${
                    row === 1 ? "w-16" : row === 2 ? "w-12" : "w-20"
                  }`}
                />
                {row === 1 ? (
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                ) : null}
              </div>
              <span
                className={`block h-2 rounded-full bg-neutral-100 ${
                  row === 2 ? "w-24" : row === 1 ? "w-20" : "w-28"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

export function CashFlowMiniPreview() {
  return (
    <PreviewShell className="bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]">
      <div className="flex h-full min-h-[112px] items-end">
        <svg
          viewBox="0 0 120 64"
          aria-hidden="true"
          className="h-28 w-full overflow-visible"
        >
          <polyline
            fill="none"
            points="8,48 28,42 48,38 68,28 88,24 108,14"
            stroke="#1f2937"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="108" cy="14" r="4" fill="#10b981" />
        </svg>
      </div>
    </PreviewShell>
  );
}

export function ProjectStatusMiniPreview() {
  return (
    <PreviewShell>
      <div className="grid h-[112px] grid-cols-2 gap-3">
        <div className="rounded-[18px] bg-neutral-200" />
        <div className="rounded-[18px] bg-neutral-100" />
        <div className="rounded-[18px] bg-neutral-200" />
        <div className="rounded-[18px] bg-emerald-500" />
      </div>
    </PreviewShell>
  );
}

export function MissionCardStackMiniPreview() {
  return (
    <div className="relative h-[144px]">
      <div className="absolute inset-x-6 top-7 h-[92px] rounded-[20px] border border-neutral-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]" />
      <div className="absolute inset-x-4 top-4 h-[92px] rounded-[20px] border border-neutral-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]" />
      <div className="absolute inset-x-2 top-1 rounded-[20px] border border-neutral-200 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-0.5">
        <div className="space-y-3">
          <span className="block h-2 w-20 rounded-full bg-neutral-200" />
          <span className="block h-2 w-28 rounded-full bg-neutral-100" />
          <div className="grid grid-cols-2 gap-2 pt-2">
            <span className="block h-8 rounded-[14px] bg-neutral-100" />
            <span className="block h-8 rounded-[14px] bg-neutral-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
