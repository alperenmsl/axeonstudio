"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Globe,
  Minus,
  PenTool,
  Plus,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { site } from "@/lib/content";
import {
  PRICE_NOTE,
  RANGE_FACTOR,
  RUSH_FACTOR,
  extras,
  projectTypes,
  type TypeId,
} from "@/lib/pricing";

const icons = {
  globe: Globe,
  pen: PenTool,
  bag: ShoppingBag,
  phone: Smartphone,
} as const;

const stepNames = ["Projekt", "Umfang", "Extras", "Zeitrahmen"];

const eur = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function Configurator() {
  const [step, setStep] = useState(0);
  const [typeId, setTypeId] = useState<TypeId | null>(null);
  const [pages, setPages] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [rush, setRush] = useState(false);
  const [copied, setCopied] = useState(false);

  const type = projectTypes.find((t) => t.id === typeId) ?? null;
  const availableExtras = extras.filter((e) =>
    type ? (e.types as readonly string[]).includes(type.id) : false,
  );

  const calc = useMemo(() => {
    if (!type) return null;
    if (type.quoteOnly) return { quoteOnly: true as const };

    let oneTime: number = type.base;
    if (type.pageBased) {
      oneTime += Math.max(0, pages - type.includedPages) * type.extraPagePrice;
    }
    let monthly = 0;
    const chosen = availableExtras.filter((e) => selected.includes(e.id));
    for (const e of chosen) {
      oneTime += e.price;
      monthly += e.monthly;
    }
    if (rush) oneTime = Math.round(oneTime * RUSH_FACTOR);

    return {
      quoteOnly: false as const,
      from: oneTime,
      to: Math.round((oneTime * RANGE_FACTOR) / 10) * 10,
      monthly,
      chosen,
    };
  }, [type, pages, selected, rush, availableExtras]);

  const summaryText = useMemo(() => {
    if (!type || !calc) return "";
    const lines = [`Projekt: ${type.title}`];
    if (type.pageBased) lines.push(`Seiten: ${pages}`);
    if (!calc.quoteOnly) {
      if (calc.chosen.length)
        lines.push(`Extras: ${calc.chosen.map((e) => e.label).join(", ")}`);
      lines.push(`Zeitrahmen: ${rush ? "Express" : "Standard"}`);
      lines.push(
        `Preisschätzung: ${eur.format(calc.from)} – ${eur.format(calc.to)}` +
          (calc.monthly ? ` + ${eur.format(calc.monthly)}/Monat` : ""),
      );
    }
    return lines.join("\n");
  }, [type, calc, pages, rush]);

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    "Projektanfrage über den Konfigurator",
  )}&body=${encodeURIComponent(
    `Guten Tag,\n\nich interessiere mich für folgendes Projekt:\n\n${summaryText}\n\nMeine Kontaktdaten:\nName:\nTelefon:\n\nMit freundlichen Grüßen`,
  )}`;

  const canNext = step === 0 ? type !== null : true;
  const isLast = step === stepNames.length - 1;

  const toggleExtra = (id: string) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Kopieren nicht möglich – Nutzer kann den Text markieren */
    }
  };

  return (
    <section
      id="configurator"
      className="relative scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="relative mb-10 text-center sm:mb-14">
          <div className="section-watermark">
            <span>Konfigurator</span>
          </div>
          <h2 className="font-display relative text-3xl font-bold text-white sm:text-4xl">
            Ihr Projekt in 4 Schritten
          </h2>
          <p className="relative mt-3 text-muted">
            Stellen Sie Ihr Projekt zusammen und sehen Sie sofort eine
            Preisschätzung
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Linke Seite: Schritte */}
          <div className="rounded-2xl border border-border bg-surface/60 p-5 sm:p-7">
            {/* Fortschritt */}
            <ol className="mb-7 flex items-center gap-2">
              {stepNames.map((name, i) => (
                <li key={name} className="flex flex-1 items-center gap-2">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                      i <= step
                        ? "bg-accent text-black"
                        : "bg-white/10 text-muted"
                    }`}
                  >
                    {i < step ? <Check size={14} /> : i + 1}
                  </span>
                  <span
                    className={`hidden text-xs font-semibold sm:block ${
                      i === step ? "text-white" : "text-muted"
                    }`}
                  >
                    {name}
                  </span>
                  {i < stepNames.length - 1 && (
                    <span className="h-px flex-1 bg-white/10" />
                  )}
                </li>
              ))}
            </ol>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2 }}
                className="min-h-[18rem]"
              >
                {/* Schritt 1 */}
                {step === 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      Was brauchen Sie?
                    </h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {projectTypes.map((t) => {
                        const Icon = icons[t.icon];
                        const active = typeId === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setTypeId(t.id)}
                            className={`rounded-xl border p-4 text-left transition ${
                              active
                                ? "border-accent bg-accent-soft"
                                : "border-border hover:border-accent/40"
                            }`}
                          >
                            <Icon size={20} className="text-accent" />
                            <p className="mt-3 font-semibold text-white">
                              {t.title}
                            </p>
                            <p className="mt-1 text-sm text-muted">
                              {t.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Schritt 2 */}
                {step === 1 && type && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      Wie groß soll es werden?
                    </h3>
                    {type.pageBased ? (
                      <div className="mt-6">
                        <p className="text-sm text-muted">
                          Anzahl Seiten (z. B. Start, Leistungen, Über uns,
                          Kontakt). {type.includedPages} Seiten sind im
                          Grundpreis enthalten.
                        </p>
                        <div className="mt-5 flex items-center gap-4">
                          <button
                            type="button"
                            aria-label="Eine Seite weniger"
                            onClick={() => setPages((p) => Math.max(1, p - 1))}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white transition hover:border-accent"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="font-display w-14 text-center text-4xl font-bold text-accent">
                            {pages}
                          </span>
                          <button
                            type="button"
                            aria-label="Eine Seite mehr"
                            onClick={() => setPages((p) => Math.min(30, p + 1))}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white transition hover:border-accent"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="mt-6 text-muted">
                        {type.quoteOnly
                          ? "Individuelle Projekte besprechen wir persönlich. Ich erstelle Ihnen danach ein passendes Angebot."
                          : "Bei diesem Projekt ist der Umfang im Preis enthalten. Weiter zu den Extras."}
                      </p>
                    )}
                  </div>
                )}

                {/* Schritt 3 */}
                {step === 2 && type && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      Möchten Sie Extras?
                    </h3>
                    {availableExtras.length === 0 || type.quoteOnly ? (
                      <p className="mt-6 text-muted">
                        Für dieses Projekt klären wir Zusatzleistungen im
                        Gespräch.
                      </p>
                    ) : (
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {availableExtras.map((e) => {
                          const active = selected.includes(e.id);
                          return (
                            <button
                              key={e.id}
                              type="button"
                              aria-pressed={active}
                              onClick={() => toggleExtra(e.id)}
                              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${
                                active
                                  ? "border-accent bg-accent-soft"
                                  : "border-border hover:border-accent/40"
                              }`}
                            >
                              <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                                  active
                                    ? "border-accent bg-accent text-black"
                                    : "border-white/20"
                                }`}
                              >
                                {active && <Check size={13} />}
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-white">
                                  {e.label}
                                </span>
                                <span className="mt-0.5 block text-xs text-muted">
                                  {e.description}
                                </span>
                                <span className="mt-1.5 block text-xs font-semibold text-accent">
                                  {e.monthly > 0
                                    ? `+ ${eur.format(e.monthly)} / Monat`
                                    : `+ ${eur.format(e.price)}`}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Schritt 4 */}
                {step === 3 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      Wann soll es fertig sein?
                    </h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {[
                        {
                          value: false,
                          title: "Standard",
                          text: "Normale Planung, bester Preis",
                        },
                        {
                          value: true,
                          title: "Express",
                          text: `Bevorzugte Bearbeitung, +${Math.round((RUSH_FACTOR - 1) * 100)} %`,
                        },
                      ].map((o) => (
                        <button
                          key={o.title}
                          type="button"
                          aria-pressed={rush === o.value}
                          onClick={() => setRush(o.value)}
                          className={`rounded-xl border p-4 text-left transition ${
                            rush === o.value
                              ? "border-accent bg-accent-soft"
                              : "border-border hover:border-accent/40"
                          }`}
                        >
                          <p className="font-semibold text-white">{o.title}</p>
                          <p className="mt-1 text-sm text-muted">{o.text}</p>
                        </button>
                      ))}
                    </div>
                    <p className="mt-5 text-xs text-muted">
                      Express nur nach Verfügbarkeit. Den genauen Termin nenne
                      ich Ihnen im Angebot.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-white disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowLeft size={16} /> Zurück
              </button>
              {!isLast && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Weiter <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Rechte Seite: Zusammenfassung */}
          <aside className="rounded-2xl border border-accent/30 bg-surface p-5 sm:p-7 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Ihre Zusammenfassung
            </p>

            {!type || !calc ? (
              <p className="mt-4 text-sm text-muted">
                Wählen Sie links ein Projekt, dann erscheint hier Ihre
                Preisschätzung.
              </p>
            ) : calc.quoteOnly ? (
              <div className="mt-4">
                <p className="font-display text-2xl font-bold text-white">
                  Individuelles Angebot
                </p>
                <p className="mt-2 text-sm text-muted">
                  Für {type.title} erstelle ich Ihnen nach einem kurzen Gespräch
                  ein passendes Angebot.
                </p>
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-sm text-muted">Geschätzt ab</p>
                <p className="font-display text-4xl font-bold text-accent">
                  {eur.format(calc.from)}
                </p>
                <p className="mt-1 text-sm text-muted">
                  bis ca. {eur.format(calc.to)}
                  {calc.monthly > 0 && (
                    <> · zzgl. {eur.format(calc.monthly)} / Monat</>
                  )}
                </p>

                <ul className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm text-white">
                  <li>{type.title}</li>
                  {type.pageBased && <li>{pages} Seiten</li>}
                  {calc.chosen.map((e) => (
                    <li key={e.id} className="text-muted">
                      + {e.label}
                    </li>
                  ))}
                  <li className="text-muted">
                    {rush ? "Express-Bearbeitung" : "Standard-Zeitrahmen"}
                  </li>
                </ul>
              </div>
            )}

            {type && (
              <div className="mt-6 space-y-3">
                <a
                  href={mailto}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-black transition hover:brightness-110"
                >
                  Unverbindlich anfragen <ArrowRight size={16} />
                </a>
                <button
                  type="button"
                  onClick={copySummary}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Kopiert" : "Zusammenfassung kopieren"}
                </button>
              </div>
            )}

            <p className="mt-5 text-xs leading-relaxed text-muted">
              Unverbindliche Preisschätzung, kein Angebot. Das verbindliche
              Angebot erhalten Sie nach einem Gespräch. {PRICE_NOTE}.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
