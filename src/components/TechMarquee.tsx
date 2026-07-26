'use client';

import Marquee from 'react-fast-marquee';

const techLogos = [
  'Python', 'FastAPI', 'LangChain', 'Pinecone', 'Scikit-Learn', 
  'OpenCV', 'React.js', 'Next.js', 'MySQL', 'Docker', 
  'Hugging Face', 'Gemini API', 'Groq API', 'TypeScript', 'TailwindCSS'
];

export default function TechMarquee() {
  return (
    <section className="py-10 bg-transparent border-b border-[#BEB7A7]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#BEB7A7]">
          Technologies & Ecosystem
        </span>
      </div>

      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        <div className="flex items-center gap-6 py-2">
          {techLogos.map((tech) => (
            <div
              key={tech}
              className="px-5 py-2.5 rounded-2xl spec-card text-sm font-semibold text-[#E7E2CE] hover:text-[#F5F4F0] hover:border-[#E7E2CE] transition-all cursor-pointer whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
