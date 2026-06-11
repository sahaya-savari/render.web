import { motion } from "framer-motion";

const customers = ["Base44", "Thatch", "Paradigm", "Fey", "mitchellh"];

export function TestimonialSection() {
  return (
    <section className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {customers.map((c, i) => (
            <span
              key={c}
              className={`font-display text-sm font-semibold tracking-wide ${
                i === 0 ? "text-foreground" : "text-muted-foreground/60"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 font-display text-2xl font-medium leading-relaxed sm:text-3xl"
        >
          “Render lets us ship AI features at startup speed with a very lean
          engineering team. It has scaled with every step of our growth — I'm
          convinced this is what the cloud should feel like.”
        </motion.blockquote>
        <p className="mt-6 text-sm text-muted-foreground">
          Maor Shlomo, Founder of Base44
        </p>
      </div>
    </section>
  );
}
