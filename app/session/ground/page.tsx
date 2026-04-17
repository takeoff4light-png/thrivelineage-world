"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Mode } from "../../../lib/sessionTypes";
import { getStubForMode } from "../../../lib/stubContent";

function parseMode(m: string | null): Mode {
  if (m === "gentle" || m === "steady" || m === "bold") return m;
  return "steady";
}

export default function GroundPage() {
  const sp = useSearchParams();
  const mode = parseMode(sp.get("mode"));
  const stub = getStubForMode(mode);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Session · Ground</h1>
      <p>
        <b>{stub.headline}</b>
      </p>

      <h3>Grounding</h3>
      <ol>
        {stub.grounding.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ol>

      <div style={{ marginTop: 16 }}>
        <Link href={`/journey/today?mode=${mode}`}>Continue → Practice</Link>
      </div>

      <div style={{ marginTop: 16 }}>
        <Link href="/session/start">← Back</Link>
      </div>
    </main>
  );
}
