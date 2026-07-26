'use client';

import { useEffect, useState } from 'react';
import ReactLenis from 'lenis/react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('a, button, input, textarea, [role="button"], .interactive');
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Trailing Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-slate-900 transition-transform duration-150 ease-out pointer-events-none ${
          isHovered ? 'w-12 h-12 -mt-6 -ml-6 bg-slate-900/10 scale-125' : 'w-8 h-8 -mt-4 -ml-4 bg-transparent scale-100'
        } ${isClicked ? 'scale-90' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {/* Inner Glowing Dot */}
      <div
        className={`fixed top-0 left-0 w-2.5 h-2.5 -mt-1.25 -ml-1.25 rounded-full bg-slate-900 shadow-[0_0_10px_rgba(15,23,42,0.4)] transition-transform duration-75 ease-out pointer-events-none ${
          isClicked ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
}
