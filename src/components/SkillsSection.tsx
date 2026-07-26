'use client';

import { skillCategories } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Code2, BrainCircuit, Sparkles, Eye, MessageSquareCode, Wrench, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, any> = {
  Code2,
  BrainCircuit,
  Sparkles,
  Eye,
  MessageSquareCode,
  Wrench,
};

const techLogos = [
  'Python', 'FastAPI', 'LangChain', 'Pinecone', 'Scikit-Learn', 
  'OpenCV', 'React.js', 'Next.js', 'MySQL', 'Docker', 
  'Hugging Face', 'Gemini API', 'Groq API', 'TypeScript', 'TailwindCSS'
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-transparent text-slate-800 dark:text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 shadow-sm">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technologies & Skill Matrix
          </h2>
        </div>

        {/* Marquee Banner */}
        <div className="mb-16 py-4 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <Marquee speed={35} gradient={false} pauseOnHover={true}>
            <div className="flex items-center gap-4 px-2">
              {techLogos.map((tech) => (
                <span
                  key={tech}
                  className="marquee-pill px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-extrabold font-mono hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((item, index) => {
            const Icon = iconMap[item.iconName] || Code2;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="spec-card p-7 rounded-[28px] flex flex-col justify-between"
              >
                <div className="text-slate-800">
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                      {item.category}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/70 text-slate-900 border border-slate-200 text-xs font-bold hover:bg-slate-900 hover:text-white transition-all cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
