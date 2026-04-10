"use client";

import { useState } from "react";

const videos = [
  {
    title: "CASH COW",
    category: "Cash Cow Editing",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#8B00FF",
  },
  {
    title: "REEL",
    category: "Reels Editing",
    bg: "linear-gradient(135deg, #1a0a00 0%, #2d1b00 50%, #1a0a00 100%)",
    accent: "#A020F0",
  },
  {
    title: "VLOG",
    category: "Vlog / Travel",
    bg: "linear-gradient(135deg, #001a0a 0%, #002d1a 50%, #001a0a 100%)",
    accent: "#BF5FFF",
  },
  {
    title: "PODCAST",
    category: "Podcast Edit",
    bg: "linear-gradient(135deg, #1a001a 0%, #2d002d 50%, #1a001a 100%)",
    accent: "#D070FF",
  },
];

function PlayIcon() {
  return (
    <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      className="relative py-24 px-8"
      style={{ background: "#000" }}
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-white mb-1">MY BEST EDITS</h2>
        <div className="title-divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {videos.map((v, i) => (
            <div
              key={i}
              className="video-thumb group rounded-sm overflow-hidden cursor-pointer"
              style={{ aspectRatio: "16/10" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background */}
              <div
                className="thumb-bg absolute inset-0 transition-transform duration-500"
                style={{ background: v.bg }}
              />

              {/* Noise texture overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: "150px 150px",
                  mixBlendMode: "overlay",
                }}
              />

              {/* Glow on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${v.accent}33, transparent 70%)`,
                  opacity: hovered === i ? 1 : 0,
                }}
              />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="play-btn">
                  <PlayIcon />
                </div>
              </div>

              {/* Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3
                  className="text-white font-bold tracking-widest text-sm"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.18em" }}
                >
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}