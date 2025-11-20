import nnaLogo from '../assets/nna-logo.svg';

function Footer() {
  const quickLinks = ['Home','About','Courses','Services','Contact','FAQs'];
  const policies = ['Privacy Policy','Terms & Conditions','Refund Policy'];

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={nnaLogo} alt="NNA" className="w-8 h-8 rounded-lg" />
              <p className="text-white font-semibold text-lg">NNA</p>
            </div>
            <p className="text-slate-400 mt-2 text-sm">Building Skills. Building Businesses. Building the Future.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white font-medium mb-3">Quick Links</p>
              <div className="flex flex-col gap-2">
                {quickLinks.map(l => (
                  <a key={l} href={`#${l.toLowerCase()}`} className="text-slate-300 hover:text-white transition text-sm">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-medium mb-3">Policies</p>
              <div className="flex flex-col gap-2">
                {policies.map(l => (
                  <a key={l} href="#" className="text-slate-300 hover:text-white transition text-sm">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="text-slate-300 text-sm">Focus</p>
            <p className="text-white mt-2">Data • Digital • AI</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-slate-400 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} NNA. All rights reserved.</p>
          <p>Data • Digital • AI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
