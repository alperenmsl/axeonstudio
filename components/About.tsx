"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:gap-12 sm:px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-surface md:max-w-none"
        >
          <Image
            src="/images/alperen.svg"
            alt={`${site.owner} – ${site.fullName}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 40vw"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            watermark="Über"
            title="Über uns"
            subtitle="Unsere Dienstleistungen umfassen die Gestaltung von Webseiten und Logos für kleine Unternehmen."
            align="left"
          />

          <dl className="mt-2 space-y-4 border-t border-border pt-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
              <dt className="w-28 shrink-0 text-sm font-medium text-accent">
                Inhaber
              </dt>
              <dd className="break-words text-white">{site.owner}</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
              <dt className="w-28 shrink-0 text-sm font-medium text-accent">
                Standort
              </dt>
              <dd className="text-white">{site.location}</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
              <dt className="w-28 shrink-0 text-sm font-medium text-accent">
                E-Mail
              </dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-white transition hover:text-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
