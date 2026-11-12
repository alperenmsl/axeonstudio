import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-center">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative">
        <p className="font-display text-7xl font-bold text-accent sm:text-9xl">
          404
        </p>
        <h1 className="font-display mt-4 text-2xl font-bold text-white sm:text-3xl">
          Diese Seite gibt es nicht
        </h1>
        <p className="mt-3 text-muted">
          Der Link ist veraltet oder die Adresse wurde falsch eingegeben.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-black transition hover:brightness-110"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
