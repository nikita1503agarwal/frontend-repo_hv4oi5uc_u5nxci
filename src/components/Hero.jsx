export default function Hero() {
  return (
    <section id="hero" className="relative h-[88vh] min-h-[620px] w-full overflow-hidden bg-premium">
      {/* Layered premium coder background */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* code stripes and radial glows */}
        <div className="absolute inset-0 bg-code-stripes" />
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.25), transparent)' }} />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.22), transparent)' }} />
        {/* flowing code marquee */}
        <div aria-hidden className="absolute bottom-14 left-0 right-0 marquee">
          <div className="marquee-track gap-3 px-6">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="code-pill">{"const fn = (x) => x ** 2; • await fetch('/api'); • map(({ id }) => id)"}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end md:items-center pb-10 md:pb-0">
        <div className="card-glass p-6 md:p-8 rounded-2xl max-w-2xl animate-in" style={{ animationDuration: '500ms' }}>
          <span className="inline-flex items-center rounded-full bg-white/10 text-white text-[11px] md:text-xs font-medium px-2.5 py-1 mb-4 border border-white/10 backdrop-blur" role="note">
            Developer • Problem Solver • Class of 2025
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight title-gradient">
            Nilanjan Nayak
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200 text-sm sm:text-base md:text-lg">
            Building polished web and mobile experiences with a strong foundation in algorithms, data structures, and modern UI — with hands-on work in AI and data visualization.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary hover-glow">Contact Me</a>
            <a href="https://www.linkedin.com/in/nilanjan-nayak-73b475322" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
          </div>
          {/* floating code badges */}
          <div className="mt-6 hidden sm:flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'FastAPI', 'MongoDB', 'GraphQL', 'AWS'].map((t) => (
              <span key={t} className="tag-chip">{t}</span>
            ))}
          </div>
        </div>

        {/* Decorative floating badges */}
        <div className="absolute right-6 top-16 hidden md:block" aria-hidden>
          <div className="card-glass px-3 py-2 rounded-xl animate-[floatSlow_7s_ease-in-out_infinite]">
            <span className="text-xs text-slate-200">npm i create-impact</span>
          </div>
        </div>
        <div className="absolute right-24 top-44 hidden lg:block" aria-hidden>
          <div className="card-glass px-3 py-2 rounded-xl animate-[floatSlow_9s_ease-in-out_infinite]">
            <span className="text-xs text-slate-200">git commit -m "ship premium"</span>
          </div>
        </div>
      </div>
    </section>
  );
}
