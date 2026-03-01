import { copy } from "@/content/copy";

export default function OfflinePage() {
  return (
    <main style={{ padding: 24, maxWidth: 900 }}>
      <h1>{copy.offline.headline}</h1>
      <p>{copy.offline.body}</p>
    </main>
  );
}
