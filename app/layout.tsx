import type { Metadata } from "next";
import Navbar from "./ui/Navbar/Navbar";
import Footer from "./ui/Footer";
import { lato } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tauseef.in"),

  title: {
    default: "Tauseef Tantary | Backend-Centric Full-Stack Engineer",
    template: "%s | Tauseef Tantary",
  },

  description:
    "Backend-centric full-stack engineer building scalable systems with clean architecture, real-time infrastructure, and production-grade backend design.",

  authors: [{ name: "Tauseef Hilal Tantary" }],

  keywords: [
    "Tauseef",
    "Tauseef Tantary",
    "Tauseef Hilal",
    "Tauseef Hilal Tantary",
    "Full Stack Engineer",
    "Backend Engineer",
    "Node.js",
    "TypeScript",
    "Software Engineer",
    "Web Development",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://tauseef.in",
    title: "Tauseef Tantary | Backend-Centric Full-Stack Engineer",
    description:
      "Building scalable backend systems with clean architecture and real-time infrastructure.",
    siteName: "Tauseef Tantary",
    images: [
      {
        url: "/images/tauseef1.png",
        width: 1200,
        height: 630,
        alt: "Tauseef Tantary",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tauseef Tantary | Backend Engineer",
    description:
      "Building scalable backend systems with clean architecture and real-time infrastructure.",
    images: ["/images/tauseef1.png"],
  },
};

import { ThemeProvider } from "./components/theme-provider";
import ScrollRevealWrapper from "./ui/ScrollRevealWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className} ${lato.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollRevealWrapper />
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

