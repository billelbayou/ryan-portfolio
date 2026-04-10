export default function Footer() {
  return (
    <footer
      className="py-6 px-8 text-center"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(139,0,255,0.15)",
      }}
    >
      <p
        className="text-gray-600 text-xs tracking-widest"
        style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.2em" }}
      >
        © {new Date().getFullYear()} VIDEO
        <span style={{ color: "var(--purple-primary)" }}>ALCHEMIST</span> ·
        JIMMY TURNER · ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
