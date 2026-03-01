// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { cookies, headers } from "next/headers";
import { normalizeBrand } from "../src/lib/brand";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const h = await headers();
  const c = await cookies();

  const fromHeader = h.get("x-brand");
  const fromCookie = c.get("brand")?.value;

  // Priority: forced brand (header) -> user preference (cookie) -> default
  const brand = normalizeBrand(fromHeader ?? fromCookie ?? "lineage");

  // Choice-first Calm Mode (optional, defaults to off)
  const calm = (c.get("pref_calm")?.value ?? "off") === "on" ? "on" : "off";

  return (
    <html lang="en" data-brand={brand} data-calm={calm}>
      <body>{children}</body>
    </html>
  );
}
