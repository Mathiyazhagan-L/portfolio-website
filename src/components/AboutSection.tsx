'use client';

import { personalInfo } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { User, Brain, CheckCircle2, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-transparent text-slate-800 dark:text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 shadow-sm">
            <User className="w-3.5 h-3.5 text-slate-900" />
            <span>Who I Am</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Mathiyazhagan L
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto font-medium">
            AI Engineer & Machine Learning Specialist building robust intelligence systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Objective Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 spec-card p-8 rounded-[28px] flex flex-col justify-between"
          >
            <div className="space-y-4 text-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Career Objective & Vision</h3>
              </div>
              
              <p className="text-base font-medium leading-relaxed text-slate-700">
                {personalInfo.careerObjective}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/60 border border-slate-200 space-y-1">
                  <div className="text-xs font-mono font-bold text-slate-500">LOCATION</div>
                  <div className="text-sm font-bold text-slate-900">{personalInfo.location}</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/60 border border-slate-200 space-y-1">
                  <div className="text-xs font-mono font-bold text-slate-500">EMAIL</div>
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 hover:underline flex items-center gap-1"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Strengths Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 spec-card p-8 rounded-[28px] flex flex-col justify-between"
          >
            <div className="space-y-4 text-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Core Strengths</h3>
              </div>

              <ul className="space-y-3 pt-2">
                {[
                  "Generative AI & RAG Pipeline Design",
                  "Deep Learning & Computer Vision Models",
                  "FastAPI REST Microservice Architecture",
                  "Autonomous Multi-Agent AI Systems",
                  "Schema-Aware SQL & Vector Store Synthesis"
                ].map((strength, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
