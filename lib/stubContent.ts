import type { Mode } from "./sessionTypes";

export type Stub = {
  headline: string;
  grounding: string[];
  practice: string[];
  integratePrompts: string[];
};

const STUBS: Record<Mode, Stub> = {
  gentle: {
    headline: "Gentle mode: small steps, kind pace.",
    grounding: [
      "Take 3 slower breaths.",
      "Unclench your jaw and drop your shoulders.",
      "Name one thing you can see, hear, and feel.",
    ],
    practice: [
      "Do the next tiny helpful thing (2 minutes).",
      "Write one sentence: ‘Right now, I need…’",
      "Choose softness over perfection for one action.",
    ],
    integratePrompts: [
      "What did you notice shift (even slightly)?",
      "What would make this 5% easier next time?",
      "What’s one kind sentence you can tell yourself today?",
    ],
  },
  steady: {
    headline: "Steady mode: consistent rhythm, clear focus.",
    grounding: [
      "Inhale 4, exhale 6 — repeat 5 times.",
      "Set a simple intention for the next 20 minutes.",
      "Loosen your hands; relax your tongue.",
    ],
    practice: [
      "Pick one task; set a 10-minute timer; begin.",
      "Write 3 bullet points: ‘What matters today?’",
      "Remove one distraction from your environment.",
    ],
    integratePrompts: [
      "What worked? What didn’t?",
      "What’s one constraint you can accept instead of fight?",
      "What’s the next obvious step you can schedule?",
    ],
  },
  bold: {
    headline: "Bold mode: decisive action, clean edges.",
    grounding: [
      "Stand up. Feet planted. One deep breath.",
      "Ask: ‘What’s the highest-leverage move?’",
      "Commit to a start time, not a mood.",
    ],
    practice: [
      "Do the hardest 5 minutes first.",
      "Send the message you’ve been avoiding (short + direct).",
      "Make one irreversible decision that helps Future You.",
    ],
    integratePrompts: [
      "What did you prove to yourself?",
      "What boundary would protect this momentum?",
      "What will you do again tomorrow—same time?",
    ],
  },
};

export function getStubForMode(mode: Mode): Stub {
  return STUBS[mode] ?? STUBS.steady;
}
