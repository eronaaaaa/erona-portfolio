const experience = [
  {
    company: "Gjirafa Inc.",
    role: "Front End Developer",
    location: "Prishtina",
    start: "Oct 2024",
    end: "Present",
    description:
      "Coded using React, React Native, and TypeScript to develop features for both mobile and desktop platforms.",
    current: true,
  },
  {
    company: "PitagorAS Academy",
    role: "Kids Programming Tutor",
    location: "Podujevo, Kosovo",
    start: "Sep 2022",
    end: "Jun 2024",
    description:
      "Enhanced student comprehension by incorporating real-world examples and visual aids in programming lessons.",
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/10 to-transparent" />

          <div className="space-y-12 pl-8">
            {experience.map((job, i) => (
              <div key={i} className="relative group">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 ${
                    job.current
                      ? "bg-emerald-400 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                      : "bg-transparent border-slate-700 group-hover:border-emerald-500"
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                    <p className="text-sm text-emerald-400">{job.role}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{job.location}</p>
                  </div>
                  <div className="flex items-center gap-2 sm:text-right shrink-0">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border ${
                        job.current
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-white/8 bg-white/[0.03] text-slate-500"
                      }`}
                    >
                      {job.start} — {job.end}
                    </span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
