const highlights = [
  {
    icon: "⚙️",
    title: "Backend First",
    desc: "Conception d'API REST, logique métier, bases de données et architecture serveur.",
  },
  {
    icon: "🌐",
    title: "Systèmes & Réseaux",
    desc: "Administration Linux, configuration réseau, virtualisation et automatisation d'infrastructure.",
  },
  {
    icon: "📱",
    title: "Full Stack",
    desc: "Du backend au frontend web et mobile, je couvre l'ensemble du cycle de développement.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
            À propos
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Profil polyvalent, ancré dans le backend
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Développeur Full Stack avec une orientation marquée pour le
              backend, je construis des applications fiables et des API
              performantes en utilisant principalement <strong className="text-gray-800 dark:text-gray-200">Laravel</strong> et{" "}
              <strong className="text-gray-800 dark:text-gray-200">React</strong>.
            </p>
            <p>
              Ma double compétence en <strong className="text-gray-800 dark:text-gray-200">développement logiciel</strong> et en{" "}
              <strong className="text-gray-800 dark:text-gray-200">IT systèmes & réseaux</strong> me permet d'avoir une vision
              complète des projets : du code applicatif jusqu'à l'infrastructure
              qui le fait tourner.
            </p>
            <p>
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
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
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
