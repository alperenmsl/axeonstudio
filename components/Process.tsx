"use client";

import { motion } from "framer-motion";
import { Code2, MessageSquare, PenTool, Rocket } from "lucide-react";
import { processSteps } from "@/lib/content";

const icons = {
  message: MessageSquare,
  pen: PenTool,
  code: Code2,
  rocket: Rocket,
} as const;

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="relative mb-12 text-center sm:mb-16">
          <div className="section-watermark">
            <span>Ablauf</span>
          </div>
          <h2 className="font-display relative text-3xl font-bold text-white sm:text-4xl">
            So arbeiten wir zusammen
          </h2>
          <p className="relative mt-3 text-muted">
            In vier klaren Schritten von der Idee zur fertigen Seite
          </p>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Verbindungslinie auf Desktop */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />

          {processSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-border bg-surface/60 p-6 transition hover:border-accent/40"
              >
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-background text-accent">
                  <Icon size={22} />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-black">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
