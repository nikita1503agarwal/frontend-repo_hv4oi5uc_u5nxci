import { useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code2, Terminal, Cpu, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  // 3D tilt using mouse position
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useTransform(my, [0, 1], [12, -12]);
  const rotateY = useTransform(mx, [0, 1], [-18, 18]);
  const glowX = useTransform(mx, [0, 1], [10, 90]);
  const glowY = useTransform(my, [0, 1], [10, 90]);

  const codeLines = useMemo(
    () => [
      "// portfolio.hero.tsx",
      "import { craft, impact } from 'life';",
      "const stack = ['React', 'Tailwind', 'FastAPI', 'MongoDB'];",
      "const build = async (idea) => {",
      "  const result = await ship(idea).with(performance).polish();",
      "  return result;",
      "};",
      "export default () => build('premium coder vibes');",
    ],
    []
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
  };

  return (
    <section id="hero" className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-premium">
      {/* Layered coder background */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* code stripes and radial glows */}
        <div className="absolute inset-0 bg-code-stripes" />
        <div
          className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.25), transparent)' }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.22), transparent)' }}
        />
        {/* flowing code marquee */}
        <div aria-hidden className="absolute bottom-12 left-0 right-0 marquee">
          <div className="marquee-track gap-3 px-6">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="code-pill">{"const fn = (x) => x ** 2; • await fetch('/api'); • map(({ id }) => id)"}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Intro copy and actions */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full bg-white/10 text-white text-[11px] md:text-xs font-medium px-2.5 py-1 mb-4 border border-white/10 backdrop-blur" role="note">
              Developer • Problem Solver • Class of 2025
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight title-gradient">
              Nilanjan Nayak
            </h1>
            <p className="mt-4 max-w-xl text-slate-200 text-sm sm:text-base md:text-lg">
              Building polished web and mobile experiences with a strong foundation in algorithms, data structures, and modern UI — with hands-on work in AI and data visualization.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary hover-glow">Contact Me</a>
              <a href="https://www.linkedin.com/in/nilanjan-nayak-73b475322" target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="#projects" className="btn-secondary inline-flex items-center gap-2">
                <Github size={18} /> Projects
              </a>
            </div>

            {/* floating tech chips */}
            <div className="mt-6 hidden sm:flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'FastAPI', 'MongoDB', 'GraphQL', 'AWS'].map((t) => (
                <span key={t} className="tag-chip">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: 3D coder canvas */}
          <div className="order-1 lg:order-2">
            <motion.div
              onMouseMove={handleMouseMove}
              className="relative mx-auto w-full max-w-[620px] aspect-[5/3] rounded-3xl"
              style={{ perspective: 1000 }}
              aria-label="Interactive coder showcase"
            >
              <motion.div
                className="relative h-full w-full rounded-3xl p-0.5"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              >
                {/* Outer glow frame */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: useTransform(
                      [glowX, glowY],
                      ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, rgba(99,102,241,0.35), transparent 55%)`
                    ),
                    transform: 'translateZ(30px)'
                  }}
                />

                {/* Main glass panel */}
                <div className="relative h-full w-full rounded-3xl card-glass border border-white/10 overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
                  {/* header bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Code2 size={16} /> index.tsx
                    </div>
                  </div>

                  {/* code area */}
                  <div className="relative px-5 py-4">
                    <pre className="text-[12.5px] leading-6 text-slate-200/95 font-mono select-none">
{codeLines.map((l, i) => (
  <div key={i} className="flex">
    <span className="w-8 shrink-0 text-right pr-3 text-slate-500">{i + 1}</span>
    <code className="text-slate-200">{l}</code>
  </div>
))}
                    </pre>

                    {/* terminal pill */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] text-slate-200" aria-hidden>
                      <Terminal size={14} /> npm run dev — ready on :3000
                    </div>
                  </div>
                </div>

                {/* Floating chips in 3D */}
                <motion.div
                  className="absolute -left-6 -top-6 card-glass rounded-xl px-3 py-2 text-xs text-slate-200 hidden md:flex items-center gap-2"
                  style={{ transform: 'translateZ(40px)' }}
                  aria-hidden
                >
                  <Cpu size={14} /> DSA • System Design
                </motion.div>

                <motion.div
                  className="absolute -right-4 top-10 card-glass rounded-xl px-3 py-2 text-xs text-slate-200 hidden md:flex items-center gap-2"
                  style={{ transform: 'translateZ(60px)' }}
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Deploy-ready
                </motion.div>

                <motion.div
                  className="absolute left-10 -bottom-4 card-glass rounded-xl px-3 py-2 text-xs text-slate-200 hidden md:flex items-center gap-2"
                  style={{ transform: 'translateZ(52px)' }}
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-sky-400" /> Clean UI • A11y
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
