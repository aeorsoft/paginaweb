#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const TEMPLATE_PATHS = [
  "src/app/api/tasks",
  "src/app/tasks",
  "src/app/page.tsx",
  "src/app/layout.tsx",
  "src/components/marketing",
  "src/components/navigation",
  "src/features/tasks",
  "src/hooks/useDisclosure.ts",
];

const PLACEHOLDER_PAGE = `export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl space-y-4 py-16">
      <h1 className="text-3xl font-semibold">Welcome to your clean slate</h1>
      <p className="text-base text-gray-600 dark:text-gray-300">
        Start building features by adding routes, components, and data fetching logic.
      </p>
    </main>
  );
}
`;

const PLACEHOLDER_LAYOUT = [
  'import type { Metadata } from "next";',
  'import { Geist, Geist_Mono } from "next/font/google";',
  'import { siteConfig } from "@/config/site";',
  'import AppProviders from "./providers";',
  'import "./globals.css";',
  '',
  'const geistSans = Geist({',
  '  variable: "--font-geist-sans",',
  '  subsets: ["latin"],',
  '});',
  '',
  'const geistMono = Geist_Mono({',
  '  variable: "--font-geist-mono",',
  '  subsets: ["latin"],',
  '});',
  '',
  'export const metadata: Metadata = {',
  '  title: {',
  '    default: siteConfig.name,',
  '    template: `%s | ${siteConfig.name}`,',
  '  },',
  '  description: siteConfig.description,',
  '};',
  '',
  'export default function RootLayout({',
  '  children,',
  '}: Readonly<{',
  '  children: React.ReactNode;',
  '}>) {',
  '  return (',
  '    <html lang="en" suppressHydrationWarning>',
  '      <body',
  '        className={[',
  '          geistSans.variable,',
  '          geistMono.variable,',
  '          "min-h-screen bg-white text-black antialiased dark:bg-neutral-950 dark:text-white",',
  '        ].join(" ")}',
  '      >',
  '        <AppProviders>',
  '          <main className="min-h-screen">{children}</main>',
  '        </AppProviders>',
  '      </body>',
  '    </html>',
  '  );',
  '}',
  '',
].join("\n");

async function main() {
  const projectRoot = path.resolve(__dirname, "..");
  const archiveRoot = path.join(projectRoot, "template-archive");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const archiveDestination = path.join(archiveRoot, timestamp);

  await fsp.mkdir(archiveDestination, { recursive: true });

  const movedItems = [];

  for (const relativeItemPath of TEMPLATE_PATHS) {
    const source = path.join(projectRoot, relativeItemPath);

    if (!fs.existsSync(source)) {
      continue;
    }

    const destination = path.join(archiveDestination, relativeItemPath);
    await fsp.mkdir(path.dirname(destination), { recursive: true });
    await fsp.rename(source, destination);
    movedItems.push(relativeItemPath);
  }

  const pagePath = path.join(projectRoot, "src/app/page.tsx");
  if (!fs.existsSync(pagePath)) {
    await fsp.mkdir(path.dirname(pagePath), { recursive: true });
    await fsp.writeFile(pagePath, PLACEHOLDER_PAGE, "utf8");
  }

  const layoutPath = path.join(projectRoot, "src/app/layout.tsx");
  if (!fs.existsSync(layoutPath)) {
    await fsp.mkdir(path.dirname(layoutPath), { recursive: true });
    await fsp.writeFile(layoutPath, PLACEHOLDER_LAYOUT, "utf8");
  }

  if (movedItems.length === 0) {
    console.log("No template files were moved. The project already looks reset.");
    return;
  }

  console.log("Moved template files to:", path.relative(projectRoot, archiveDestination));
  movedItems.forEach((item) => console.log(` - ${item}`));
  console.log("");
  console.log(
    "Placeholder home and layout files have been generated in src/app. Customize them to get started.",
  );
}

main().catch((error) => {
  console.error("Failed to reset template:", error);
  process.exitCode = 1;
});
