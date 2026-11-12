// ⚠️ ALLE PREISE ANPASSEN – das sind nur Beispielwerte!

export const PRICE_NOTE = "Preise inkl./exkl. USt – ANPASSEN"; // z. B. "Alle Preise ohne Umsatzsteuer (Kleinunternehmer)"
export const RUSH_FACTOR = 1.25; // Express-Aufschlag +25 %
export const RANGE_FACTOR = 1.25; // Spanne: "ab X bis ca. Y"

export type TypeId = "website" | "logo" | "shop" | "app";

export const projectTypes = [
  {
    id: "website" as const,
    title: "Website",
    description: "Unternehmensseite, Portfolio oder Landingpage",
    icon: "globe" as const,
    base: 790,
    pageBased: true,
    includedPages: 3,
    extraPagePrice: 120,
    quoteOnly: false,
  },
  {
    id: "logo" as const,
    title: "Logo & Branding",
    description: "Logo, Farben und Schriften für Ihre Marke",
    icon: "pen" as const,
    base: 390,
    pageBased: false,
    includedPages: 0,
    extraPagePrice: 0,
    quoteOnly: false,
  },
  {
    id: "shop" as const,
    title: "Webshop",
    description: "Online verkaufen mit Warenkorb und Zahlung",
    icon: "bag" as const,
    base: 1990,
    pageBased: true,
    includedPages: 5,
    extraPagePrice: 150,
    quoteOnly: false,
  },
  {
    id: "app" as const,
    title: "App / Individuell",
    description: "Web-App, Portal oder besondere Anforderungen",
    icon: "phone" as const,
    base: 0,
    pageBased: false,
    includedPages: 0,
    extraPagePrice: 0,
    quoteOnly: true,
  },
] as const;

export const extras = [
  {
    id: "texts",
    label: "Texterstellung",
    description: "Ich formuliere die Texte für Ihre Seite",
    price: 250,
    monthly: 0,
    types: ["website", "shop"],
  },
  {
    id: "logo-addon",
    label: "Logo dazu",
    description: "Passendes Logo zur Seite",
    price: 290,
    monthly: 0,
    types: ["website", "shop"],
  },
  {
    id: "booking",
    label: "Terminbuchung",
    description: "Kunden buchen online Termine",
    price: 350,
    monthly: 0,
    types: ["website"],
  },
  {
    id: "multilang",
    label: "Mehrsprachigkeit",
    description: "Seite in zwei Sprachen",
    price: 300,
    monthly: 0,
    types: ["website", "shop"],
  },
  {
    id: "seo",
    label: "SEO-Grundlagen",
    description: "Technische Optimierung für Google",
    price: 190,
    monthly: 0,
    types: ["website", "shop"],
  },
  {
    id: "admin",
    label: "Admin-Bereich",
    description: "Inhalte selbst verwalten",
    price: 450,
    monthly: 0,
    types: ["website", "shop"],
  },
  {
    id: "hosting",
    label: "Hosting & Betreuung",
    description: "Hosting, Updates und Monitoring",
    price: 0,
    monthly: 19,
    types: ["website", "shop"],
  },
  {
    id: "security",
    label: "Security-Monitoring",
    description: "Laufende Überwachung und Backups",
    price: 0,
    monthly: 12,
    types: ["website", "shop"],
  },
  {
    id: "brand-guide",
    label: "Brand-Guide (PDF)",
    description: "Regeln für Farben, Schriften, Logo-Nutzung",
    price: 180,
    monthly: 0,
    types: ["logo"],
  },
  {
    id: "social-kit",
    label: "Social-Media-Paket",
    description: "Profilbild und Banner für Ihre Kanäle",
    price: 120,
    monthly: 0,
    types: ["logo"],
  },
] as const;