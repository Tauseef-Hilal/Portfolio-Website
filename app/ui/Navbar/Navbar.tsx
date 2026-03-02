import Link from "next/link";
import BackgroundMusicButton from "./BackgroundMusicButton";
import { iceland } from "../fonts";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-30 border-b border-gray-800/60 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-md">
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Resume */}
        <a
          href="/resume/Tauseef-Tantary-Resume.pdf"
          download
          className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
        >
          {/* Desktop Text */}
          <span className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2 border border-gray-800/40 bg-white/5 backdrop-blur-sm hover:border-indigo-700/40 hover:bg-white/10 transition-all duration-300 rounded-sm">
            Resume
            <FiDownload className="text-sm transition-transform duration-300 group-hover:translate-y-[2px]" />
          </span>

          {/* Mobile Icon */}
          <span className="sm:hidden border border-gray-800/40 p-2 bg-white/5 hover:bg-white/10 hover:border-indigo-700/40 transition-all duration-300 rounded-sm">
            <FiDownload className="text-lg" />
          </span>
        </a>

        {/* Center: Logo */}
        <Link
          href="/"
          className={`${iceland.className} absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl uppercase font-bold tracking-wider text-white hover:text-gray-300 transition-colors duration-300`}
        >
          Tauseef
        </Link>

        {/* Right: Music */}
        <div className="flex items-center">
          <BackgroundMusicButton className="text-lg md:text-xl text-gray-300 hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </nav>
  );
}
