export type TemplateMedia =
  | { type: "image"; src: string; label: string }
  | { type: "video"; src: string; label: string };

export type Template = {
  id: string;
  title: string;
  meta: string;
  description: string;
  features: string[];
  media: TemplateMedia[];
};

/**
 * Website-Vorlagen mit Bildergalerie.
 *
 * Bilder liegen in `public/images/templates/`.
 * Video einbinden: Datei nach `public/videos/` legen (z. B. ein
 * Screen-Recording der Vorlage) und einen Eintrag ergänzen:
 *   { type: "video", src: "/videos/dein-video.mp4", label: "Screen-Recording" }
 */
export const templates: Template[] = [
  {
    id: "barbershop",
    title: "Barber Shop Webseite",
    meta: "Sep 27, 2024 · Axeon Team",
    description:
      "Klar gestaltete Barbershop-Vorlage mit Terminbuchung und Preisübersicht – auf Wunsch individuell anpassbar.",
    features: [
      "Terminbuchung",
      "Preisliste",
      "Galerie",
      "Mobile-First",
      "Kontaktformular",
    ],
    media: [
      {
        type: "image",
        src: "/images/templates/barbershop-01-hero.svg",
        label: "Startseite – Desktop",
      },
      {
        type: "image",
        src: "/images/templates/barbershop-02-leistungen.svg",
        label: "Leistungen & Preise",
      },
      {
        type: "image",
        src: "/images/templates/barbershop-03-mobile.svg",
        label: "Mobile Ansicht",
      },
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant Webseite",
    meta: "Sep 27, 2024 · Axeon Team",
    description:
      "Elegante Restaurant-Vorlage mit Speisekarte, Atmosphäre-Bildern und Reservierungsanfrage.",
    features: [
      "Speisekarte",
      "Reservierung",
      "Weinkarte",
      "Mobile-First",
      "Google Maps",
    ],
    media: [
      {
        type: "image",
        src: "/images/templates/restaurant-01-hero.svg",
        label: "Startseite – Desktop",
      },
      {
        type: "image",
        src: "/images/templates/restaurant-02-karte.svg",
        label: "Speisekarte",
      },
      {
        type: "image",
        src: "/images/templates/restaurant-03-mobile.svg",
        label: "Mobile Ansicht",
      },
    ],
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    meta: "Sep 21, 2024 · Alperen",
    description:
      "Demnächst: Ein neues innovatives Projekt von Axeon. Countdown-Teaser mit E-Mail-Anmeldung.",
    features: ["Countdown", "E-Mail-Anmeldung", "Animationen", "Mobile-First"],
    media: [
      {
        type: "image",
        src: "/images/templates/coming-soon-01-desktop.svg",
        label: "Teaser – Desktop",
      },
      {
        type: "image",
        src: "/images/templates/coming-soon-02-detail.svg",
        label: "Countdown & Anmeldung",
      },
      {
        type: "image",
        src: "/images/templates/coming-soon-03-mobile.svg",
        label: "Mobile Ansicht",
      },
    ],
  },
];
