export function ProjectCard({ title, tags = [], description }) {
  return (
    <div className="group card-glass rounded-xl p-5 hover-glow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <p className="mt-1 text-slate-300 text-sm">{description}</p>
        </div>
        <div className="h-10 w-10 rounded-lg" style={{
          background: 'conic-gradient(from 180deg at 50% 50%, #6366f1, #8b5cf6, #d946ef, #22d3ee, #6366f1)',
          opacity: 0.9,
          filter: 'drop-shadow(0 2px 12px rgba(99,102,241,0.45))'
        }} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="tag-chip">{t}</span>
        ))}
      </div>
    </div>
  );
}

export function TestimonialCard({ quote, author, role }) {
  return (
    <div className="card-glass rounded-xl p-5">
      <p className="text-slate-100 leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm text-slate-300">— {author}, {role}</div>
    </div>
  );
}
