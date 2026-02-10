import Link from "next/link";
import BackgroundMusicButton from "./BackgroundMusicButton";
import { iceland } from "../fonts";

export default function Navbar() {
  return (
    <nav className="text-center py-4 fixed w-full bg-[#0000009f] z-20">
      <Link
        href="/"
        className={`${iceland.className} text-3xl md:text-5xl uppercase`}
      >
        Tauseef
      </Link>
      <BackgroundMusicButton className="absolute right-8 top-6 md:top-5 text-xl md:text-3xl" />
    </nav>
  );
}
