export default function Timeline({ items }) {
  return (
    <ol className="relative border-l border-white/10">
      {items.map((it, i) => (
        <li key={i} className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white text-xs card-glass">{i+1}</span>
          <h3 className="text-lg font-semibold text-slate-100">{it.title}</h3>
          <p className="text-sm text-slate-300">{it.period}</p>
          <p className="mt-2 text-slate-200/90">{it.description}</p>
        </li>
      ))}
    </ol>
  );
}
