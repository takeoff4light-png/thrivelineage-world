"use client";

import type { SavedSession, SessionDraft } from "./sessionTypes";

const KEY = "thrivelineage:sessions:v1";

export function loadSessions(): SavedSession[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedSession[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveSession(s: SavedSession) {
  const all = loadSessions();
  const next = [s, ...all];
  window.localStorage.setItem(KEY, JSON.stringify(next));
}

export function newDraft(init: Omit<SessionDraft, "id" | "createdAt" | "journalText" | "groundedScore"> & {
  journalText?: string;
}) : SessionDraft {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    journalText: init.journalText ?? "",
    groundedScore: null,
    ...init,
  };
}
