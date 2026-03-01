"use client";
import { BsArrowDown } from "react-icons/bs";

export default function ScrollToStoryButton() {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
      className="border border-gray-400 hover:border-white rounded-full text-gray-400 hover:text-white text-lg p-4 cursor-pointer transition-all duration-300 absolute bottom-12 hover:bg-white/5 animate-bounce z-20 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
      aria-label="Scroll to next section"
    >
      <BsArrowDown />
    </button>
  );
}
