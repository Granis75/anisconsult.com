type SectionKickerProps = {
  label: string;
  className?: string;
};

export function SectionKicker({ label, className = "" }: SectionKickerProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <span aria-hidden className="h-px w-5 bg-black/10" />
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-black/45">
        {label}
      </span>
    </div>
  );
}
