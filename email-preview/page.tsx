import { notFound } from "next/navigation";
import { confirmationEmail, notificationEmail } from "@/lib/email-templates";

const demo = {
  firstName: "Anna",
  lastName: "Muster",
  company: "Muster GmbH",
  email: "anna@beispiel.at",
  phone: "+43 660 1234567",
  message:
    "Hallo,\n\nich suche eine neue Website für mein Café in Bregenz. Können wir nächste Woche telefonieren?\n\nLG Anna",
};

export default function EmailPreview() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <div className="grid gap-6 bg-neutral-800 p-6 lg:grid-cols-2">
      <div>
        <p className="mb-2 text-sm text-white">Mail an dich</p>
        <iframe
          title="Benachrichtigung"
          srcDoc={notificationEmail(demo).html}
          className="h-[900px] w-full rounded bg-white"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-white">Bestätigung an Besucher</p>
        <iframe
          title="Bestätigung"
          srcDoc={confirmationEmail(demo).html}
          className="h-[900px] w-full rounded bg-white"
        />
      </div>
    </div>
  );
}
