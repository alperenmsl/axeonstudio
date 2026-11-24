"use client";

import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import { gallery } from "@/lib/demo/barbershop";

function Tile({ src, alt, tall }: { src: string; alt: string; tall: boolean }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Falls das Bild schon vor der Hydration fehlgeschlagen ist
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151412] ${
        tall ? "row-span-2 aspect-[3/4] sm:aspect-auto" : "aspect-[4/3]"
      }`}
    >
      {failed ? (
        <div className="flex h-full min-h-40 w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1d1a16] to-[#0f0d0b] text-[#efe7d8]/35">
          <Camera size={22} />
          <span className="text-xs">Foto folgt</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      )}
    </div>
  );
}

export function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {gallery.map((g) => (
        <Tile key={g.src} src={g.src} alt={g.alt} tall={g.tall} />
      ))}
    </div>
  );
}
