import Image from "next/image";
import ScrollToStoryButton from "./ScrollToStoryButton";
import { iceland } from "../fonts";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className={`min-h-screen max-h-screen overflow-clip flex flex-col justify-center items-center text-center relative ${iceland.className}`}
    >
      <div className="w-full md:flex items-center justify-around overflow-clip">
        <Image
          src={"/images/tauseef1.png"}
          alt="Tauseef"
          width={600}
          height={600}
          className="md:pt-40 w-full object-cover blended-image opacity-50 md:opacity-100"
        />
        <div className="absolute top-[60%] md:static w-full">
          <h1 className={`uppercase text-3xl md:text-7xl`}>Tauseef Tantary</h1>
          <p className="text-neutral-400 text-xl md:text-4xl">
            Full-Stack Engineer
          </p>
          <ul className="mt-8 flex items-center justify-center gap-2">
            <li className="w-min p-2 border border-neutral-700">
              <Link href={"https://github.com/Tauseef-Hilal"} target="_blank">
                <FaGithub size={24} />
              </Link>
            </li>
            <li className="w-min p-2 border border-neutral-700">
              <Link
                href={"https://www.linkedin.com/in/tauseef-tantary/"}
                target="_blank"
              >
                <FaLinkedin size={24} />
              </Link>
            </li>
            <li className="w-min p-2 border border-neutral-700">
              <Link href={"https://x.com/tauseef_tantary"} target="_blank">
                <FaTwitter size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ScrollToStoryButton />
    </section>
  );
}
