import { motion } from 'framer-motion';

function GrowthScene() {
  return (
    <svg viewBox="0 0 1200 800" className="w-full h-full">
      <defs>
        <linearGradient id="gradNeon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="gradPink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="24" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="bgHalo" cx="60%" cy="35%" r="60%">
          <stop offset="0%" stopColor="rgba(99,102,241,0.25)" />
          <stop offset="60%" stopColor="rgba(56,189,248,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Subtle halo glow behind graphics */}
      <rect x="0" y="0" width="1200" height="800" fill="url(#bgHalo)" />

      {/* Futuristic grid */}
      <g opacity="0.22">
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={`v-${i}`} x1={50 + i * 46} y1={60} x2={50 + i * 46} y2={740} stroke="#334155" strokeWidth="1" />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={`h-${i}`} x1={50} y1={80 + i * 42} x2={1150} y2={80 + i * 42} stroke="#334155" strokeWidth="1" />
        ))}
      </g>

      {/* Rising line chart */}
      <path d="M120 640 L260 590 L340 600 L420 540 L520 520 L600 470 L700 430 L820 380 L960 330 L1080 300" fill="none" stroke="url(#gradNeon)" strokeWidth="6" filter="url(#softGlow)" />

      {/* Data points */}
      {[
        [120,640],[260,590],[340,600],[420,540],[520,520],[600,470],[700,430],[820,380],[960,330],[1080,300]
      ].map(([x,y], idx) => (
        <g key={idx}>
          <circle cx={x} cy={y} r="5" fill="#22d3ee" />
          <circle cx={x} cy={y} r="12" fill="#22d3ee" opacity="0.18" />
        </g>
      ))}

      {/* Vertical bars (market growth) */}
      <g>
        {[...Array(8)].map((_, i) => {
          const baseX = 170 + i * 110;
          const height = 40 + i * 28 + (i % 2 ? 16 : 0);
          return (
            <g key={i} transform={`translate(${baseX}, ${640 - height})`}>
              <rect x="-18" y="0" width="36" height={height} rx="8" fill="url(#gradPink)" opacity="0.9" />
              <rect x="-18" y={height - 8} width="36" height="8" fill="#22d3ee" opacity="0.6" />
            </g>
          );
        })}
      </g>

      {/* Upward arrows (momentum) */}
      <g>
        {[
          { x: 500, y: 520, h: 120 },
          { x: 780, y: 420, h: 160 },
          { x: 980, y: 360, h: 180 }
        ].map((a, i) => (
          <g key={i} transform={`translate(${a.x}, ${a.y})`} filter="url(#softGlow)">
            <path d={`M0 0 L0 ${-a.h} M-14 ${-a.h+22} L0 ${-a.h} L14 ${-a.h+22}`} stroke="url(#gradNeon)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        ))}
      </g>

      {/* Learner silhouettes (abstract) */}
      <g opacity="0.95">
        {[
          { x: 220, y: 680, s: 1.0 },
          { x: 300, y: 690, s: 0.9 },
          { x: 380, y: 675, s: 1.1 },
          { x: 460, y: 690, s: 0.95 }
        ].map((p, i) => (
          <g key={i} transform={`translate(${p.x}, ${p.y}) scale(${p.s})`}>
            {/* Head */}
            <circle cx="0" cy="-26" r="14" fill="#a78bfa" opacity="0.85" />
            {/* Body */}
            <rect x="-10" y="-10" width="20" height="38" rx="10" fill="#60a5fa" opacity="0.85" />
            {/* Base glow */}
            <ellipse cx="0" cy="24" rx="26" ry="8" fill="#0ea5e9" opacity="0.25" />
          </g>
        ))}
      </g>

      {/* Floating HUD cards */}
      <g opacity="0.9">
        <g transform="translate(860, 120)" filter="url(#softGlow)">
          <rect x="0" y="0" width="260" height="120" rx="16" fill="#0b1220" stroke="#334155" />
          <text x="20" y="38" fill="#94a3b8" fontSize="20" fontFamily="Inter, ui-sans-serif">Engagement</text>
          <rect x="20" y="56" width="200" height="12" rx="6" fill="#1f2940" />
          <rect x="20" y="56" width="138" height="12" rx="6" fill="url(#gradNeon)" />
          <rect x="20" y="78" width="200" height="12" rx="6" fill="#1f2940" />
          <rect x="20" y="78" width="170" height="12" rx="6" fill="url(#gradPink)" />
        </g>

        <g transform="translate(640, 220)" filter="url(#softGlow)">
          <rect x="0" y="0" width="200" height="110" rx="16" fill="#0b1220" stroke="#334155" />
          <polyline points="16,84 44,76 70,80 98,62 126,56 152,40 180,28" fill="none" stroke="url(#gradNeon)" strokeWidth="4" />
          {[[16,84],[44,76],[70,80],[98,62],[126,56],[152,40],[180,28]].map((d,i)=>(
            <circle key={i} cx={d[0]} cy={d[1]} r="4" fill="#22d3ee" />
          ))}
        </g>
      </g>

    </svg>
  );
}

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
              Empowering Growth in Students and Markets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-slate-300"
            >
              Learn in-demand skills, visualize progress, and level up your career. Futuristic analytics meet real learning outcomes — built for momentum.
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

          <div className="relative h-[380px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950/60">
            {/* Replaced purple sphere scene with a growth-focused analytics visual */}
            <GrowthScene />
            {/* Overlay glows to blend into the dark background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_70%_30%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_300px_at_30%_70%,rgba(167,139,250,0.08),transparent)] mix-blend-screen"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
