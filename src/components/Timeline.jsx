export default function Timeline({ items }) {
  return (
    <ol className="relative border-l border-gray-200">
      {items.map((it, i) => (
        <li key={i} className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs">{i+1}</span>
          <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
          <p className="text-sm text-gray-500">{it.period}</p>
          <p className="mt-2 text-gray-700">{it.description}</p>
        </li>
      ))}
    </ol>
  );
}
