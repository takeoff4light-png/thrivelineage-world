import type { AstroComputeInput } from "./schema";

export type AstroComputeResult = {
  meta: {
    version: string;
    computedAt: string;
  };
  inputSummary: {
    birthDate: string;
    birthTime: string;
    timeZone: string;
    birthLat: number;
    birthLon: number;
  };
  derived: {
    /**
     * Placeholder metric to prove plumbing end-to-end.
     * Replace with real astrocartography outputs (lines, angles, parans, etc.).
     */
    seed: number;
  };
};

/**
 * Compute derived astrocartography outputs.
 * NOTE: This is intentionally minimal to get production builds green.
 * Replace the "seed" derivation with your real astro math pipeline.
 */
export async function computeAstrocartography(
  input: AstroComputeInput
): Promise<AstroComputeResult> {
  const seed = stableSeed(
    input.birthDate,
    input.birthTime,
    input.timeZone,
    input.birthLat,
    input.birthLon
  );

  return {
    meta: {
      version: "0.1.0",
      computedAt: new Date().toISOString()
    },
    inputSummary: {
      birthDate: input.birthDate,
      birthTime: input.birthTime,
      timeZone: input.timeZone,
      birthLat: input.birthLat,
      birthLon: input.birthLon
    },
    derived: { seed }
  };
}

/**
 * A small deterministic hash to make results stable across deploys.
 */
function stableSeed(
  birthDate: string,
  birthTime: string,
  timeZone: string,
  lat: number,
  lon: number
): number {
  const s = `${birthDate}|${birthTime}|${timeZone}|${lat.toFixed(6)}|${lon.toFixed(6)}`;

  // FNV-1a 32-bit (simple, deterministic)
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }

  // Convert to a positive integer
  return (h >>> 0);
}
