import Link from "next/link";

export function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--card)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <Link href="/" style={{ fontWeight: 700, letterSpacing: 0.2 }}>
          ThriveLineage
        </Link>

        <nav style={{ display: "flex", gap: 16, color: "var(--muted)" }}>
          <Link href="/story">Story</Link>
          <Link href="/values">Values</Link>
          <Link href="/sanctuary">Sanctuary</Link>
          <Link href="/wellbeing">Wellbeing</Link>
        </nav>
      </div>
    </header>
  );
}
