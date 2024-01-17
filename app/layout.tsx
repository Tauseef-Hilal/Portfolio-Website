import type { Metadata } from "next";
import Navbar from "./ui/Navbar/Navbar";
import Footer from "./ui/Footer";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "TAUSEEF TANTARY",
  description:
    "SPARKED BY CODE IN 5TH GRADE, I TURNED CURIOSITY INTO DIGITAL CREATION. DESPITE DOUBTS, MY LOVE FOR PROGRAMMING PERSISTED. NOW, A COMPUTER SCIENCE MAJOR IN COLLEGE, BLENDING MOBILE, WEB, AND SOFTWARE DEVELOPMENT SKILLS. DEDICATED TO UNLEASHING DIGITAL WONDERS ON THE HORIZON.",
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
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
