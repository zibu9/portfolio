export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 px-4 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto w-full py-24">
        {/* Tag 
        <span className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Disponible pour des missions
        </span>*/}

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          KABUYA NSUNGULA
          <br />
          <span className="text-accent">Junior</span>
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-mono mb-6">
          Développeur Full Stack &amp; IT Systèmes
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
          Spécialisé en développement backend, je conçois des API robustes,
          des applications web et mobile, tout en maîtrisant les infrastructures
          système et réseau.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent-dark transition-colors duration-200"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors duration-200"
          >
            Me contacter
          </a>
        </div>

        {/* Tech line */}
        <div className="mt-16 flex flex-wrap gap-3">
          {["Vmware ESXi", "Ubuntu/Debian", "Laravel", "React", "Docker", "MySQL", "API REST"].map(
            (tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-800 px-3 py-1 rounded"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
