'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { Menu, X, Cpu, Terminal, Briefcase, FolderGit2, Award, Mail, Sun, Moon } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about', icon: Cpu },
  { label: 'Education', href: '#education', icon: Award },
  { label: 'Skills', href: '#skills', icon: Terminal },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Achievements', href: '#achievements', icon: Award },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Check initial system/local preference
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setScrolled(latest > 30);
    if (latest > 150 && latest > previous) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-2.5 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-2xl bg-[#10103B] dark:bg-white text-white dark:text-[#10103B] flex items-center justify-center font-mono font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
            ML
          </span>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-extrabold text-[#10103B] dark:text-white tracking-tight group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-[#10103B]/70 dark:text-slate-400 font-mono tracking-wide">
              AI Engineer
            </span>
          </div>
        </a>

        {/* NAVIGATION (Centered) */}
        <nav className="hidden md:flex items-center gap-0.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-1 rounded-full border border-slate-300 dark:border-slate-700 shadow-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="relative flex items-center gap-1 px-2.5 lg:px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#10103B] dark:text-white hover:text-[#10103B] dark:hover:text-white transition-colors group shrink-0"
              >
                <Icon className="w-3.5 h-3.5 text-[#10103B] dark:text-slate-200 shrink-0" />
                <span className="font-extrabold whitespace-nowrap text-[#10103B] dark:text-white">{item.label}</span>
                <span className="absolute bottom-0.5 left-2.5 right-2.5 h-0.5 bg-[#10103B] dark:bg-white rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            );
          })}
        </nav>

        {/* DARK MODE / LIGHT MODE TOGGLE BUTTON */}
        <div className="hidden md:flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-300 dark:border-slate-700 text-[#10103B] dark:text-slate-100 hover:scale-105 transition-all shadow-sm flex items-center justify-center gap-2 text-xs font-bold"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span className="hidden lg:inline text-xs font-mono">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#10103B]" />
                <span className="hidden lg:inline text-xs font-mono">Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-300 dark:border-slate-700 text-[#10103B] dark:text-white"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#10103B]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-300 dark:border-slate-700 text-[#10103B] dark:text-white transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-300 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-[#10103B] hover:bg-slate-100/80 transition-all border border-slate-100"
              >
                <Icon className="w-4 h-4 text-[#10103B]" />
                <span className="font-bold text-[#10103B]">{item.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </motion.header>
  );
}
