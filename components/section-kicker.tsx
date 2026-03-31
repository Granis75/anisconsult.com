type SectionKickerProps = {
  label: string;
  className?: string;
};

export function SectionKicker({ label, className = "" }: SectionKickerProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <span aria-hidden className="h-px w-6 bg-black/12" />
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-black/48">
        {label}
      </span>
    </div>
  );
}
