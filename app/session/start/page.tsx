"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Mode } from "../../../lib/sessionTypes";

export default function SessionStartPage() {
  const [mode, setMode] = useState<Mode>("steady");

  const nextHref = useMemo(() => `/session/ground?mode=${mode}`, [mode]);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Session · Start</h1>
      <p>Select a mode to shape the tone.</p>

      <fieldset style={{ border: "1px solid #ddd", padding: 12, maxWidth: 420 }}>
        <legend>Mode</legend>

        <label style={{ display: "block", marginBottom: 8 }}>
          <input
            type="radio"
            name="mode"
            checked={mode === "gentle"}
            onChange={() => setMode("gentle")}
          />{" "}
          Gentle
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          <input
            type="radio"
            name="mode"
            checked={mode === "steady"}
            onChange={() => setMode("steady")}
          />{" "}
          Steady
        </label>

        <label style={{ display: "block" }}>
          <input
            type="radio"
            name="mode"
            checked={mode === "bold"}
            onChange={() => setMode("bold")}
          />{" "}
          Bold
        </label>
      </fieldset>

      <div style={{ marginTop: 16 }}>
        <Link href={nextHref}>Continue → Ground</Link>
      </div>

      <div style={{ marginTop: 16 }}>
        <Link href="/">← Home</Link>
      </div>
    </main>
  );
}
