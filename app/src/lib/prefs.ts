// src/lib/prefs.ts
import { cookies } from "next/headers";

export type Brand = "lineage" | "legacy";
export type PopupFrequency = "off" | "daily" | "weekly";
export type OnOff = "on" | "off";

function asOnOff(v: string | undefined, fallback: OnOff): OnOff {
  return v === "on" || v === "off" ? v : fallback;
}

function asPopupFrequency(
  v: string | undefined,
  fallback: PopupFrequency
): PopupFrequency {
  return v === "off" || v === "daily" || v === "weekly" ? v : fallback;
}

function asBrand(v: string | undefined, fallback: Brand): Brand {
  return v === "legacy" || v === "lineage" ? v : fallback;
}

export async function getPrefs() {
  const c = await cookies();

  const brand = asBrand(c.get("brand")?.value, "lineage");
  const popups = asPopupFrequency(c.get("pref_popups")?.value, "off");
  const sound = asOnOff(c.get("pref_sound")?.value, "off");
  const calm = asOnOff(c.get("pref_calm")?.value, "off");
  const quietHours = c.get("pref_quietHours")?.value ?? "21-07";

  return { brand, popups, sound, calm, quietHours };
}
