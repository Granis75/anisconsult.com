"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { track } from "@/lib/track";

type TrackedLinkProps = {
  href: string;
  event: string;
  data?: Record<string, unknown>;
  className?: string;
  children: ReactNode;
};

export function TrackedLink({
  href,
  event,
  data,
  className,
  children,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track(event, data)}
    >
      {children}
    </Link>
  );
}
