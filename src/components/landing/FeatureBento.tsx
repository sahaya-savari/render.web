import { motion } from "framer-motion";
import type { ReactNode } from "react";

function Card({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`rounded-2xl border border-border p-7 ${className}`}
      style={{ background: "var(--gradient-card)" }}
    >
      {children}
    </motion.div>
  );
}

function DocsLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="mt-3 inline-block text-sm font-medium text-primary-glow transition-opacity hover:opacity-80"
    >
      {label} →
    </a>
  );
}

function PreviewsMock() {
  return (
    <div className="mt-6 space-y-2.5 rounded-xl border border-border bg-background/60 p-4 font-mono text-xs">
      {[
        { pr: "#214", branch: "feat/checkout", status: "Preview ready" },
        { pr: "#213", branch: "fix/auth-redirect", status: "Preview ready" },
        { pr: "#212", branch: "chore/deps", status: "Building…" },
      ].map((row) => (
        <div key={row.pr} className="flex items-center justify-between gap-2">
          <span className="text-muted-foreground">
            <span className="text-foreground">{row.pr}</span> {row.branch}
          </span>
          <span
            className={
              row.status === "Building…"
                ? "text-chart-5"
                : "text-success"
            }
          >
            {row.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function AutoscaleMock() {
  const bars = [12, 14, 13, 18, 22, 30, 45, 70, 95, 80, 60, 40, 28, 20, 16, 14];
  return (
    <div className="mt-6 rounded-xl border border-border bg-background/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          Instance type
        </span>
        <div className="flex gap-2">
          <span className="rounded-md bg-primary/15 px-2.5 py-1 font-mono text-xs font-medium text-primary-glow">
            64 CPU
          </span>
          <span className="rounded-md bg-primary/15 px-2.5 py-1 font-mono text-xs font-medium text-primary-glow">
            512 GB RAM
          </span>
        </div>
      </div>
      <div className="mt-5 flex h-28 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className={`flex-1 rounded-sm ${h > 60 ? "bg-primary" : "bg-primary/40"}`}
          />
        ))}
      </div>
      <p className="mt-3 font-mono text-xs text-muted-foreground">
        Scaling 3 → 47 instances · traffic burst absorbed
      </p>
    </div>
  );
}

function WorkflowMock() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-background/60 p-4 font-mono text-xs leading-relaxed">
      <p className="text-primary-glow">@task(retries=3)</p>
      <p className="text-foreground">def process_order(order):</p>
      <p className="pl-4 text-muted-foreground">charge(order.customer)</p>
      <p className="pl-4 text-muted-foreground">fulfill(order.items)</p>
      <p className="pl-4 text-muted-foreground">notify(order.email)</p>
      <p className="mt-2 text-success"># durable · resumable · scaled</p>
    </div>
  );
}

function PostgresMock() {
  return (
    <div className="mt-6 space-y-2.5 rounded-xl border border-border bg-background/60 p-4 font-mono text-xs">
      <div className="flex items-center justify-between">
        <span className="text-foreground">primary</span>
        <span className="text-success">● healthy</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">read-replica-1</span>
        <span className="text-success">● in sync</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">read-replica-2</span>
        <span className="text-success">● in sync</span>
      </div>
      <p className="border-t border-border pt-2.5 text-muted-foreground">
        Point-in-time recovery: <span className="text-foreground">enabled</span>
      </p>
    </div>
  );
}

function LogsMock() {
  const logs = [
    { t: "12:04:01", level: "INFO", msg: "Deploy a1f4c2e started" },
    { t: "12:04:09", level: "INFO", msg: "Build completed in 8.2s" },
    { t: "12:04:11", level: "INFO", msg: "Health check passed" },
    { t: "12:04:12", level: "WARN", msg: "p95 latency 412ms" },
    { t: "12:04:15", level: "INFO", msg: "Service live · 0 downtime" },
  ];
  return (
    <div className="mt-6 rounded-xl border border-border bg-background/60 p-4 font-mono text-xs">
      <div className="space-y-1.5">
        {logs.map((l, i) => (
          <p key={i} className="text-muted-foreground">
            <span className="text-muted-foreground/60">{l.t}</span>{" "}
            <span className={l.level === "WARN" ? "text-chart-5" : "text-success"}>
              {l.level}
            </span>{" "}
            {l.msg}
          </p>
        ))}
      </div>
    </div>
  );
}

const hostingTypes = [
  "web services",
  "Postgres databases",
  "cron jobs",
  "workflows",
  "static sites",
  "background jobs",
  "key value stores",
  "private services",
  "WebSockets",
  "edge caches",
  "isolated environments",
];

export function FeatureBento() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        Deploy apps and agents with <span className="text-gradient-primary">zero ops</span>
      </motion.h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="font-display text-2xl font-semibold leading-snug">
            Intuitive hosting and private networking for{" "}
            {hostingTypes.map((t, i) => (
              <span key={t}>
                <span className="text-primary-glow">{t}</span>
                {i < hostingTypes.length - 1 ? ", " : ""}
              </span>
            ))}
            <span className="text-muted-foreground"> and more.</span>
          </h3>
        </Card>

        <Card delay={0.1}>
          <h3 className="font-display text-2xl font-semibold">
            Full-stack previews for every pull request
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Iterate quickly with ephemeral previews of your entire application
            architecture for every change.
          </p>
          <DocsLink label="Preview environment docs" />
          <PreviewsMock />
        </Card>

        <Card className="lg:col-span-2">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold">
                Load-based autoscaling that handles 100x traffic bursts and beyond
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Keep your workloads running smoothly through viral moments,
                seasonal spikes, and launch days.
              </p>
              <DocsLink label="Autoscaling docs" />
            </div>
            <AutoscaleMock />
          </div>
        </Card>

        <Card>
          <h3 className="font-display text-2xl font-semibold">
            Durable, long-running workflows as code
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Run reliable agents and background processes at scale—no queues,
            workers, or retry logic to wire up.
          </p>
          <DocsLink label="Workflow docs" />
          <WorkflowMock />
        </Card>

        <Card delay={0.1}>
          <h3 className="font-display text-2xl font-semibold">
            Enterprise-grade Postgres databases
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Fully-managed databases with point-in-time recovery, read replicas,
            and high availability.
          </p>
          <DocsLink label="Postgres docs" />
          <PostgresMock />
        </Card>

        <Card className="lg:col-span-2">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold">
                Integrated logs and monitoring for builds, deploys, and live
                services
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                See critical metrics for all of your infrastructure from day
                zero, and stream telemetry to external tools.
              </p>
              <DocsLink label="Observability docs" />
            </div>
            <LogsMock />
          </div>
        </Card>
      </div>
    </section>
  );
}
