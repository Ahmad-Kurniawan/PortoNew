import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Kurniawan",
  description:
    "A creative developer & designer portfolio showcasing projects, skills, and experience with a modern interactive UI.",
  keywords: ["portfolio", "developer", "nextjs", "react", "design"],
  authors: [{ name: "Ahmad Kurniawan" }],
  openGraph: {
    title: "Ahmad Kurniawan",
    description: "Creative developer portfolio with interactive OptionWheel navigation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
