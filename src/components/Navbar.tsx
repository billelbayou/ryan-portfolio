"use client";

import { useState } from "react";

const navLinks = ["Home", "About", "Portfolio", "Testimonials", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(139,0,255,0.15)",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="text-white font-bold text-lg tracking-widest uppercase"
        style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.2em" }}
      >
        Video<span style={{ color: "var(--purple-primary)" }}>Alchemist</span>
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex items-center gap-4">
        {/* Facebook */}
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        {/* YouTube */}
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="YouTube"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
            <polygon
              points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
              fill="#000"
            />
          </svg>
        </a>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-purple-900 py-4 md:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="nav-link text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
