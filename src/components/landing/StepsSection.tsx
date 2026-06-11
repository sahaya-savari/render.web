import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

function ServicePicker() {
  const services = [
    { label: "Web Service", active: true },
    { label: "Postgres", active: false },
    { label: "Redis", active: false },
    { label: "Cron Job", active: false },
    { label: "Background Worker", active: false },
    { label: "Static Site", active: false },
  ];
  return (
    <div className="rounded border border-[#30363d] bg-[#0d1117] p-2 shadow-2xl relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="space-y-1">
        {services.map((s) => (
          <div
            key={s.label}
            className={`flex items-center justify-between rounded px-3 py-2.5 text-[13px] ${
              s.active
                ? "bg-[#1f2937] text-white border border-[#374151]"
                : "text-[#8b949e] hover:bg-[#161b22]"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-3 h-3 rounded-sm ${s.active ? "bg-[#8a4baf]" : "bg-[#30363d]"}`}
              ></span>
              <span>{s.label}</span>
            </div>
            {s.active && <Check className="h-4 w-4 text-[#8a4baf]" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectRepoForm() {
  return (
    <div className="rounded border border-[#30363d] bg-[#0d1117] p-5 shadow-2xl relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="space-y-4">
        <div>
          <label className="block text-[12px] text-[#8b949e] mb-1.5 font-semibold">
            Repository
          </label>
          <div className="flex items-center justify-between rounded border border-[#30363d] bg-[#010409] px-3 py-2 text-[13px] text-[#c9d1d9]">
            render-examples/fastapi <ChevronDown className="h-4 w-4 text-[#8b949e]" />
          </div>
        </div>
        <div>
          <label className="block text-[12px] text-[#8b949e] mb-1.5 font-semibold">Branch</label>
          <div className="flex items-center justify-between rounded border border-[#30363d] bg-[#010409] px-3 py-2 text-[13px] text-[#c9d1d9]">
            main <ChevronDown className="h-4 w-4 text-[#8b949e]" />
          </div>
        </div>
        <button className="w-full rounded bg-[#8a4baf] py-2 text-[13px] font-bold text-white mt-2 hover:bg-[#9d5bc4] transition-colors">
          Connect
        </button>
      </div>
    </div>
  );
}

function DeployLogs() {
  return (
    <div className="rounded border border-[#30363d] bg-[#0d1117] shadow-2xl mt-2 overflow-hidden flex flex-col h-[200px]">
      <div className="flex items-center justify-between border-b border-[#30363d] bg-[#161b22] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-[12px] font-semibold text-[#c9d1d9]">my-app</span>
        </div>
      </div>
      <div className="p-4 text-[11px] font-mono leading-[1.8] text-[#8b949e] flex-grow overflow-hidden">
        <div className="flex gap-4">
          <span className="text-[#484f58]">12:00:01 PM</span>
          <span className="text-[#e3b341]">Deploying...</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[#484f58]">12:00:15 PM</span>
          <span>Resolving dependencies...</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[#484f58]">12:00:45 PM</span>
          <span>Running build command...</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[#484f58]">12:01:10 PM</span>
          <span className="text-[#2ea043]">Build successful.</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[#484f58]">12:01:12 PM</span>
          <span className="text-[#79c0ff]">Service is live.</span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    n: "1",
    title: "Select a service",
    body: "Static Site, Web Service, Private Service, Background Worker, Cron Job, Postgres, Redis, and more.",
    mock: <ServicePicker />,
  },
  {
    n: "2",
    title: "Connect your GitHub, GitLab, or Bitbucket repo",
    body: "Or use the Render API, CLI, or Docker images.",
    mock: <ConnectRepoForm />,
  },
  {
    n: "3",
    title: "Deploy! We do the rest.",
    body: "Zero-downtime deploys, automated rollbacks, and scalable infrastructure out of the box.",
    mock: <DeployLogs />,
  },
];

export function StepsSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-[48px] font-bold tracking-tight text-white mb-16"
      >
        Click, click, done.
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col rounded-xl bg-transparent p-0 relative group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded bg-[#2d1b3d] text-[14px] font-bold text-[#d49bff] mb-6">
              {step.n}
            </span>
            <h3 className="font-display text-[22px] font-bold text-white leading-snug pr-4">
              {step.title}
            </h3>
            <p className="mt-3 text-[14px] text-[#8b949e] leading-relaxed flex-grow pr-4">
              {step.body}
            </p>
            <div className="mt-8 pointer-events-none">{step.mock}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
