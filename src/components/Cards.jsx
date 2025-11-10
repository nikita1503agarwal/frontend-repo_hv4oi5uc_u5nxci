export function ProjectCard({ title, tags = [], description }) {
  return (
    <div className="group bg-white border border-black/5 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600 text-sm">{description}</p>
        </div>
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 opacity-80 group-hover:opacity-100" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
        ))}
      </div>
    </div>
  );
}

export function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm">
      <p className="text-gray-800 leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm text-gray-600">— {author}, {role}</div>
    </div>
  );
}
