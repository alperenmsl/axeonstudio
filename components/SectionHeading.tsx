import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`relative mb-8 flex flex-col sm:mb-12 md:mb-16 ${alignment}`}
    >
      <div className="section-watermark" aria-hidden>
        <span>{watermark}</span>
      </div>
      <h2 className="font-display relative z-10 text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="relative z-10 mt-2 max-w-xl text-sm text-muted sm:mt-3 sm:text-base md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
