import { ArrowUpRight, Code2 as Github } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-white/12 bg-[#0d0f11] transition hover:border-white/25">
        <div className="grid lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <p className="eyebrow">{project.type}</p>
              <h3 className="mt-5 text-5xl font-medium tracking-[-.06em] sm:text-7xl">{project.name}</h3>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-zinc-400">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                aria-label="Visit the live Salony website (opens in a new tab)"
              >
                Visit Salony <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="button">
                <Github size={16} aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>

          <div className="grid-noise min-h-80 border-t border-white/10 p-5 sm:p-10 lg:min-h-[560px] lg:border-l lg:border-t-0">
            <div className="relative h-full min-h-72 overflow-hidden rounded-xl border border-white/10 bg-[#111418] shadow-2xl">
              <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
                <i className="h-2 w-2 rounded-full bg-zinc-700" />
                <i className="h-2 w-2 rounded-full bg-zinc-700" />
                <i className="h-2 w-2 rounded-full bg-zinc-700" />
                <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-zinc-600">Product preview</span>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[.65fr_1.35fr]">
                <div className="rounded-lg border border-white/8 bg-black/30 p-4">
                  <div className="mb-5 h-5 w-16 rounded bg-lime-400/70" />
                  {[70, 90, 60, 75].map((width, index) => (
                    <div key={index} className="mb-3 h-2 rounded bg-white/8" style={{ width: `${width}%` }} />
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border border-white/8 bg-black/30 p-5">
                    <p className="font-mono text-[10px] uppercase text-zinc-500">Today&apos;s bookings</p>
                    <p className="mt-3 text-4xl font-medium">12</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {["09:30", "11:00", "13:30", "16:00"].map((time) => (
                      <div key={time} className="rounded-lg border border-white/8 bg-black/30 p-3">
                        <p className="text-sm">{time}</p>
                        <div className="mt-2 h-1 w-8 rounded bg-lime-400/60" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1.5 font-mono text-[10px] text-lime-300">
                Replace with screenshot
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex min-h-64 flex-col justify-between rounded-xl border border-dashed border-white/12 bg-white/[.015] p-7">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[.15em] text-zinc-600">{project.type}</p>
        <h3 className="mt-4 text-2xl font-medium text-zinc-300">{project.name}</h3>
      </div>
      <p className="max-w-sm text-sm leading-6 text-zinc-600">{project.description}</p>
    </article>
  );
}
