'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10103B', '#1E293B', '#3B507D']
    });

    setSubmitted(true);

    // Format WhatsApp message text
    const text = `Hi Mathiyazhagan,\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;
    const whatsappUrl = `https://wa.me/919498639188?text=${encodeURIComponent(text)}`;
    
    // Redirect to WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-transparent text-slate-800 dark:text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-slate-900" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm text-slate-600">
            Send a direct message or connect via email to discuss AI engineering opportunities and project collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="spec-card p-8 rounded-[28px] space-y-6 text-slate-800">
              <h3 className="text-xl font-extrabold text-slate-900">Direct Contact Details</h3>
              
              <div className="space-y-4">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-slate-200 hover:border-slate-900 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Email Address</div>
                    <div className="text-sm font-bold text-slate-900">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-slate-200 hover:border-slate-900 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Phone Number / WhatsApp</div>
                    <div className="text-sm font-bold text-slate-900">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Location</div>
                    <div className="text-sm font-bold text-slate-900">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider">Social Platforms</div>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-spec flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-xs shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-spec flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-xs shadow-sm"
                  >
                    <LinkedinIcon className="w-4 h-4 text-slate-900" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="spec-card p-8 rounded-[28px] text-slate-800">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Send Me a Message</h3>

              {submitted ? (
                <div className="p-8 text-center bg-white/60 border border-slate-200 rounded-2xl space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-slate-900 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-slate-900">Redirecting to WhatsApp...</h4>
                  <p className="text-xs text-slate-600">
                    Opening WhatsApp to send your formatted message directly to Mathiyazhagan (+91 9498639188).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-slate-200 text-sm text-slate-900 focus:border-slate-900 focus:outline-none transition-all placeholder-slate-400 font-semibold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Your Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-slate-200 text-sm text-slate-900 focus:border-slate-900 focus:outline-none transition-all placeholder-slate-400 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Opportunity / AI Project Collaboration"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-slate-200 text-sm text-slate-900 focus:border-slate-900 focus:outline-none transition-all placeholder-slate-400 font-semibold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hi Mathiyazhagan, I am reaching out regarding..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-slate-200 text-sm text-slate-900 focus:border-slate-900 focus:outline-none transition-all resize-none placeholder-slate-400 font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-spec w-full py-4 rounded-2xl text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
