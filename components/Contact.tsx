"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";
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
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("first_name") ?? "").trim();
    const lastName = String(data.get("last_name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Anfrage von ${firstName} ${lastName}${company ? ` (${company})` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${firstName} ${lastName}`,
        company ? `Firma: ${company}` : null,
        `E-Mail: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  };

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

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          onSubmit={onSubmit}
          className="mx-auto mb-12 max-w-3xl space-y-3 sm:mb-16 sm:space-y-4"
        >
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <input
              name="first_name"
              required
              placeholder="Vorname"
              autoComplete="given-name"
              className="input-field"
            />
            <input
              name="last_name"
              required
              placeholder="Nachname"
              autoComplete="family-name"
              className="input-field"
            />
          </div>
          <input
            name="company"
            placeholder="Name der Firma (optional)"
            autoComplete="organization"
            className="input-field"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Ihre E-Mail Adresse"
            autoComplete="email"
            inputMode="email"
            className="input-field"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Telefonnummer (optional)"
            autoComplete="tel"
            inputMode="tel"
            className="input-field"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Nachricht"
            className="input-field min-h-[8rem] resize-y"
          />
          <div className="pt-1 text-center sm:pt-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold tracking-wide text-black transition hover:brightness-110 sm:w-auto"
            >
              <Send size={16} />
              Nachricht senden
            </button>
            {status === "ready" ? (
              <p className="mt-3 text-sm text-muted">
                Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Nachricht.
              </p>
            ) : null}
          </div>
        </motion.form>

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
