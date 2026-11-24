export const services = [
  { name: "Classic Cut", text: "Präziser Schnitt nach Beratung, inklusive Waschen und Styling.", price: "ab 28 €", min: 30 },
  { name: "Bart Sculpting", text: "Konturen, Länge und Form, sauber mit dem Rasiermesser gezogen.", price: "ab 18 €", min: 20 },
  { name: "Hot Towel Shave", text: "Klassische Nassrasur mit heißem Tuch und Pflegeöl.", price: "ab 30 €", min: 30 },
  { name: "The Full Cutz", text: "Haarschnitt, Bart und Nassrasur-Finish im Komplettpaket.", price: "ab 55 €", min: 60 },
  { name: "Kids Cut", text: "Geduldig und entspannt für die Jüngsten bis 12 Jahre.", price: "ab 20 €", min: 25 },
  { name: "Pflege & Styling", text: "Kopfhautpflege, Maske und Styling mit Profi-Produkten.", price: "ab 15 €", min: 15 },
] as const;

export const barbers = [
  { name: "Marco", role: "Master Barber", focus: "Fades & Klassiker" },
  { name: "Luca", role: "Barber", focus: "Bart & Nassrasur" },
  { name: "Daniel", role: "Barber", focus: "Texturen & Styling" },
] as const;

export const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#team", label: "Team" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const gallery = [
  { src: "/images/demo/barber-1.jpg", alt: "Fade-Haarschnitt von der Seite", tall: true },
  { src: "/images/demo/barber-2.jpg", alt: "Bart wird mit dem Rasiermesser konturiert", tall: false },
  { src: "/images/demo/barber-3.jpg", alt: "Salon-Innenraum mit Barber-Stühlen", tall: false },
  { src: "/images/demo/barber-4.jpg", alt: "Nassrasur mit heißem Tuch", tall: true },
  { src: "/images/demo/barber-5.jpg", alt: "Werkzeuge: Schere, Kamm und Rasiermesser", tall: false },
  { src: "/images/demo/barber-6.jpg", alt: "Fertiger Haarschnitt von hinten", tall: false },
] as const;