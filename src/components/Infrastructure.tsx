import { ArrowDown, ArrowRight, Check, Cloud, Server } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const selfHosted = ["Proxmox", "Linux", "Docker", "LXC / VMs", "Caddy", "PostgreSQL", "Supabase", "Networking"];
const cloud = ["AWS ecosystem", "Compute", "Storage", "Networking", "Databases", "Serverless", "Identity & Access", "Monitoring"];
const operations = [
  "Provision VMs and LXC containers",
  "Deploy web applications and APIs",
  "Run Dockerized services and databases",
  "Configure reverse proxies, domains, and TLS",
  "Secure remote access and internal networking",
  "Monitor, update, back up, and troubleshoot services",
];
const lifecycle = ["Build", "Deploy", "Host", "Monitor", "Maintain", "Debug"];

function DiagramNode({ children, detail, accent = false }: { children: React.ReactNode; detail?: string; accent?: boolean }) {
  return (
    <div className={`rounded-lg border px-4 py-3 text-center ${accent ? "border-lime-400/30 bg-lime-400/10" : "border-white/10 bg-[#0b0d0f]"}`}>
      <p className={`font-mono text-xs ${accent ? "text-lime-300" : "text-zinc-300"}`}>{children}</p>
      {detail && <p className="mt-1 text-[10px] text-zinc-600">{detail}</p>}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="grid-noise rounded-2xl border border-white/10 p-5 sm:p-8">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[.18em] text-zinc-600">Simplified deployment architecture</p>
      <div className="mx-auto max-w-2xl">
        <DiagramNode>Internet</DiagramNode>
        <ArrowDown className="mx-auto my-2 text-zinc-700" size={16} aria-hidden="true" />
        <DiagramNode accent detail="Reverse proxy · certificates">Caddy · HTTPS/TLS</DiagramNode>
        <div className="mx-auto h-6 w-px bg-white/10" />
        <div className="relative grid grid-cols-3 gap-2 before:absolute before:-top-px before:left-[16.67%] before:right-[16.67%] before:h-px before:bg-white/10 sm:gap-4">
          <DiagramNode detail="Next.js · Flutter Web">Web apps</DiagramNode>
          <DiagramNode detail="NestJS · REST APIs">Backend</DiagramNode>
          <DiagramNode detail="Mail · supporting tools">Services</DiagramNode>
        </div>
        <div className="mx-auto h-6 w-px bg-white/10" />
        <DiagramNode detail="PostgreSQL · self-hosted platform">Data / Supabase</DiagramNode>
        <div className="mx-auto h-6 w-px bg-white/10" />
        <div className="rounded-lg border border-dashed border-white/15 p-3 text-center font-mono text-[9px] uppercase tracking-[.14em] text-zinc-600 sm:text-[10px]">
          Proxmox · Linux · Docker · VMs · LXC containers · Tailscale
        </div>
      </div>
    </div>
  );
}

export default function Infrastructure() {
  return (
    <section className="section" aria-label="Infrastructure and deployment">
      <div className="shell">
        <Reveal>
          <div className="max-w-3xl">
            <SectionHeading
              label="05 / Infrastructure & deployment"
              title="Beyond the application layer."
              intro="I like understanding what happens after code leaves my machine. Alongside application development, I build and maintain the infrastructure that runs my projects—from Linux servers and containers to databases, reverse proxies, networking, and production deployments."
            />
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <ArchitectureDiagram />
        </Reveal>

        <Reveal className="mt-6 grid overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-2">
          <article className="p-7 sm:p-9 lg:border-r lg:border-white/10">
            <div className="flex items-center gap-3">
              <Server className="text-lime-400" size={20} aria-hidden="true" />
              <p className="eyebrow">Self-hosted infrastructure</p>
            </div>
            <h3 className="mt-5 text-2xl font-medium tracking-tight">I operate the underlying systems.</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
              A Proxmox-based homelab runs application and infrastructure workloads that I provision, deploy, secure, and maintain.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-2">
              {selfHosted.map((item) => <li key={item} className="border-t border-white/8 pt-3 font-mono text-xs text-zinc-400">{item}</li>)}
            </ul>
          </article>

          <article className="border-t border-white/10 p-7 sm:p-9 lg:border-t-0">
            <div className="flex items-center gap-3">
              <Cloud className="text-lime-400" size={20} aria-hidden="true" />
              <p className="eyebrow">Cloud experience</p>
            </div>
            <h3 className="mt-5 text-2xl font-medium tracking-tight">I understand the managed layer, too.</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
              Experience with the AWS ecosystem complements my hands-on understanding of the infrastructure concepts cloud platforms abstract.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-2">
              {cloud.map((item) => <li key={item} className="border-t border-white/8 pt-3 font-mono text-xs text-zinc-400">{item}</li>)}
            </ul>
          </article>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Production ownership</p>
            <h3 className="mt-5 text-3xl font-medium tracking-[-.04em]">The work continues after deployment.</h3>
            <p className="mt-4 leading-7 text-zinc-500">Operating my own infrastructure means owning routine maintenance and failure recovery—not only the first successful release.</p>
          </Reveal>
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2">
              {operations.map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-white/8 bg-white/[.02] p-4 text-sm leading-6 text-zinc-400">
                  <Check className="mt-1 shrink-0 text-lime-400" size={14} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-y border-white/10 py-8">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[.18em] text-zinc-600">Engineering lifecycle</p>
          <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {lifecycle.map((step, index) => (
              <li key={step} className="flex flex-1 items-center gap-3">
                <span className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/10 font-mono text-[10px] text-lime-400">0{index + 1}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">{step}</span>
                {index < lifecycle.length - 1 && <ArrowRight className="ml-auto hidden text-zinc-700 sm:block" size={14} aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
