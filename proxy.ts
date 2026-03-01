// proxy.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { brandFromPathname, normalizeBrand, DEFAULT_BRAND } from "./src/lib/brand";

const COOKIE_NAME = "brand" as const;
const HEADER_NAME = "x-brand" as const;

export function proxy(req: NextRequest) {
  const pathBrand = brandFromPathname(req.nextUrl.pathname);
  const cookieBrand = normalizeBrand(req.cookies.get(COOKIE_NAME)?.value);

  // Precedence: route (/legacy or /lineage) > cookie > default
  const activeBrand = pathBrand ?? cookieBrand ?? DEFAULT_BRAND;

  const res = NextResponse.next();

  // Expose brand to Server Components via `headers()`
  res.headers.set(HEADER_NAME, activeBrand);

  // Persist brand when explicitly chosen via route
  if (pathBrand) {
    res.cookies.set(COOKIE_NAME, pathBrand, {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
