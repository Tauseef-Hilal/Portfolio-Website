import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import ScrollRevealWrapper from "./ui/ScrollRevealWrapper";
import Navbar from "./ui/Navbar/Navbar";
import Footer from "./ui/Footer";
import { lato } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tauseef.in"),

  title: {
    default: "Tauseef Tantary | Full-Stack Engineer",
    template: "%s | Tauseef Tantary",
  },

  description:
    "Full-stack engineer building scalable systems with clean architecture, real-time infrastructure, and production-grade backend design.",

  authors: [{ name: "Tauseef Hilal Tantary" }],
  applicationName: "Tauseef Tantary",

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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tauseef Tantary",
  url: "https://tauseef.in",
  image: "https://tauseef.in/profile.jpg",
  sameAs: [
    "https://github.com/Tauseef-Hilal",
    "https://linkedin.com/in/tauseef-tantary",
    "https://x.com/tauseef_tantary",
    "https://youtube.com/@thinkcsx",
  ],
  jobTitle: "Backend Systems Engineer",
  description:
    "Full-stack engineer building scalable systems with clean architecture, real-time infrastructure, and production-grade backend design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.className} ${lato.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tauseef Tantary",
              url: "https://tauseef.in",
              jobTitle: "Backend-Centric Full-Stack Engineer",
            }),
          }}
        />
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
