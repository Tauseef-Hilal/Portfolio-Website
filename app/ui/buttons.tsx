import { IoArrowForward } from "react-icons/io5";

export default function Button({ text }: { text: string }) {
  return (
    <span className="uppercase bg-white text-black text-sm w-max px-4 py-2 flex items-center gap-2 border-2 border-black hover:border-2 hover:border-white hover:bg-black hover:text-white cursor-pointer">
      {text} <IoArrowForward />
    </span>
  );
}
