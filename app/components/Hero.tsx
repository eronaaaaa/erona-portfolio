export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_10%,rgba(16,185,129,0.10),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(52,211,153,0.05),transparent)]" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <h1 className="animate-fade-in-up-delay-1 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          <span className="text-white">Erona </span>
          <span className="bg-gradient-to-br from-emerald-400 via-emerald-300 to-emerald-600 bg-clip-text text-transparent">
            Gashi
          </span>
        </h1>

        <p className="animate-fade-in-up-delay-2 text-xl md:text-2xl text-slate-400 max-w-xl mx-auto mb-4 leading-relaxed">
          Frontend developer who can handle{" "}
          <span className="text-slate-200 font-medium">the full picture.</span>
        </p>

        <p className="animate-fade-in-up-delay-2 text-slate-600 max-w-md mx-auto mb-12 text-sm leading-relaxed">
          Building clean, performant web experiences — from pixel-perfect UIs to full-stack solutions.
        </p>

        <div className="animate-fade-in-up-delay-3 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(16,185,129,0.45)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 text-sm transition-all duration-200 hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>

        <div className="animate-fade-in-up-delay-3 mt-5">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-emerald-400 transition-colors group"
          >
            <svg
              className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-700 to-transparent" />
      </div>
    </section>
  )
}
