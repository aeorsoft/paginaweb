import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AutomationPlatforms } from "@/components/marketing/automation-platforms";

export function Hero() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {siteConfig.title}
            </p>
            <h1 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-5xl font-bold text-transparent lg:text-6xl">
              {siteConfig.name}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {siteConfig.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="max-w-2xl text-xl text-gray-300">
              {siteConfig.profile.headline}
            </p>
            <p className="max-w-2xl text-base text-gray-400">
              {siteConfig.profile.about}
            </p>
          </div>

          <ul className="grid gap-3 text-left sm:grid-cols-2">
            {siteConfig.profile.focus.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 backdrop-blur-sm"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-6 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">10+</div>
              <div className="text-sm text-gray-400">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-violet-300">10+</div>
              <div className="text-sm text-gray-400">Años Exp.</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-300">RPA / BPM</div>
              <div className="text-sm text-gray-400">Automatización</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="rounded-lg bg-gradient-to-r from-cyan-600 to-violet-600 px-8 py-3 text-lg font-medium text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 hover:from-cyan-500 hover:to-violet-500"
              href="#contact"
            >
              Contactar
            </Link>
            <Link
              className="rounded-lg border-2 border-white/20 px-8 py-3 text-lg font-medium text-gray-200 transition-all hover:border-cyan-400 hover:text-cyan-200"
              href="#automatizacion"
            >
              Ver plataformas
            </Link>
          </div>

          <div className="flex justify-center gap-6 pt-2 lg:justify-start">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition-colors hover:text-cyan-300"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition-colors hover:text-cyan-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950">
            <div className="absolute inset-0 bg-hero-scan" />
            {[
              { text: "architect()", color: "text-cyan-300", x: 10, y: 18 },
              { text: "RPA", color: "text-blue-300", x: 68, y: 28 },
              { text: "BPMN", color: "text-violet-300", x: 28, y: 58 },
              { text: "orchestrate", color: "text-emerald-300", x: 58, y: 68 },
              { text: "API", color: "text-sky-300", x: 16, y: 78 },
              { text: "iPaaS", color: "text-fuchsia-300", x: 72, y: 48 },
              { text: "workflow", color: "text-amber-200", x: 42, y: 36 },
            ].map((item, index) => (
              <div
                key={item.text}
                className={`absolute font-mono text-sm opacity-80 animate-float ${item.color}`}
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  animationDelay: `${index * 0.4}s`,
                }}
              >
                {item.text}
              </div>
            ))}
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/50 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between text-sm text-white">
                <span>Arquitectura + automatización</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Disponible
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h3 className="mb-8 text-2xl font-bold text-white">Stack de desarrollo</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "Net Core C#",
            "Angular",
            "Ionic",
            "Sql Server",
            "Flutter",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "PostgreSQL",
            "Docker",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-lg border border-white/10 bg-white/5 p-4 text-lg font-semibold text-gray-100 backdrop-blur-sm transition hover:border-cyan-400/40"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <AutomationPlatforms />

      <div className="mx-auto mt-20 max-w-6xl">
        <h3 className="mb-12 text-center text-3xl font-bold text-white">Proyectos realizados</h3>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-8">
          <div className="absolute inset-0 bg-platforms-flow opacity-50" />
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Facturación Electrónica",
                text: "Sistema completo de facturación digital con integración a SUNAT y reportes en tiempo real.",
                icon: "🧾",
              },
              {
                title: "Catastro Multipropósito",
                text: "Plataforma GIS para gestión territorial con mapas interactivos y análisis espacial.",
                icon: "🏘️",
              },
              {
                title: "Plan de Alimentación Escolar",
                text: "Sistema de gestión nutricional para instituciones educativas con seguimiento de menús.",
                icon: "🍎",
              },
              {
                title: "Aplicación de Recorridos",
                text: "App móvil para optimización de rutas de transporte con GPS y análisis de tráfico.",
                icon: "🚌",
              },
              {
                title: "Aplicación de comunicación IoT",
                text: "Red de dispositivos inteligentes con protocolos MQTT y WebSocket, y monitoreo en tiempo real de sensores y equipos en campo.",
                icon: "📡",
              },
              {
                title: "Aplicaciones Móviles",
                text: "Desarrollo de apps nativas e híbridas con React Native y Flutter.",
                icon: "📱",
              },
              {
                title: "Geovisores de MikroTik",
                text: "Geovisor para visualizar y administrar equipos MikroTik sobre el mapa: enlaces inalámbricos, cobertura, estado de red y topología.",
                icon: "🗺️",
              },
              {
                title: "Sistemas de alertas tempranas",
                text: "Sistema de alertas tempranas con umbrales, notificaciones automáticas y tableros operativos para anticipar riesgos y responder a tiempo.",
                icon: "🚨",
              },
              {
                title: "Software de gestión documental",
                text: "Software para digitalizar, clasificar, versionar y rastrear documentos, con flujos de aprobación y control de acceso.",
                icon: "📁",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-2xl">
                    {project.icon}
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-sm text-gray-300">{project.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
