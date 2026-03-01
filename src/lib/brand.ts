// src/lib/brand.ts
export const BRANDS = ["lineage", "legacy"] as const;
export type Brand = (typeof BRANDS)[number];

export const DEFAULT_BRAND: Brand = "lineage";

export function normalizeBrand(input: unknown): Brand {
  if (typeof input !== "string") return DEFAULT_BRAND;
  const val = input.trim().toLowerCase();
  return (BRANDS as readonly string[]).includes(val) ? (val as Brand) : DEFAULT_BRAND;
}

export function brandFromPathname(pathname: string): Brand | null {
  const firstSeg = pathname.split("/").filter(Boolean)[0] ?? "";
  const seg = firstSeg.trim().toLowerCase();
  return (BRANDS as readonly string[]).includes(seg) ? (seg as Brand) : null;
}
