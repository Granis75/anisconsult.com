import { MyBiShowcase } from "@/components/mybi-showcase";

export default function MyBiShowcasePage() {
  return (
    <main className="min-h-screen bg-[var(--soft)] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1400px]">
        <MyBiShowcase />
      </div>
    </main>
  );
}
