import { copy } from "@/content/copy";

export default function PrivacyPage() {
  return (
    <main style={{ padding: 24, maxWidth: 900 }}>
      <h1>{copy.privacy.headline}</h1>
      <p>{copy.privacy.body}</p>
    </main>
  );
}
