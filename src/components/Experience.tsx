import { Check } from "lucide-react";
import { experience } from "@/data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            label="03 / Experience"
            title="Ownership across the lifecycle."
            intro="Engineering work that spans architecture, product development, deployment, and the systems that keep software running."
          />
        </Reveal>

        <div className="mt-14 border-t border-white/10">
          {experience.map((item, index) => (
            <Reveal
              key={item.role}
              className="grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-16"
            >
              <div>
                <span className="font-mono text-xs text-lime-400">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-medium tracking-tight">{item.role}</h3>
                <p className="mt-2 text-zinc-400">{item.company}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-600">{item.period}</p>
              </div>

              <div>
                <p className="max-w-3xl text-lg leading-8 text-zinc-300">{item.description}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3 text-sm leading-6 text-zinc-400">
                      <Check className="mt-1 shrink-0 text-lime-400" size={14} aria-hidden="true" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
                {item.technologies && (
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-white/8 pt-6">
                    {item.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-zinc-500">
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
