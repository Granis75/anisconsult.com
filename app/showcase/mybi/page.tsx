import type { Metadata } from "next";
import { MyBiShowcase } from "@/components/mybi-showcase";

export const metadata: Metadata = {
  title: "MyBi | AnisConsult",
  description:
    "A business tracking workspace prototype for freelancers and small operators, centralizing clients, missions, invoices, payments and revenue visibility.",
};

export default function MyBiShowcasePage() {
  return (
    <MyBiShowcase mode="default" />
  );
}
