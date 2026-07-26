'use client';

import { personalInfo } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const edu = personalInfo.education;

  return (
    <section id="education" className="py-20 bg-transparent text-slate-800 dark:text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-slate-900" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Education & Qualifications
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="spec-card p-8 sm:p-10 rounded-[28px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="space-y-3 text-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">{edu.degree} in {edu.field}</h3>
                  <p className="text-base font-bold text-slate-700">{edu.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono pt-2">
                <div className="px-3 py-1.5 rounded-xl bg-white/60 border border-slate-200 text-slate-700 font-bold">
                  GRADUATION: {edu.graduationYear}
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/60 border border-slate-200 text-slate-700 font-bold">
                  STATUS: FINAL YEAR
                </div>
              </div>
            </div>

            {/* CGPA Box */}
            <div className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800 shrink-0 self-stretch md:self-auto flex flex-col justify-center text-white">
              <div className="text-xs font-mono text-slate-400 uppercase font-bold">ACADEMIC CGPA</div>
              <div className="text-3xl font-extrabold text-white pt-1">{edu.cgpa}</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
