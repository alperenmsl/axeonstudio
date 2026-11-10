"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { site, stats } from "@/lib/content";

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/FA.png)" }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-xl border border-border bg-surface/80 px-3 py-5 text-center backdrop-blur-sm sm:px-4 sm:py-6"
            >
              <p className="font-display text-2xl font-bold text-accent sm:text-3xl md:text-4xl">
                <AnimatedNumber value={stat.value} />
              </p>
              <p className="mt-2 text-xs text-white sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display mt-10 text-center text-2xl font-bold text-balance text-white sm:mt-14 sm:text-3xl md:text-5xl"
        >
          Unser Team <span className="text-accent">{site.name}</span> ist offen
          für Fragen
        </motion.h2>
      </div>
    </section>
  );
}
