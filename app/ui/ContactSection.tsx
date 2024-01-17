import Image from "next/image";
import Button from "./Button";
import { sendMail } from "../lib/actions";

export default function ContactSection() {
  return (
    <div className="mt-64 xl:px-48">
      <h2 className="text-xl font-light">Contact Me</h2>
      <div className="flex justify-between h-[240px] gap-2 relative">
        <form action={sendMail} className="flex flex-col gap-2 w-full">
          <textarea
            placeholder="Enter your message"
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="bg-[#00000099] border border-gray-800 p-2 text-sm font-light focus:border-gray-400 resize-none"
          />
          <div className="flex justify-between gap-2 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              className="bg-black border border-gray-800 p-2 text-sm font-light w-full focus:border-gray-400"
            />
            <input
              type="submit"
              name="submit"
              id="submit"
              value="Send"
              className="uppercase bg-white text-black text-sm w-max px-4 py-2 flex items-center gap-2 border border-black hover:border-white hover:bg-black hover:text-white cursor-pointer"
            />
          </div>
        </form>
        <Image
          src="/images/spaceman.jpg"
          width={300}
          height={240}
          alt="Spaceman"
          className="absolute z-[-1] h-[81%] md:h-full md:relative md:block object-cover w-full border border-gray-800 transition-all hover:scale-110"
        />
      </div>
    </div>
  );
}
