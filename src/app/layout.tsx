import type { Metadata } from "next";
import { Exo, Exo_2, Orbitron } from "next/font/google";
import "./globals.css";

const exo = Exo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const exo2 = Exo_2({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jimmy Turner | Professional Video Editor",
    template: "%s | Jimmy Turner Video Editor",
  },
  description: "Making Your Videos Look More Cool. Professional video editing services including Cash Cow, Reels, Logo Animation, and Podcast editing.",
  keywords: ["video editor", "cash cow editing", "reels editing", "logo animation", "podcast editing", "color grading", "motion graphics"],
  authors: [{ name: "Jimmy Turner" }],
  openGraph: {
    title: "Jimmy Turner | Professional Video Editor",
    description: "Making Your Videos Look More Cool. Professional video editing services.",
    url: "https://videoalchemist.com",
    siteName: "Jimmy Turner Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimmy Turner | Professional Video Editor",
    description: "Making Your Videos Look More Cool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo.variable} ${exo2.variable} ${orbitron.variable} scroll-smooth`}>
      <body className="bg-black text-gray-100 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}