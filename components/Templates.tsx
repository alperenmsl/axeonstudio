"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

type Template = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string; // ohne href = Demo folgt noch
};

const templates: Template[] = [
  {
    id: "barbershop",
    title: "Barbershop",
    description:
      "Dunkle, edle Seite mit Leistungen, Team, Galerie und Online-Terminbuchung zum Ausprobieren.",
    tags: ["Terminbuchung", "Preisliste", "Galerie", "Mobil optimiert"],
    href: "/demo/barbershop",
  },
  {
    id: "restaurant",
    title: "Restaurant",
    description:
      "Speisekarte mit Kategorien, Atmosphäre-Bildern und Tischreservierung.",
    tags: ["Speisekarte", "Reservierung", "Galerie"],
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    description:
      "Teaser-Seite mit Countdown und E-Mail-Anmeldung für neue Projekte.",
    tags: ["Countdown", "E-Mail-Anmeldung"],
  },
];

const FRAME_W = 1280;
const FRAME_H = 800;

/** Verkleinerter Live-Ausschnitt einer Demo-Seite */
function LivePreview({ href, title }: { href: string; title: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / FRAME_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className="relative aspect-[16/10] overflow-hidden bg-[#0c0b0a]"
    >
      <iframe
        src={href}
        title={`Vorschau: ${title}`}
        loading="lazy"
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 border-0"
        style={{
          width: FRAME_W,
          height: FRAME_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}

export function Templates() {
  return (
    <section
      id="templates"
      className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          watermark="Vorlagen"
          title="Kleiner Einblick auf unsere Seiten"
          subtitle="Öffnen Sie eine Vorlage und probieren Sie die Demo selbst aus."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, index) => {
            const card = (
              <>
                <div className="relative overflow-hidden border-b border-border">
                  {t.href ? (
                    <LivePreview href={t.href} title={t.title} />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-surface-elevated/60">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-muted">
                        <Clock size={14} /> Demo folgt
                      </span>
                    </div>
                  )}

                  <span className="absolute left-3 top-3 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {t.href && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-black opacity-0 transition group-hover:opacity-100">
                      Live-Demo <ArrowUpRight size={13} />
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 text-[0.7rem] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {t.href && (
                    <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Live-Demo ansehen
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </p>
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {t.href ? (
                  <Link
                    href={t.href}
                    className="group block overflow-hidden rounded-2xl border border-border bg-surface/60 transition hover:-translate-y-1 hover:border-accent/50"
                  >
                    {card}
                  </Link>
                ) : (
                  <div className="group block overflow-hidden rounded-2xl border border-dashed border-border bg-surface/30 opacity-80">
                    {card}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-muted">
          <Sparkles size={15} className="shrink-0 text-accent" />
          Das sind Beispiel-Vorlagen. Ihr Projekt bekommt natürlich sein eigenes
          Design.
        </p>
      </div>
    </section>
  );
}
