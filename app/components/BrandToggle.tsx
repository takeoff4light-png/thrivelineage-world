"use client";

import { useEffect, useState } from "react";

type Brand = "lineage" | "legacy";
const COOKIE_NAME = "brand";

function getCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function normalizeBrand(v: string | null): Brand | null {
  if (!v) return null;
  const s = v.trim().toLowerCase();
  if (s === "lineage" || s === "legacy") return s;
  return null;
}

export default function BrandToggle() {
  const [brand, setBrand] = useState<Brand>("lineage");

  useEffect(() => {
    const v = normalizeBrand(getCookie(COOKIE_NAME));
    if (v) setBrand(v);
  }, []);

  function apply(next: Brand) {
    setBrand(next);
    setCookie(COOKIE_NAME, next);
    location.reload();
  }

  return (
    <div className="pillRow" aria-label="Brand selection">
      <span className="pill">
        <span style={{ opacity: 0.8 }}>Brand:</span>{" "}
        <strong style={{ textTransform: "capitalize" }}>{brand}</strong>
      </span>

      <button
        type="button"
        className={`button ${brand === "lineage" ? "" : "buttonSecondary"}`}
        onClick={() => apply("lineage")}
        aria-pressed={brand === "lineage"}
      >
        Lineage
      </button>

      <button
        type="button"
        className={`button ${brand === "legacy" ? "" : "buttonSecondary"}`}
        onClick={() => apply("legacy")}
        aria-pressed={brand === "legacy"}
      >
        Legacy
      </button>

      <span className="pill" style={{ opacity: 0.8 }}>
        (current: {brand})
      </span>
    </div>
  );
}
