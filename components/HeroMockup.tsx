"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Smartphone, Zap } from "lucide-react";

const DURATION = 4500;

type Slide = {
  label: string;
  url?: string;
  src: string;
  href?: string;
};

const slides: Slide[] = [
  {
    label: "Barber Shop",
    url: "www.beispiel-barbershop.at",
    src: "/images/templates/barbershop-01.png",
    href: "/demo/barbershop",
  },
  {
    label: "Restaurant",
    url: "Restaurant-Vorlage",
    src: "/images/templates/restaurant-01-hero.svg",
  },
  {
    label: "Coming Soon",
    url: "Weitere Vorlagen folgen",
    src: "/images/templates/coming-soon-01-desktop.svg",
  },
  // Weitere Demos später hier eintragen
];

export function HeroMockup() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const reduceMotion = useReducedMotion();
  const multiple = slides.length > 1;

  useEffect(() => {
    if (!multiple || paused || reduceMotion) return;

    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      DURATION,
    );

    return () => window.clearTimeout(id);
  }, [index, paused, reduceMotion, multiple]);

  const slide = slides[index];

  const preview = (
    <div className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/60">
      {/* Browser-Leiste */}
      <div className="flex items-center gap-3 border-b border-border bg-surface-elevated px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex h-6 flex-1 items-center rounded-full bg-black/40 px-3 text-[0.65rem] text-muted">
          {slide.url ?? "Vorschau"}
        </div>
      </div>

      {/* Bild: immer 16:10, oben ausgerichtet */}
      <div className="relative aspect-[16/10] bg-[#0c0b0a]">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={`Demo-Vorschau: ${slide.label}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 h-full w-full object-cover object-top"
            draggable={false}
          />
        </AnimatePresence>

        {/* Hinweis beim Darüberfahren */}
        {slide.href && (
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-black opacity-0 transition group-hover:opacity-100">
            Live-Demo ansehen <ArrowUpRight size={13} />
          </span>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative mx-auto hidden w-full max-w-xl lg:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Link nur anzeigen, wenn eine Demo-URL existiert */}
        {slide.href ? (
          <Link
            href={slide.href}
            aria-label={`Live-Demo ansehen: ${slide.label}`}
            className="block"
          >
            {preview}
          </Link>
        ) : (
          preview
        )}

        {/* Badge: Schnell geladen */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 -top-4 flex items-center gap-2 rounded-xl border border-border bg-surface-elevated/90 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur"
        >
          <Zap size={14} className="text-accent" />
          Schnell geladen
        </motion.div>

        {/* Badge: Mobil optimiert */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-5 flex items-center gap-2 rounded-xl border border-border bg-surface-elevated/90 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur"
        >
          <Smartphone size={14} className="text-accent" />
          Mobil optimiert
        </motion.div>
      </motion.div>

      {/* Navigationspunkte */}
      {multiple && (
        <div className="mt-8 flex items-center justify-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Vorlage anzeigen: ${s.label}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}

          <span className="ml-2 text-xs text-muted">{slide.label}</span>
        </div>
      )}
    </motion.div>
  );
}
