import Image from "next/image";
import ScrollToStoryButton from "./ScrollToStoryButton";
import { iceland } from "../fonts";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className={`relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black ${iceland.className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-black pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full filter blur-3xl pointer-events-none animate-glow"></div>

      {/* Mobile background image */}
      <div className="absolute inset-0 md:hidden opacity-20">
        <Image
          src="/images/tauseef1.png"
          alt="Tauseef"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="relative z-10 w-full h-full md:flex items-center justify-around px-6 md:px-12">
        {/* Desktop Image */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <Image
            src="/images/tauseef1.png"
            alt="Tauseef"
            width={600}
            height={600}
            priority
            className="w-full max-w-md object-cover blended-image"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left py-24 md:py-28 px-6 md:px-0">
          {/* Name */}
          <div className="mb-12 space-y-6">
            <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent block lg:inline">
                Tauseef
              </span>{" "}
              <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent block lg:inline">
                Tantary
              </span>
            </h1>

            <div className="w-16 h-[2px] bg-gradient-to-r from-gray-300 to-transparent mx-auto md:mx-0"></div>
          </div>

          {/* Role & Tagline */}
          <div className="space-y-4 mb-14 max-w-lg">
            <p className="text-gray-100 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide leading-relaxed">
              Backend-Centric Full-Stack Engineer
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Designing and building scalable systems with clean architecture,
              real-time infrastructure, and production-grade backend solutions.
            </p>
          </div>

          {/* Social Links */}
          <ul className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <li>
              <Link
                href="https://github.com/Tauseef-Hilal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-3 border border-gray-700/80 hover:border-gray-400 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/tauseef-tantary/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-3 border border-gray-700/80 hover:border-gray-400 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </Link>
            </li>

            <li>
              <Link
                href="https://x.com/tauseef_tantary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-3 border border-gray-700/80 hover:border-gray-400 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5"
                aria-label="Twitter"
              >
                <FaTwitter size={22} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ScrollToStoryButton />
    </section>
  );
}
