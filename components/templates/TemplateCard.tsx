"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Film } from "lucide-react";
import type { Template } from "@/lib/templates";

type TemplateCardProps = {
  template: Template;
  index: number;
  eager?: boolean;
  onOpen: () => void;
};

export function TemplateCard({
  template,
  index,
  eager = false,
  onOpen,
}: TemplateCardProps) {
  const cover = template.media[0];
  const mediaCount = template.media.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Bildergalerie von ${template.title} öffnen`}
        className="block w-full rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <span className="relative mb-5 block aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface transition duration-300 group-hover:border-accent/50 group-hover:shadow-[0_20px_60px_-20px_rgba(255,189,57,0.3)]">
          <span className="absolute left-3 top-3 z-10 rounded-md bg-black/60 px-2 py-1 text-[0.65rem] font-bold tracking-[0.18em] text-white/90 backdrop-blur">
            0{index + 1}
          </span>

          {cover.type === "image" ? (
            <Image
              src={cover.src}
              alt={`${template.title} – ${cover.label}`}
              fill
              loading={eager ? "eager" : "lazy"}
              fetchPriority={eager ? "high" : undefined}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center bg-surface-elevated text-accent">
              <Film size={28} />
            </span>
          )}

          <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold text-black opacity-100 shadow-lg transition duration-300 group-hover:translate-y-0 sm:opacity-0">
              <Eye size={15} />
              Vorschau ansehen
            </span>
          </span>
        </span>

        <span className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            {template.meta}
          </span>
          <span className="shrink-0 text-xs text-muted">
            {mediaCount} Ansichten
          </span>
        </span>
        <span className="font-display mt-2 block text-lg font-semibold text-white transition-colors group-hover:text-accent">
          {template.title} – Axeon
        </span>
        <span className="mt-2 block text-sm leading-relaxed text-muted">
          {template.description}
        </span>
      </button>
    </motion.article>
  );
}
