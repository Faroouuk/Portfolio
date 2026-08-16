import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            label="04 / Technical skills"
            title="Organized by engineering discipline."
            intro="A toolkit that covers application development, data, cloud concepts, and the infrastructure beneath deployed systems."
          />
        </Reveal>

        <Reveal className="mt-14 grid border-l border-t border-white/10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`border-b border-r border-white/10 p-7 sm:p-9 ${group.title === "Infrastructure & DevOps" ? "md:col-span-2 md:grid md:grid-cols-[.7fr_1.3fr] md:gap-10" : ""}`}
            >
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[.15em] text-lime-400">{group.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600">{group.description}</p>
              </div>
              <ul className={`mt-7 flex flex-wrap content-start gap-2 ${group.title === "Infrastructure & DevOps" ? "md:mt-0" : ""}`}>
                {group.items.map((item) => (
                  <li key={item} className="rounded-md bg-white/[.045] px-3 py-2 text-sm text-zinc-300">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
        <p className="mt-5 max-w-2xl text-xs leading-5 text-zinc-600">
          AWS represents experience with the cloud ecosystem and its infrastructure concepts. My current personal production deployments are primarily self-hosted.
        </p>
      </div>
    </section>
  );
}
