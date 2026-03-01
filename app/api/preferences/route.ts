// app/api/preferences/route.ts
import { NextResponse } from "next/server";

type Prefs = {
  brand?: "lineage" | "legacy";
  popups?: "off" | "daily" | "weekly";
  sound?: "on" | "off";
  calm?: "on" | "off";
  quietHours?: string; // e.g. "21-07"
};

const ONE_YEAR = 60 * 60 * 24 * 365;

function isValid(p: Prefs) {
  if (p.brand && !["lineage", "legacy"].includes(p.brand)) return false;
  if (p.popups && !["off", "daily", "weekly"].includes(p.popups)) return false;
  if (p.sound && !["on", "off"].includes(p.sound)) return false;
  if (p.calm && !["on", "off"].includes(p.calm)) return false;
  if (p.quietHours && !/^\d{2}-\d{2}$/.test(p.quietHours)) return false;
  return true;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Prefs;

  if (!isValid(body)) {
    return NextResponse.json({ ok: false, error: "Invalid preferences" }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true });

  // Store each preference in a separate cookie (simple + debuggable)
  if (body.brand) {
    res.cookies.set("brand", body.brand, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  }
  if (body.popups) {
    res.cookies.set("pref_popups", body.popups, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  }
  if (body.sound) {
    res.cookies.set("pref_sound", body.sound, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  }
  if (body.calm) {
    res.cookies.set("pref_calm", body.calm, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  }
  if (body.quietHours) {
    res.cookies.set("pref_quietHours", body.quietHours, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  }

  return res;
}
