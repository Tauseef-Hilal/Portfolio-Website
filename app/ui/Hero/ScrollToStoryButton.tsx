"use client";
import { BsArrowDown } from "react-icons/bs";

export default function ScrollToStoryButton() {
  return (
    <span
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
      className="border-white border rounded-full text-white text-xl p-4 cursor-pointer transition-all hover:bg-white hover:text-3xl hover:text-black absolute bottom-14 hover:bottom-[3.2rem]"
    >
      <BsArrowDown />
    </span>
  );
}
