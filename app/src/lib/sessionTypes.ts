export type Mode = "Ground" | "Clarify" | "Expand" | "Integrate";

export type SessionDraft = {
  id: string;
  createdAt: string; // ISO
  mode: Mode;
  practiceText: string;
  closingReflection: string;
  journalText: string;
  groundedScore: number | null;
};

export type SavedSession = Omit<SessionDraft, "groundedScore"> & {
  groundedScore: number; // required once saved
};
