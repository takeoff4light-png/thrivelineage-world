import { NextResponse } from "next/server";
import { AstroComputeInputSchema } from "@/lib/astro/schema";
import { computeAstrocartography } from "@/lib/astro/compute";
import { requireUser } from "@/lib/auth/requireUser";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = AstroComputeInputSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const input = parsed.data;

  // Compute derived results (treat birth inputs as ephemeral)
  const result = await computeAstrocartography(input);

  // Only allow saving for authenticated users
  if (input.saveResults) {
    const user = await requireUser(req);
    if (!user) {
      return NextResponse.json(
        { error: "You must be signed in to save results." },
        { status: 401 }
      );
    }

    await saveAstroResultForUser(user.id, result);
  }

  return NextResponse.json({ result }, { status: 200 });
}

async function saveAstroResultForUser(userId: string, result: unknown) {
  // TODO: replace with DB call later.
  // Store derived outputs only (avoid raw birth inputs unless explicitly opted-in).
  void userId;
  void result;
}
