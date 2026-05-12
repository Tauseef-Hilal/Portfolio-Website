import Link from "next/link";
import BackgroundMusicButton from "./BackgroundMusicButton";
import { ThemeToggle } from "./ThemeToggle";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Resume */}
        <a
          href="/resume/Tauseef-Tantary-Resume.pdf"
          download
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300"
        >
          {/* Desktop Text */}
          <span className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-muted transition-all duration-300 rounded-md">
            Resume
            <FiDownload className="text-sm transition-transform duration-300 group-hover:translate-y-[2px]" />
          </span>

          {/* Mobile Icon */}
          <span className="sm:hidden border border-border p-2 bg-card/50 hover:bg-muted transition-all duration-300 rounded-md">
            <FiDownload className="text-lg" />
          </span>
        </a>

        {/* Center: Logo */}
        <Link
          href="/"
          className={`absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300`}
        >
          Tauseef
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <BackgroundMusicButton className="text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors duration-300" />
        </div>
      </div>
    </nav>
  );
}
