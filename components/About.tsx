type IconName = "cog" | "globe" | "phone";

const highlights: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "cog",
    title: "Backend First",
    desc: "Conception d'API REST, logique métier, bases de données et architecture serveur.",
  },
  {
    icon: "globe",
    title: "Systèmes & Réseaux",
    desc: "Administration Linux, configuration réseau, virtualisation et automatisation d'infrastructure.",
  },
  {
    icon: "phone",
    title: "Full Stack",
    desc: "Du backend au frontend web et mobile, je couvre l'ensemble du cycle de développement.",
  },
];

interface HighlightIconProps {
  icon: IconName;
  className?: string;
}

function HighlightIcon({ icon, className }: HighlightIconProps) {
  if (icon === "cog") {
    return (
      <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    );
  }

  if (icon === "globe") {
    return (
      <svg
        className={className}
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3 text-justify">
            À propos
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Profil polyvalent, ancré dans le backend
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="text-justify">
              Développeur Full Stack avec une orientation marquée pour le
              backend, je construis des applications fiables et des API
              performantes en utilisant principalement <strong className="text-gray-800 dark:text-gray-200">Laravel</strong> et{" "}
              <strong className="text-gray-800 dark:text-gray-200">React</strong>.
            </p>
            <p className="text-justify">
              Ma double compétence en <strong className="text-gray-800 dark:text-gray-200">développement logiciel</strong> et en{" "}
              <strong className="text-gray-800 dark:text-gray-200">IT systèmes & réseaux</strong> me permet d'avoir une vision
              complète des projets : du code applicatif jusqu'à l'infrastructure
              qui le fait tourner.
            </p>
            <p className="text-justify">
              Polyvalent et autonome, je m'adapte aussi bien aux projets de
              développement d'applications qu'aux missions d'automatisation ou
              d'administration système.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg"
              >
                <HighlightIcon icon={item.icon} className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
