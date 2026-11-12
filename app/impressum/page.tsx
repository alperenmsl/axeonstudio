import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Impressum – ${site.fullName}`,
};

export default function ImpressumPage() {
  const l = site.legal;
  return (
    <LegalPage title="Impressum">
      <p>
        Informationen und Offenlegung gemäß § 5 E-Commerce-Gesetz (ECG), § 14
        Unternehmensgesetzbuch (UGB), § 63 Gewerbeordnung (GewO) und § 25
        Mediengesetz.
      </p>

      <h2>Unternehmen</h2>
      <p>
        {site.fullName}
        <br />
        Inhaber: {site.owner}
        <br />
        Rechtsform: {l.businessType}
        <br />
        {l.street}
        <br />
        {l.zip} {l.city}, Österreich
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon:{" "}
        <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Website: <a href={site.websiteUrl}>{site.website}</a>
      </p>

      <h2>Unternehmensgegenstand</h2>
      <p>{l.trade}</p>

      {(l.uid || l.firmenbuch) && (
        <>
          <h2>Register- und Steuerangaben</h2>
          <p>
            {l.uid && (
              <>
                UID-Nummer: {l.uid}
                <br />
              </>
            )}
            {l.firmenbuch && <>Firmenbuchnummer: {l.firmenbuch}</>}
          </p>
        </>
      )}

      <h2>Kammer und Behörde</h2>
      <p>
        Mitglied der {l.chamber}
        <br />
        Gewerbebehörde: {l.authority}
        <br />
        Anwendbare Rechtsvorschriften: Gewerbeordnung, abrufbar unter{" "}
        <a
          href="https://www.ris.bka.gv.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.ris.bka.gv.at
        </a>
      </p>

      <h2>Offenlegung nach § 25 Mediengesetz</h2>
      <p>
        Medieninhaber und Herausgeber: {site.owner}, {site.fullName}.
        <br />
        Grundlegende Richtung: Information über die Dienstleistungen von{" "}
        {site.fullName} (Webdesign, Webentwicklung, Branding und Hosting).
      </p>
    </LegalPage>
  );
}
