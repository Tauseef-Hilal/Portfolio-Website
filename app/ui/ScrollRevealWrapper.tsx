"use client";

import { useEffect } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function ScrollRevealWrapper() {
  useScrollReveal();

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");
  }, []);

  return null;
}
