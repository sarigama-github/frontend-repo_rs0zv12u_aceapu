import { Menu } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#courses', label: 'Courses' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#ai', label: 'AI' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">N NextGen</span> Analytics
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
          ))}
          <a href="#contact" className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-sm font-medium">
            Get Free Consultation
          </a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-slate-900/70 border-t border-white/10">
          {links.map(l => (
            <a key={l.href} href={l.href} className="block py-2 text-slate-200" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="inline-block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-sm font-medium" onClick={() => setOpen(false)}>
            Get Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
