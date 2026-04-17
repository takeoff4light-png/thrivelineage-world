"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { SavedSession } from "../../lib/sessionTypes";
import { loadSessions } from "../../lib/sessionStore";

export default function TimelinePage() {
  const [sessions, setSessions] = useState<SavedSession[]>([]);

  useEffect(() => {
    setSessions(loadSessions());
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Timeline</h1>

      <div style={{ marginBottom: 16 }}>
        <Link href="/session/start">+ New session</Link>
        {" · "}
        <Link href="/">Home</Link>
      </div>

      {sessions.length === 0 ? (
        <p>No saved sessions yet.</p>
      ) : (
        <ol>
          {sessions.map((s) => (
            <li key={s.id} style={{ marginBottom: 12 }}>
              <div>
                <b>{s.title?.trim() ? s.title : "Untitled session"}</b>
              </div>
              <div style={{ color: "#555" }}>
                Mode: {s.mode} · Saved: {new Date(s.savedAtISO).toLocaleString()}
              </div>
              {s.reflections ? <div style={{ marginTop: 6 }}>{s.reflections}</div> : null}
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}
