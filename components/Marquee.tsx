import { Sparkles } from "lucide-react";

const items = [
  "Web Design",
  "Web Entwicklung",
  "Logo Design",
  "Branding",
  "24/7 Hosting",
  "Security",
  "Marketing",
  "App Entwicklung",
];

export function Marquee() {
  return (
    <div
      className="marquee relative overflow-hidden border-y border-border bg-surface/40 py-3.5 sm:py-4"
      aria-hidden
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {items.map((item) => (
              <span
                key={`${half}-${item}`}
                className="mx-5 flex items-center gap-5 whitespace-nowrap sm:mx-7 sm:gap-7"
              >
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-muted uppercase sm:text-base">
                  {item}
                </span>
                <Sparkles size={14} className="text-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
