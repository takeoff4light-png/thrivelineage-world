"use client";

import type { DraftSession, Mode, SavedSession } from "./sessionTypes";

const KEY = "thrivelineage:sessions";

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function newDraft(mode: Mode): DraftSession {
  return {
    id: makeId(),
    mode,
    createdAtISO: new Date().toISOString(),
    completedStep: "start",
  };
}

export function loadSessions(): SavedSession[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedSession[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveSession(draft: DraftSession): SavedSession {
  const saved: SavedSession = {
    ...draft,
    savedAtISO: new Date().toISOString(),
  };

  const existing = loadSessions();
  const next = [saved, ...existing];

  localStorage.setItem(KEY, JSON.stringify(next));
  return saved;
}
