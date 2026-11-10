"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  PenTool,
  Rocket,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";

const icons = {
  monitor: Monitor,
  server: Server,
  shield: Shield,
  pen: PenTool,
  smartphone: Smartphone,
  rocket: Rocket,
} as const;

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          watermark="Dienstleistungen"
          title="Unsere Dienstleistungen"
          subtitle="Dienstleistungen, die wir anbieten"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative rounded-2xl border border-border bg-surface/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-20px_rgba(255,189,57,0.25)] sm:p-7"
              >
                <span className="font-display absolute right-5 top-4 text-sm font-bold text-white/15 transition group-hover:text-accent/80">
                  0{index + 1}
                </span>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent transition duration-300 group-hover:bg-accent group-hover:text-black">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="mt-5 h-1 w-12 bg-accent transition-all duration-300 group-hover:w-20" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
