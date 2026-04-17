import type { Mode } from "./sessionTypes";

export function getStubForMode(mode: Mode) {
  const base = {
    Ground: {
      practiceText:
        "Practice (2–5 min): Feel your feet. Inhale 4, exhale 8. On each exhale, soften jaw + belly. Count 10 exhales.",
      closingReflection:
        "Closing reflection: You’re not trying to find an answer—you’re allowing what you already know to become audible.",
    },
    Clarify: {
      practiceText:
        "Practice (3–7 min): Inhale 4, exhale 8. Then write one sentence: “The most honest next step is…”. Don’t edit.",
      closingReflection:
        "Closing reflection: Clarity often arrives as simplicity. Your inner guru prefers the unforced step.",
    },
    Expand: {
      practiceText:
        "Practice (3–7 min): Inhale 4, exhale 8. Imagine space around your ribs widening on the exhale. Then name one possibility you’re willing to entertain.",
      closingReflection:
        "Closing reflection: Expansion doesn’t demand certainty—only permission to breathe beyond the old edge.",
    },
    Integrate: {
      practiceText:
        "Practice (2–6 min): Inhale 4, exhale 8. Recall one moment from today worth keeping. Let the exhale ‘store’ it in the body. Then choose one boundary that protects it.",
      closingReflection:
        "Closing reflection: Integration is devotion to what’s true—repeated gently until it becomes your default.",
    },
  } as const;

  return base[mode];
}
