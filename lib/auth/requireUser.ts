export type User = { id: string };

/**
 * Temporary auth shim:
 * - Returns null because no auth system is installed yet.
 * - Replace this file when you add Clerk / NextAuth / custom JWT.
 */
export async function requireUser(_req: Request): Promise<User | null> {
  return null;
}
