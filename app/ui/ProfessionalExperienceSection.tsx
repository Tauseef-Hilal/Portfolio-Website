"use client";

import { workExperience } from "../lib/workExperience";
import ExperienceCard from "./ExperienceCard";

export default function ProfessionalExperienceSection() {
  return (
    <section className="min-h-screen py-24 2xl:px-32 relative bg-black">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-indigo-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 bg-gradient-to-b from-white/3 to-transparent py-6 md:py-8 rounded-2xl">
          <div className="mb-4 space-y-3">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              Experience
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white">
              Professional Journey
            </h3>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gray-400 to-transparent mb-6" />
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            A timeline of roles, collaborations, and system-building work across
            backend engineering, full-stack development, and production
            deployments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-800/60 ml-3 space-y-8">
          {workExperience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
