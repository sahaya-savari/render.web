import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import { RenderLogo } from "./Navbar";

const columns = [
  {
    title: "Platform",
    links: [
      "Web Services",
      "Static Sites",
      "Background Workers",
      "Cron Jobs",
      "Postgres",
      "Key Value",
      "Workflows",
      "Autoscaling",
      "Private Networking",
      "Preview Environments",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Solutions",
    links: ["Startups", "Enterprise", "AI Agents", "Web Apps", "APIs", "Migrations"],
  },
  {
    title: "Developers",
    links: ["Docs", "Quickstarts", "Templates", "Changelog", "Blog", "Community", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Customers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Security", "DPA", "Compliance"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <span className="text-foreground">
              <RenderLogo />
            </span>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success" />
              All systems operational
            </p>
            <div className="mt-6 flex gap-4 text-muted-foreground">
              <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="transition-colors hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="transition-colors hover:text-foreground">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Render. All rights reserved.</p>
          <p>Built for builders, everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
