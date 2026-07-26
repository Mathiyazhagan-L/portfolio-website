'use client';

import { experiences } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-transparent text-slate-800 dark:text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 shadow-sm">
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Work Experience Timeline
          </h2>
        </div>

        {/* Timeline Line & Cards */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-300 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Milestone Pin */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-4 border-white shadow-md" />

              {/* Card */}
              <div className="spec-card p-7 sm:p-8 rounded-[28px]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-5 mb-5 text-slate-800">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-slate-900" />
                      {exp.role}
                    </h3>
                    <div className="text-sm font-bold text-slate-700 flex items-center gap-1.5 pt-1">
                      <Building2 className="w-4 h-4 text-slate-500" />
                      {exp.company}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/70 border border-slate-200 text-xs font-mono text-slate-800 font-bold self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-slate-700" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6 text-slate-700">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm font-medium leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-slate-900 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Highlights */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
