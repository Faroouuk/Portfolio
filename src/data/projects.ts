export type Project = { name:string; type:string; description:string; stack:string[]; featured?:boolean; href?:string };
export const projects: Project[] = [
  { name:"Salony", type:"Startup · Full-stack product", featured:true, href:"https://salony.quiksolve.online", description:"A booking and business-management platform connecting customers with salons and specialists, while giving businesses the tools to run day-to-day operations.", stack:["Flutter","Next.js","NestJS","PostgreSQL","Supabase","Docker"] },
  { name:"Next project", type:"Coming soon", description:"A new case study is being prepared. This slot is ready for the next product build.", stack:[] },
  { name:"More work", type:"Archive in progress", description:"Additional engineering projects will be documented here soon.", stack:[] }
];
