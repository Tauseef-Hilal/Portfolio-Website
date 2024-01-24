"use client";

import Image from "next/image";
import { sendMail } from "../lib/actions";
import { useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

type FormState = "idle" | "sending" | "success" | "failure";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");

    const formData = new FormData(event.currentTarget);
    const res = await sendMail(formData);

    if (res.success) {
      setFormState("success");
    } else {
      setFormState("failure");
    }

    setTimeout(() => setFormState("idle"), 3000);
  }

  return (
    <section className="mt-64 lg:px-20 xl:px-48 2xl:px-56">
      <h2 className="text-xl font-light">Contact Me</h2>
      <div className="flex justify-between h-[240px] gap-2 relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <textarea
            required
            placeholder="Enter your message"
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="bg-[#00000099] border border-gray-800 p-2 text-sm font-light focus:border-gray-400 resize-none"
          />
          <div className="flex justify-between gap-2 items-center">
            <input
              required
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              className="bg-black border border-gray-800 p-2 text-sm font-light w-full focus:border-gray-400"
            />
            <button
              disabled={formState != "idle"}
              type="submit"
              name="submit"
              id="submit"
              className={`uppercase bg-white text-black text-sm px-4 py-2 flex items-center gap-2 border border-black hover:border-white relative ${
                formState == "idle"
                  ? "hover:bg-black hover:text-white cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            >
              <span className={formState != "idle" ? "text-white" : ""}>
                Send
              </span>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                {(() => {
                  switch (formState) {
                    case "sending":
                      return (
                        <span className="animate-spin border-t-2 border-black h-4 w-4" />
                      );
                    case "success":
                      return <IoMdCheckmark className="text-2xl" />;
                    case "failure":
                      return <MdOutlineErrorOutline className="text-xl" />;
                    default:
                      return null;
                  }
                })()}
              </div>
            </button>
          </div>
        </form>
        <Image
          src="/images/spaceman.jpg"
          width={300}
          height={240}
          alt="Spaceman"
          className="absolute z-[-1] h-[81%] md:h-full md:relative md:block object-cover w-full border border-gray-800 transition-all"
        />
      </div>
    </section>
  );
}
