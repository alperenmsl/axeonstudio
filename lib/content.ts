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
  legal: {
  street: "Höchsterstrasse 51",            // Pflicht: volle Anschrift
  zip: "6850",
  city: "Dornbirn",
  businessType: "Einzelunternehmen",
  trade: "DEIN GEWERBE LT. ANMELDUNG",   // z. B. wie im Gewerbeschein
  uid: "",                                // leer lassen, wenn keine UID (Kleinunternehmer)
  firmenbuch: "",                         // leer lassen, wenn nicht eingetragen
  authority: "Magistrat der Stadt Dornbirn", // Gewerbebehörde, bitte prüfen
  chamber: "Wirtschaftskammer Vorarlberg",
},
  socials: {
    instagram: "https://instagram.com/axeonstudio",
    facebook: "https://www.facebook.com/axeonstudio",
    linkedin: "https://www.linkedin.com/in/alperen-meseli-134581385/",
  },
} as const;

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "Über uns" },
  { href: "/#services", label: "Dienstleistungen" },
  { href: "/#templates", label: "Website Vorlagen" },
  { href: "/#contact", label: "Kontakt" },
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


export const processSteps = [
  {
    title: "Kennenlernen",
    description:
      "Wir besprechen Ihre Ziele, Ihre Zielgruppe und Ihr Budget. Sie erhalten danach ein klares, unverbindliches Angebot.",
    icon: "message" as const,
  },
  {
    title: "Konzept & Design",
    description:
      "Ich entwerfe Struktur und Design Ihrer Seite oder Ihres Logos. Sie geben Feedback, bis es passt.",
    icon: "pen" as const,
  },
  {
    title: "Umsetzung",
    description:
      "Die Seite wird entwickelt, auf allen Geräten getestet und mit Ihren Inhalten befüllt.",
    icon: "code" as const,
  },
  {
    title: "Launch & Betreuung",
    description:
      "Ihre Seite geht online. Auf Wunsch kümmere ich mich um Hosting, Sicherheit und spätere Änderungen.",
    icon: "rocket" as const,
  },
] as const;

export const faqs = [
  {
    question: "Wie läuft eine Zusammenarbeit ab?",
    answer:
      "Sie schildern mir Ihr Vorhaben über das Kontaktformular oder per E-Mail. Danach vereinbaren wir ein kurzes Gespräch, ich erstelle ein Angebot und nach Ihrer Freigabe starte ich mit Konzept und Design.",
  },
  {
    question: "Was kostet eine Website?",
    answer:
      "Das hängt vom Umfang ab: Anzahl der Seiten, Funktionen wie Terminbuchung oder Webshop und ob Texte und Bilder vorhanden sind. Nach dem ersten Gespräch erhalten Sie ein transparentes Angebot ohne versteckte Kosten.",
  },
  {
    question: "Wie lange dauert es bis zur fertigen Seite?",
    answer:
      "Bei einer einfachen Unternehmensseite rechne ich in der Regel mit einigen Wochen. Die genaue Dauer nenne ich Ihnen im Angebot, sie hängt auch davon ab, wie schnell Inhalte und Feedback bei mir ankommen.",
  },
  {
    question: "Muss ich Texte und Bilder selbst liefern?",
    answer:
      "Sie können eigene Texte und Bilder mitbringen. Wenn Sie keine haben, unterstütze ich bei der Auswahl und Gestaltung. Wichtig ist, dass Sie die Nutzungsrechte an allen Inhalten besitzen.",
  },
  {
    question: "Kümmern Sie sich auch um Hosting und Wartung?",
    answer:
      "Ja, auf Wunsch. Ich biete Hosting, Grundschutz und Monitoring an. Sie können Ihre Seite aber auch bei einem Anbieter Ihrer Wahl hosten.",
  },
  {
    question: "Kann ich meine Seite später ändern oder erweitern lassen?",
    answer:
      "Ja. Texte, Bilder, neue Unterseiten oder zusätzliche Funktionen lassen sich jederzeit ergänzen. Kleine Änderungen sind oft schnell erledigt, größere Erweiterungen bespreche ich vorab mit Ihnen.",
  },
  {
    question: "Ist meine Website auf dem Handy nutzbar?",
    answer:
      "Ja. Jede Seite wird für Smartphone, Tablet und Desktop gestaltet und auf den gängigen Geräten getestet.",
  },
] as const;

export const stats = [
  { value: 24, suffix: " h", label: "Antwortzeit auf Anfragen" },
  { value: 6, label: "Dienstleistungen aus einer Hand" },
  { value: 100, suffix: " %", label: "Individuelles Design" },
  { value: 1, label: "Ansprechpartner für alles" },
] as const;

export const footerServices = [
  "Web Design",
  "24/7 Web Hosting",
  "Website Security",
  "Logo Design",
  "App Entwicklung",
  "Marketing",
] as const;


