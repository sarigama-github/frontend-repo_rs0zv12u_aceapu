import { motion } from 'framer-motion';
import { Brain, LineChart, Workflow } from 'lucide-react';

const features = [
  { icon: Brain, title: 'AI-Powered Insights', desc: 'Surface patterns and opportunities faster with AI-assisted analysis.' },
  { icon: LineChart, title: 'Predictive Analytics', desc: 'Forecast demand, CLV, and churn to guide smarter investments.' },
  { icon: Workflow, title: 'Marketing Automation with AI', desc: 'Automate reporting, creative testing, lead scoring, and more.' },
];

function AIFeatures() {
  return (
    <section id="ai" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          AI Features
        </motion.h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Built-in intelligence to accelerate decisions and efficiency.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-300 mb-4">
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

export default AIFeatures;
