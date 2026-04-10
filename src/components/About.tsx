const skills = [
  "Cash Cow Editing",
  "Reels Editing",
  "Logo Animation",
  "Podcast Edit",
  "Color Grading",
  "Motion Graphics",
  "Cash Cow Editing",
  "Reels Editing",
  "Logo Animation",
  "Podcast Edit",
  "Color Grading",
  "Motion Graphics",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(139,0,255,0.8) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 text-center mb-12 px-8">
        <h2 className="section-title text-white">ABOUT ME</h2>
        <div className="title-divider mx-auto" />
        <p
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.02em",
          }}
        >
          Welcome to the cinematic realm of Jimmy, where creativity meets
          technology to craft visually stunning narratives. With a passion for
          storytelling and a keen eye for detail, I embark on a journey to
          transform ordinary footage into extraordinary visual experiences.
        </p>
      </div>

      {/* Marquee skills */}
      <div className="relative mt-10 overflow-hidden">
        {/* Left/right fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #000, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #000, transparent)" }}
        />

        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span
                className="text-sm font-semibold tracking-[0.15em] text-gray-300 uppercase"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {skill}
              </span>
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: "var(--purple-primary)",
                  boxShadow: "0 0 8px var(--purple-primary)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
