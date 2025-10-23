export const siteConfig = {
  name: "Bulletproof Next Template",
  description:
    "An example Next.js 15 project structured with the Bulletproof React architecture.",
  contactEmail: "team@example.com",
  links: {
    github: "https://github.com/your-org/your-repo",
    docs: "https://alan2207.github.io/bulletproof-react/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
