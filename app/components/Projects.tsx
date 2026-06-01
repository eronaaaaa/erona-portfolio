import ProjectImage from "./ProjectImage"

const featured = [
  {
    name: "Task Tracker",
    description:
      "A task management application for tracking and organizing work items across projects, with real-time updates and intuitive UI.",
    github: "https://github.com/eronaaaaa/task-tracker",
    live: null,
    tags: ["Next.js", "Node.js", "TypeScript"],
    screenshot: "/task-tracker.png",
    gradient: "from-blue-500/15 via-indigo-500/5 to-transparent",
    accent: "text-blue-400",
  },
  {
    name: "Sales Track Academy",
    description:
      "A sales tracking platform built for academy environments, enabling teams to monitor performance metrics and progress.",
    github: "https://github.com/eronaaaaa/SalesTrackAcademy",
    live: null,
    tags: ["Next.js", "Node.js", "Express", "TypeScript"],
    screenshot: "/sales-track-academy.png",
    gradient: "from-orange-500/15 via-amber-500/5 to-transparent",
    accent: "text-orange-400",
  },
  {
    name: "Skin Care",
    description:
      "An e-commerce web app for skincare products, built with vanilla JavaScript, HTML, and CSS — no frameworks, no dependencies.",
    github: "https://github.com/eronaaaaa/Skin-Care-Project",
    live: null,
    tags: ["JavaScript", "HTML", "CSS"],
    screenshot: "/skin-care.png",
    gradient: "from-pink-500/15 via-rose-500/5 to-transparent",
    accent: "text-pink-400",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </div>
        <p className="text-slate-600 text-sm mb-16">
          A selection of work I&apos;m proud of.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-2xl border border-white/6 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              <ProjectImage
                src={project.screenshot}
                name={project.name}
                gradient={project.gradient}
                accent={project.accent}
              />

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 ml-3 shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                        aria-label="Live demo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-300 transition-colors"
                      aria-label="GitHub repo"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/eronaaaaa?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-400 transition-colors group"
          >
            View all repositories on GitHub
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
