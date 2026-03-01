// app/settings/actions.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type OnOff = "on" | "off";
type PopupFrequency = "off" | "daily" | "weekly";

function asOnOff(v: FormDataEntryValue | null): OnOff {
  return v === "on" ? "on" : "off";
}

function asPopupFrequency(v: FormDataEntryValue | null): PopupFrequency {
  return v === "daily" || v === "weekly" ? v : "off";
}

export async function savePrefs(formData: FormData) {
  const calm = asOnOff(formData.get("pref_calm"));
  const sound = asOnOff(formData.get("pref_sound"));
  const popups = asPopupFrequency(formData.get("pref_popups"));
  const quietHours = String(formData.get("pref_quietHours") ?? "21-07").trim();

  const c = await cookies();

  c.set("pref_calm", calm, { path: "/", sameSite: "lax" });
  c.set("pref_sound", sound, { path: "/", sameSite: "lax" });
  c.set("pref_popups", popups, { path: "/", sameSite: "lax" });
  c.set("pref_quietHours", quietHours, { path: "/", sameSite: "lax" });

  redirect("/settings");
}
