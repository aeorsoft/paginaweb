import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 px-4 py-6 text-sm text-gray-600 dark:border-white/10 dark:text-gray-300">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.portfolio}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Portfolio
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
