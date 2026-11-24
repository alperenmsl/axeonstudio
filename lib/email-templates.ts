import { site } from "@/lib/content";

const C = {
  bg: "#050505",
  card: "#121212",
  inner: "#1a1a1a",
  border: "#2a2a2a",
  text: "#f5f5f5",
  muted: "#a3a3a3",
  accent: "#ffbd39",
};
const FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif";

export function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function button(href: string, label: string, primary = true) {
  const bg = primary ? C.accent : C.inner;
  const color = primary ? "#000000" : C.text;
  const border = primary ? C.accent : C.border;
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;margin:0 8px 8px 0;">
    <tr>
      <td bgcolor="${bg}" style="border-radius:999px;border:1px solid ${border};">
        <a href="${href}" style="display:inline-block;padding:13px 26px;font-family:${FONT};font-size:14px;font-weight:700;color:${color};text-decoration:none;border-radius:999px;">${label}</a>
      </td>
    </tr>
  </table>`;
}

function badge(label: string) {
  return `<span style="display:inline-block;padding:6px 14px;border:1px solid rgba(255,189,57,0.35);border-radius:999px;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:2px;color:${C.accent};text-transform:uppercase;">${label}</span>`;
}

function layout(preheader: string, content: string) {
  const base = site.websiteUrl;
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>${esc(site.fullName)}</title>
</head>
<body style="margin:0;padding:0;background:${C.bg};" bgcolor="${C.bg}">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.bg}">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
          <tr>
            <td align="left" style="padding:0 4px 20px;font-family:${FONT};font-size:20px;font-weight:700;letter-spacing:6px;color:#ffffff;">AXEON</td>
          </tr>
          <tr>
            <td bgcolor="${C.card}" style="background:${C.card};border:1px solid ${C.border};border-radius:16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td height="4" bgcolor="${C.accent}" style="font-size:0;line-height:0;border-radius:16px 16px 0 0;">&nbsp;</td></tr>
                <tr><td style="padding:32px 28px;font-family:${FONT};color:${C.text};">${content}</td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:24px 8px 0;font-family:${FONT};font-size:12px;line-height:1.7;color:${C.muted};">
              ${esc(site.fullName)} · ${esc(site.legal.street)}, ${esc(site.legal.zip)} ${esc(site.legal.city)}<br />
              <a href="${base}" style="color:${C.accent};text-decoration:none;">${esc(site.website)}</a>
              &nbsp;·&nbsp;
              <a href="${base}/impressum" style="color:${C.muted};text-decoration:underline;">Impressum</a>
              &nbsp;·&nbsp;
              <a href="${base}/datenschutz" style="color:${C.muted};text-decoration:underline;">Datenschutz</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid ${C.border};font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1px;color:${C.accent};text-transform:uppercase;width:110px;vertical-align:top;">${label}</td>
    <td style="padding:12px 0;border-bottom:1px solid ${C.border};font-family:${FONT};font-size:15px;color:${C.text};vertical-align:top;">${value}</td>
  </tr>`;
}

type Lead = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

/* ---------- Mail 1: Benachrichtigung an dich ---------- */
export function notificationEmail(lead: Lead) {
  const fullName = `${lead.firstName} ${lead.lastName}`;
  const when = new Date().toLocaleString("de-AT", {
    timeZone: "Europe/Vienna",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const reply = `mailto:${esc(lead.email)}?subject=${encodeURIComponent(
    "Re: Ihre Anfrage bei Axeon Studio",
  )}`;
  const phoneClean = lead.phone.replace(/[^\d+]/g, "");

  const html = layout(
    `Neue Anfrage von ${fullName}`,
    `
    ${badge("Neue Anfrage")}
    <h1 style="margin:18px 0 6px;font-family:${FONT};font-size:28px;line-height:1.2;color:#ffffff;">${esc(fullName)}</h1>
    <p style="margin:0 0 24px;font-family:${FONT};font-size:14px;color:${C.muted};">hat dir über das Kontaktformular geschrieben · ${esc(when)}</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
      ${row("E-Mail", `<a href="${reply}" style="color:${C.accent};text-decoration:none;">${esc(lead.email)}</a>`)}
      ${row("Telefon", lead.phone ? `<a href="tel:${esc(phoneClean)}" style="color:${C.text};text-decoration:none;">${esc(lead.phone)}</a>` : `<span style="color:${C.muted};">nicht angegeben</span>`)}
      ${row("Firma", lead.company ? esc(lead.company) : `<span style="color:${C.muted};">nicht angegeben</span>`)}
    </table>

    <p style="margin:0 0 10px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1px;color:${C.accent};text-transform:uppercase;">Nachricht</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
      <tr>
        <td bgcolor="${C.inner}" style="background:${C.inner};border-left:3px solid ${C.accent};border-radius:8px;padding:18px 20px;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.text};white-space:pre-wrap;">${esc(lead.message)}</td>
      </tr>
    </table>

    ${button(reply, "Jetzt antworten")}
    ${lead.phone ? button(`tel:${esc(phoneClean)}`, "Anrufen", false) : ""}
    `,
  );

  const text = [
    `Neue Anfrage von ${fullName} (${when})`,
    `E-Mail: ${lead.email}`,
    `Telefon: ${lead.phone || "-"}`,
    `Firma: ${lead.company || "-"}`,
    "",
    lead.message,
  ].join("\n");

  return { subject: `Neue Anfrage von ${fullName}`.replace(/[\r\n]+/g, " "), html, text };
}

/* ---------- Mail 2: Bestätigung an den Besucher ---------- */
export function confirmationEmail(lead: Lead) {
  const step = (n: number, title: string, text: string) => `
  <tr>
    <td width="44" valign="top" style="padding:0 0 18px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
        <td width="32" height="32" align="center" bgcolor="${C.accent}" style="border-radius:999px;font-family:${FONT};font-size:14px;font-weight:700;color:#000000;">${n}</td>
      </tr></table>
    </td>
    <td valign="top" style="padding:0 0 18px;font-family:${FONT};">
      <p style="margin:0;font-size:15px;font-weight:700;color:#ffffff;">${title}</p>
      <p style="margin:4px 0 0;font-size:14px;line-height:1.6;color:${C.muted};">${text}</p>
    </td>
  </tr>`;

  const html = layout(
    "Ihre Anfrage ist eingegangen – ich melde mich in der Regel innerhalb von 24 Stunden.",
    `
    ${badge("Eingangsbestätigung")}
    <h1 style="margin:18px 0 12px;font-family:${FONT};font-size:30px;line-height:1.2;color:#ffffff;">Danke, ${esc(lead.firstName)}!</h1>
    <p style="margin:0 0 24px;font-family:${FONT};font-size:16px;line-height:1.7;color:${C.muted};">
      Ihre Nachricht ist bei mir angekommen. Ich schaue sie mir persönlich an
      und melde mich in der Regel <span style="color:${C.accent};font-weight:700;">innerhalb von 24 Stunden</span> bei Ihnen.
    </p>

    <p style="margin:0 0 10px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1px;color:${C.accent};text-transform:uppercase;">Ihre Nachricht</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:30px;">
      <tr>
        <td bgcolor="${C.inner}" style="background:${C.inner};border-left:3px solid ${C.accent};border-radius:8px;padding:18px 20px;font-family:${FONT};font-size:14px;line-height:1.7;color:${C.muted};white-space:pre-wrap;">${esc(lead.message)}</td>
      </tr>
    </table>

    <p style="margin:0 0 16px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1px;color:${C.accent};text-transform:uppercase;">Wie geht es weiter?</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
      ${step(1, "Ich prüfe Ihre Anfrage", "Ich lese Ihre Nachricht und überlege mir passende Vorschläge.")}
      ${step(2, "Sie hören von mir", "Ich melde mich per E-Mail oder Telefon, um offene Fragen zu klären.")}
      ${step(3, "Unverbindliches Angebot", "Danach erhalten Sie ein klares Angebot, ohne versteckte Kosten.")}
    </table>

    ${button(site.websiteUrl, "Zur Website")}

    <p style="margin:24px 0 0;font-family:${FONT};font-size:14px;line-height:1.7;color:${C.muted};">
      Mit freundlichen Grüßen<br />
      <span style="color:#ffffff;font-weight:700;">${esc(site.owner)}</span><br />
      ${esc(site.fullName)}
    </p>

    <p style="margin:24px 0 0;padding-top:18px;border-top:1px solid ${C.border};font-family:${FONT};font-size:12px;line-height:1.6;color:#737373;">
      Sie erhalten diese einmalige Bestätigung, weil Sie das Kontaktformular auf
      ${esc(site.website)} genutzt haben. Sie können direkt auf diese E-Mail antworten.
    </p>
    `,
  );

  const text = [
    `Danke, ${lead.firstName}!`,
    "",
    "Ihre Nachricht ist bei mir angekommen. Ich melde mich in der Regel innerhalb von 24 Stunden.",
    "",
    "Ihre Nachricht:",
    lead.message,
    "",
    `Mit freundlichen Grüßen`,
    `${site.owner}, ${site.fullName}`,
    site.websiteUrl,
  ].join("\n");

  return {
    subject: "Ihre Anfrage bei Axeon Studio ist eingegangen",
    html,
    text,
  };
}