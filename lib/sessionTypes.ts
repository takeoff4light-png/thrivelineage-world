export type Mode = "gentle" | "steady" | "bold";

export type DraftSession = {
  id: string;
  mode: Mode;
  createdAtISO: string;

  title?: string;

  // User-facing text the app will collect
  notes?: string;
  intentions?: string;
  reflections?: string;

  // Lightweight fields to support UI
  completedStep?: "start" | "ground" | "practice" | "integrate";
};

export type SavedSession = DraftSession & {
  savedAtISO: string;
};
