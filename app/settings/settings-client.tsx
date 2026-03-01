"use client";

import { useMemo, useState } from "react";

type Prefs = {
  brand: "lineage" | "legacy";
  popups: "off" | "daily" | "weekly";
  sound: "on" | "off";
  calm: "on" | "off";
  quietHours: string;
};

async function savePrefs(patch: Partial<Prefs>) {
  const res = await fetch("/api/preferences", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(patch),
  });
  if (!res.ok) throw new Error("Failed to save preferences");
  return res.json();
}

export default function SettingsClient({ initial }: { initial: Prefs }) {
  const [prefs, setPrefs] = useState<Prefs>(initial);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const calmHint = useMemo(() => {
    return prefs.calm === "on"
      ? "Calm Mode reduces stimulation (a Presence + Peace-of-Mind ally)."
      : "Turn on Calm Mode for reduced motion and gentler visuals.";
  }, [prefs.calm]);

  async function update(patch: Partial<Prefs>) {
    const next = { ...prefs, ...patch };
    setPrefs(next);
    setStatus("saving");

    try {
      await savePrefs(patch);

      // Brand changes affect server rendering (data-brand). Refresh to apply cleanly.
      if (patch.brand) {
        window.location.reload();
        return;
      }

      setStatus("saved");
      window.setTimeout(() => setStatus("idle"), 800);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section style={{ display: "grid", gap: 16, marginTop: 20 }}>
      <fieldset style={{ padding: 16 }}>
        <legend><strong>Brand</strong></legend>
        <label>
          <select
            value={prefs.brand}
            onChange={(e) => update({ brand: e.target.value as Prefs["brand"] })}
          >
            <option value="lineage">ThriveLineage</option>
            <option value="legacy">ThriveLegacy</option>
          </select>
        </label>
        <p style={{ opacity: 0.8, marginBottom: 0 }}>
          Brand changes your visual theme and logo evolution—your choice, always reversible.
        </p>
      </fieldset>

      <fieldset style={{ padding: 16 }}>
        <legend><strong>Daily Delight Popups</strong></legend>
        <label>
          <select
            value={prefs.popups}
            onChange={(e) => update({ popups: e.target.value as Prefs["popups"] })}
          >
            <option value="off">Off</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
          <label>
            Sound
            <select
              value={prefs.sound}
              onChange={(e) => update({ sound: e.target.value as Prefs["sound"] })}
              style={{ display: "block", width: "100%" }}
            >
              <option value="off">Off</option>
              <option value="on">On</option>
            </select>
          </label>

          <label>
            Quiet Hours (HH-HH)
            <input
              value={prefs.quietHours}
              onChange={(e) => setPrefs({ ...prefs, quietHours: e.target.value })}
              onBlur={() => update({ quietHours: prefs.quietHours })}
              placeholder="21-07"
              style={{ display: "block", width: "100%" }}
            />
          </label>
        </div>

        <p style={{ opacity: 0.8, marginBottom: 0 }}>
          No urgency, no manipulation—just optional, gentle information.
        </p>
      </fieldset>

      <fieldset style={{ padding: 16 }}>
        <legend><strong>Calm Mode</strong></legend>
        <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <input
            type="checkbox"
            checked={prefs.calm === "on"}
            onChange={(e) => update({ calm: e.target.checked ? "on" : "off" })}
          />
          Reduce stimulation (motion/visual intensity)
        </label>
        <p style={{ opacity: 0.8, marginBottom: 0 }}>{calmHint}</p>
      </fieldset>

      <div style={{ minHeight: 22, opacity: 0.8 }}>
        {status === "saving" && "Saving…"}
        {status === "saved" && "Saved."}
        {status === "error" && "Could not save. Please try again."}
      </div>
    </section>
  );
}
