import { motion } from "framer-motion";

const tiles = [
  { label: "PHP", className: "left-[6%] top-[12%]", delay: "0s" },
  { label: "Py", className: "left-[16%] top-[62%]", delay: "1.2s" },
  { label: "Rb", className: "left-[28%] top-[24%]", delay: "0.6s" },
  { label: "Go", className: "right-[28%] top-[18%]", delay: "1.8s" },
  { label: "Rs", className: "right-[14%] top-[58%]", delay: "0.3s" },
  { label: "TS", className: "right-[5%] top-[20%]", delay: "2.2s" },
  { label: "Ex", className: "left-[8%] top-[78%]", delay: "1.5s" },
  { label: "Jv", className: "right-[8%] top-[82%]", delay: "0.9s" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, color-mix(in oklab, var(--primary) 28%, transparent), transparent 70%)",
        }}
      />
      {tiles.map((tile) => (
        <span
          key={tile.label}
          className={`animate-float-slow absolute hidden h-12 w-12 items-center justify-center rounded-xl border border-border bg-card font-mono text-sm font-semibold text-primary-glow shadow-lg lg:flex ${tile.className}`}
          style={{ animationDelay: tile.delay }}
        >
          {tile.label}
        </span>
      ))}

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Start building with <span className="text-gradient-primary">Render</span>
        </motion.h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Zero ops, zero surprises.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Start for free
          </a>
          <a
            href="#"
            className="rounded-lg border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  );
}
