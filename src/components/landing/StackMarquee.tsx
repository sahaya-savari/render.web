const row1 = [
  "React",
  "Next.js",
  "Node",
  "Go",
  "Vue",
  "Python",
  "Ruby",
  "Docker",
  "Svelte",
  "Remix",
  "Nuxt",
  "Nest",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="mx-2 flex shrink-0 items-center gap-3 rounded-lg bg-[#2a0e4e]/80 px-6 py-3.5 text-[15px] font-semibold text-white shadow-xl backdrop-blur-md border border-white/10 hover:bg-[#341261] transition-all cursor-default">
      <span className="flex h-8 w-8 items-center justify-center rounded bg-black/40 font-mono text-[11px] font-bold text-white/90 shadow-inner border border-white/5">
        {label.slice(0, 2).toUpperCase()}
      </span>
      {label}
    </span>
  );
}

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3">
      <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((item, i) => (
          <Chip key={`${item}-${i}`} label={item} />
        ))}
      </div>
    </div>
  );
}

export function StackMarquee() {
  return (
    <section className="relative overflow-hidden py-28 mt-12 mb-12">
      {/* Deep vibrant purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#200045] via-[#460099] to-[#200045] opacity-100"></div>

      {/* Subtle overlay glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-[40px] font-bold tracking-tight text-white sm:text-[48px] max-w-3xl mx-auto leading-[1.1]">
          Whatever your stack is,
          <br />
          we support it out of the box
        </h2>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-white px-8 py-3.5 text-[15px] font-bold text-black transition-all hover:scale-105"
          >
            Deploy a project
          </a>
        </div>
      </div>

      <div
        className="relative z-10 mt-20"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <MarqueeRow items={row1} />
      </div>
    </section>
  );
}
