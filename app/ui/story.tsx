import Image from "next/image";
import Button from "./buttons";
import Link from "next/link";

export default function Story() {
  return (
    <div
      className="flex min-h-screen items-center justify-between px-8 md:px-32 relative"
      id="story"
    >
      <div className="flex flex-col justify-center gap-2 min-h-screen w-[700px]">
        <h2 className=" text-lg text-gray-200 font-light">MY STORY </h2>
        <p className="text-xl text-justify mb-4 md:mb-2">
          SPARKED BY CODE IN 5TH GRADE, I TURNED CURIOSITY INTO DIGITAL
          CREATION. DESPITE DOUBTS, MY LOVE FOR PROGRAMMING PERSISTED. NOW, A
          COMPUTER SCIENCE MAJOR IN COLLEGE, BLENDING MOBILE, WEB, AND SOFTWARE
          DEVELOPMENT SKILLS. DEDICATED TO UNLEASHING DIGITAL WONDERS ON THE
          HORIZON.
        </p>
        <Link href={"/biography"}>
          <Button text="Read my full bio" />
        </Link>
      </div>
      <div className="hidden md:flex flex-col justify-center">
        <Image
          src="mainIconsDark.svg"
          width={500}
          height={500}
          alt="Hero Icons"
        />
      </div>
      <video
        muted
        loop
        autoPlay
        className="absolute left-0 z-[-1] rotate-180 h-full w-full object-cover"
      >
        <source src="/encryption.webm" type="video/webm" />
      </video>
    </div>
  );
}
