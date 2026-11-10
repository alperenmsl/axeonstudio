"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CircleUserRound, Euro } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { whyAxeon } from "@/lib/content";

const icons = {
  user: CircleUserRound,
  euro: Euro,
  check: BadgeCheck,
} as const;

export function WhyAxeon() {
  return (
    <section
      id="why"
      className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          watermark="Vorteile"
          title="Warum Axeon?"
          subtitle="Persönliche Betreuung für Ihren digitalen Erfolg"
        />

        <div className="grid gap-10 sm:gap-8 md:grid-cols-3">
          {whyAxeon.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-2xl border border-border bg-surface/40 p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-8"
              >
                <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border text-accent transition duration-300 group-hover:scale-110 group-hover:border-accent">
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
