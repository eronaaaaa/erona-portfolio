const skills = [
  {
    category: "Frontend",
    items: ["React", "React Native", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Expo", "Prisma"],
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white">About</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-5">
              I'm a frontend-focused developer with a genuine love for building
              things that work beautifully — and{" "}
              <em className="not-italic text-emerald-400">reliably</em>. I care
              about user experience as much as developer experience.
            </p>
            <p className="text-slate-500 leading-relaxed mb-5">
              I'm comfortable across the full stack, but the frontend is where I
              come alive. I obsess over details: smooth transitions, accessible
              markup, fast load times, clean component architecture.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              When I'm not writing code I'm thinking about design systems,
              performance budgets, and how to make complex things feel simple.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="mailto:eronegashi00@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                eronegashi00@gmail.com
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/erona-gashi-110b722a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors group"
              >
                LinkedIn
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/[0.03] border border-white/8 text-slate-400 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
