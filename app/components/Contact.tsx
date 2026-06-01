import CopyEmailButton from "./CopyEmailButton"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-white/6 bg-white/[0.015] p-12 md:p-20 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(16,185,129,0.07),transparent)]" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.12),transparent_70%)]" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_100%_100%,rgba(52,211,153,0.08),transparent_70%)]" />

          <div className="relative z-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-4">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                together.
              </span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-sm mx-auto text-sm leading-relaxed">
              Whether it&apos;s a project, a question, or just a hello — my inbox is always open.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <CopyEmailButton />
              <a
                href="https://github.com/eronaaaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 text-sm transition-all duration-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/erona-gashi-110b722a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 text-sm transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex items-center justify-between text-xs text-slate-800">
          <span>© 2026 Erona Gashi</span>
        </div>
      </div>
    </section>
  )
}
