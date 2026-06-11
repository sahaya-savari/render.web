import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Product", hasMenu: true },
  { label: "Pricing", hasMenu: false },
  { label: "Customers", hasMenu: false },
  { label: "Docs", hasMenu: false },
  { label: "Blog", hasMenu: false },
];

export function RenderLogo({ className = "h-6" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <rect x="2" y="2" width="9" height="9" rx="1.5" fill="currentColor" />
        <rect x="13" y="2" width="9" height="9" rx="4.5" fill="currentColor" opacity="0.85" />
        <rect x="2" y="13" width="9" height="9" rx="4.5" fill="currentColor" opacity="0.85" />
        <rect x="13" y="13" width="9" height="9" rx="1.5" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">Render</span>
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-foreground">
          <RenderLogo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
              {link.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Get started
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex gap-2 border-t border-border pt-3">
            <a
              href="#"
              className="flex-1 rounded-md border border-border px-4 py-2 text-center text-sm text-foreground"
            >
              Sign in
            </a>
            <a
              href="#"
              className="flex-1 rounded-md bg-foreground px-4 py-2 text-center text-sm font-medium text-background"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
