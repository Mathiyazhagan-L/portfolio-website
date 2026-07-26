'use client';

import { personalInfo } from '@/data/portfolioData';
import { Brain, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white/40 backdrop-blur-xl py-12 relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3 text-sm">
            <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm">
              ML
            </span>
            <span className="font-extrabold text-slate-900">{personalInfo.name}</span>
            <span className="text-xs text-slate-500">© {new Date().getFullYear()} • All rights reserved.</span>
          </div>

          {/* Center Info */}
          <div className="text-xs text-slate-600 flex items-center gap-1.5 font-mono">
            <span>Built for AI Engineering & Data Science Excellence</span>
            <Brain className="w-4 h-4 text-slate-900" />
          </div>

          {/* Social Icons & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/70 border border-slate-200 text-slate-800 hover:text-slate-950 hover:bg-white transition-all shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/70 border border-slate-200 text-slate-800 hover:text-slate-950 hover:bg-white transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="btn-primary-spec p-2.5 rounded-xl text-white shadow-md hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
