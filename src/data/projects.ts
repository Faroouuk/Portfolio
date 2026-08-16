export type ProjectScreenshot = { src: string; alt: string; label: string };

export type Project = {
  number: string;
  name: string;
  type: string;
  label: string;
  description: string;
  stack: string[];
  href: string;
  cta: string;
  featured?: boolean;
  screenshots?: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Salony",
    type: "Startup · Full-Stack Product",
    label: "Flagship project",
    featured: true,
    href: "https://salony.quiksolve.online",
    cta: "Visit Salony",
    description:
      "A booking and business-management platform connecting customers with salons and specialists, while giving beauty businesses the tools to manage scheduling, services, teams, payments, and daily operations.",
    stack: ["Flutter", "NestJS", "PostgreSQL", "Supabase", "Next.js", "TypeScript", "Docker"],
    screenshots: [
      { src: "/projects/salony/customer-discovery.png", label: "Customer Discovery", alt: "Salony customer discovery screen showing nearby barbershops and booking actions" },
      { src: "/projects/salony/owner-shop.png", label: "Owner Shop Management", alt: "Salony owner dashboard showing shop management actions" },
      { src: "/projects/salony/owner-bookings.png", label: "Booking Calendar", alt: "Salony owner booking calendar showing scheduled bookings" },
      { src: "/projects/salony/customer-bookings.png", label: "My Bookings", alt: "Salony customer booking history showing completed and cancelled bookings" },
      { src: "/projects/salony/owner-specialists.png", label: "Specialist Management", alt: "Salony owner specialist management screen" },
    ],
  },
  {
    number: "02",
    name: "TicketsGo",
    type: "Team Project · Full-Stack Web Application",
    label: "Team project",
    href: "https://github.com/Faroouuk/TicketsGo",
    cta: "View on GitHub",
    description:
      "A collaborative event-ticketing platform for browsing and booking events, with role-based flows for customers, organizers, and administrators. Organizers can manage events and view booking analytics, while administrators review events and user roles.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    screenshots: [
      { src: "/projects/ticketsgo/all-events.jpeg", label: "Event Discovery", alt: "TicketsGo event discovery page showing available events" },
      { src: "/projects/ticketsgo/event-booking.jpeg", label: "Event Booking", alt: "TicketsGo event details page showing ticket booking controls" },
      { src: "/projects/ticketsgo/organizer-events.jpeg", label: "Organizer Dashboard", alt: "TicketsGo organizer event management page showing event statistics and booking counts" },
    ],
  },
  {
    number: "03",
    name: "HR Management",
    type: "Team Project · Full-Stack System",
    label: "Team project",
    href: "https://github.com/OmarSherifOmar/HR-Management",
    cta: "View on GitHub",
    description:
      "A collaborative human-resources platform covering core organizational workflows across payroll, recruitment, leave and time management, shift operations, and employee performance.",
    stack: ["Next.js", "NestJS", "MongoDB", "TypeScript", "React"],
    screenshots: [
      { src: "/projects/hr-management/leave-balance.jpeg", label: "Leave Balance", alt: "HR Management employee leave balance dashboard" },
      { src: "/projects/hr-management/leave-requests.jpeg", label: "Leave Requests", alt: "HR Management leave request management screen" },
      { src: "/projects/hr-management/employee-dashboard.jpeg", label: "Employee Dashboard", alt: "HR Management employee dashboard and profile screen" },
    ],
  },
];
