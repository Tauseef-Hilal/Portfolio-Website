"use client";

import { workExperience } from "../lib/workExperience";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { getSkillStyle } from "./utils";

export default function ProfessionalExperienceSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4 text-muted-foreground">
            <Briefcase size={20} className="text-primary" />
            <h2 className="text-sm font-semibold tracking-widest uppercase">
              Experience
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Professional Experience{" "}
          </h3>
          <div className="w-20 h-[4px] bg-gradient-to-r from-foreground to-transparent mb-8" />
        </div>

        {/* Experience Grid / List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {workExperience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal"
              style={{ ["--delay" as any]: `${index * 0.1}s` }}
            >
              {/* Timeline Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-border text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] min-h-[380px] flex flex-col p-6 rounded-xl border border-border bg-card/60 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-card transition-all duration-300">
                <div className="flex flex-col gap-1 mb-4">
                  <h4 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h4>
                  <div className="text-primary font-medium">{exp.company}</div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.startDate} — {exp.endDate || "Present"}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-muted/50 border border-border">
                      {exp.employmentType}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {exp.techStack && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={getSkillStyle(tech)}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
