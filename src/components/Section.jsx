export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-[0.15] pointer-events-none select-none">
        <div className="bg-premium h-full w-full" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight title-gradient">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-slate-300 max-w-3xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
