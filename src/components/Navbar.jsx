import { Menu, X, Download, Linkedin } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "photography", label: "Photography" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg" style={{
            background: "conic-gradient(from 180deg at 50% 50%, #6366f1, #8b5cf6, #d946ef, #22d3ee, #6366f1)",
            filter: "drop-shadow(0 0 12px rgba(99,102,241,0.45))"
          }} />
          <span className="font-semibold tracking-tight title-gradient">Nilanjan Nayak</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/nilanjan-nayak-73b475322"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="#"
            onClick={(e)=>{e.preventDefault();}}
            className="btn-primary"
          >
            <Download size={16} className="mr-2" /> Resume
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md bg-white/5 border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left py-2 text-slate-200 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/nilanjan-nayak-73b475322"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2 text-slate-200 hover:text-white"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="#"
              onClick={(e)=>{e.preventDefault();}}
              className="inline-flex items-center gap-2 py-2 text-slate-200 hover:text-white"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
