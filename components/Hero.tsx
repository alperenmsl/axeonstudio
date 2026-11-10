"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/lib/content";

const rotatingWords = ["Webseiten", "Logos", "Branding", "Webshops"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setWordIndex((index) => (index + 1) % rotatingWords.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 55, damping: 18 });
  const glowY = useSpring(mouseY, { stiffness: 55, damping: 18 });
  const mouseGlow = useMotionTemplate`radial-gradient(340px circle at ${glowX}px ${glowY}px, rgba(255, 189, 57, 0.08), transparent 70%)`;

  return (
    <section
      id="home"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-14 sm:pt-16 md:pt-20"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="animate-float-slow pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="animate-float-slower pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: mouseGlow }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-wide text-accent sm:mb-6 sm:text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Verfügbar für neue Projekte
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display max-w-4xl text-[2.35rem] leading-[1.08] font-extrabold tracking-tight break-words text-white sm:text-5xl md:text-7xl lg:text-8xl"
        >
          Wir sind <span className="text-accent">{site.fullName}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="font-display mt-4 flex flex-wrap items-baseline gap-x-2 text-lg font-semibold text-white/85 sm:mt-5 sm:text-2xl"
        >
          Spezialisiert auf
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={rotatingWords[wordIndex]}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="inline-block text-accent"
            >
              {rotatingWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-5 max-w-xl text-base text-muted sm:mt-6 sm:text-lg md:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <a
            href="#contact"
            className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-bold tracking-wide text-black transition hover:brightness-110 sm:w-auto"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 -left-3/4 w-1/2 skew-x-[-20deg] bg-white/25 transition-transform duration-500 group-hover/btn:translate-x-[320%]"
            />
            Projekt anfragen
            <ArrowRight
              size={16}
              className="relative transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-white transition hover:border-accent hover:text-accent sm:w-auto"
          >
            Leistungen ansehen
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Nach unten zu Über uns scrollen"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted transition hover:text-accent sm:flex"
      >
        <span className="text-[0.62rem] font-semibold tracking-[0.32em] uppercase">
          Scrollen
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
