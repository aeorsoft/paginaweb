import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="space-y-6 text-center sm:text-left">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
        Architecture Ready
      </p>
      <h1 className="text-4xl font-bold sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl text-base text-gray-600 dark:text-gray-300">
        {siteConfig.description} Explore the folder structure, feature modules,
        and shared utilities to jumpstart your next project.
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
        <Link
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black"
          href="/tasks"
        >
          View example feature
        </Link>
        <a
          className="text-sm font-medium text-blue-600 underline"
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          Open in GitHub
        </a>
      </div>
    </section>
  );
}
