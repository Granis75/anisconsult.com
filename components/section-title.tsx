type SectionTitleProps = {
  eyebrow: string;
  title?: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="mt-4 text-3xl font-bold tracking-tighter2 text-ink sm:text-4xl">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
