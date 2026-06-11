import { motion } from "framer-motion";
import {
  Network,
  Shield,
  BadgeCheck,
  ScrollText,
  Lock,
  Users,
} from "lucide-react";

const items = [
  {
    icon: Network,
    title: "Private networking",
    body: "Keep internal traffic off the public internet without VPC complexity.",
  },
  {
    icon: Shield,
    title: "Built-in DDoS protection",
    body: "Protect every service from attacks without extra configuration or add-ons.",
  },
  {
    icon: BadgeCheck,
    title: "Managed compliance",
    body: "Meet SOC 2 Type 2, HIPAA, ISO 27001, and GDPR requirements without overhead.",
  },
  {
    icon: ScrollText,
    title: "Audit controls",
    body: "Built-in audit logging and monitoring for platform events.",
  },
  {
    icon: Lock,
    title: "Encryption at rest",
    body: "Minimum AES-128 encryption for databases, backups, and secrets.",
  },
  {
    icon: Users,
    title: "Role-based access",
    body: "Control services and resources with role-based access control.",
  },
];

export function SecuritySection() {
  return (
    <section className="border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Stay secure and resilient by default
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Build products, not compliance.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <item.icon className="h-6 w-6 text-primary-glow" />
              <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#"
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Trust center
          </a>
          <a
            href="#"
            className="rounded-lg border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            HIPAA on Render
          </a>
        </div>
      </div>
    </section>
  );
}
