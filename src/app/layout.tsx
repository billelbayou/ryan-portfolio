import type { Metadata } from "next";
import { Exo_2, Orbitron } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

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
  metadataBase: new URL("https://ryanzerrouki.com"), // Updated base URL
  title: {
    default: "Ryan Zerrouki | Professional Video Editor",
    template: "%s | Ryan Zerrouki Video Editor",
  },
  description: "Professional video editing services by Ryan Zerrouki. Specializing in Cash Cow, Reels, Logo Animation, and Podcast editing.",
  keywords: ["video editor", "Ryan Zerrouki", "cash cow editing", "reels editing", "logo animation", "podcast editing", "color grading", "motion graphics"],
  authors: [{ name: "Ryan Zerrouki" }],
  openGraph: {
    title: "Ryan Zerrouki | Professional Video Editor",
    description: "Professional video editing services by Ryan Zerrouki.",
    url: "https://ryanzerrouki.com",
    siteName: "Ryan Zerrouki Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Zerrouki | Professional Video Editor",
    description: "Making Your Videos Look More Cool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable} scroll-smooth scroll-pt-16`}>
      <body className="bg-black text-gray-100 min-h-screen flex flex-col font-body">
        <Header />
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}
