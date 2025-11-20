import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronDown, CheckCircle2 } from 'lucide-react';

const shortCourses = [
  {
    title: 'Excel Basics to Advanced – ₹499',
    short: 'Learn Excel from scratch and become job-ready with formulas, dashboards & automation.',
    skills: ['Basic to Advanced Excel','Pivot Table','VLOOKUP, XLOOKUP','Charts & Dashboard','Data Cleaning','Excel Shortcuts'],
    brochure: ['Duration: 3 Hours','Assignments: 2','Dashboard Project: 1','Lifetime Notes Included','Certificate Included'],
    insights: 'This course helps beginners quickly master Excel and prepare for data or office roles. Perfect for students, beginners & working professionals.'
  },
  {
    title: 'SQL for Beginners – ₹499',
    short: 'Master SQL essentials and learn how to extract & analyze data effectively.',
    skills: ['SELECT, WHERE, GROUP BY','JOINS','Subqueries','Aggregations','Basic Data Cleaning','Real-world business queries'],
    brochure: ['Duration: 3 Hours','Exercises: 15+','Business Case Study Included','Certificate Included'],
    insights: 'Designed for beginners who want database and analytical job roles.'
  },
  {
    title: 'Power BI Dashboard Mastery – ₹499',
    short: 'Create interactive dashboards and learn BI concepts using real business datasets.',
    skills: ['Data Modeling','Power Query','DAX Formulas','KPI Cards','Interactive Visuals','Publishing Reports'],
    brochure: ['Duration: 4 Hours','Dashboard Project: 1','Dataset Included','Certificate Included'],
    insights: 'Perfect for Data Analyst job roles and portfolio building.'
  },
  {
    title: 'SEO Basics Crash Course – ₹499',
    short: 'Learn SEO strategies that help websites rank higher on Google.',
    skills: ['Keywords Research','On-Page SEO','Off-page Basics','Technical SEO','SEO Tools','AI SEO'],
    brochure: ['Duration: 2 Hours','Tools Included','Optimized Template','Certificate Included'],
    insights: 'Beginner-friendly and perfect for digital marketing learners.'
  },
  {
    title: 'Meta Ads for Beginners – ₹499',
    short: 'Learn how to run Facebook & Instagram Ads effectively.',
    skills: ['Campaign Setup','Audience Targeting','Budget Plan','Retargeting Ads','High-converting Creatives','AI Ad Copy'],
    brochure: ['Duration: 2 Hours','3 Ad Templates','Strategy Guide','Certificate Included'],
    insights: 'Helps anyone start advertising for businesses or freelancing.'
  },
  {
    title: 'Google Ads Crash Course – ₹499',
    short: 'Master the essentials of Google Ads quickly and effectively.',
    skills: ['Campaign Types','Keyword Strategy','Ad Groups','Landing Pages','AI Optimization','Performance Tracking'],
    brochure: ['Duration: 2 Hours','Live Demo','Templates Included','Certificate Included'],
    insights: 'Great for business owners & marketing professionals.'
  },
];

function Toggle({ label, open, onClick }) {
  return (
    <button onClick={onClick} className="w-full flex items-center justify-between rounded-lg border border-white/10 bg-slate-800/40 px-4 py-2 text-left text-slate-200 hover:border-white/20">
      <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-cyan-300" /> {label}</span>
      <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
  );
}

function Courses() {
  const [openIdx, setOpenIdx] = useState({});
  const toggle = (i, key) => setOpenIdx((s) => ({ ...s, [i]: s[i] === key ? null : key }));

  return (
    <section id="courses" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Courses (₹499 Each)
        </motion.h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">These are short, affordable, skill-based courses perfect for beginners.</p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shortCourses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{c.short}</p>

              <div className="mt-4 space-y-2">
                <Toggle label="Skills Covered" open={openIdx[i]==='skills'} onClick={() => toggle(i, 'skills')} />
                <AnimatePresence initial={false}>
                  {openIdx[i]==='skills' && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-2 mt-2 space-y-1 text-sm text-slate-300">
                      {c.skills.map(s => (
                        <li key={s} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5"/> {s}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <Toggle label="Course Brochure" open={openIdx[i]==='brochure'} onClick={() => toggle(i, 'brochure')} />
                <AnimatePresence initial={false}>
                  {openIdx[i]==='brochure' && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-2 mt-2 space-y-1 text-sm text-slate-300">
                      {c.brochure.map(b => (
                        <li key={b} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-purple-300 mt-0.5"/> {b}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <Toggle label="Course Insights" open={openIdx[i]==='insights'} onClick={() => toggle(i, 'insights')} />
                <AnimatePresence initial={false}>
                  {openIdx[i]==='insights' && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-2 mt-2 text-sm text-slate-300">
                      {c.insights}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
