import Link from "next/link";

export function DemoBanner({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 bg-[#050505] px-4 py-2 text-xs text-white">
      <span className="text-[#a3a3a3]">
        <span className="font-bold text-[#ffbd39]">Demo-Vorlage</span> · {title}{" "}
        · von Axeon Studio · fiktives Unternehmen
      </span>
      <span className="flex items-center gap-4 font-semibold">
        <Link href="/#templates" className="hover:text-[#ffbd39]">
          ← Zurück
        </Link>
        <Link
          href="/#contact"
          className="rounded-full bg-[#ffbd39] px-3 py-1 text-black hover:brightness-110"
        >
          Ähnliches Projekt anfragen
        </Link>
      </span>
    </div>
  );
}
