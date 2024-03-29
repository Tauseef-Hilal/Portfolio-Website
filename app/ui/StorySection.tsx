import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function StorySection() {
  return (
    <section
      className="flex min-h-screen items-center justify-between md:px-24 relative"
      id="story"
    >
      <div className="flex flex-col justify-center gap-2 min-h-screen lg:px-8 w-[700px]">
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
      <div className="absolute z-[-1] lg:static lg:flex flex-col justify-center">
        <Image
          src="/images/mainIconsDark.svg"
          width={500}
          height={500}
          alt="Hero Icons"
          className="object-cover opacity-30 lg:opacity-100"
        />
      </div>
    </section>
  );
}
