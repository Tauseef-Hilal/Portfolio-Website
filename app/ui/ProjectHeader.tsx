import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { getSkillStyle } from "./utils";


export default function ProjectHeader({ meta }: { meta: any }) {
  return (
    <div className="mb-12">
      <div className="bg-gradient-to-b from-white/3 to-transparent py-6 md:py-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {/* Mobile image */}
          <div className="md:hidden w-full">
            {meta.imagePath && (
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4">
                <Image
                  src={meta.imagePath}
                  alt={meta.title ?? "project image"}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div className="flex flex-col justify-between gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight break-words">
                {meta.title ?? "Project"}
              </h1>

              <div className="flex items-center gap-3 flex-wrap">
                {meta.year && (
                  <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md border border-border">
                    {meta.year}
                  </span>
                )}
                {meta.role && (
                  <span className="text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                    {meta.role}
                  </span>
                )}
                {meta.status && (
                  <span className="text-xs text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {meta.status}
                  </span>
                )}
              </div>
            </div>

            {meta.shortDescription && (
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {meta.shortDescription}
              </p>
            )}

            {/* Tech */}
            <div className="mt-6 flex flex-wrap gap-2">
              {(meta.tech ?? []).map((t: string) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={getSkillStyle(t)}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              {meta.githubUrl && (
                <a
                  href={meta.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-all duration-300 group/link font-semibold"
                >
                  <BsGithub className="text-lg group-hover/link:-translate-y-[2px] transition-transform" />
                  <span>Code</span>
                </a>
              )}

              {meta.liveUrl && (
                <a
                  href={meta.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-all duration-300 group/link font-semibold"
                >
                  <FiExternalLink className="text-lg group-hover/link:-translate-y-[2px] transition-transform" />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>

          {/* Desktop image */}
          <div className="hidden md:block">
            {meta.imagePath && (
              <div className="relative w-full max-w-[360px] aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={meta.imagePath}
                  alt={meta.title ?? "project image"}
                  fill
                  sizes="(max-width: 1200px) 33vw, 360px"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
