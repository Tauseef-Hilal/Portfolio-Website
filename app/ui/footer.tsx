import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 flex flex-col gap-8 relative">
      <hr className="border-[#2a2c3774] border-4" />
      <div className="grid grid-flow-col place-content-center text-center gap-24 px-4">
        <ul>
          <span className="text-xl font-light">Social Media</span>
          <li className="text-gray-400 hover:text-gray-300 font-light">
            <Link href="https://linkedin.com/in/tauseef-hilal/" target="_blank">
              LinkedIn
            </Link>
          </li>
          <li className="text-gray-400 hover:text-gray-300 font-light">
            <Link href="https://twitter.com/_tauseef_hilal_" target="_blank">
              Twitter
            </Link>
          </li>
          <li className="text-gray-400 hover:text-gray-300 font-light">
            <Link href="https://github.com/Tauseef-Hilal" target="_blank">
              GitHub
            </Link>
          </li>
        </ul>
        <ul>
          <span className="text-xl font-light">Community</span>
          <li className="text-gray-400 hover:text-gray-300 font-light">
            <Link
              href="https://youtube.com/channel/UC93eIZSH01Z2k9fQQxrIQTw"
              target="_blank"
            >
              YouTube
            </Link>
          </li>
          <li className="text-gray-400 hover:text-gray-300 font-light">
            <Link href="https://discord.gg/B4yMMDF3WP" target="_blank">
              Discord
            </Link>
          </li>
          <li className="text-gray-400 hover:text-gray-300 font-light">
            <Link href="https://github.com/Tauseef-Hilal" target="_blank">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
      <span className="absolute bottom-2 text-sm bg-[#2a2c3774] text-gray-500 text-center w-full font-light">
        &copy; Copyright 2024{" "}
        <span className="font-medium">Tauseef Tantary</span>
      </span>
    </footer>
  );
}
