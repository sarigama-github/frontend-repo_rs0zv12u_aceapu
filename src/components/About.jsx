import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 p-8 bg-slate-900/60"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="text-slate-300 mt-4 leading-relaxed">
              I’m a Data Analyst & Digital Marketer helping brands turn data into growth. I combine analytics, experimentation, and AI to design campaigns and optimize funnels across the full customer journey.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['Power BI','Excel','SQL','Python','Google Ads','Meta Ads','AI Tools','Automation'].map((s) => (
                <div key={s} className="rounded-lg border border-white/10 bg-slate-800/40 px-3 py-2 text-slate-200">{s}</div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 p-8 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-slate-900/40"
          >
            <h3 className="text-xl font-semibold text-white">What I bring</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Actionable dashboards that align teams around KPIs</li>
              <li>• Efficient ad spend with structured testing and automation</li>
              <li>• SEO and web performance improvements that compound</li>
              <li>• AI-first workflows that save time and increase output</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
