import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section
        style={{
          padding: "48px 0 18px",
          display: "grid",
          gap: 18,
        }}
      >
        <p style={{ margin: 0, color: "var(--muted)", fontWeight: 600 }}>
          World Entry
        </p>

        <h1 style={{ margin: 0, fontSize: 44, letterSpacing: -0.6, lineHeight: 1.05 }}>
          ThriveLineage
        </h1>

        <p style={{ margin: 0, color: "var(--muted)", fontSize: 18, maxWidth: 72 + "ch" }}>
          A sanctuary for thriving legacy — built through embodied wellbeing, honest story, and
          trust you can feel in your nervous system.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
          <PrimaryButton href="/legacy/sonar">Enter Sonar</PrimaryButton>
          <SecondaryButton href="/story">Read the Story</SecondaryButton>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          <Card title="Legacy">
            What we inherit, what we heal, what we pass on — intentionally.
          </Card>
          <Card title="Wellbeing">
            Breath, liquids, food, yin — embodied stability as a foundation.
          </Card>
          <Card title="Trust">
            Clear words, clean choices, gentle power — no performance required.
          </Card>
        </div>

        <div style={{ marginTop: 14, color: "var(--muted)", fontSize: 14 }}>
          Tip: Sonar is the living map. Everything else becomes a page when it’s ready.
        </div>
      </section>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: 16,
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
      <div style={{ color: "var(--muted)", lineHeight: 1.5 }}>{children}</div>
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        borderRadius: 12,
        background: "var(--primary)",
        color: "white",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        borderRadius: 12,
        background: "transparent",
        color: "var(--primary)",
        border: "1px solid var(--border)",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      {children}
    </Link>
  );
}
