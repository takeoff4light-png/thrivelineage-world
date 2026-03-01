// app/settings/page.tsx
import { getPrefs } from "../../src/lib/prefs";
import { savePrefs } from "./actions";

export default function SettingsPage() {
  const prefs = getPrefs();

  return (
    <main className="container">
      <h1 className="h1">Preferences</h1>
      <p className="p">Quietly powerful defaults. You stay in control.</p>

      <div className="card">
        <form action={savePrefs} style={{ display: "grid", gap: 12 }}>
          <label className="pill" style={{ justifyContent: "space-between" }}>
            <span>Calm Mode (reduce motion)</span>
            <input
              type="checkbox"
              name="pref_calm"
              value="on"
              defaultChecked={prefs.calm === "on"}
            />
          </label>

          <label className="pill" style={{ justifyContent: "space-between" }}>
            <span>Sound</span>
            <input
              type="checkbox"
              name="pref_sound"
              value="on"
              defaultChecked={prefs.sound === "on"}
            />
          </label>

          <label className="pill" style={{ flexDirection: "column", alignItems: "stretch" }}>
            <span>Daily Delight (popup frequency)</span>
            <select name="pref_popups" defaultValue={prefs.popups}>
              <option value="off">Off</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </label>

          <label className="pill" style={{ flexDirection: "column", alignItems: "stretch" }}>
            <span>Quiet Hours (e.g. 21-07)</span>
            <input
              name="pref_quietHours"
              defaultValue={prefs.quietHours}
              placeholder="21-07"
            />
          </label>

          <div className="pillRow" style={{ marginTop: 8 }}>
            <button className="button" type="submit">Save</button>
            <a className="button buttonSecondary" href="/">Back</a>
          </div>
        </form>
      </div>
    </main>
  );
}
