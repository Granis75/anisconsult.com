import { MyBiShowcase } from "@/components/mybi-showcase";

export default function MyBiShowcasePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef4fb_0%,#f8fbff_30%,#ffffff_100%)] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-[1320px]">
        <MyBiShowcase />
      </div>
    </main>
  );
}
