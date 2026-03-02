"use client";

import { useState } from "react";
import { workExperience } from "../lib/workExperience";
import { FiChevronDown } from "react-icons/fi";

export default function ProfessionalExperienceSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

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
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            A timeline of roles, collaborations, and system-building work across
            backend engineering, full-stack development, and production
            deployments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-800/60 ml-3 space-y-8">
          {workExperience.map((exp) => {
            const isOpen = openId === exp.id;

            return (
              <div key={exp.id} className="relative pl-10">
                {/* Timeline Dot - Active */}
                <div className="absolute left-[-7px] top-3 w-3 h-3 bg-indigo-600/70 rounded-full border border-indigo-800/50 shadow-lg shadow-indigo-600/20" />

                {/* Card */}
                <div className="group bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/40 hover:border-indigo-700/40 transition-all duration-500 p-6 md:p-8 backdrop-blur-sm rounded-lg">
                  {/* Top Row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
                        {exp.company} · {exp.employmentType} · {exp.location}
                      </p>
                    </div>

                    <div className="text-sm text-gray-600 group-hover:text-gray-400 font-light whitespace-nowrap transition-colors">
                      {formatDate(exp.startDate)} —{" "}
                      {exp.endDate ? formatDate(exp.endDate) : "Present"}
                    </div>
                  </div>

                  {/* Default Highlights (always visible first 2) */}
                  <div className="mt-4 space-y-2">
                    {exp.highlights.slice(0, 2).map((item, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-gray-300 leading-relaxed"
                      >
                        • {item}
                      </p>
                    ))}
                  </div>

                  {/* Expandable Section */}
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[1000px] mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Remaining Highlights */}
                      {exp.highlights.slice(2).map((item, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-gray-300 leading-relaxed"
                        >
                          • {item}
                        </p>
                      ))}

                      {/* Tech Stack */}
                      {exp.techStack && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/30 mt-4">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] px-2.5 py-1 border border-gray-700/60 text-gray-500 rounded-sm group-hover:border-indigo-700/60 group-hover:text-indigo-300 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expand Button */}
                  {exp.highlights.length > 2 && (
                    <button
                      onClick={() => toggle(exp.id)}
                      className="mt-5 flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-300 transition-all duration-300"
                    >
                      <span>{isOpen ? "Show Less" : "Read More"}</span>
                      <FiChevronDown
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const dateObj = new Date(Number(year), Number(month) - 1);

  return dateObj.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
}
