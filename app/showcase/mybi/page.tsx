import type { Metadata } from "next";
import { MyBiShowcase } from "@/components/mybi-showcase";

export const metadata: Metadata = {
  title: "MyBi — Business OS | AnisConsult",
  description:
    "Business OS for freelancers and small operators, managing clients, missions, invoices, payments and revenue visibility in one structured workflow.",
};

export default function MyBiShowcasePage() {
  return (
    <MyBiShowcase mode="default" />
  );
}
