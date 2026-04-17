"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import type { DraftSession, Mode } from "../../../lib/sessionTypes";
import { getStubForMode } from "../../../lib/stubContent";
import { newDraft, saveSession } from "../../../lib/sessionStore";

function parseMode(m: string | null): Mode {
  if (m === "gentle" || m === "steady" || m === "bold") return m;
  return "steady";
}

export default function IntegratePage() {
  const router = useRouter();
  const sp = useSearchParams();
  const mode = parseMode(sp.get("mode"));
  const stub = getStubForMode(mode);

  const initialDraft = useMemo(() => newDraft(mode), [mode]);

  const [draft, setDraft] = useState<DraftSession>(() => ({
    ...initialDraft,
    completedStep: "integrate",
  }));

  function onSave() {
    saveSession(draft);
    router.push("/timeline");
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Session · Integrate</h1>

      <p>
        Mode: <b>{mode}</b>
      </p>

      <h3>Prompts</h3>
      <ul>
        {stub.integratePrompts.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <div style={{ marginTop: 16, maxWidth: 720 }}>
        <label style={{ display: "block", marginBottom: 8 }}>
          Title (optional)
        </label>
        <input
          value={draft.title ?? ""}
          onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
          style={{ width: "100%", padding: 8 }}
          placeholder="e.g., ‘Reset after a hard morning’"
        />

        <label style={{ display: "block", margin: "16px 0 8px" }}>
          Reflections
        </label>
        <textarea
          value={draft.reflections ?? ""}
          onChange={(e) =>
            setDraft((d) => ({ ...d, reflections: e.target.value }))
          }
          style={{ width: "100%", padding: 8, minHeight: 120 }}
          placeholder="Write whatever is true."
        />
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 16 }}>
        <button onClick={onSave} style={{ padding: "8px 12px" }}>
          Save to Timeline
        </button>

        <Link href={`/journey/today?mode=${mode}`}>← Back</Link>
      </div>
    </main>
  );
}
