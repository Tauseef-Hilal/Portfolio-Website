import Link from "next/link";
import BackgroundMusicButton from "./bgm_btn";

export default function Navbar() {
  return (
    <div className="text-center text-2xl md:text-4xl uppercase py-4 fixed w-full bg-[#0000009f] z-20">
      <Link href="/">Tauseef</Link>
      <BackgroundMusicButton className="absolute right-4 top-4 " />
    </div>
  );
}
