"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          website: data.get("website"), // Honeypot
          startedAt: startedAt.current,
        }),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(json.error ?? "Etwas ist schiefgelaufen.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setError("Keine Verbindung. Bitte versuchen Sie es erneut.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-accent/30 bg-surface/60 px-6 py-12 text-center"
      >
        <CheckCircle2 size={44} className="text-accent" />
        <h3 className="font-display mt-4 text-2xl font-bold text-white">
          Vielen Dank für Ihre Nachricht!
        </h3>
        <p className="mt-2 text-muted">
          Ich melde mich in der Regel innerhalb von 24 Stunden bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => {
            startedAt.current = Date.now();
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-accent hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative mx-auto max-w-3xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="sr-only">
            Vorname
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="Vorname *"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="sr-only">
            Nachname
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            placeholder="Nachname *"
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="sr-only">
          Name der Firma (optional)
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Name der Firma (optional)"
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          E-Mail-Adresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Ihre E-Mail-Adresse *"
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Telefonnummer (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Telefonnummer (optional)"
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder="Ihre Nachricht *"
          className="input-field resize-y"
        />
      </div>

      {/* Honeypot: für Menschen unsichtbar */}
      <div
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#ffbd39]"
        />
        <span>
          Ich habe die{" "}
          <Link
            href="/datenschutz"
            className="text-accent hover:underline"
            target="_blank"
          >
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin damit einverstanden, dass meine Angaben zur
          Bearbeitung meiner Anfrage verwendet werden. *
        </span>
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {error}
        </p>
      )}

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold tracking-wide text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Wird gesendet…
            </>
          ) : (
            <>
              <Send size={16} /> Nachricht senden
            </>
          )}
        </button>
      </div>
    </form>
  );
}
