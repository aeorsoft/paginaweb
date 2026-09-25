"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useFeatureFlag } from "@/lib/feature-flags";
import { cn } from "@/utils/cn";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#automatizacion", label: "Plataformas" },
  { href: "/automatizacion-inteligente", label: "Automatización inteligente", standalone: true },
  { href: "/laboratorio-sinapsis", label: "Laboratorio Sinapsis", standalone: true },
  { href: "/nexo-centro-de-datos", label: "Nexo Centro de Datos", standalone: true },
  { href: "/tasks", label: "Tasks" },
];

function isLinkActive(href: string, pathname: string, hash: string) {
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(1);
  }

  if (href === "/") {
    return pathname === "/" && hash !== "#automatizacion";
  }

  return pathname === href;
}

export function MainNav() {
  const pathname = usePathname();
  const { enabled: experimentalTasks } = useFeatureFlag("experimentalTasks");
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between gap-6 px-4 py-3">
      <Link href="/" className="text-lg font-semibold text-cyan-100">
        {siteConfig.name}
      </Link>
      <ul className="flex flex-wrap items-center justify-end gap-2 text-sm">
        {links
          .filter((link) => (link.href === "/tasks" ? experimentalTasks : true))
          .map((link) => {
            const active = isLinkActive(link.href, pathname, hash);
            const className = cn(
              "inline-flex rounded-full border px-3.5 py-1.5 font-medium transition-colors",
              active
                ? "border-cyan-400/50 bg-cyan-400/15 text-cyan-200"
                : "border-transparent bg-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white",
              link.standalone && !active && "border-white/10 text-cyan-100",
            );

            return (
              <li key={link.href}>
                {link.standalone ? (
                  <a href={link.href} className={className}>
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={className}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
