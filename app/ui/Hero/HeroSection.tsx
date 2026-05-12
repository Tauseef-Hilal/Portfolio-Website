import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

import ScrollToStoryButton from "./ScrollToStoryButton";
import { Terminal, Cpu, Database, Network } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/Tauseef-Hilal",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tauseef-tantary/",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/tauseef_tantary",
    icon: FaTwitter,
  },
];

const METRICS = [
  { label: "Latency Reduction", value: "30x", icon: Network },
  { label: "Req/Sec Sustained", value: "900+", icon: Cpu },
  { label: "Records Managed", value: "4000+", icon: Database },
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-20"
    >
      {/* Structural Background: Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-muted-foreground">
            AVAILABLE FOR FREELANCE & ROLES
          </span>
        </div>

        {/* Name & Title */}
        <header
          className="mb-6 md:mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            I build reliable, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              backend-heavy systems.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            Backend-focused Full-Stack Engineer specializing in scalable
            architectures, real-time infrastructure, async processing, and
            production-grade systems for fast-moving startups.
          </p>
        </header>

        {/* Terminal/Metrics Block (The Engineer's Workspace) */}
        <div
          className="w-full max-w-3xl mx-auto mt-4 md:mt-6 mb-10 md:mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Desktop Terminal View */}
          <div className="hidden md:block rounded-lg border border-border bg-card shadow-sm overflow-hidden text-left">
            <div className="flex items-center px-4 py-2 border-b border-border bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              </div>
              <div className="ml-4 text-xs text-muted-foreground font-mono">
                ~ /system/metrics
              </div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-6">
              {METRICS.map((metric, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <metric.icon size={16} />
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      {metric.label}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-foreground font-mono">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Metrics View (More compact) */}
          <div className="md:hidden flex flex-wrap justify-center gap-4 px-2">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg border border-border bg-card/40 backdrop-blur-sm">
                 <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-tighter font-bold text-muted-foreground">
                    <metric.icon size={12} className="text-primary" />
                    <span>{metric.label.split(' ')[0]}</span>
                  </div>
                  <div className="text-lg font-bold text-foreground font-mono">
                    {metric.value}
                  </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA & Socials */}
        <div
          className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up pb-10 md:pb-20"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md border border-primary/40 bg-primary/10 px-8 font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 outline-none"
          >
            Discuss Architecture
          </a>
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <Link
                    href={href}
                    aria-label={`Visit ${name} profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex p-3 rounded-md border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shadow-sm"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <ScrollToStoryButton />
    </section>
  );
}
