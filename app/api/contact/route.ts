import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/content";
import { confirmationEmail, notificationEmail } from "@/lib/email-templates";

const LIMITS = {
  firstName: 60,
  lastName: 60,
  company: 120,
  email: 160,
  phone: 40,
  message: 4000,
} as const;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const EMAIL_RE = /^[^\s@"<>]+@[^\s@"<>]+\.[^\s@"<>]{2,}$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Spam-Schutz 1: Honeypot
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Spam-Schutz 2: zu schnell abgeschickt
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 3000) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    firstName: clean(body.firstName, LIMITS.firstName),
    lastName: clean(body.lastName, LIMITS.lastName),
    company: clean(body.company, LIMITS.company),
    email: clean(body.email, LIMITS.email),
    phone: clean(body.phone, LIMITS.phone),
    message: clean(body.message, LIMITS.message),
  };

  if (!lead.firstName || !lead.lastName || !lead.message) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(lead.email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 },
    );
  }
  if (body.consent !== true) {
    return NextResponse.json(
      { error: "Bitte bestätigen Sie die Datenschutzerklärung." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY fehlt.");
    return NextResponse.json(
      { error: "Der Versand ist aktuell nicht möglich." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM ?? "Axeon Website <onboarding@resend.dev>";

  // 1) Benachrichtigung an dich
  const mail = notificationEmail(lead);
  const { error } = await resend.emails.send({
    from,
    to: site.email,
    replyTo: lead.email,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
  });

  if (error) {
    console.error("Resend-Fehler:", error);
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden." },
      { status: 502 },
    );
  }

  // 2) Bestätigung an den Besucher (erst mit verifizierter Domain)
  if (process.env.CONTACT_AUTOREPLY === "on") {
    const confirm = confirmationEmail(lead);
    const { error: replyError } = await resend.emails.send({
      from,
      to: lead.email,
      replyTo: site.email,
      subject: confirm.subject,
      html: confirm.html,
      text: confirm.text,
    });
    if (replyError) {
      console.error("Bestätigungs-Mail fehlgeschlagen:", replyError);
    }
  }

  return NextResponse.json({ ok: true });
}