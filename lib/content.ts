export const site = {
  name: "Axeon",
  fullName: "Axeon Studio",
  tagline: "Web Entwickler und Designer mit Sitz in Österreich",
  description:
    "Axeon Studio – Webdesign, Webentwicklung, Hosting, Security und Marketing in Dornbirn, Vorarlberg.",
  owner: "Meseli Alperen",
  location: "Vorarlberg, Dornbirn",
  address: "6850 Dornbirn Vorarlberg",
  email: "axeonstudio@gmail.com",
  phone: "+43 678 7820939",
  website: "axeonstudio.com",
  websiteUrl: "https://axeonstudio.com",
  socials: {
    instagram: "https://instagram.com/axeonstudio",
    facebook: "https://www.facebook.com/axeonstudio",
    linkedin: "https://www.linkedin.com/in/alperen-meseli-134581385/",
  },
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Über uns" },
  { href: "#services", label: "Dienstleistungen" },
  { href: "#templates", label: "Website Vorlagen" },
  { href: "#contact", label: "Kontakt" },
] as const;

export const services = [
  {
    title: "Web Design",
    description:
      "Moderne, responsive Webseiten, die zu Ihrem Unternehmen passen.",
    icon: "monitor" as const,
  },
  {
    title: "24/7 Web Hosting",
    description:
      "Zuverlässiges Hosting auf Wunsch – damit Ihre Seite rund um die Uhr erreichbar bleibt.",
    icon: "server" as const,
  },
  {
    title: "Website Security",
    description:
      "Grundschutz und Monitoring, damit Ihre digitale Präsenz sicherer bleibt.",
    icon: "shield" as const,
  },
  {
    title: "Logo Design",
    description:
      "Professionelle Logos und visuelle Identitäten für kleine Unternehmen.",
    icon: "pen" as const,
  },
  {
    title: "App Entwicklung",
    description:
      "Mobile und webbasierte Anwendungen für Ihren digitalen Auftritt.",
    icon: "smartphone" as const,
  },
  {
    title: "Erfolgreiches Marketing",
    description:
      "Branding und Marketing-Begleitung, damit Ihre Marke sichtbar wird.",
    icon: "rocket" as const,
  },
] as const;

export const whyAxeon = [
  {
    title: "Persönlich & Nah",
    description:
      "Als Einzelunternehmer bin ich Ihr direkter Ansprechpartner. Keine Warteschleifen, sondern persönlicher Kontakt auf Augenhöhe.",
    icon: "user" as const,
  },
  {
    title: "Faire Preise",
    description:
      "Transparentes Pricing ohne versteckte Kosten – zugeschnitten auf Budgets von kleinen Unternehmen und Start-ups.",
    icon: "euro" as const,
  },
  {
    title: "Alles aus einer Hand",
    description:
      "Vom ersten Logo-Entwurf bis zur fertigen, gehosteten Webseite – ich kümmere mich um den gesamten Prozess.",
    icon: "check" as const,
  },
] as const;

export const stats = [
  { value: 1, label: "Standort" },
  { value: 1, label: "Mitarbeiter" },
  { value: 6, label: "Dienstleistungen" },
  { value: 1, label: "Jahre alt" },
] as const;

export const footerServices = [
  "Web Design",
  "Web Entwicklung",
  "Business Strategie",
  "Social Media Marketing",
  "Cyber Security – Monitoring",
] as const;
