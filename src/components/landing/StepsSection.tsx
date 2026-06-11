import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Lock,
  Cog,
  Clock,
  Database,
  Zap,
  GitBranch,
  Check,
} from "lucide-react";

const services = [
  { icon: Globe, label: "Static Site" },
  { icon: Server, label: "Web Service", active: true },
  { icon: Lock, label: "Private Service" },
  { icon: Cog, label: "Background Worker" },
  { icon: Clock, label: "Cron Job" },
  { icon: Database, label: "Postgres" },
  { icon: Zap, label: "Key Value" },
  { icon: GitBranch, label: "Workflow" },
];

function ServicePicker() {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-3">
      {services.map((s) => (
        <div
          key={s.label}
          className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
            s.active
              ? "bg-primary/15 font-medium text-foreground ring-1 ring-primary/40"
              : "text-muted-foreground"
          }`}
        >
          <s.icon className={`h-4 w-4 ${s.active ? "text-primary-glow" : ""}`} />
          {s.label}
          {s.active && <Check className="ml-auto h-4 w-4 text-primary-glow" />}
        </div>
      ))}
    </div>
  );
}

function DeployTerminal() {
  return (
    <div className="rounded-xl border border-border bg-background/60 font-mono text-xs">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-5/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-2 text-muted-foreground">deploy — main</span>
      </div>
      <div className="space-y-2 p-4 leading-relaxed">
        <p className="text-foreground">$ git push origin main</p>
        <p className="text-muted-foreground">==&gt; Cloning from repo...</p>
        <p className="text-muted-foreground">==&gt; Detected Node.js 22</p>
        <p className="text-muted-foreground">==&gt; Running build command</p>
        <p className="text-success">==&gt; Build successful 🎉</p>
        <p className="text-primary-glow">==&gt; Deploying to production...</p>
        <p className="text-success">==&gt; Your service is live ✓</p>
      </div>
    </div>
  );
}

function LiveService() {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Server className="h-4 w-4 text-primary-glow" />
          <span className="text-sm font-medium">my-api</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Live
        </span>
      </div>
      <p className="mt-2 font-mono text-xs text-muted-foreground">
        my-api.onrender.com
      </p>
      <div className="mt-4 space-y-2 border-t border-border pt-3 text-xs text-muted-foreground">
        <div className="flex justify-between">
          <span>Deploy a1f4c2e</span>
          <span className="text-success">live · 12s ago</span>
        </div>
        <div className="flex justify-between">
          <span>Autoscaling</span>
          <span>2 → 6 instances</span>
        </div>
        <div className="flex justify-between">
          <span>Private network</span>
          <span className="text-success">connected</span>
        </div>
      </div>
      <div className="mt-4 flex items-end gap-1">
        {[35, 55, 40, 70, 50, 85, 60, 95, 75, 88, 65, 92].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-primary/50"
            style={{ height: `${h * 0.4}px` }}
          />
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    n: "1",
    title: "Select a service",
    body: "Pick what you need to run your apps, APIs, agent logic, databases, cron jobs, and more.",
    mock: <ServicePicker />,
  },
  {
    n: "2",
    title: "Deploy your code",
    body: "Just connect your repo. Render builds on the right runtime for your framework.",
    mock: <DeployTerminal />,
  },
  {
    n: "3",
    title: "Render does the rest",
    body: "Get instant networking, scaling, previews, deploys, rollbacks, and monitoring.",
    mock: <LiveService />,
  },
];

export function StepsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        Click, click, done.
      </motion.h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="rounded-2xl border border-border p-6"
            style={{ background: "var(--gradient-card)" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary-glow ring-1 ring-primary/30">
              {step.n}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            <div className="mt-6">{step.mock}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
