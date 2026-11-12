"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Smartphone, Zap } from "lucide-react";

const DURATION = 4000;

const slides = [
  { label: "Barber Shop", src: "/images/templates/barbershop-01-hero.svg" },
  { label: "Restaurant", src: "/images/templates/restaurant-01-hero.svg" },
  { label: "Coming Soon", src: "/images/templates/coming-soon-01-desktop.svg" },
];

export function HeroMockup() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      DURATION,
    );
    return () => window.clearTimeout(id);
  }, [index, paused, reduceMotion]);

  const slide = slides[index];

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
        {/* Nur das Bild – der Browser-Rahmen steckt schon in der SVG */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/60">
          <AnimatePresence initial={false}>
            <motion.img
              key={slide.src}
              src={slide.src}
              alt={`Beispiel-Vorlage: ${slide.label}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </AnimatePresence>
        </div>

        {/* Badge oben rechts, ragt über den Rand */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-5 -top-4 flex items-center gap-2 rounded-xl border border-border bg-surface-elevated/90 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur"
        >
          <Zap size={14} className="text-accent" />
          Schnell geladen
        </motion.div>

        {/* Badge unten links, ragt über den Rand */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-xl border border-border bg-surface-elevated/90 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur"
        >
          <Smartphone size={14} className="text-accent" />
          Mobil optimiert
        </motion.div>
      </motion.div>

      {/* Auswahl-Punkte */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Vorlage anzeigen: ${s.label}`}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-accent"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
        <span className="ml-2 text-xs text-muted">{slide.label}</span>
      </div>
    </motion.div>
  );
}
