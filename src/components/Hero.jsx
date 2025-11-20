import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid and glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(147,51,234,0.25),transparent_40%)] blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
            >
              Empowering Your Career With Data, Digital & AI Skills
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-slate-300"
            >
              Start your journey with industry-level courses and services designed to help you learn faster, grow smarter, and build your future with the power of Data Analytics, Digital Marketing & AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#courses" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:brightness-110 transition">
                Start Learning
              </a>
              <a href="#services" className="px-6 py-3 rounded-xl border border-white/10 text-white/90 hover:text-white hover:border-white/30 transition">
                Explore Services
              </a>
            </motion.div>
          </div>

          <div className="relative h-[380px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            {/* Spline 3D scene */}
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
