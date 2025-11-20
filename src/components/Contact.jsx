import { motion } from 'framer-motion';
import { Mail, Send, PhoneCall } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Let’s Talk
        </motion.h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Get a free consultation. Share your goals and I’ll map out a data-first plan to hit them.</p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 p-6 bg-slate-900/60">
            <div className="grid grid-cols-1 gap-4">
              <input className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Name" required />
              <input type="email" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Email" required />
              <textarea rows="5" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Tell me about your project" />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-medium hover:brightness-110 transition">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 p-6 bg-slate-900/60 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg">Contact</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                <a href="mailto:hello@analyticspro.com" className="flex items-center gap-3 hover:text-white transition"><Mail className="w-5 h-5"/> hello@analyticspro.com</a>
                <a href="https://wa.me/1234567890" target="_blank" className="flex items-center gap-3 hover:text-white transition"><PhoneCall className="w-5 h-5"/> WhatsApp</a>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-slate-400 text-sm">Also on</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <a className="px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:border-white/30 hover:text-white" href="#">LinkedIn</a>
                <a className="px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:border-white/30 hover:text-white" href="#">Twitter</a>
                <a className="px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:border-white/30 hover:text-white" href="#">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
