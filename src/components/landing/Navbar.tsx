import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Product", hasMenu: true },
  { label: "Pricing", hasMenu: false },
  { label: "Docs", hasMenu: false },
  { label: "Customers", hasMenu: false },
  { label: "Partners", hasMenu: false },
  { label: "Blog", hasMenu: false },
];

export function RenderLogo({ className = "h-7" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" aria-hidden="true" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-2h3v2zm0-4H8V8h3v4zm5 4h-3v-2h3v2zm0-4h-3V8h3v4z"/>
      </svg>
      <span className="font-display text-[22px] font-bold tracking-tight text-white">Render</span>
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0f1b15] text-[#2ea043] py-2.5 px-4 text-center text-[13px] font-medium flex items-center justify-center gap-4 relative z-50">
        <span>Get started with databases in seconds for free!</span>
        <a href="#" className="bg-[#2ea043] text-white px-3 py-1 rounded-[4px] font-bold text-[12px] hover:bg-[#3fb950] transition-colors">Try it out</a>
      </div>
      <header className="absolute top-[44px] w-full z-50 bg-transparent">
        <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center">
            <RenderLogo />
          </a>

          <div className="hidden items-center gap-6 md:flex pl-8 mr-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center gap-1 text-[15px] font-semibold text-white/80 transition-colors hover:text-white"
              >
                {link.label}
                {link.hasMenu && <ChevronDown className="h-4 w-4 opacity-50" />}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#"
              className="text-[15px] font-semibold text-white/80 transition-colors hover:text-white"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-[15px] font-semibold text-white transition-colors hover:text-white/80"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-[4px] bg-white px-5 py-2.5 text-[15px] font-bold text-black transition-opacity hover:opacity-90"
            >
              Get started
            </a>
          </div>

          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="bg-black/95 backdrop-blur-xl px-4 py-4 md:hidden border-b border-white/10 absolute w-full left-0 top-20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="block rounded-md px-3 py-3 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 px-3">
              <a
                href="#"
                className="block rounded bg-white px-4 py-3 text-center text-base font-bold text-black"
              >
                Get started
              </a>
              <a
                href="#"
                className="block rounded border border-white/20 px-4 py-3 text-center text-base font-bold text-white"
              >
                Sign in
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
