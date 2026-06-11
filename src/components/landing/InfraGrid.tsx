import { motion } from "framer-motion";

const leftColumnItems = [
  {
    title: "Infrastructure as code",
    body: "Define, deploy, and version your entire architecture with a single YAML file.",
  },
  {
    title: "Native language runtimes",
    body: "High-performance environments for nearly every popular framework.",
  },
  {
    title: "Isolated environments",
    body: "Prevent non-production environments from accessing production services.",
  },
  {
    title: "Object storage",
    body: "Store and retrieve files from your services with lightweight SDKs.",
  },
  {
    title: "Redis-compatible Key Value",
    body: "Low-latency in-memory storage ideal for shared caches and job queues.",
  },
  {
    title: "WebSockets",
    body: "Build real-time features with long-lived, bi-directional streaming.",
  },
];

const rightColumnItems = [
  {
    title: "Managed services",
    body: "Deploy databases and other stateful services with one click.",
  },
  {
    title: "Background workers",
    body: "Run asynchronous processing and queue consumers.",
  },
  {
    title: "Cron jobs",
    body: "Schedule tasks to run on a timer with exact precision.",
  },
  {
    title: "Persistent disks",
    body: "Attach durable block storage to any service.",
  },
  {
    title: "Private networking",
    body: "Secure, isolated network for inter-service communication.",
  },
  {
    title: "Edge caching",
    body: "Serve static assets quickly using a global CDN.",
  },
];

export function InfraGrid() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-[48px] font-bold tracking-tight text-white leading-[1.1] max-w-[600px]">
          Intuitive infrastructure, designed for builders
        </h2>
        <p className="mt-4 text-[#a1a1aa] text-[18px]">
          Ship software faster with integrated primitives that just work.
        </p>
      </motion.div>

      <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
        <div className="space-y-12">
          {leftColumnItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-display text-[20px] font-bold text-[#e2e8f0]">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] text-[#8b949e] leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-12">
          {rightColumnItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.05 }}
            >
              <h3 className="font-display text-[20px] font-bold text-[#e2e8f0]">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] text-[#8b949e] leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
