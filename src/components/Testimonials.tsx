const testimonials = [
  {
    name: "MARCUS",
    role: "Co Founder",
    text: "Perfect Communication And Exceptional Skills. This Guy Is King.",
  },
  {
    name: "PETER",
    role: "Manager",
    text: "Did A Great Job. Understood All The Requirements.",
  },
  {
    name: "JANE",
    role: "CEO",
    text: "Jimmy Was Wonderful To Work With. Will Definitely Hire Him Again.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" fill="#FFD700" viewBox="0 0 24 24">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-8 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Top purple accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--purple-primary), transparent)",
        }}
      />

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="section-title text-white">TESTIMONIALS</h2>
          <div className="title-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card p-8 rounded-sm relative overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-3 right-4 text-6xl opacity-20 select-none pointer-events-none"
                style={{
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                  color: "#fff",
                }}
              >
                "
              </div>

              <StarRating />

              <h3
                className="text-white font-bold mb-1"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.5rem",
                  letterSpacing: "0.1em",
                }}
              >
                {t.name}
              </h3>
              <p
                className="text-purple-200 text-xs tracking-widest mb-4 font-semibold uppercase"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: "0.2em",
                }}
              >
                {t.role}
              </p>
              <p
                className="text-white text-sm leading-relaxed"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 500,
                }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom purple accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--purple-primary), transparent)",
        }}
      />
    </section>
  );
}
