import { SectionKicker } from "@/components/section-kicker";

type SectionTitleProps = {
  eyebrow: string;
  title?: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <SectionKicker label={eyebrow} />
      {title ? (
        <h2 className="text-balance mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
