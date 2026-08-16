export type SkillGroup = { title: string; description: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", description: "Web interfaces and product experiences", items: ["Next.js", "React", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Backend", description: "Services, integrations, and application logic", items: ["NestJS", "Node.js", "Express", "Laravel", "PHP", "REST APIs"] },
  { title: "Mobile", description: "Cross-platform product development", items: ["Flutter", "Dart"] },
  { title: "Databases & platforms", description: "Data modeling, persistence, and backend platforms", items: ["PostgreSQL", "MySQL", "Supabase", "NeonDB", "SQL Server", "MongoDB", "Prisma", "Firebase"] },
  { title: "Cloud", description: "AWS ecosystem and managed infrastructure concepts", items: ["Amazon Web Services", "Compute", "Storage", "Networking", "Databases", "Identity & Access", "Monitoring", "Serverless", "Deployment Services"] },
  { title: "Infrastructure & DevOps", description: "Operating software beyond the application layer", items: ["Docker", "Linux", "Proxmox", "Caddy", "Tailscale", "Self-hosting", "Reverse Proxies", "HTTPS / TLS", "Networking", "Virtual Machines", "LXC Containers", "Service Deployment", "Production Troubleshooting"] },
  { title: "Programming languages", description: "Languages used across application layers", items: ["TypeScript", "JavaScript", "PHP", "Dart", "Java", "C++", "Python", "SQL"] },
];
