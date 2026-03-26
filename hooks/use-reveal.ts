"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useReveal<T extends HTMLElement>({
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return { ref, isVisible };
}
