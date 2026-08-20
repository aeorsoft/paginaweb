export const siteConfig = {
  name: "Alex Osorio",
  title: "Ingeniero y Arquitecto de Software",
  description:
    "Ingeniero de software y arquitecto de software, experto en automatización de procesos. Diseño e implemento arquitecturas escalables, integraciones y flujos RPA/BPM que reducen trabajo manual y aceleran la operación.",
  contactEmail: "alex@example.com",
  roles: [
    "Ingeniero de Software",
    "Arquitecto de Software",
    "Experto en Automatización de Procesos",
  ],
  profile: {
    headline:
      "Diseño sistemas, orquesto integraciones y convierto procesos repetitivos en flujos automáticos, medibles y confiables.",
    about:
      "Acompaño a equipos de negocio y tecnología para traducir procesos complejos en soluciones de software: desde la arquitectura hasta la automatización con RPA, iPaaS y orquestación. Combino desarrollo full stack con diseño de plataformas, gobierno de integraciones y mejora continua operativa.",
    focus: [
      "Arquitectura de software y APIs",
      "Automatización RPA y BPM",
      "Integración de sistemas (iPaaS)",
      "Orquestación de flujos y datos",
    ],
  },
  links: {
    github: "https://github.com/alex-osorio",
    linkedin: "https://linkedin.com/in/alex-osorio",
    portfolio: "https://alex-osorio.dev",
  },
} as const;

export type SiteConfig = typeof siteConfig;
