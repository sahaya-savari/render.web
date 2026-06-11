import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function PreviewsMock() {
  return (
    <div className="rounded-xl border border-[#30363d] bg-[#0d1117] p-8 shadow-2xl w-full h-[350px] relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="mx-auto w-full max-w-sm rounded border border-[#30363d] bg-[#161b22] p-5 shadow-2xl relative">
        <div className="absolute -left-[1px] top-4 bottom-4 w-[2px] bg-[#238636]" />
        <div className="pl-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#1f2937] border border-white/10">
              <span className="text-[#8a4baf] text-[11px] font-bold">R</span>
            </div>
            <span className="font-semibold text-[#c9d1d9] text-[13px]">render[bot]</span>
            <span className="text-[#8b949e] text-[13px]">commented now</span>
          </div>
          <p className="text-[#c9d1d9] mb-4 text-[14px] leading-relaxed">
            Your preview environment is ready!
          </p>
          <div className="flex items-center gap-2 rounded border border-[#30363d] p-2 bg-[#0d1117]">
            <CheckCircle2 className="h-4 w-4 text-[#238636]" />
            <a href="#" className="text-[#58a6ff] hover:underline block truncate text-[13px]">
              https://preview-xyz-pr-42.onrender.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureBento() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-28 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="font-display text-[48px] font-bold tracking-tight text-white leading-[1.1] max-w-[700px]">
          Scale to meet the needs of millions of users
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Left Side: Feature List */}
        <div className="md:w-[45%] flex flex-col gap-6">
          {/* Active Item */}
          <div className="cursor-pointer">
            <h3 className="font-display text-[26px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#818cf8] to-[#c084fc] mb-3 leading-tight">
              Built-in CI/CD and pull request previews
            </h3>
            <p className="text-[#a1a1aa] text-[16px] leading-relaxed">
              Automatic builds and deployments on every push. Review changes in isolated
              environments before merging.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-[#818cf8] hover:text-[#a5b4fc] transition-colors cursor-pointer">
              Explore CI/CD <span aria-hidden="true">&rarr;</span>
            </div>
          </div>

          {/* Inactive Items */}
          <div className="cursor-pointer pt-6 border-t border-white/10 group">
            <h3 className="font-display text-[24px] font-bold text-[#888888] group-hover:text-white transition-colors leading-tight">
              Zero-downtime deploys and auto-rollbacks
            </h3>
          </div>

          <div className="cursor-pointer pt-6 border-t border-white/10 group">
            <h3 className="font-display text-[24px] font-bold text-[#888888] group-hover:text-white transition-colors leading-tight">
              Private networking and background workers
            </h3>
          </div>

          <div className="cursor-pointer pt-6 border-t border-white/10 group">
            <h3 className="font-display text-[24px] font-bold text-[#888888] group-hover:text-white transition-colors leading-tight">
              Free SSL and custom domains
            </h3>
          </div>

          <div className="cursor-pointer pt-6 border-t border-white/10 group">
            <h3 className="font-display text-[24px] font-bold text-[#888888] group-hover:text-white transition-colors leading-tight">
              Built-in DDoS protection
            </h3>
          </div>
        </div>

        {/* Right Side: Mockup Display */}
        <div className="md:w-[55%] sticky top-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <PreviewsMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
