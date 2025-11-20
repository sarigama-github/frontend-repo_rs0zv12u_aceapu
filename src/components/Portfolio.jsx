import { motion } from 'framer-motion';
import { BarChart2, Rocket, Target } from 'lucide-react';

const projects = [
  {
    icon: BarChart2,
    title: 'E-commerce Sales Dashboard',
    desc: 'Built in Power BI with cohort analysis and product mix insights. +22% MoM revenue after rollout.',
  },
  {
    icon: Rocket,
    title: 'Lead Gen Campaign Scale',
    desc: 'Scaled Google & Meta campaigns to 3x leads at -28% CPL with automation & creative testing.',
  },
  {
    icon: Target,
    title: 'SEO Growth Sprint',
    desc: 'Technical fixes + content strategy delivered +140% organic traffic in 6 months.',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Portfolio & Results
        </motion.h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">A selection of case studies, dashboards, and campaign outcomes.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-white/20"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-300 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
