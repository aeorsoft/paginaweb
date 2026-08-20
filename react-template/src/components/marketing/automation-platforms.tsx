export const automationPlatforms = [
  { name: "UiPath", file: "uipath.svg", href: "https://www.uipath.com" },
  { name: "Automation Anywhere", file: "automationanywhere.svg", href: "https://www.automationanywhere.com" },
  { name: "Power Automate", file: "powerautomate.svg", href: "https://powerautomate.microsoft.com" },
  { name: "Blue Prism", file: "blueprism.svg", href: "https://www.blueprism.com" },
  { name: "Zapier", file: "zapier.svg", href: "https://zapier.com" },
  { name: "Make", file: "make.svg", href: "https://www.make.com" },
  { name: "n8n", file: "n8n.svg", href: "https://n8n.io" },
  { name: "Camunda", file: "camunda.svg", href: "https://camunda.com" },
  { name: "Bizagi", file: "bizagi.svg", href: "https://www.bizagi.com" },
  { name: "Appian", file: "appian.svg", href: "https://www.appian.com" },
  { name: "Workato", file: "workato.svg", href: "https://www.workato.com" },
  { name: "ServiceNow", file: "servicenow.svg", href: "https://www.servicenow.com" },
  { name: "Apache Airflow", file: "apacheairflow.svg", href: "https://airflow.apache.org" },
  { name: "MuleSoft", file: "mulesoft.svg", href: "https://www.mulesoft.com" },
  { name: "Power BI", file: "powerbi.svg", href: "https://www.microsoft.com/power-platform/products/power-bi" },
  { name: "Azure", file: "microsoftazure.svg", href: "https://azure.microsoft.com" },
] as const;

export function AutomationPlatforms() {
  return (
    <section id="automatizacion" className="relative mt-20 overflow-hidden rounded-3xl border border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-platforms-flow" />
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-orb" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-orb" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 px-6 py-12 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Automatización de procesos
        </p>
        <h3 className="mt-3 text-3xl font-bold text-white">Plataformas con las que trabajo</h3>
        <p className="mt-4 max-w-3xl text-gray-300">
          Experto en orquestar RPA, BPM e iPaaS para automatizar procesos de negocio:
          bots, flujos de aprobación, integraciones entre sistemas y tableros de
          operación. Estas son las plataformas que uso para diseñar, implementar y
          gobernar esa automatización.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {automationPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 shadow-lg shadow-cyan-500/10">
                <img
                  src={`/automation/${platform.file}`}
                  alt=""
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className="text-center text-sm font-medium text-gray-100 group-hover:text-cyan-200">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
