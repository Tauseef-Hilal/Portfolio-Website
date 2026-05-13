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
      threshold: 0.1,
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
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

    // Use requestAnimationFrame to ensure layout has settled
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {
        observeElements();
      });
    }, 100);

    // Re-scan when DOM changes (debounced)
    let mutationTimeout: NodeJS.Timeout;
    const mutationObserver = new MutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(observeElements, 200);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(mutationTimeout);
    };
  }, [pathname]); // Re-initialize on pathname change to be absolutely safe
}
