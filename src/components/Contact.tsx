"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", interest: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.interest) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", interest: "" });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #000 0%, #0a0010 50%, #000 100%)",
      }}
    >
      {/* Purple glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 rounded-full"
        style={{
          background: "var(--purple-primary)",
          boxShadow: "0 0 60px 20px rgba(139,0,255,0.4)",
        }}
      />

      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-white mb-12"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            letterSpacing: "0.05em",
            lineHeight: 1.05,
          }}
        >
          I AM READY TO
          <br />
          <span
            style={{
              color: "var(--purple-primary)",
              textShadow: "0 0 40px rgba(139,0,255,0.5)",
            }}
          >
            CONSULT YOU
          </span>
        </h2>

        {/* Form row */}
        <div className="flex flex-col sm:flex-row items-end gap-6 mb-14">
          <div className="flex-1">
            <label
              className="block text-gray-400 text-xs tracking-widest uppercase mb-2"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "0.2em",
              }}
            >
              My Name Is
            </label>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="contact-input"
            />
          </div>
          <div className="flex-1">
            <label
              className="block text-gray-400 text-xs tracking-widest uppercase mb-2"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "0.2em",
              }}
            >
              I Am Interested In
            </label>
            <input
              type="text"
              placeholder="Message"
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="contact-input"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="btn-purple shrink-0"
            style={{ minWidth: "110px" }}
          >
            {sent ? "SENT ✓" : "SEND"}
          </button>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,0,255,0.4), transparent)",
          }}
        />

        {/* Contact info */}
        <div className="flex flex-wrap gap-8">
          <ContactItem icon={<PhoneIcon />} text="+92 455 478 112" />
          <ContactItem
            icon={<LocationIcon />}
            text="Defense Phase 3, Lahore Pakistan"
          />
          <ContactItem icon={<EmailIcon />} text="videoeditor@gmail.com" />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span style={{ color: "var(--purple-primary)" }}>{icon}</span>
      <span
        className="text-gray-300 text-sm"
        style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500 }}
      >
        {text}
      </span>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" fill="#000" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline
        points="22,6 12,13 2,6"
        stroke="#000"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
