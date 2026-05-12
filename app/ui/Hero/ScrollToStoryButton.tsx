"use client";
import { BsArrowDown } from "react-icons/bs";

export default function ScrollToStoryButton() {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
      className="border border-border hover:border-foreground rounded-full text-muted-foreground hover:text-foreground text-lg p-4 cursor-pointer transition-all duration-300 absolute bottom-6 hover:bg-muted animate-bounce z-10 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-border"
      aria-label="Scroll to next section"
    >
      <BsArrowDown />
    </button>
  );
}
