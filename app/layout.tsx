import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
