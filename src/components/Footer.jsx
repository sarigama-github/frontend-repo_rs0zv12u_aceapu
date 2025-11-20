function Footer() {
  const links = [
    'About Us','Our Courses','Our Services','Career Support','Contact Us','Privacy Policy','Terms & Conditions','Refund Policy','FAQs','Student Reviews'
  ];
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-semibold text-lg">DataVision Academy</p>
            <p className="text-slate-400 mt-2 text-sm">Empowering learners and businesses with Data Analytics, AI, and Digital Marketing.</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map(l => (
              <a key={l} href="#" className="text-slate-300 hover:text-white transition text-sm">{l}</a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-slate-400 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} DataVision Academy. All rights reserved.</p>
          <p>Built with AI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
