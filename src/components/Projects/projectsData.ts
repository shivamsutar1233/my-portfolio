export type Project = {
  title: string;
  url: string;
  description: string;
  /** Featured projects are the only ones shown in the home page section. */
  featured?: boolean;
};

/**
 * Single source of truth for both the home page section (featured only) and
 * the /projects page (everything). Order here is the order they render in.
 */
export const projects: Project[] = [
  {
    title: "Commutio",
    url: "https://www.commutio.online/",
    description:
      "A multi-tenant SaaS that turns WhatsApp into a full storefront — customers browse, book rentals, and place orders entirely in chat. A Fastify and BullMQ backend on Postgres and Redis drives the conversation flows, paired with a Next.js admin console offering a drag-and-drop flow builder, message template composer, catalog sync, and per-tenant payment and KYC integrations.",
    featured: true,
  },
  {
    title: "CA Practice OS",
    url: "https://www.ca-pms.online/",
    description:
      "A multi-tenant lead management platform built for Chartered Accountant firms. It funnels leads from website forms, WhatsApp, Instagram, and Justdial into a single pipeline, with a Kanban board over CA-specific stages, role-based access for partners and associates, auto-assignment, reminders, document tracking, analytics, and subscription billing.",
    featured: true,
  },
  {
    title: "Isro web",
    url: "https://isro.alphasquare.in/",
    description:
      "It is a website that provides information about ISRO. It is a simple website that showcases the achievements and missions of ISRO.",
    featured: true,
  },
  {
    title: "Lean Angle Studio",
    url: "https://leananglestudio.shop/",
    description:
      "A full-stack gear rental e-commerce platform featuring role-based dashboards, real-time inventory and order management, secure document verification, and integrated payment processing.",
  },
  {
    title: "Car Rental",
    url: "https://www.car-rental.alphasquare.in/",
    description:
      "It is a website that provides car rental services. It is a simple website that showcases the cars available for rent.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
