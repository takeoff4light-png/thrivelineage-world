"use client";

import mermaid from "mermaid";
import { useEffect, useMemo, useRef } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useMemo(() => `mmd-${Math.random().toString(16).slice(2)}`, []);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: {
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      },
    });

    let cancelled = false;

    (async () => {
      try {
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      } catch {
        if (!cancelled && ref.current) {
          ref.current.innerHTML =
            "<pre style='white-space:pre-wrap;color:#b00020'>Mermaid render error. Check diagram syntax.</pre>";
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return <div ref={ref} />;
}
