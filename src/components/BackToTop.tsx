"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-5 bottom-10 z-50"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        color: "#aaa",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        transition: "color 0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "var(--purple-primary)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
      aria-label="Go back to top"
    >
      <span style={{ fontWeight: 600 }}>GO BACK TO THE TOP</span>
      <span style={{ writingMode: "horizontal-tb", fontSize: "0.8rem" }}>
        ↑
      </span>
    </button>
  );
}
