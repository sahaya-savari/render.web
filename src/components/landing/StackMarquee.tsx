const row1 = [
  "Node.js",
  "Python",
  "Go",
  "Rust",
  "Ruby",
  "Elixir",
  "PHP",
  "Java",
  "Scala",
  "Deno",
  "Bun",
  "Docker",
];

const row2 = [
  "Next.js",
  "Django",
  "Rails",
  "Laravel",
  "FastAPI",
  "Express",
  "Flask",
  "Spring",
  "Phoenix",
  "Astro",
  "Remix",
  "SvelteKit",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="mx-2 flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-muted-foreground">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/15 font-mono text-[10px] font-semibold text-primary-glow">
        {label.slice(0, 2).toUpperCase()}
      </span>
      {label}
    </span>
  );
}

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((item, i) => (
          <Chip key={`${item}-${i}`} label={item} />
        ))}
      </div>
    </div>
  );
}

export function StackMarquee() {
  return (
    <section className="border-y border-border bg-card/30 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Whatever your stack, it runs on{" "}
          <span className="text-gradient-primary">Render</span>.
        </h2>
        <a
          href="#"
          className="mt-6 inline-block rounded-lg border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          View Templates
        </a>
      </div>
      <div
        className="mt-12 space-y-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
