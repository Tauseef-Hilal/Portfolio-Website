import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-12 flex flex-col gap-8">
      <hr className="border-gray-700 border-[0.5px]" />
      <div className="grid grid-flow-col place-content-center text-center gap-24 px-4">
        <ul>
          <span className="text-xl font-light">Social Media</span>
          <li className="text-gray-400 hover:text-gray-300">
            <Link href="https://linkedin.com/in/tauseef-hilal/">LinkedIn</Link>
          </li>
          <li className="text-gray-400 hover:text-gray-300">
            <Link href="https://twitter.com/_tauseef_hilal_">Twitter</Link>
          </li>
          <li className="text-gray-400 hover:text-gray-300">
            <Link href="https://github.com/Tauseef-Hilal">GitHub</Link>
          </li>
        </ul>
        <ul>
          <span className="text-xl font-light">Community</span>
          <li className="text-gray-400 hover:text-gray-300">
            <Link href="https://youtube.com/channel/UC93eIZSH01Z2k9fQQxrIQTw">
              YouTube
            </Link>
          </li>
          <li className="text-gray-400 hover:text-gray-300">
            <Link href="https://discord.gg/B4yMMDF3WP">Discord</Link>
          </li>
          <li className="text-gray-400 hover:text-gray-300">
            <Link href="https://github.com/Tauseef-Hilal">GitHub</Link>
          </li>
        </ul>
      </div>
      <span className="text-sm text-gray-500 text-center w-full font-light">
        &copy; Copyright 2024 Tauseef Tantary
      </span>
    </div>
  );
}
