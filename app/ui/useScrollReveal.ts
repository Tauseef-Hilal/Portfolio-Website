"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Use a threshold of 0 and a small rootMargin to ensure elements are picked up
    // as soon as they enter the bottom of the viewport
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0,
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal:not(.active)");
      elements.forEach((el) => {
        observerRef.current?.observe(el);
      });
    };

    // Initial scan
    observeElements();

    // Re-scan when DOM changes
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Fallback: If elements are still not active after 3 seconds, just show them
    const fallbackTimer = setTimeout(() => {
      const stuckElements = document.querySelectorAll(".reveal:not(.active)");
      stuckElements.forEach(el => el.classList.add("active"));
    }, 3000);

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [pathname]); // Re-initialize on pathname change to be absolutely safe
}
