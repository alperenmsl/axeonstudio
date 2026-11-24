"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/demo/barbershop";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#efe7d8] transition hover:border-[#d19a5b]"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <nav className="absolute inset-x-5 top-full z-40 mt-2 rounded-2xl border border-white/10 bg-[#151412] p-3 shadow-2xl shadow-black/60">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#efe7d8] transition hover:bg-white/5 hover:text-[#d19a5b]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#termin"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-[#d19a5b] px-4 py-3 text-center text-sm font-bold text-black"
          >
            Termin buchen
          </a>
        </nav>
      )}
    </div>
  );
}
