// app/page.tsx
import Link from "next/link";
import BrandToggle from "./components/BrandToggle";
import { getPrefs } from "../src/lib/prefs";

export default async function Page() {
  const prefs = await getPrefs();

  return (
    <main className="container" style={{ display: "grid", gap: 16 }}>
      <h1 className="h1">ThriveLineage.world</h1>

      <p className="p muted">
        Default brand is lineage unless route or cookie says otherwise.
      </p>

      <p className="p">
        Calm Mode: <strong>{prefs.calm}</strong> · Daily Delight:{" "}
        <strong>{prefs.popups}</strong> · Sound: <strong>{prefs.sound}</strong>
      </p>

      <p className="p" style={{ marginTop: -8 }}>
        <Link className="brandLink" href="/settings">
          Preferences
        </Link>
      </p>

      <BrandToggle />

      <section className="card">
        <p className="p" style={{ marginBottom: 8 }}>
          <strong>Sanity check:</strong> Buttons and links should match the
          active brand colors.
        </p>

        <p className="p" style={{ marginBottom: 0 }}>
          <Link className="brandLink" href="/legacy">
            Go to /legacy
          </Link>{" "}
          {" · "}
          <Link className="brandLink" href="/lineage">
            Go to /lineage
          </Link>
        </p>
      </section>
    </main>
  );
}
