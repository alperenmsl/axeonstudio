import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { footerServices, navLinks, site } from "@/lib/content";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 9.5H9v9H6.5v-9zM7.8 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11 9.5h2.4v1.2h.1c.3-.6 1.2-1.3 2.5-1.3 2.6 0 3.1 1.7 3.1 4v5.1H16.6v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v4.6H11v-9z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 pt-12 pb-8 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Über uns
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Alle unsere sozialen Medien für weiteren Kontakt
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition hover:border-accent hover:text-accent"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition hover:border-accent hover:text-accent"
              >
                <FacebookIcon />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition hover:border-accent hover:text-accent"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Dienstleistungen
            </h3>
            <ul className="mt-4 space-y-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    → {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Haben Sie noch Fragen?
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {site.address}
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition hover:text-accent"
                >
                  <Phone size={16} className="shrink-0 text-accent" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 transition hover:text-accent"
                >
                  <Mail size={16} className="shrink-0 text-accent" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs leading-relaxed text-muted sm:mt-12 sm:text-sm">
          Copyright © 2026 All rights reserved
          <span className="mx-1.5 hidden sm:inline">|</span>
          <br className="sm:hidden" />
          This website made by{" "}
          <a
            href={site.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition hover:brightness-110"
          >
            {site.fullName}
          </a>
        </div>
        <div className="flex gap-4 text-sm text-muted">
          <Link href="/impressum" className="hover:text-accent">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-accent">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
