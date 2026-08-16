export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Founder / Software Engineer",
    company: "Salony",
    period: "Present",
    description:
      "I own the product across its full software lifecycle—from architecture and implementation to self-hosted deployment, releases, maintenance, and production debugging.",
    responsibilities: [
      "Architecture, technical decisions, and product flows",
      "Mobile and web applications across Flutter and Next.js",
      "NestJS services, APIs, authentication, and role-based access",
      "Relational data modeling and PostgreSQL row-level security",
      "Scheduling, concurrency, and booking collision prevention",
      "OCR-assisted InstaPay receipt verification workflows",
      "Business dashboards and operational tooling",
      "Linux infrastructure, deployments, monitoring, and releases",
    ],
    technologies: [
      "Flutter", "Dart", "Next.js", "React", "TypeScript", "NestJS",
      "Node.js", "PostgreSQL", "Supabase", "Docker", "Linux", "Caddy",
      "Proxmox", "Tailscale",
    ],
  }
];
