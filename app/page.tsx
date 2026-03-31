"use client";

import Logo from "../components/Logo";

const phases = [
  { label: "passion project", width: "90%" },
  { label: "building in public", width: "72%" },
  { label: "grinding through it", width: "45%" },
  { label: "faking it", width: "20%" },
  { label: "still here", width: "5%" },
];

const thoughts = [
  "i should reply to that",
  "maybe tomorrow",
  "i had an idea earlier",
  "can't remember it now",
  "it was probably nothing",
  "i should reply to that",
];

export default function Home() {
  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <div className="glow-center" />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1.5rem 2rem", position: "relative", zIndex: 10 }}>
        <Logo size={28} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "0.9rem", letterSpacing: "0.25em", color: "#666" }}>
          BURNOUT
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#333" }}>
          $BURN
        </span>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "5rem 2rem 4rem", position: "relative", zIndex: 10 }}>
        {/* Battery indicator */}
        <div className="animate-pulse-weak" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "3rem" }}>
          <div className="battery">
            <div className="battery-fill" />
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#444", letterSpacing: "0.1em" }}>
            5%
          </span>
        </div>

        <h1 className="animate-exhale" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(3.5rem, 11vw, 8rem)", color: "#777", lineHeight: 0.95, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
          BURNOUT
        </h1>

        <p style={{ color: "#555", fontSize: "1rem", maxWidth: "380px", margin: "0 auto 3rem", lineHeight: 1.7, fontWeight: 300 }}>
          Still here. Just not really here.
        </p>

        <a href="#join" style={{ display: "inline-block", border: "1px solid #333", color: "#666", padding: "0.7rem 1.8rem", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textDecoration: "none" }}>
          buy $burn
        </a>
      </section>

      {/* Phases / drain bar */}
      <section style={{ padding: "3rem 2rem", maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#333", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
          THE CYCLE
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {phases.map((phase, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                <span style={{ fontSize: "0.75rem", color: i < 4 ? "#444" : "#888", fontWeight: i === 4 ? 400 : 300 }}>
                  {phase.label}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#333" }}>
                  {phase.width}
                </span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: phase.width, opacity: i === 4 ? 0.9 : 0.4 - i * 0.05 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thoughts section */}
      <section style={{ padding: "3rem 2rem", maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#333", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
          RECENT THOUGHTS
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {thoughts.map((thought, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", opacity: 1 - i * 0.12 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#2a2a2a", flexShrink: 0 }}>
                {String(thoughts.length - i).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "0.85rem", color: i === 0 ? "#666" : "#3a3a3a", fontStyle: "italic", fontWeight: 300 }}>
                {thought}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{ padding: "4rem 2rem", maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 10, borderTop: "1px solid #111" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", textAlign: "center", marginBottom: "3rem" }}>
          {[
            { label: "energy remaining", value: "5%" },
            { label: "ideas left", value: "some" },
            { label: "time since last rest", value: "long" },
          ].map((stat) => (
            <div key={stat.label} style={{ borderTop: "1px solid #1a1a1a", paddingTop: "1.25rem" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", color: "#666", marginBottom: "0.4rem" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.65rem", color: "#333", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <p style={{ color: "#444", lineHeight: 1.9, fontSize: "0.9rem", fontWeight: 300 }}>
          You shipped things. You believed in things.
          At some point the fire became a habit and then the habit became ash.
        </p>
        <p style={{ color: "#333", lineHeight: 1.9, fontSize: "0.9rem", fontWeight: 300, marginTop: "1rem" }}>
          $BURN is the token for everyone still showing up anyway.
        </p>
      </section>

      {/* Join */}
      <section id="join" style={{ padding: "4rem 2rem", textAlign: "center", borderTop: "1px solid #111", position: "relative", zIndex: 10 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#333", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
          find us
        </p>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 300, color: "#666", marginBottom: "2rem" }}>
          Still here. Still here.
        </h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" style={{ border: "1px solid #222", color: "#444", padding: "0.65rem 1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textDecoration: "none" }}>
            twitter →
          </a>
          <a href="#" style={{ border: "1px solid #222", color: "#444", padding: "0.65rem 1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textDecoration: "none" }}>
            telegram →
          </a>
          <a href="#" style={{ border: "1px solid #555", color: "#888", padding: "0.65rem 1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textDecoration: "none" }}>
            buy $burn →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", textAlign: "center", borderTop: "1px solid #0f0f0f" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#222", letterSpacing: "0.1em" }}>
          © 2025 BURNOUT — $BURN — for entertainment only — not financial advice
        </p>
      </footer>
    </main>
  );
}
