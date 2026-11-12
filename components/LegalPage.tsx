import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-5 md:py-32">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
      >
        <ArrowLeft size={16} /> Zurück zur Startseite
      </Link>
      <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted sm:text-base [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:font-display [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white">
        {children}
      </div>
    </main>
  );
}
