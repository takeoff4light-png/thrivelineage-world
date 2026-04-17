import { z } from "zod";

/**
 * Input schema for astrocartography computations.
 * Keep birth inputs ephemeral; only derived outputs should be persisted by default.
 */
export const AstroComputeInputSchema = z.object({
  // Core birth data
  birthDate: z.string().min(1), // e.g. "1990-01-31"
  birthTime: z.string().min(1), // e.g. "13:45" (24h)
  timeZone: z.string().min(1),  // e.g. "Africa/Johannesburg"

  // Location of birth
  birthLat: z.number().finite().min(-90).max(90),
  birthLon: z.number().finite().min(-180).max(180),

  // Feature flags / preferences
  saveResults: z.boolean().optional().default(false),

  // Optional: allow front-end to send display prefs without breaking validation
  locale: z.string().optional(),
  mode: z.enum(["conservative", "playful", "mastery"]).optional()
});

export type AstroComputeInput = z.infer<typeof AstroComputeInputSchema>;
