interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

const groups: SkillGroup[] = [
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Laravel / PHP",
      "API REST",
      "MySQL / SQL",
      "Node.js",
      "Authentification JWT",
      "Architecture MVC",
    ],
  },
  {
    title: "Frontend",
    icon: "🖥️",
    skills: [
      "React",
      "React Native",
      "TypeScript / JavaScript",
      "Tailwind CSS",
      "Next.js",
      "HTML / CSS",
    ],
  },
  {
    title: "Systèmes & Réseaux",
    icon: "🔧",
    skills: [
      "Linux (Debian/Ubuntu)",
      "Docker / Docker Compose",
      "Configuration réseau",
      "Scripts Bash",
      "Virtualisation",
      "Administration serveur",
    ],
  },
  {
    title: "Outils & Méthodes",
    icon: "🛠️",
    skills: [
      "Git / GitHub",
      "Postman",
      "VS Code",
      "Figma (bases)",
      "Méthodologie Agile",
      "CI/CD (bases)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
            Compétences
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Stack technique
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="p-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">{group.icon}</span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
