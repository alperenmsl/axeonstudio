"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { href: "/#services", label: "Dienstleistungen" },
  { href: "/#templates", label: "Website Vorlagen" },
  { href: "/#faq", label: "Häufige Fragen" },
  { href: "/#contact", label: "Kontakt" },
];

function Terminal() {
  const [path, setPath] = useState("/");
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const lines = [
    `$ GET ${path}`,
    "→ Status: 404 Not Found",
    "→ Tipp: Zurück zur Startseite",
  ];
  const full = lines.join("\n");

  useEffect(() => {
    setTyped(0);
    const id = window.setInterval(() => {
      setTyped((t) => {
        if (t >= full.length) {
          window.clearInterval(id);
          return t;
        }
        return t + 1;
      });
    }, 35);
    return () => window.clearInterval(id);
  }, [full]);

  const visible = full.slice(0, typed).split("\n");

  return (
    <div className="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface text-left shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-elevated px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[0.65rem] text-muted">axeon-server</span>
      </div>
      <div className="min-h-[5.5rem] px-4 py-3 font-mono text-xs leading-relaxed sm:text-sm">
        {visible.map((line, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "break-all text-white"
                : i === 1
                  ? "text-accent"
                  : "text-muted"
            }
          >
            {line}
            {i === visible.length - 1 && (
              <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-accent" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

export function NotFoundScene() {
  const reduceMotion = useReducedMotion();

  // Maus: Spotlight + Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 24 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 24 });
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${glowX}px ${glowY}px, rgba(255, 189, 57, 0.09), transparent 70%)`;

  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 70, damping: 18 });
  const sy = useSpring(ny, { stiffness: 70, damping: 18 });
  const digitsX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const digitsY = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  return (
    <main
      onMouseEnter={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.jump(e.clientX - r.left);
        mouseY.jump(e.clientY - r.top);
        animate(glowOpacity, 1, { duration: 0.3 });
      }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
        nx.set((e.clientX - r.left) / r.width - 0.5);
        ny.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        animate(glowOpacity, 0, { duration: 0.4 });
        nx.set(0);
        ny.set(0);
      }}
      className="relative flex min-h-screen flex-col items-center overflow-hidden px-4"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: spotlight, opacity: glowOpacity }}
      />

      {/* Logo */}
      <header className="relative z-10 w-full max-w-6xl py-6">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-[0.3em] text-white"
        >
          AXEON
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center pb-16 text-center">
        {/* 404 */}
        <motion.div
          style={reduceMotion ? undefined : { x: digitsX, y: digitsY }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display relative select-none text-[7rem] leading-none font-bold tracking-tight sm:text-[10rem] md:text-[12rem]"
          aria-label="404"
        >
          <span
            aria-hidden
            className="bg-gradient-to-b from-white via-white/80 to-white/10 bg-clip-text text-transparent"
          >
            4
            <span className="text-accent [-webkit-text-fill-color:var(--accent)]">
              0
            </span>
            4
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-display mt-2 text-2xl font-bold text-white sm:text-4xl"
        >
          Diese Seite hat sich <span className="text-accent">verlaufen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-3 max-w-md text-muted"
        >
          Der Link ist veraltet oder die Adresse wurde falsch eingegeben. Von
          hier aus finden Sie schnell zurück.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full"
        >
          <Terminal />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <Link
            href="/"
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold tracking-wide text-black transition hover:brightness-110 sm:w-auto"
          >
            Zur Startseite
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-white transition hover:border-accent hover:text-accent sm:w-auto"
          >
            Projekt anfragen
          </Link>
        </motion.div>

        <motion.nav
          aria-label="Schnellzugriff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </motion.nav>
      </div>
    </main>
  );
}
