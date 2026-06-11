import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const rotatingWords = [
  "APIs & web apps",
  "AI agents",
  "full-stack apps",
  "databases",
  "cron jobs",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotatingWords.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Your fastest path to production for{" "}
          <span className="relative inline-block h-[1.15em] min-w-[6ch] align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[index]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="text-gradient-primary absolute left-0 whitespace-nowrap"
              >
                {rotatingWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          Intuitive infrastructure that scales any app or agent from your first
          user to your billionth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#"
            className="rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Start for free
          </a>
          <a
            href="#"
            className="rounded-lg border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Migrate to Render
          </a>
        </motion.div>
      </div>
    </section>
  );
}
