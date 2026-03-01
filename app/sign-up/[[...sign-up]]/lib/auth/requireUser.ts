import { auth } from "@clerk/nextjs/server";

export type User = { id: string };

/**
 * Returns the signed-in user (server-side), or null if anonymous.
 * Use this in API routes to gate saving/history actions.
 */
export async function requireUser(_req?: Request): Promise<User | null> {
  const { userId } = await auth();
  if (!userId) return null;
  return { id: userId };
}
