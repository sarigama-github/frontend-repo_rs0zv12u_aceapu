import { motion } from 'framer-motion';
import { GraduationCap, BarChart3, Globe, SquareFunction } from 'lucide-react';

const courses = [
  {
    icon: BarChart3,
    title: 'Data Analytics Master Program',
    highlights: ['Excel (Basic to Advanced)','SQL + MySQL','Power BI','Data Cleaning & Visualization','AI Tools for Data Analysis','Real-time Dashboards'],
    outcome: 'Job-ready for Data Analyst, MIS Analyst, BI Analyst roles.'
  },
  {
    icon: Globe,
    title: 'Digital Marketing Master Course',
    highlights: ['SEO','Google Ads','Meta Ads','Content Marketing','Website Analytics','AI Tools for Marketing','Social Media Growth'],
    outcome: 'Be career-ready as Digital Marketer, PPC Specialist, SEO Analyst.'
  },
  {
    icon: GraduationCap,
    title: 'Power BI Dashboard Course',
    highlights: ['Data Modeling','DAX Functions','KPI Dashboards','Business Use Cases','AI + Power BI'],
    outcome: 'Master dashboarding for business decisions.'
  },
  {
    icon: SquareFunction,
    title: 'Excel & SQL Course',
    highlights: ['Advanced Excel','Automation','SQL Queries','Joins & Analytics'],
    outcome: 'Build strong foundations for analytics workflows.'
  },
];

function Courses() {
  return (
    <section id="courses" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Course Catalog
        </motion.h2>
        <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">Skill-based programs with hands-on projects, real datasets, certification, and career support.</p>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {courses.map(({ icon: Icon, title, highlights, outcome }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-300 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <ul className="mt-3 text-slate-300 text-sm space-y-1">
                {highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
              <p className="text-slate-400 mt-4 text-sm">Outcome: {outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
