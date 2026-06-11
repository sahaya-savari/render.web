const logos = [
  { name: "Base44", className: "font-display font-bold tracking-tight" },
  { name: "FORTUNE", className: "font-display font-bold tracking-widest" },
  { name: "Cognition", className: "font-display font-medium italic" },
  { name: "Tripadvisor", className: "font-sans font-semibold" },
  { name: "BASIS", className: "font-mono font-medium tracking-widest" },
  { name: "Shopify", className: "font-display font-semibold" },
  { name: "Meter", className: "font-sans font-medium tracking-wide" },
  { name: "Contentsquare", className: "font-sans font-semibold" },
  { name: "Commure", className: "font-display font-medium" },
  { name: "McKinsey", className: "font-display font-semibold tracking-tight" },
];

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-card/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by over 6 million builders
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <span
              key={logo.name}
              className={`text-center text-lg text-muted-foreground/70 transition-colors hover:text-foreground ${logo.className}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
