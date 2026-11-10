"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Film, Send, X } from "lucide-react";
import type { Template } from "@/lib/templates";

type TemplatePreviewModalProps = {
  template: Template;
  onClose: () => void;
};

export function TemplatePreviewModal({
  template,
  onClose,
}: TemplatePreviewModalProps) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = template.media.length;

  const go = useCallback(
    (direction: 1 | -1) => {
      setIndex((current) => (current + direction + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose, go]);

  const item = template.media[index];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        aria-label="Vorschau schließen"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-sm"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Vorschau: ${template.title}`}
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex max-h-[94dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-border bg-surface-elevated shadow-2xl sm:rounded-2xl"
      >
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-4 py-3.5 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <h3 className="font-display truncate text-base font-semibold text-white sm:text-lg">
              {template.title} – Axeon
            </h3>
            <p className="mt-0.5 text-xs text-muted">{template.meta}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent"
          >
            <X size={18} />
          </button>
        </div>

        {/* Gallery */}
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-black/50">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.22 }}
              drag="x"
              dragDirectionLock
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_event, info) => {
                if (info.offset.x <= -70) go(1);
                else if (info.offset.x >= 70) go(-1);
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              {item.type === "video" ? (
                <video
                  key={item.src}
                  src={item.src}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={`${template.title} – ${item.label}`}
                  fill
                  loading="eager"
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Vorherige Ansicht"
                className="absolute left-2 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-accent hover:text-black sm:left-3 sm:h-10 sm:w-10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Nächste Ansicht"
                className="absolute right-2 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-accent hover:text-black sm:right-3 sm:h-10 sm:w-10"
              >
                <ChevronRight size={18} />
              </button>
              <span className="absolute bottom-2.5 right-3 z-10 rounded-full bg-black/55 px-2.5 py-1 text-[0.7rem] font-semibold text-white backdrop-blur">
                {index + 1} / {total}
              </span>
            </>
          ) : null}

          <span className="absolute bottom-2.5 left-3 z-10 max-w-[70%] truncate rounded-full bg-black/55 px-2.5 py-1 text-[0.7rem] font-medium text-white/90 backdrop-blur">
            {item.label}
          </span>
        </div>

        {/* FOOTER_SECTION */}
        <div className="overflow-y-auto">
          {/* Thumbnails */}
          {total > 1 ? (
            <div className="flex gap-2 overflow-x-auto border-b border-border px-4 py-3 sm:px-6">
              {template.media.map((mediaItem, mediaIndex) => (
                <button
                  key={mediaItem.src}
                  type="button"
                  onClick={() => setIndex(mediaIndex)}
                  aria-label={mediaItem.label}
                  aria-current={mediaIndex === index}
                  className={`relative aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-md border transition sm:w-24 ${
                    mediaIndex === index
                      ? "border-accent opacity-100"
                      : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  {mediaItem.type === "video" ? (
                    <span className="flex h-full w-full items-center justify-center bg-surface text-accent">
                      <Film size={18} />
                    </span>
                  ) : (
                    <Image
                      src={mediaItem.src}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="96px"
                      className="object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          ) : null}

          {/* Footer */}
          <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex flex-wrap gap-1.5">
              {template.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-border bg-surface px-2.5 py-1 text-[0.7rem] font-medium text-muted"
                >
                  {feature}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-black transition hover:brightness-110"
            >
              <Send size={15} />
              Ähnliches Projekt anfragen
            </a>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
