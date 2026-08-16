import { ArrowUpRight, Code2, ContactRound, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import Reveal from "./Reveal";

const contacts = [
  { label: "Email", href: siteConfig.email ? `mailto:${siteConfig.email}` : "", icon: Mail },
  { label: "GitHub", href: siteConfig.github, icon: Code2 },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: ContactRound },
  { label: "Resume", href: siteConfig.resume, icon: ArrowUpRight },
].filter((contact) => contact.href);

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(163,230,53,.1),transparent_40%)]" />
      <Reveal className="shell relative text-center">
        <p className="eyebrow">07 / Contact</p>
        <h2 className="mx-auto mt-7 max-w-4xl text-[clamp(3.25rem,9vw,8rem)] font-medium leading-[.9] tracking-[-.07em]">
          Let&apos;s build<br />something.
        </h2>
        <p className="mx-auto mt-7 max-w-lg text-lg leading-8 text-zinc-400">
          Have a product, engineering role, or difficult systems problem in mind? I&apos;d like to hear about it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {contacts.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={label === "Email" ? "button button-primary" : "button"}
            >
              <Icon size={16} aria-hidden="true" /> {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
