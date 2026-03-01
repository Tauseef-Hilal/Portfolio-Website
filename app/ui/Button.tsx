import { IoArrowForward } from "react-icons/io5";

export default function Button({ text }: { text: string }) {
  return (
    <span className="group relative inline-flex items-center gap-3 uppercase text-xs tracking-wider font-semibold px-7 py-3 border border-gray-700 text-white bg-white/5 backdrop-blur-sm transition-all duration-300 cursor-pointer active:scale-95 hover:border-gray-400 hover:bg-white/10">
      {/* Subtle glow layer */}
      <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 pointer-events-none" />

      <span className="relative z-10">{text}</span>

      <IoArrowForward className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );
}
