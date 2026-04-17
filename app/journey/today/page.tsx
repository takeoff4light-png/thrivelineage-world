"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Mode } from "../../../lib/sessionTypes";
import { getStubForMode } from "../../../lib/stubContent";

function parseMode(m: string | null): Mode {
  if (m === "gentle" || m === "steady" || m === "bold") return m;
  return "steady";
}

export default function TodayPracticePage() {
  const sp = useSearchParams();
  const mode = parseMode(sp.get("mode"));
  const stub = getStubForMode(mode);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Journey · Today (Practice)</h1>

      <h3>Practice suggestions</h3>
      <ul>
        {stub.practice.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <div style={{ marginTop: 16 }}>
        <Link href={`/session/integrate?mode=${mode}`}>Continue → Integrate</Link>
      </div>

      <div style={{ marginTop: 16 }}>
        <Link href={`/session/ground?mode=${mode}`}>← Back</Link>
      </div>
    </main>
  );
}
