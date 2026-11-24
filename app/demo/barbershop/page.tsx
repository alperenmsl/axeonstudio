import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import {
  Baby,
  Clock,
  Crown,
  Droplets,
  Flame,
  MapPin,
  Phone,
  Quote,
  Scissors,
  Sparkles,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { BookingWidget } from "@/components/demo/BookingWidget";
import { Gallery } from "@/components/demo/Gallery";
import { MobileNav } from "@/components/demo/MobileNav";
import { OpenNow } from "@/components/demo/OpenNow";
import { Reveal } from "@/components/demo/Reveal";
import { barbers, navLinks, services } from "@/lib/demo/barbershop";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Demo: Barbershop – Axeon Studio",
  robots: { index: false, follow: false },
};

const icons = [Scissors, Sparkles, Flame, Crown, Baby, Droplets];
const steps = [
  [
    "01",
    "Beratung",
    "Wir besprechen Typ, Haarstruktur und Wunschlook, bevor die Schere zum Einsatz kommt.",
  ],
  [
    "02",
    "Handwerk",
    "Schnitt und Konturen entstehen in Ruhe und mit Präzision, ohne Zeitdruck.",
  ],
  [
    "03",
    "Finish",
    "Heißes Tuch, Pflege und Styling. Sie gehen so, wie Sie gekommen sind: nur besser.",
  ],
];
const quotes = [
  [
    "Endlich ein Barber, bei dem man nicht warten muss. Termin online, pünktlich dran, super Ergebnis.",
    "Beispiel-Kunde A.",
  ],
  [
    "Die Nassrasur ist ein Erlebnis. Ruhige Atmosphäre und echtes Handwerk.",
    "Beispiel-Kunde B.",
  ],
  [
    "Mein Fade sitzt jede Woche. Man merkt, dass hier jemand sein Fach versteht.",
    "Beispiel-Kunde C.",
  ],
];
const hours = [
  ["Montag – Freitag", "09:00 – 18:30"],
  ["Samstag", "09:00 – 16:00"],
  ["Sonntag", "geschlossen"],
];

const eyebrow = "text-xs font-bold tracking-[0.3em] text-[#d19a5b] uppercase";

export default function BarbershopDemo() {
  return (
    <div
      className={`${sans.className} min-h-screen bg-[#0c0b0a] text-[#efe7d8]`}
    >
      <DemoBanner title="Barbershop" />

      {/* Navigation */}
      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <span
          className={`${serif.className} text-2xl font-extrabold tracking-[0.3em]`}
        >
          CUTZ
        </span>
        <nav className="hidden gap-8 text-sm font-semibold text-[#efe7d8]/75 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#d19a5b]">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#termin"
            className="hidden rounded-full bg-[#d19a5b] px-5 py-2.5 text-sm font-bold text-black hover:brightness-110 sm:inline-flex"
          >
            Termin buchen
          </a>
          <MobileNav />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(209,154,91,0.10),transparent_70%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className={eyebrow}>Barbershop · Beispielstadt</span>
                <OpenNow />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className={`${serif.className} mt-5 text-5xl leading-[1.05] font-extrabold sm:text-6xl md:text-7xl`}
              >
                Wo Handwerk
                <br />
                auf <span className="text-[#d19a5b]">Stil</span> trifft.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg text-[#efe7d8]/70">
                Präzise Schnitte, klassische Nassrasur und ein Stuhl, der auf
                Sie wartet. Online buchen in unter einer Minute.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#termin"
                  className="rounded-full bg-[#b3261e] px-8 py-4 text-sm font-bold text-white hover:brightness-110"
                >
                  Jetzt Termin buchen
                </a>
                <a
                  href="#leistungen"
                  className="rounded-full border border-[#efe7d8]/25 px-8 py-4 text-sm font-semibold hover:border-[#d19a5b] hover:text-[#d19a5b]"
                >
                  Leistungen & Preise
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-white/10 bg-[#151412] p-7 sm:p-8">
              <p className={eyebrow}>Öffnungszeiten</p>
              <ul className="mt-5 divide-y divide-white/10 text-sm">
                {hours.map(([d, t]) => (
                  <li key={d} className="flex justify-between gap-6 py-3">
                    <span className="text-[#efe7d8]/70">{d}</span>
                    <span className="font-semibold">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-6 text-sm text-[#efe7d8]/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#d19a5b]" />
                <span>
                  Beispielstraße 1<br />
                  0000 Beispielstadt
                </span>
              </div>
              <a
                href="#termin"
                className="mt-7 block rounded-full bg-[#d19a5b] px-6 py-3.5 text-center text-sm font-bold text-black hover:brightness-110"
              >
                Termin buchen
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leistungen */}
      <section
        id="leistungen"
        className="mx-auto max-w-6xl scroll-mt-6 border-t border-white/10 px-5 py-16 md:py-24"
      >
        <Reveal>
          <p className={eyebrow}>Leistungen & Preise</p>
          <h2
            className={`${serif.className} mt-3 max-w-xl text-4xl font-bold md:text-5xl`}
          >
            Klar, fair und mit Liebe zum Detail
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.name} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-white/10 bg-[#151412] p-6 transition hover:-translate-y-1 hover:border-[#d19a5b]/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d19a5b]/12 text-[#d19a5b] transition group-hover:bg-[#d19a5b] group-hover:text-black">
                    <Icon size={20} />
                  </span>
                  <h3 className={`${serif.className} mt-5 text-xl font-bold`}>
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#efe7d8]/60">
                    {s.text}
                  </p>
                  <div className="mt-5 flex items-baseline justify-between border-t border-white/10 pt-4">
                    <span className="font-bold text-[#d19a5b]">{s.price}</span>
                    <span className="text-xs text-[#efe7d8]/45">
                      {s.min} Min.
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-[#efe7d8]/40">
          Beispielpreise dieser Demo-Vorlage.
        </p>
      </section>

      {/* Ablauf */}
      <section
        id="ablauf"
        className="scroll-mt-6 border-y border-white/10 bg-[#100f0d] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className={eyebrow}>Das Erlebnis</p>
            <h2
              className={`${serif.className} mt-3 text-4xl font-bold md:text-5xl`}
            >
              In drei Schritten zum neuen Look
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold tracking-[0.3em] text-[#d19a5b]">
                    {n}
                  </span>
                  <span className="h-px flex-1 bg-white/15" />
                </div>
                <h3 className={`${serif.className} mt-5 text-2xl font-bold`}>
                  {t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#efe7d8]/60">
                  {d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section
        id="galerie"
        className="mx-auto max-w-6xl scroll-mt-6 px-5 py-16 md:py-24"
      >
        <Reveal>
          <p className={eyebrow}>Galerie</p>
          <h2
            className={`${serif.className} mt-3 mb-10 text-4xl font-bold md:text-5xl`}
          >
            Einblicke in den Salon
          </h2>
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
      </section>

      {/* Team */}
      <section
        id="team"
        className="scroll-mt-6 border-y border-white/10 bg-[#100f0d] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className={eyebrow}>Das Team</p>
            <h2
              className={`${serif.className} mt-3 text-4xl font-bold md:text-5xl`}
            >
              Drei Barber, ein Anspruch
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {barbers.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-[#151412] p-6 text-center transition hover:border-[#d19a5b]/50">
                  <span
                    className={`${serif.className} mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#d19a5b] to-[#7a4a1d] text-4xl font-bold text-black`}
                  >
                    {b.name[0]}
                  </span>
                  <h3 className={`${serif.className} mt-5 text-2xl font-bold`}>
                    {b.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#d19a5b]">
                    {b.role}
                  </p>
                  <p className="mt-1 text-sm text-[#efe7d8]/55">{b.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Termin */}
      <section
        id="termin"
        className="mx-auto max-w-6xl scroll-mt-6 px-5 py-16 md:py-24"
      >
        <Reveal>
          <p className={eyebrow}>Online-Termin</p>
          <h2
            className={`${serif.className} mt-3 mb-10 text-4xl font-bold md:text-5xl`}
          >
            Probieren Sie es aus
          </h2>
        </Reveal>
        <BookingWidget />
      </section>

      {/* Stimmen */}
      <section className="border-t border-white/10 bg-[#100f0d] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className={eyebrow}>Kundenstimmen</p>
            <h2
              className={`${serif.className} mt-3 text-4xl font-bold md:text-5xl`}
            >
              Was Gäste sagen
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {quotes.map(([q, n], i) => (
              <Reveal key={n} delay={i * 0.1}>
                <figure className="h-full rounded-2xl border border-white/10 bg-[#151412] p-6">
                  <Quote size={26} className="text-[#d19a5b]" />
                  <blockquote className="mt-4 text-[#efe7d8]/80">
                    {q}
                  </blockquote>
                  <figcaption className="mt-5 text-xs text-[#efe7d8]/45">
                    {n} · Beispieltext der Demo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className="scroll-mt-6 border-t border-white/10 py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className={eyebrow}>Besuchen Sie uns</p>
            <h2 className={`${serif.className} mt-3 text-4xl font-bold`}>
              Wir freuen uns auf Sie
            </h2>
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-4">
                <Clock size={20} className="mt-0.5 shrink-0 text-[#d19a5b]" />
                <div className="w-full max-w-xs space-y-1 text-[#efe7d8]/70">
                  {hours.map(([d, t]) => (
                    <p key={d} className="flex justify-between gap-6">
                      <span>{d}</span>
                      <span>{t}</span>
                    </p>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin size={20} className="shrink-0 text-[#d19a5b]" />
                <span className="text-[#efe7d8]/70">
                  Beispielstraße 1, 0000 Beispielstadt
                </span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="shrink-0 text-[#d19a5b]" />
                <span className="text-[#efe7d8]/70">
                  +43 000 0000000 · hallo@beispiel-barbershop.at
                </span>
              </li>
            </ul>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-3xl border border-white/10 bg-[#151412]">
            <svg
              viewBox="0 0 400 260"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <g stroke="#efe7d8" strokeOpacity=".08" strokeWidth="1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" x2="400" y1={i * 28} y2={i * 28} />
                ))}
                {Array.from({ length: 15 }).map((_, i) => (
                  <line key={`v${i}`} y1="0" y2="260" x1={i * 28} x2={i * 28} />
                ))}
              </g>
              <path
                d="M0 190 C100 150 160 210 260 130 S380 90 400 60"
                stroke="#d19a5b"
                strokeOpacity=".45"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="230"
                cy="135"
                r="26"
                fill="#b3261e"
                fillOpacity=".2"
              />
              <circle cx="230" cy="135" r="9" fill="#b3261e" />
            </svg>
            <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs backdrop-blur">
              Kartenplatzhalter (Demo)
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black py-6 text-center text-xs text-[#efe7d8]/50">
        © Demo-Vorlage · Fiktives Unternehmen · Erstellt von Axeon Studio
      </footer>
    </div>
  );
}
