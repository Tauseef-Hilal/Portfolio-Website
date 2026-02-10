import type { Metadata } from "next";
import Navbar from "./ui/Navbar/Navbar";
import Footer from "./ui/Footer";
import { delius } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Tauseef Tantary",
  description:
    "I'm a full-stack developer with a strong backend focus, working primarily in the JavaScript/TypeScript ecosystem. I build real-world systems involving APIs, authentication, storage, background jobs, and real-time communication, with an emphasis on clean architecture and long-term maintainability.",
  authors: { name: "Tauseef Hilal Tantary" },
  keywords:
    "programming, coder, computer science, web development, software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={delius.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
