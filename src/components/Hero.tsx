"use client";

import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="grid-noise relative min-h-screen overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(163,230,53,.08),transparent_32%),linear-gradient(to_bottom,transparent_70%,#090a0c)]" />
      <motion.div className="shell relative flex min-h-[calc(100vh-7rem)] flex-col justify-center pb-16" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[.18em] text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-lime-400" />Software Engineer · Cairo, Egypt
        </div>
        <h1 className="max-w-5xl text-[clamp(3.25rem,9.2vw,8.3rem)] font-medium leading-[.88] tracking-[-.075em]">
          Building products<br /><span className="text-zinc-500">from database</span><br />to deployment.
        </h1>
        <div className="mt-10 flex max-w-4xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            I&apos;m Abdelrahman Farouk, a software engineer and Computer Science student building across frontend, backend, mobile, databases, and infrastructure.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="button button-primary">View projects <ArrowDown size={16} aria-hidden="true" /></a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="button"><Code2 size={16} aria-hidden="true" /> GitHub</a>
            {siteConfig.resume && <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="button">Resume <ArrowUpRight size={16} aria-hidden="true" /></a>}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
