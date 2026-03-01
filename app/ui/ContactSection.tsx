"use client";

import Image from "next/image";
import { sendMail } from "../lib/actions";
import { useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import Button from "./Button";

type FormState = "idle" | "sending" | "success" | "failure";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");

    const formData = new FormData(event.currentTarget);
    const res = await sendMail(formData);

    if (res.success) setFormState("success");
    else setFormState("failure");

    setTimeout(() => setFormState("idle"), 3000);
  }

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/15 to-gray-950 pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-indigo-900/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <div className="mb-4 space-y-3">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-5xl font-light text-white mb-6">
              Let's Build Something Great
            </h3>
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gray-400 to-transparent mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Open to remote backend and full-stack opportunities. If you're
            building scalable systems or exploring innovative solutions, I'd
            love to discuss it.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative border border-gray-800/60 bg-gradient-to-br from-gray-900/30 to-black/70 backdrop-blur-lg p-8 md:p-10 flex flex-col lg:flex-row gap-10 lg:gap-16 lg:min-h-96">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full lg:w-1/2"
          >
            <textarea
              required
              placeholder="Tell me about your project or opportunity..."
              name="message"
              rows={5}
              className="bg-gray-950/40 border border-gray-800/60 p-4 text-sm font-light focus:outline-none focus:border-gray-500 focus:bg-gray-900/50 resize-none transition-all placeholder:text-gray-600 hover:border-gray-700/80 rounded-sm"
            />

            <input
              required
              type="email"
              placeholder="your@email.com"
              name="email"
              className="bg-gray-950/40 border border-gray-800/60 p-4 text-sm font-light w-full focus:outline-none focus:border-gray-500 focus:bg-gray-900/50 transition-all placeholder:text-gray-600 hover:border-gray-700/80 rounded-sm"
            />

            {/* Button + Status */}
            <div className="flex items-center gap-4 pt-4">
              <button
                disabled={formState !== "idle"}
                type="submit"
                className="disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                <Button
                  text={
                    formState === "idle"
                      ? "Send Message"
                      : formState === "sending"
                        ? "Sending..."
                        : formState === "success"
                          ? "Sent!"
                          : "Error"
                  }
                />
              </button>

              {formState === "sending" && (
                <span className="animate-spin border-2 border-gray-400 border-t-transparent h-4 w-4" />
              )}
              {formState === "success" && (
                <IoMdCheckmark className="text-xl text-emerald-400" />
              )}
              {formState === "failure" && (
                <MdOutlineErrorOutline className="text-xl text-red-400" />
              )}
            </div>
          </form>

          {/* Image */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
            <div className="relative w-full h-full border border-gray-800/60 overflow-hidden bg-gray-950">
              <Image
                src="/images/spaceman.jpg"
                fill
                alt="Spaceman"
                className="object-cover opacity-70 hover:opacity-90 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
