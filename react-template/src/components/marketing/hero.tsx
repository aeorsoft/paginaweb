import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Contenido de texto */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              Desarrollador Full Stack
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {siteConfig.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              {siteConfig.description}
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-6 py-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">10+</div>
              <div className="text-sm text-gray-600">Años Exp.</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Satisfacción</div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-lg font-medium text-white transition-all hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg"
              href="#contact"
            >
              Contactar
            </Link>
            <Link
              className="rounded-lg border-2 border-gray-300 px-8 py-3 text-lg font-medium text-gray-700 transition-all hover:border-blue-500 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              href={siteConfig.links.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              Ver Portfolio
            </Link>
          </div>

          {/* Enlaces sociales */}
          <div className="flex justify-center lg:justify-start gap-6 pt-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Animación simple integrada */}
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg relative overflow-hidden">
            {/* Código flotante animado */}
            <div className="absolute inset-0 p-4">
              {[
                { text: 'const', color: 'text-green-400', x: 10, y: 20 },
                { text: 'React', color: 'text-blue-400', x: 70, y: 30 },
                { text: '=>', color: 'text-yellow-400', x: 30, y: 60 },
                { text: '{}', color: 'text-purple-400', x: 80, y: 70 },
                { text: 'useState', color: 'text-blue-400', x: 20, y: 80 },
                { text: '//', color: 'text-gray-500', x: 60, y: 50 },
                { text: 'return', color: 'text-green-400', x: 50, y: 40 },
                { text: 'import', color: 'text-purple-400', x: 15, y: 10 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute text-sm font-mono ${item.color} opacity-80 animate-pulse`}
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {item.text}
                </div>
              ))}
            </div>
            
            {/* Efectos de partículas */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Overlay con información adicional */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between text-sm text-white">
                <span>💻 Desarrollando el futuro</span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Disponible
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de tecnologías */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-2xl font-bold mb-8">Tecnologías que domino</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Net Core C#','Angular','Ionic','Sql Server','Flutter','React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker'].map((tech) => (
            <div key={tech} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-lg font-semibold">{tech}</div>
            </div>
          ))}
        </div>
      </div>


      {/* Sección de proyectos realizados */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl font-bold text-center mb-12">Proyectos Realizados</h3>
        
        {/* Fondo de programación animado */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden p-8">
          {/* Código flotante de fondo */}
          <div className="absolute inset-0 opacity-20">
            {[
              { text: 'function', x: 5, y: 10 },
              { text: 'const', x: 85, y: 15 },
              { text: '=>', x: 15, y: 30 },
              { text: '{}', x: 90, y: 35 },
              { text: 'import', x: 10, y: 50 },
              { text: 'export', x: 80, y: 55 },
              { text: 'return', x: 20, y: 70 },
              { text: '//', x: 85, y: 75 },
              { text: 'class', x: 5, y: 90 },
              { text: 'async', x: 90, y: 95 },
            ].map((item, index) => (
              <div
                key={index}
                className="absolute text-xs font-mono text-blue-300 opacity-30"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  animationDelay: `${index * 0.8}s`,
                  animation: 'float 8s ease-in-out infinite',
                }}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Grid de proyectos */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facturación Electrónica */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                  🧾
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Facturación Electrónica</h4>
                <p className="text-gray-300 text-sm">Sistema completo de facturación digital con integración a SUNAT y reportes en tiempo real.</p>
              </div>
            </div>

            {/* Catastro Multipropósito */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                  🏘️
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Catastro Multipropósito</h4>
                <p className="text-gray-300 text-sm">Plataforma GIS para gestión territorial con mapas interactivos y análisis espacial.</p>
              </div>
            </div>

            {/* Plan de Alimentación Escolar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl">
                  🍎
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Plan de Alimentación Escolar</h4>
                <p className="text-gray-300 text-sm">Sistema de gestión nutricional para instituciones educativas con seguimiento de menús.</p>
              </div>
            </div>

            {/* Aplicación de Recorridos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                  🚌
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Aplicación de Recorridos</h4>
                <p className="text-gray-300 text-sm">App móvil para optimización de rutas de transporte con GPS y análisis de tráfico.</p>
              </div>
            </div>

            {/* Sistemas de Comunicación IoT */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  📡
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Comunicación IoT</h4>
                <p className="text-gray-300 text-sm">Red de dispositivos inteligentes con protocolos de comunicación MQTT y WebSocket.</p>
              </div>
            </div>

            {/* Aplicaciones Móviles */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  📱
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Aplicaciones Móviles</h4>
                <p className="text-gray-300 text-sm">Desarrollo de apps nativas e híbridas con React Native y Flutter.</p>
              </div>
            </div>
          </div>

          {/* Efectos de partículas adicionales */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
