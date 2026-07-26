'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, FolderGit2 } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] pt-24 pb-8 flex flex-col justify-center overflow-hidden bg-transparent text-slate-900"
    >
      {/* Dynamic Mouse Spotlight Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15, 23, 42, 0.07), transparent 80%)`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center justify-center space-y-4 sm:space-y-5">
        
        {/* Badge: Available for AI Engineer Roles */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-slate-200 text-[11px] font-mono text-slate-800 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Available for AI Engineer Roles</span>
        </motion.div>

        {/* Subheading: AI ENGINEER • MACHINE LEARNING • GENERATIVE AI */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-slate-500 uppercase flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-900" />
          <span>AI ENGINEER • MACHINE LEARNING • GENERATIVE AI</span>
        </motion.div>

        {/* Title: Building AI That Solves Real Problems */}
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(8px)', y: 15 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-4xl"
        >
          Building AI That <br className="hidden sm:inline" />
          Solves Real Problems.
        </motion.h1>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-600 max-w-xl font-medium leading-relaxed"
        >
          I build intelligent AI applications, automation systems, and production-ready software using Machine Learning, Generative AI, Computer Vision, and Full Stack Development.
        </motion.p>

        {/* Action Buttons: [ View Projects ] [ Download Resume ] */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1"
        >
          <a
            href="#projects"
            className="btn-primary-spec inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs shadow-md hover:scale-105 transition-transform"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-white" />
            <span>View Projects</span>
          </a>

          <a
            href="#contact"
            className="btn-secondary-spec inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs hover:scale-105 transition-transform"
          >
            <Download className="w-3.5 h-3.5 text-slate-900" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Compact Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2 w-full max-w-2xl"
        >
          <div className="grid grid-cols-3 gap-3 p-3.5 sm:p-4 rounded-[20px] spec-card text-center shadow-sm">
            <div className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">6+</div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Projects</div>
            </div>

            <div className="space-y-0.5 border-x border-slate-200/60">
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">10+</div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Technologies</div>
            </div>

            <div className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">5+</div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">AI Domains</div>
            </div>
          </div>
        </motion.div>

        {/* Footer Scroll Prompt */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-2"
        >
          <a href="#about" className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-slate-900" />
            <span>Scroll to explore</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
