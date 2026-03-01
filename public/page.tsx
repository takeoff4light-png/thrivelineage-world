import { copy } from "@/content/copy";

export default function HomePage() {
  return (
    <main style={{ padding: 24, maxWidth: 900 }}>
      <h1>{copy.home.headline}</h1>

      <ul>
        {copy.home.supportLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/app">{copy.home.ctas.primary}</a>
        <a href="/legacy">{copy.home.ctas.secondary1}</a>
        <a href="/lebensart">{copy.home.ctas.secondary2}</a>
      </div>
    </main>
  );
}
