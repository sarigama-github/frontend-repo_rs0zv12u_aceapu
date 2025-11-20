import { motion } from 'framer-motion';
import { Mail, Send, PhoneCall, MapPin } from 'lucide-react';

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
          Contact Us
        </motion.h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">We'd love to hear from you. Fill out the form or reach us directly.</p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 p-6 bg-slate-900/60">
            <div className="grid grid-cols-1 gap-4">
              <input className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Name" required />
              <input type="email" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Email" required />
              <input className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Phone" />
              <textarea rows="5" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Message" />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-medium hover:brightness-110 transition">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 p-6 bg-slate-900/60 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg">Reach Us</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                <a href="tel:+91" className="flex items-center gap-3 hover:text-white transition"><PhoneCall className="w-5 h-5"/> Phone: Add</a>
                <a href="mailto:" className="flex items-center gap-3 hover:text-white transition"><Mail className="w-5 h-5"/> Email: Add</a>
                <p className="flex items-center gap-3"><MapPin className="w-5 h-5"/> Address: Add</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-slate-400 text-sm">Social Media</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <a className="px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:border-white/30 hover:text-white" href="#">Facebook</a>
                <a className="px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:border-white/30 hover:text-white" href="#">Instagram</a>
                <a className="px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:border-white/30 hover:text-white" href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
