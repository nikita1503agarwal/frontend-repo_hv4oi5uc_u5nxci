export default function Gallery({ images }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {images.map((src, i) => (
        <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg bg-white/5 border border-white/10">
          <img src={src} alt="Photography" className="h-full w-full object-cover hover:scale-105 transition-transform" />
        </div>
      ))}
    </div>
  );
}
