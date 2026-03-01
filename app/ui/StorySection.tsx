import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function StorySection() {
  return (
    <section
      className="relative flex flex-col lg:flex-row min-h-screen items-center justify-between md:px-12 lg:px-24 gap-12 py-20 lg:py-0 overflow-hidden bg-black"
      id="story"
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-x-0 top-1/2 h-96 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent pointer-events-none"></div>
      <div className="absolute -left-40 top-1/4 w-80 h-80 bg-indigo-900/5 rounded-full filter blur-3xl pointer-events-none"></div>

      {/* Mobile Background Icons */}
      <div className="absolute inset-0 lg:hidden opacity-10 pointer-events-none">
        <Image
          src="/images/mainIconsDark.svg"
          alt="Tech Icons"
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center gap-8 order-2 lg:order-1 max-w-2xl text-center lg:text-left px-6 lg:px-0">
        <div className="space-y-3">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gray-400 to-transparent mx-auto lg:mx-0"></div>
        </div>

        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-100">
          Started by curiosity, shaped by constraints. I'm a backend-centric
          full-stack developer passionate about building scalable systems in the
          JavaScript/TypeScript ecosystem.
        </p>

        <p className="text-base md:text-lg font-light leading-relaxed text-gray-300">
          I obsess over clean architecture, real-world trade-offs, and knowing{" "}
          <span className="text-white font-medium">why things work</span>. Every
          project is a chance to solve problems elegantly.
        </p>

        <div className="pt-4">
          <Link href={"/biography"}>
            <Button text="Read my full bio" />
          </Link>
        </div>
      </div>

      {/* Desktop Icons (Side Panel) */}
      <div className="relative z-10 hidden lg:flex flex-col justify-center order-1 lg:order-2 flex-shrink-0">
        <Image
          src="/images/mainIconsDark.svg"
          width={450}
          height={450}
          alt="Tech Icons"
          className="object-cover opacity-40 lg:opacity-60 hover:opacity-80 transition-opacity duration-500"
        />
      </div>
    </section>
  );
}
