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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600" />
          <span className="font-semibold tracking-tight">Nilanjan Nayak</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/nilanjan-nayak-73b475322"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="#"
            onClick={(e)=>{e.preventDefault();}}
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white text-sm font-medium px-3 py-2 shadow hover:bg-blue-700"
          >
            <Download size={16} /> Resume
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left py-2 text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/nilanjan-nayak-73b475322"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2 text-gray-700 hover:text-gray-900"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="#"
              onClick={(e)=>{e.preventDefault();}}
              className="inline-flex items-center gap-2 py-2 text-gray-700 hover:text-gray-900"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
