import Link from "next/link";
import BackgroundMusicButton from "./BackgroundMusicButton";

export default function Navbar() {
  return (
    <nav className="text-center text-2xl md:text-4xl uppercase py-4 fixed w-full bg-[#0000009f] z-20">
      <Link href="/">Tauseef</Link>
      <BackgroundMusicButton className="absolute right-8 top-4" />
    </nav>
  );
}
