import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-14">
        <div>
          <span className="inline-flex items-center rounded-full bg-black/80 text-white text-xs font-medium px-2 py-1 mb-4">Computer Science • Class of 2025</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Nilanjan Nayak
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700 text-base sm:text-lg">
            Enthusiastic and multi-skilled developer specializing in web, mobile, and data-driven experiences. Strong foundation in algorithms, data structures, and modern UI engineering — with hands-on work in generative AI and data visualization.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow hover:bg-blue-700">Contact Me</a>
            <a href="https://www.linkedin.com/in/nilanjan-nayak-73b475322" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-gray-900 text-white text-sm font-medium px-4 py-2 shadow hover:bg-black">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
