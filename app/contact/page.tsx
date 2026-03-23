import type { Metadata } from "next";
import { profile, social } from "@/data/siteData";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="container">

        <header style={{ marginBottom: 56 }}>
          <p className="label" style={{ marginBottom: 12, color: "var(--accent)" }}>
            // contact
          </p>
          <h1 style={{ fontSize: "1.8rem" }}>Get in Touch</h1>
        </header>

        {/* Status */}
        {profile.availableForWork && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid var(--accent-dim)",
              padding: "10px 18px",
              marginBottom: 48,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                background: "var(--accent)",
                borderRadius: "50%",
                boxShadow: "0 0 8px var(--accent)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--accent)",
              }}
            >
              open to new opportunities
            </span>
          </div>
        )}

        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: 480,
            lineHeight: 1.75,
            marginBottom: 48,
          }}
        >
          I'm always happy to talk about data science, machine learning
          engineering, or potential collaborations. The best way to reach me
          is by email.
        </p>

        {/* Primary email CTA */}
        <a
          href={`mailto:${profile.email}`}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--bg)",
            background: "var(--accent)",
            padding: "12px 28px",
            marginBottom: 56,
            transition: "opacity 0.15s",
          }}
        >
          {profile.email} →
        </a>

        <div className="divider" />

        {/* Social links */}
        <p className="label" style={{ marginBottom: 24 }}>
          or find me at
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 1,
            background: "var(--border)",
          }}
        >
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--bg-card)",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                transition: "background 0.15s",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                {s.icon}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.88rem",
                  color: "var(--text-primary)",
                }}
              >
                {s.label} →
              </span>
            </a>
          ))}
        </div>

        <div className="divider" />

        {/* CV download */}
        <div>
          <p className="label" style={{ marginBottom: 20 }}>
            downloadable cv
          </p>
          <a
            href={profile.cvUrl}
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              color: "var(--accent-blue)",
              border: "1px solid var(--border)",
              padding: "10px 20px",
              transition: "border-color 0.15s",
            }}
          >
            ↓ sanjay_keerthi_cv.pdf
          </a>
        </div>
      </div>
    </div>
  );
}
