import { copy } from "@/content/copy";

export default function LebensartPage() {
  return (
    <main style={{ padding: 24, maxWidth: 900 }}>
      <h1>{copy.lebensart.headline}</h1>
      <p>{copy.lebensart.body}</p>

      <ul>
        {copy.lebensart.bullets.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/lebensart#join">{copy.lebensart.ctas.primary}</a>
        <a href="/privacy">{copy.lebensart.ctas.secondary}</a>
      </div>

      <hr style={{ margin: "24px 0" }} />
      <h2 id="join">Join</h2>
      <p>For now, this can be a simple contact section.</p>
    </main>
  );
}
