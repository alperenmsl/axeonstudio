type SectionHeadingProps = {
  watermark: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  watermark,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`relative mb-8 flex flex-col sm:mb-12 md:mb-16 ${alignment}`}>
      <div className="section-watermark" aria-hidden>
        <span>{watermark}</span>
      </div>
      <h2 className="font-display relative z-10 text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="relative z-10 mt-2 max-w-xl text-sm text-muted sm:mt-3 sm:text-base md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
