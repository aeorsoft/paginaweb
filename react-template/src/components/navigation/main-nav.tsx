"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/lib/theme";
import { useFeatureFlag } from "@/lib/feature-flags";
import { cn } from "@/utils/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/tasks", label: "Tasks" },
];

export function MainNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { enabled: experimentalTasks } = useFeatureFlag("experimentalTasks");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <nav className="flex items-center justify-between gap-6 px-4 py-3">
      <Link href="/" className="text-lg font-semibold">
        {siteConfig.name}
      </Link>
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-2 text-sm">
          {links
            .filter((link) => (link.href === "/tasks" ? experimentalTasks : true))
            .map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-2 py-1 transition-colors",
                    pathname === link.href
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "hover:bg-black/10 dark:hover:bg-white/10",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
        <button
          type="button"
          onClick={toggleTheme}
          className="text-xs font-medium uppercase tracking-wide"
        >
          {isHydrated ? (theme === "dark" ? "Light" : "Dark") : "Dark"} mode
        </button>
      </div>
    </nav>
  );
}
