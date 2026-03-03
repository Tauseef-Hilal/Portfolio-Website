"use client";

import { useState, memo } from "react";
import { FiChevronDown } from "react-icons/fi";
import { WorkExperience } from "../lib/workExperience";

interface ExperienceCardProps {
  experience: WorkExperience;
}

const ExperienceCard = memo(({ experience: exp }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="relative pl-10">
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
            <p key={idx} className="text-sm text-gray-300 leading-relaxed">
              • {item}
            </p>
          ))}
        </div>

        {/* Expandable Section */}
        {isOpen && (
          <div className="mt-2 space-y-2">
            {/* Remaining Highlights */}
            {exp.highlights.slice(2).map((item, idx) => (
              <p key={idx} className="text-sm text-gray-300 leading-relaxed">
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
        )}

        {/* Expand Button */}
        {exp.highlights.length > 2 && (
          <button
            onClick={toggle}
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
});

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const dateObj = new Date(Number(year), Number(month) - 1);

  return dateObj.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
}

export default ExperienceCard;
