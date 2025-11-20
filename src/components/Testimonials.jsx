import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Olivia, SaaS Founder',
    quote: 'Clear dashboards and a data-first ad strategy cut our CAC by 35% while growing pipeline.',
    rating: 5,
  },
  {
    name: 'Marcus, E‑commerce Lead',
    quote: 'We finally see what drives sales. The testing roadmap and automation were game changers.',
    rating: 5,
  },
  {
    name: 'Priya, COO',
    quote: 'Fast, insightful, and pragmatic. Brought AI into our workflows without disrupting the team.',
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Client Testimonials
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-200 mt-4">“{t.quote}”</p>
              <p className="text-slate-400 mt-3 text-sm">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
