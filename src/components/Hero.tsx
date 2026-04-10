"use client"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, rgba(80,0,140,0.4) 0%, rgba(0,0,0,0) 60%), #000",
      }}
    >
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,0,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,0,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div
        className="hero-glow"
        style={{ top: "10%", right: "5%", animationDelay: "0s" }}
      />
      <div
        className="hero-glow"
        style={{
          bottom: "5%",
          left: "20%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(100,0,200,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Software logos floating */}
      <div
        className="absolute right-[30%] top-[18%] md:right-[28%] lg:right-[32%] z-10"
        style={{ animation: "float 4s ease-in-out infinite" }}
      >
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm"
          style={{
            background: "linear-gradient(135deg, #9B59B6, #8B00FF)",
            boxShadow: "0 0 30px rgba(139,0,255,0.7)",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.2rem",
            letterSpacing: "0.05em",
          }}
        >
          Pr
        </div>
      </div>
      <div
        className="absolute right-[12%] top-[14%] z-10"
        style={{ animation: "float 5s ease-in-out infinite 1s" }}
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold"
          style={{
            background: "linear-gradient(135deg, #6B21A8, #A855F7)",
            boxShadow: "0 0 25px rgba(168,85,247,0.6)",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
          }}
        >
          Ae
        </div>
      </div>

      {/* Lightning SVG decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-40">
        <svg
          viewBox="0 0 600 800"
          className="absolute right-0 top-0 h-full"
          preserveAspectRatio="xMaxYMid slice"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Lightning bolt 1 */}
          <polyline
            points="350,50 300,220 340,220 260,420"
            stroke="#BF5FFF"
            strokeWidth="2.5"
            fill="none"
            filter="url(#glow)"
            opacity="0.8"
          />
          {/* Lightning bolt 2 */}
          <polyline
            points="450,100 410,260 445,260 380,450"
            stroke="#A020F0"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            opacity="0.6"
          />
          {/* Scattered sparks */}
          <circle cx="310" cy="218" r="3" fill="#BF5FFF" filter="url(#glow)" />
          <circle cx="262" cy="418" r="3" fill="#BF5FFF" filter="url(#glow)" />
          <circle cx="447" cy="258" r="2" fill="#A020F0" filter="url(#glow)" />
          {/* Neon crown outline */}
          <path
            d="M280 620 L260 560 L300 590 L330 550 L360 590 L400 560 L380 620 Z"
            stroke="#FFD700"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            opacity="0.7"
          />
          <path
            d="M255 620 L405 620"
            stroke="#FFD700"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16">
        <div className="max-w-2xl" style={{ animationDelay: "0.1s" }}>
          <p
            className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-3 animate-on-load"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            JIMMY TURNER
          </p>
          <h1
            className="animate-on-load"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: "0.95",
              letterSpacing: "0.03em",
              animationDelay: "0.2s",
              opacity: 0,
            }}
          >
            PROFESSIONAL
            <br />
            <span
              style={{
                color: "var(--purple-primary)",
                textShadow: "0 0 40px rgba(139,0,255,0.6)",
              }}
            >
              VIDEO EDITOR
            </span>
          </h1>
          <p
            className="mt-5 text-gray-400 text-base tracking-wide animate-on-load"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              animationDelay: "0.4s",
              opacity: 0,
            }}
          >
            Making Your Videos Look More Cool.
          </p>
          <div
            className="mt-8 animate-on-load"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <a href="#contact" className="btn-purple inline-block">
              LET'S TALK
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #000)" }}
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
          }
        }
      `}</style>
    </section>
  );
}
