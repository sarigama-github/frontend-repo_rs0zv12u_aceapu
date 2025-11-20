import { motion } from 'framer-motion';
import { BarChart3, Megaphone, Search, Share2, Bot, TrendingUp } from 'lucide-react';

const services = [
  { icon: BarChart3, title: 'Data Analytics & Reporting', desc: 'Interactive dashboards, KPI tracking, and insight generation using Power BI, Excel, SQL, and Python.' },
  { icon: Megaphone, title: 'Google Ads & Meta Ads Management', desc: 'End-to-end campaign setup, optimization, and scaling across Google & Meta ecosystems.' },
  { icon: Search, title: 'SEO & Website Optimization', desc: 'Technical SEO, on-page/off-page strategies, and Core Web Vitals improvements.' },
  { icon: Share2, title: 'Social Media Marketing', desc: 'Content strategy, engagement growth, and performance analytics across major platforms.' },
  { icon: Bot, title: 'AI Automation & Chatbot Development', desc: 'Automations, lead qualification, and customer support using AI agents and chatbots.' },
  { icon: TrendingUp, title: 'Business Growth Strategy', desc: 'Data-backed go-to-market plans, funnel optimization, and experimentation frameworks.' },
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
          Services
        </motion.h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Practical programs that drive measurable growth across acquisition, retention, and revenue.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
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
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
