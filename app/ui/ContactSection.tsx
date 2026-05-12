"use client";

import Image from "next/image";
import { sendMail } from "../lib/actions";
import { useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { Mail } from "lucide-react";


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
    <section id="contact" className="relative py-28 lg:py-40 bg-background overflow-hidden">
      {/* Background gradients and Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background/50 to-background pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 max-w-2xl reveal">
          <div className="flex items-center gap-3 mb-4 text-muted-foreground">
            <Mail size={20} className="text-primary" />
            <h2 className="text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Let's Build Something Great
          </h3>
          <div className="w-20 h-[4px] bg-gradient-to-r from-foreground to-transparent mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Open to remote backend and full-stack opportunities. If you're
            building scalable systems or exploring innovative solutions, I'd
            love to discuss architecture.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative border border-border bg-card/40 backdrop-blur-xl p-8 md:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 rounded-2xl shadow-2xl shadow-primary/5 reveal" style={{ ["--delay" as any]: "0.2s" }}>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full lg:w-1/2 justify-center"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Your Email
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="founder@startup.com"
                name="email"
                className="w-full bg-black/5 dark:bg-black/40 border border-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/60 shadow-inner text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Project Details
              </label>
              <textarea
                id="message"
                required
                placeholder="Tell me about your current architecture and bottlenecks..."
                name="message"
                rows={5}
                className="w-full bg-black/5 dark:bg-black/40 border border-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/60 resize-none shadow-inner text-foreground"
              />
            </div>

            {/* Button + Status */}
            <div className="flex items-center gap-4 pt-2">
              <button
                disabled={formState !== "idle"}
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 font-medium text-background transition-colors hover:bg-foreground/90 hover:shadow-md outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {formState === "idle" && "Send Message"}
                  {formState === "sending" && (
                    <span className="animate-spin border-2 border-background border-t-transparent h-5 w-5 rounded-full" />
                  )}
                  {formState === "success" && "Sent!"}
                  {formState === "failure" && "Failed"}
                </span>
              </button>

              {formState === "success" && (
                <div className="flex items-center gap-2 text-emerald-500 animate-fade-in">
                  <IoMdCheckmark className="text-2xl" />
                </div>
              )}
              {formState === "failure" && (
                <div className="flex items-center gap-2 text-destructive animate-fade-in">
                  <MdOutlineErrorOutline className="text-2xl" />
                </div>
              )}
            </div>
          </form>

          {/* Image */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl blur-2xl"></div>
            <div className="relative w-full h-full min-h-[400px] border border-border/50 rounded-xl overflow-hidden bg-muted shadow-2xl">
              <Image
                src="/images/spaceman.jpg"
                fill
                alt="Exploration and Engineering"
                className="object-cover opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
