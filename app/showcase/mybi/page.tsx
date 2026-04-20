import type { Metadata } from "next";
import { MyBiShowcase } from "@/components/mybi-showcase";

export const metadata: Metadata = {
  title: "MyBi Showcase | Internal Tools | Anis",
  description:
    "Internal tool showcase connecting client work, invoicing and payments inside one clear operating flow.",
};

export default function MyBiShowcasePage() {
  return (
    <MyBiShowcase mode="default" />
  );
}
