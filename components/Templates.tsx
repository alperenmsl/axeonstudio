"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { templates } from "@/lib/content";

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
        />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {templates.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                {item.meta}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold text-white">
                {item.title} – Axeon
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
