"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

const contactItems = [
  {
    title: "Standort",
    value: site.address,
    href: null,
    icon: MapPin,
  },
  {
    title: "Tel. Nummer",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    title: "E-Mail Adresse",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    title: "Website",
    value: site.website,
    href: site.websiteUrl,
    icon: Globe,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionHeading
          watermark="Kontakt"
          title="Kontaktiere uns"
          subtitle="Haben Sie Fragen an uns oder brauchen Sie eine Webseite? Kontaktieren Sie uns!"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 sm:mb-16"
        >
          <ContactForm />
        </motion.div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const value = item.href ? (
              <a
                href={item.href}
                className="break-words text-sm text-muted transition hover:text-accent"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm text-muted">{item.value}</p>
            );

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-surface text-accent ring-1 ring-border">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
                  {item.title}
                </h3>
                <div className="mt-2 px-2">{value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
