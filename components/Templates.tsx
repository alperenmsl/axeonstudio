"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { TemplatePreviewModal } from "@/components/templates/TemplatePreviewModal";
import { templates, type Template } from "@/lib/templates";

export function Templates() {
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null);

  return (
    <section
      id="templates"
      className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          watermark="Vorlagen"
          title="Kleiner Einblick auf unsere Seiten"
          subtitle="Klicke auf eine Vorlage, um die Bildergalerie mit allen Ansichten zu öffnen."
        />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
              eager={index === 0}
              onOpen={() => setActiveTemplate(template)}
            />
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-muted sm:text-sm">
          <MousePointerClick size={16} className="shrink-0 text-accent" />
          Das sind Beispiel-Vorlagen – Ihr Projekt bekommt natürlich sein
          eigenes Design.
        </p>
      </div>

      <AnimatePresence>
        {activeTemplate ? (
          <TemplatePreviewModal
            key={activeTemplate.id}
            template={activeTemplate}
            onClose={() => setActiveTemplate(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
