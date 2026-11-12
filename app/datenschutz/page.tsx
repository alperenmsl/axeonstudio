import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Datenschutzerklärung – ${site.fullName}`,
};

// ⚠️ ANPASSEN, bevor die Seite live geht:
const HOSTING =
  "DEIN HOSTING-ANBIETER (z. B. Vercel Inc., Hetzner Online GmbH)";
const FORM_TRANSPORT = "DEIN VERSANDDIENST (z. B. Resend, eigener Mailserver)";

export default function DatenschutzPage() {
  const l = site.legal;
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Hier
        informieren wir Sie darüber, welche Daten beim Besuch dieser Website
        verarbeitet werden und welche Rechte Sie nach der
        Datenschutz-Grundverordnung (DSGVO) und dem österreichischen
        Datenschutzgesetz (DSG) haben.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        {site.fullName}, Inhaber: {site.owner}
        <br />
        {l.street}, {l.zip} {l.city}, Österreich
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Telefon: {site.phone}
      </p>

      <h2>2. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei {HOSTING} gehostet. Beim Aufruf werden technisch
        notwendige Daten verarbeitet, z. B. IP-Adresse, Datum und Uhrzeit,
        aufgerufene Seite, Browsertyp und Betriebssystem. Die Verarbeitung dient
        dem sicheren und stabilen Betrieb der Website (Rechtsgrundlage:
        berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Logdaten werden
        nach kurzer Zeit automatisch gelöscht, sofern keine Sicherheitsvorfälle
        eine längere Aufbewahrung erfordern.
      </p>

      <h2>3. Kontaktformular und Anfragen</h2>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
        verarbeiten wir Ihre Angaben (Vorname, Nachname, optional Firma und
        Telefonnummer, E-Mail-Adresse, Nachricht), um Ihre Anfrage zu bearbeiten
        und für Anschlussfragen. Rechtsgrundlage ist die Durchführung
        vorvertraglicher Maßnahmen bzw. eines Vertrags (Art. 6 Abs. 1 lit. b
        DSGVO) oder unser berechtigtes Interesse an der Beantwortung von
        Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Der Versand erfolgt über{" "}
        {FORM_TRANSPORT}. Wir löschen Anfragen, sobald sie erledigt sind und
        keine gesetzlichen Aufbewahrungspflichten entgegenstehen, spätestens
        nach drei Jahren.
      </p>

      <h2>4. Schriftarten</h2>
      <p>
        Die verwendeten Schriftarten werden beim Erstellen der Website lokal
        eingebunden und von unserem eigenen Server ausgeliefert. Es findet keine
        Verbindung zu Servern von Google statt.
      </p>

      <h2>5. Cookies und Tracking</h2>
      <p>
        Diese Website setzt derzeit keine Cookies zu Analyse- oder Werbezwecken
        ein und verwendet keine Tracking-Dienste.
      </p>

      <h2>6. Externe Links</h2>
      <p>
        Unsere Seite enthält Links zu sozialen Netzwerken (Instagram, Facebook,
        LinkedIn). Erst wenn Sie einen solchen Link anklicken, werden Daten an
        den jeweiligen Anbieter übertragen. Für deren Datenverarbeitung gelten
        die Datenschutzhinweise des Anbieters.
      </p>

      <h2>7. Weitergabe von Daten</h2>
      <p>
        Eine Weitergabe Ihrer Daten erfolgt nur an die oben genannten
        technischen Dienstleister, soweit dies für den Betrieb der Website und
        die Bearbeitung Ihrer Anfrage erforderlich ist, oder wenn wir gesetzlich
        dazu verpflichtet sind.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21
        DSGVO). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für
        die Zukunft widerrufen. Wenden Sie sich dazu an{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das
        Datenschutzrecht verstößt, können Sie sich bei der österreichischen
        Datenschutzbehörde beschweren:{" "}
        <a
          href="https://www.dsb.gv.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.dsb.gv.at
        </a>
        , Barichgasse 40–42, 1030 Wien.
      </p>

      <h2>9. Änderungen</h2>
      <p>
        Wir passen diese Erklärung an, wenn sich die Website oder die Rechtslage
        ändert. Stand: November 2026.
      </p>
    </LegalPage>
  );
}
