import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center">
          <Image
            src="/brand/ac-horizontal.svg"
            alt="AnisConsult"
            width={240}
            height={60}
            className="h-7 w-auto sm:h-8"
          />
        </div>
        <div>Operations • Systems • Execution</div>
      </div>
    </footer>
  );
}
