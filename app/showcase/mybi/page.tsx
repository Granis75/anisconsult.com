import { permanentRedirect } from "next/navigation";

export default function RemovedShowcasePage() {
  permanentRedirect("/systems");
}
