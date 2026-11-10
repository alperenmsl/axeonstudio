"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-14 sm:pt-16 md:pt-20"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase sm:mb-5 sm:text-xs sm:tracking-[0.28em]"
        >
          Willkommen!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display max-w-4xl text-[2.35rem] leading-[1.08] font-extrabold tracking-tight break-words text-white sm:text-5xl md:text-7xl lg:text-8xl"
        >
          Wir sind <span className="text-accent">{site.fullName}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-5 max-w-xl text-base text-muted sm:mt-6 sm:text-lg md:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-bold tracking-wide text-black transition hover:brightness-110 sm:w-auto"
          >
            Projekt anfragen
          </a>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-white transition hover:border-accent hover:text-accent sm:w-auto"
          >
            Leistungen ansehen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
