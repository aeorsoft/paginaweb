import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import AppProviders from "./providers";
import { MainNav } from "@/components/navigation/main-nav";
import { SiteFooter } from "@/components/navigation/site-footer";
import { Chatbot } from "@/components/chat/chatbot";
import { DynamicBackground } from "@/components/marketing/dynamic-background";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#05070f] text-white antialiased`}
      >
        <AppProviders>
          <DynamicBackground />
          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col">
            <header className="border-b border-white/10 bg-black/20 backdrop-blur-md">
              <MainNav />
            </header>
            <main className="flex flex-1 flex-col gap-10 px-4 py-10 sm:px-6">
              {children}
            </main>
            <SiteFooter />
          </div>
          <Chatbot />
        </AppProviders>
      </body>
    </html>
  );
}
