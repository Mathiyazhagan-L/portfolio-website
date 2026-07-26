'use client';

import { projects } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Sparkles, FolderGit2, Check, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-transparent text-slate-800 dark:text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-slate-900" />
            <span>Portfolio Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Bento Cards (Uniform 3 cards per row: lg:col-span-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.01}
                className="h-full"
              >
                {/* Card */}
                <div className="spec-card p-7 sm:p-8 rounded-[28px] h-full flex flex-col justify-between relative overflow-hidden group">
                  
                  <div className="text-slate-800">
                    {/* Badge & Date */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {project.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-extrabold">
                          <Sparkles className="w-3 h-3 text-white" />
                          {project.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-slate-500 font-bold">{project.period}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm font-medium text-slate-700 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                          <Check className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags & Buttons */}
                  <div className="pt-5 border-t border-slate-200">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-xl bg-white/80 border border-slate-200 text-slate-900 text-[10px] font-mono font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-spec flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        <span>Demo</span>
                      </a>

                      <a
                        href={project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary-spec flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>

                      <a
                        href="#contact"
                        className="btn-secondary-spec p-2 rounded-xl text-xs"
                        aria-label="Case Study"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
