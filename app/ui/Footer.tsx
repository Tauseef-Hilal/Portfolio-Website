import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 flex flex-col gap-12 relative bg-black border-t border-gray-800/30">
      {/* Divider */}
      <hr className="border-gray-800/50" />

      <div className="flex flex-col md:flex-row md:justify-between w-full px-6 lg:px-20 xl:px-48 2xl:px-64 gap-12 md:gap-8">
        {/* Social Media */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            Social
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="https://linkedin.com/in/tauseef-hilal/"
                target="_blank"
                className="text-gray-400 hover:text-white font-light text-sm transition-colors duration-300 flex items-center gap-2 group"
              >
                LinkedIn
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-300">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/tauseef_tantary"
                target="_blank"
                className="text-gray-400 hover:text-white font-light text-sm transition-colors duration-300 flex items-center gap-2 group"
              >
                Twitter / X
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-300">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Tauseef-Hilal"
                target="_blank"
                className="text-gray-400 hover:text-white font-light text-sm transition-colors duration-300 flex items-center gap-2 group"
              >
                GitHub
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-300">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            Community
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="https://discord.gg/B4yMMDF3WP"
                target="_blank"
                className="text-gray-400 hover:text-white font-light text-sm transition-colors duration-300 flex items-center gap-2 group"
              >
                Discord
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-300">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://youtube.com/channel/UC93eIZSH01Z2k9fQQxrIQTw"
                target="_blank"
                className="text-gray-400 hover:text-white font-light text-sm transition-colors duration-300 flex items-center gap-2 group"
              >
                YouTube
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-300">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* More */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            More
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="/biography"
                className="text-gray-400 hover:text-white font-light text-sm transition-colors duration-300 flex items-center gap-2 group"
              >
                Biography
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-300">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white font-light text-sm transition-colors duration-300 flex items-center gap-2 group"
              >
                Resume
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 duration-300">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800/30 pt-10 text-center px-6">
        <p className="text-xs text-gray-600 font-light">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-gray-400">Tauseef Tantary</span>. Crafted with
          care.
        </p>
      </div>
    </footer>
  );
}
