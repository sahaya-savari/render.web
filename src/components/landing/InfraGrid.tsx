import { motion } from "framer-motion";
import {
  Terminal,
  FileCode2,
  Layers,
  HardDrive,
  Zap,
  RadioTower,
  Globe,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: Terminal,
    title: "Native language runtimes",
    body: "High-performance environments for nearly every popular framework.",
  },
  {
    icon: FileCode2,
    title: "Infrastructure as code",
    body: "Define, deploy, and version your entire architecture with a single YAML file.",
  },
  {
    icon: Layers,
    title: "Isolated environments",
    body: "Prevent non-production environments from accessing production services.",
  },
  {
    icon: HardDrive,
    title: "Object storage",
    badge: "Coming soon",
    body: "Store and retrieve files from your services with lightweight SDKs.",
  },
  {
    icon: Zap,
    title: "Redis-compatible Key Value",
    body: "Low-latency in-memory storage ideal for shared caches and job queues.",
  },
  {
    icon: RadioTower,
    title: "WebSockets",
    body: "Build real-time features with long-lived, bi-directional streaming.",
  },
  {
    icon: Globe,
    title: "Edge caching",
    body: "Serve static assets faster with caching powered by a global CDN.",
  },
  {
    icon: ShieldCheck,
    title: "Fully-managed TLS",
    body: "Free TLS certificates for every domain, including wildcards.",
  },
];

export function InfraGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Intuitive infrastructure, designed for builders
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Ship software faster with integrated primitives that just work.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.08 }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/25">
              <item.icon className="h-5 w-5 text-primary-glow" />
            </span>
            <h3 className="mt-4 flex flex-wrap items-center gap-2 font-display text-base font-semibold">
              {item.title}
              {item.badge && (
                <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                  {item.badge}
                </span>
              )}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
