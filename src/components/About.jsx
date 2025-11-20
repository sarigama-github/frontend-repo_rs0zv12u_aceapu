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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Powering Careers & Businesses With Data, Digital & AI</h2>
            <p className="text-slate-300 mt-4 leading-relaxed">
              At N NextGen Analytics, we help students, job-seekers, and businesses grow with high-quality training and professional services. Our approach is simple: Practical skills, real projects, and future-ready learning.
            </p>
            <p className="text-slate-300 mt-3 leading-relaxed">
              Our expertise includes Data Analytics, Digital Marketing, and AI automation — helping you learn faster and helping businesses grow smarter.
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
            <h3 className="text-xl font-semibold text-white">Why Choose N NextGen Analytics?</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Real business datasets & practice tasks</li>
              <li>• Learn with AI-powered tools</li>
              <li>• Affordable courses starting at ₹499</li>
              <li>• Business services from ₹5000</li>
              <li>• Job-ready projects & portfolio</li>
              <li>• Certificate + Resume + Interview Support</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
