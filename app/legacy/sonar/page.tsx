import { Mermaid } from "@/app/components/Mermaid";

const chart = `mindmap
  root((ThriveLineage.world))
    Umbrella(World Entry)
      FrontDoor(Story + Invitation)
        OriginStory("The girl circling with the vultures")
          2019_PlettClinic(Feb 2019 burnout clinic)
          2019_Intervention(Sep 2019 divine intervention / co-incidence)
          Now(Consciously creating thriving balanced healthy life)
        Values(Integrity + Authenticity + Wholeness)
        Principles(Inclusivity + Do-No-Harm + Sustainable Glow-Flow)
        CTA(Join Curiosity Cache / Co-create / Enter Sanctuary)
      Sanctuaries(Products)
        ThriveLegacy((Sanctuary))
    ThriveLegacy((ThriveLegacy Sanctuary))
      WellbeingFoundation(Wellness = embodied stability)
        Freedom("Freedom = the condition for happiness")
        YinYoga("Yin Yoga: body connection + blind-spot insights")
        Pillars(Breath + Liquids + Food)
`;

export default function SonarPage() {
  return (
    <main style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>ThriveLegacy Sonar</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        A living map of lineage → legacy → wellness → trust.
      </p>
      <Mermaid chart={chart} />
    </main>
  );
}
