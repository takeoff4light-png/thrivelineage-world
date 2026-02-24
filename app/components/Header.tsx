import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";

export function Header() {
  return (
    <header className="w-full border-b border-black/5 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-zinc-900">
          <LogoMark size={26} className="text-zinc-900/90" />
          <span className="text-sm font-semibold tracking-tight text-zinc-900/90">
            ThriveLineage
          </span>
        </Link>

        {/* nav */}
      </div>
    </header>
  );
}
