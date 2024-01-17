import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-5xl px-32 text-center relative">
      A symphony of mobile, web, and software echoes, crafting digital wonders
      on the horizon&apos;s canvas.
      <Link
        href="#story"
        className="border-white border rounded-full text-white text-xl p-4 cursor-pointer transition-all hover:bg-white hover:text-3xl hover:text-black absolute bottom-14"
      >
        <BsArrowDown />
      </Link>
    </div>
  );
}
