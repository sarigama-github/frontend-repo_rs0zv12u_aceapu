import { motion } from 'framer-motion';
import { BarChart3, Megaphone, Bot } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Data Analytics Services',
    price: '₹5000',
    desc: 'Transform your business decisions with powerful dashboards, automated reports, and meaningful insights.',
    items: [
      'Power BI Dashboard',
      'Excel Automation',
      'SQL Reporting',
      'KPI Analysis',
      'Business Insights Report',
      'AI-driven data summaries',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing Services',
    price: '₹5000',
    desc: 'Boost your online presence and attract real customers with high-performance marketing strategies.',
    items: [
      'SEO Audit + Optimization',
      'Meta Ads Setup',
      'Google Ads Setup',
      'Keyword Strategy',
      'Social Media Content Plan',
      'AI-generated creative assets',
    ],
  },
  {
    icon: Bot,
    title: 'AI Business Automation',
    price: '₹5000',
    desc: 'Save time and grow faster with smart AI workflows and tools.',
    items: [
      'Chatbot Setup',
      'AI Reply Automation',
      'Lead Automation',
      'AI Dashboard Summary',
      'Workflow Design',
      'Training on usage',
    ],
  },
];

function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Our Services (₹5000 Each)
        </motion.h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Choose a package that delivers real outcomes with clear deliverables.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, price, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center text-cyan-300 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <span className="text-cyan-300 text-sm font-medium">{price}</span>
              </div>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{desc}</p>
              <ul className="mt-4 text-slate-300 text-sm space-y-2">
                {items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
