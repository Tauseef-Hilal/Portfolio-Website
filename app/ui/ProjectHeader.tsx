import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight break-words">
                {meta.title ?? "Project"}
              </h1>

              <div className="flex items-center gap-3 flex-wrap">
                {meta.year && (
                  <span className="text-xs text-gray-200 bg-gray-800/40 px-2 py-1 rounded-md">
                    {meta.year}
                  </span>
                )}
                {meta.role && (
                  <span className="text-xs text-gray-200 bg-indigo-900/30 px-2 py-1 rounded-md">
                    {meta.role}
                  </span>
                )}
                {meta.status && (
                  <span className="text-xs text-gray-900 bg-amber-300 px-2 py-1 rounded-md">
                    {meta.status}
                  </span>
                )}
              </div>
            </div>

            {meta.shortDescription && (
              <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl">
                {meta.shortDescription}
              </p>
            )}

            {/* Tech */}
            <div className="mt-4 flex flex-wrap gap-3">
              {(meta.tech ?? []).map((t: string) => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 border border-gray-700/60 text-gray-500 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              {meta.githubUrl && (
                <a
                  href={meta.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-all duration-300 group/link"
                >
                  <BsGithub className="text-base group-hover/link:-translate-y-[2px] transition-transform" />
                  <span>Code</span>
                </a>
              )}

              {meta.liveUrl && (
                <a
                  href={meta.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-all duration-300 group/link"
                >
                  <FiExternalLink className="text-base group-hover/link:-translate-y-[2px] transition-transform" />
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
