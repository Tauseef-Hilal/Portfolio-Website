import Image from "next/image";
import Button from "./buttons";

export default function ContactMe() {
  return (
    <div className="mt-64 px-8 md:px-8 xl:px-56">
      <h2 className="text-xl font-light">Contact Me</h2>
      <div className="flex justify-between h-[240px] gap-2 relative">
        <form className="flex flex-col gap-2 w-full">
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
            <Button text="Send" />
          </div>
        </form>
        <Image
          src="/spaceman.jpg"
          width={300}
          height={240}
          alt="Spaceman"
          className="absolute z-[-1] h-[81%] md:h-full md:relative md:block object-cover w-full border border-gray-800 transition-all hover:scale-110"
        />
      </div>
    </div>
  );
}
