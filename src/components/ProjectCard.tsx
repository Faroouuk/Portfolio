import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectGallery from "./ProjectGallery";

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="eyebrow">{project.type}</p>
      <span className="shrink-0 font-mono text-xs text-zinc-600">{project.number}</span>
    </div>
  );
}

function Stack({ technologies }: { technologies: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
      {technologies.map((technology) => (
        <li key={technology} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-zinc-400">
          {technology}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-white/12 bg-[#0d0f11] transition hover:border-white/25">
        <div className="grid lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <ProjectMeta project={project} />
              <span className="mt-7 inline-flex rounded-full border border-lime-400/20 bg-lime-400/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[.14em] text-lime-300">
                {project.label}
              </span>
              <h3 className="mt-5 text-5xl font-medium tracking-[-.06em] sm:text-7xl">{project.name}</h3>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">{project.description}</p>
              <div className="mt-7"><Stack technologies={project.stack} /></div>
            </div>

            <div className="mt-10">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                aria-label="Visit the live Salony website (opens in a new tab)"
              >
                {project.cta} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid-noise min-w-0 border-t border-white/10 p-5 sm:p-8 lg:border-l lg:border-t-0">
            <div className="mb-5 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[.14em] text-zinc-600">
              <span>5 product screens</span><span>Customer + business experience</span>
            </div>
            {project.screenshots && <ProjectGallery screenshots={project.screenshots} variant="salony" />}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex min-h-[390px] flex-col rounded-xl border border-white/10 bg-white/[.018] p-7 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[.03] sm:p-8">
      <ProjectMeta project={project} />
      <div className="mt-7">
        <span className="inline-flex rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-500">
          {project.label}
        </span>
        <h3 className="mt-5 text-3xl font-medium tracking-[-.04em] text-zinc-100">{project.name}</h3>
        <p className="mt-5 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">{project.description}</p>
      </div>
      {project.screenshots && <div className="mt-7"><ProjectGallery screenshots={project.screenshots} variant="browser" /></div>}
      <div className="mt-auto pt-8">
        <Stack technologies={project.stack} />
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="button mt-7"
          aria-label={`${project.cta} for ${project.name} (opens in a new tab)`}
        >
          <Code2 size={16} aria-hidden="true" /> {project.cta} <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
