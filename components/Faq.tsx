"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
        <div className="relative mb-10 text-center sm:mb-14">
          <div className="section-watermark">
            <span>FAQ</span>
          </div>
          <h2 className="font-display relative text-3xl font-bold text-white sm:text-4xl">
            Häufige Fragen
          </h2>
          <p className="relative mt-3 text-muted">
            Antworten, bevor Sie fragen müssen
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border bg-surface/60 transition-colors ${
                  isOpen ? "border-accent/40" : "border-border"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white sm:px-6 sm:py-5"
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-accent"
                    >
                      <Plus size={20} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Ihre Frage ist nicht dabei?{" "}
          <a href="#contact" className="text-accent hover:underline">
            Schreiben Sie mir einfach.
          </a>
        </p>
      </div>
    </section>
  );
}
