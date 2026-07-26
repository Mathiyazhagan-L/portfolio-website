'use client';

import { certificationsAndAchievements } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

export default function CertificationsSection() {
  const achievements = certificationsAndAchievements.filter((item) => item.type === 'achievement');
  const certifications = certificationsAndAchievements.filter((item) => item.type === 'certification');

  return (
    <section id="achievements" className="py-20 bg-transparent text-slate-800 dark:text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-slate-900" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Achievements & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Achievements (5 Cards) */}
          <div className="flex flex-col gap-4 h-full">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-slate-900" />
              Hackathons & Contests
            </h3>

            {achievements.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="spec-card p-5 sm:p-6 rounded-[22px] flex-1 flex flex-col justify-center"
              >
                <div className="flex items-start gap-4 text-slate-800">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">{item.title}</h4>
                    <p className="text-xs font-mono text-slate-500 font-bold">{item.issuer}</p>
                    {item.detail && <p className="text-xs text-slate-600 pt-1 leading-relaxed font-medium">{item.detail}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications (7 Cards) */}
          <div className="flex flex-col gap-3.5 h-full">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-slate-900" />
              Verified Industry Certifications
            </h3>

            {certifications.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="spec-card px-5 py-4 rounded-[20px] flex-1 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 text-slate-800">
                  <div className="w-9 h-9 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">{item.title}</h4>
                    <p className="text-[11px] font-mono text-slate-500 font-bold pt-0.5">{item.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
