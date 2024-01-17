import type { Metadata } from "next";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Tauseef Tantary | Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="w-full">
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
