"use client";

import { useEffect, useState } from "react";

export function OpenNow() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const d = new Date();
    const day = d.getDay();
    const m = d.getHours() * 60 + d.getMinutes();
    const isOpen =
      day >= 1 && day <= 5
        ? m >= 540 && m < 1110
        : day === 6
          ? m >= 540 && m < 960
          : false;
    setOpen(isOpen);
  }, []);

  if (open === null) return null;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#efe7d8]/15 px-3 py-1 text-xs font-semibold">
      <span
        className={`h-2 w-2 rounded-full ${open ? "bg-emerald-400" : "bg-red-500"}`}
      />
      {open ? "Jetzt geöffnet" : "Gerade geschlossen"}
    </span>
  );
}
