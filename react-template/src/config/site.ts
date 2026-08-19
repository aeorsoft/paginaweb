export const siteConfig = {
  name: "Alex Osorio - Desarrollador de Software",
  description:
    "Desarrollador Full Stack especializado en React, Next.js y tecnologías modernas. Creando soluciones innovadoras para el futuro digital.",
  contactEmail: "alex@example.com",
  links: {
    github: "https://github.com/alex-osorio",
    linkedin: "https://linkedin.com/in/alex-osorio",
    portfolio: "https://alex-osorio.dev",
  },
} as const;

export type SiteConfig = typeof siteConfig;
