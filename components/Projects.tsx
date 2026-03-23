interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github?: string;
  type: string;
}

const projects: Project[] = [
  {
    title: "ScanGoPass",
    subtitle: "Système de gestion de billets",
    description:
      "Application complète de gestion et validation de billets électroniques avec scan QR code. Permet la création d'événements, la vente de billets, et le contrôle d'accès via scan en temps réel.",
    stack: ["Laravel", "React", "MySQL", "API REST", "QR Code", "JWT"],
    github: "https://scangopass.com",
    type: "Backend / Web App",
  },
  {
    title: "AMB-CARGO",
    subtitle: "Logiciel de gestion logistique",
    description:
      "Logiciel métier pour la gestion des opérations logistiques : suivi des colis, gestion des clients, facturation et tableaux de bord analytiques pour le pilotage de l'activité.",
    stack: ["Laravel", "React", "MySQL", "Inertia", "API REST"],
    github: "https://github.com/zibu9",
    type: "Application web",
  },
  {
    title: "AAA + CRM",
    subtitle: "Automatisation abonnement internet",
    description:
      "Système d'automatisation de la gestion des abonnements internet couplé à un CRM. Intègre la gestion des clients, l'activation/désactivation automatique des accès et le suivi des paiements.",
    stack: ["Linux", "Ubuntu", "FreeRADIUS", "Laravel", "PHP", "MySQL", "PPPoE", "API REST", "Mikrotik"],
    github: "https://github.com/zibu9",
    type: "Automatisation / CRM",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
            Projets
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Réalisations
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="flex flex-col bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-accent/30 dark:hover:border-accent/30 transition-colors duration-200"
            >
              {/* Top accent + number */}
              <div className="h-1 bg-accent" />
              <div className="p-6 flex flex-col flex-1">
                {/* Project number + type */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono text-accent bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent dark:text-gray-500 dark:hover:text-accent transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Voir sur GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
