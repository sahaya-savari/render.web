import { motion } from "framer-motion";
import { ArrowRight, Github, Code2, Database, Box, Terminal, Cpu, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-[#0b0e14]">
      {/* Exact gradient background spot */}
      <div
        className="pointer-events-none absolute left-1/2 top-[20%] z-0 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "radial-gradient(circle, #c88dfc 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-[72px] font-bold leading-[1.05] tracking-[-0.03em] text-white"
        >
          Your fastest path to production for <span className="text-white">ANY developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-[600px] text-[22px] text-[#a1a1aa] leading-[1.4]"
        >
          Build and scale your apps and websites on Render, the easiest cloud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#"
            className="flex items-center gap-2 rounded-[4px] bg-white px-8 py-3.5 text-[16px] font-bold text-black transition-opacity hover:opacity-90"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-[4px] border border-white/20 bg-transparent px-8 py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-white/5"
          >
            Explore Docs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <p className="text-[14px] font-bold text-[#888888] mb-10 tracking-widest uppercase">
            Works with your favorite frameworks
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 max-w-[800px] mx-auto">
            {/* Scattered logos mimicking exactly the screenshot blocks */}
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] px-5 py-2 hover:bg-[#1a1a1a] transition-colors">
              <Code2 className="h-4 w-4 text-white" />{" "}
              <span className="text-[14px] font-semibold text-white">Node.js</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] px-5 py-2 hover:bg-[#1a1a1a] transition-colors">
              <Terminal className="h-4 w-4 text-white" />{" "}
              <span className="text-[14px] font-semibold text-white">Python</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] px-5 py-2 hover:bg-[#1a1a1a] transition-colors">
              <Box className="h-4 w-4 text-white" />{" "}
              <span className="text-[14px] font-semibold text-white">Go</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] px-5 py-2 hover:bg-[#1a1a1a] transition-colors">
              <Database className="h-4 w-4 text-white" />{" "}
              <span className="text-[14px] font-semibold text-white">Rust</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] px-5 py-2 hover:bg-[#1a1a1a] transition-colors">
              <Layers className="h-4 w-4 text-white" />{" "}
              <span className="text-[14px] font-semibold text-white">Ruby</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] px-5 py-2 hover:bg-[#1a1a1a] transition-colors">
              <Cpu className="h-4 w-4 text-white" />{" "}
              <span className="text-[14px] font-semibold text-white">Elixir</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] px-5 py-2 hover:bg-[#1a1a1a] transition-colors">
              <Code2 className="h-4 w-4 text-white" />{" "}
              <span className="text-[14px] font-semibold text-white">PHP</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111] px-5 py-2 hover:bg-[#1a1a1a] transition-colors">
              <Github className="h-4 w-4 text-white" />{" "}
              <span className="text-[14px] font-semibold text-white">Docker</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
