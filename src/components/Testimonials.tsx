'use client';

import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

// Mock data reflecting the glowing review of a professional video editor
const testimonials = [
  { 
    id: 1, 
    name: "Nicky R.", 
    role: "11-50 employees", 
    text: <>Jimmy’s editing is incredibly user-friendly and <strong>modern</strong>. It has saved me <strong>a lot of time</strong> trying to do it all myself.</>,
    initial: "N"
  },
  { 
    id: 2, 
    name: "Sarah M.", 
    role: "Content Creator", 
    text: <>Working with him was the best decision. The pacing and sound design are <strong>top notch</strong>. Highly recommend his services!</>,
    initial: "S"
  },
  { 
    id: 3, 
    name: "David K.", 
    role: "Podcast Host", 
    text: <>He knows exactly how to capture the audience's attention. Our <strong>engagement skyrocketed</strong> after Jimmy started editing!</>,
    initial: "D"
  },
  { 
    id: 4, 
    name: "Alex B.", 
    role: "Agency Director", 
    text: <>Professional, remarkably fast, and extremely talented. Jimmy delivers <strong>premium quality</strong> every single time.</>,
    initial: "A"
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="relative w-full py-20 lg:py-28 text-white bg-black overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center">
          <h2 
            className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2 text-white text-center"
            style={{ fontFamily: 'var(--font-orbitron, sans-serif)' }}
          >
            Testimonials
          </h2>
          <div className="h-[2px] w-64 bg-gradient-to-r from-red-600 via-green-500 to-blue-600"></div>
        </div>

        {/* Slider Controls & Carousel */}
        <div className="relative group mt-8">
          
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-30 bg-black/80 hover:bg-[#7800FF] p-3 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 shadow-lg border border-gray-800"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Testimonial Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 sm:gap-10 pb-16 pt-10 px-4 snap-x snap-mandatory scrollbar-hide items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t) => (
              <div 
                key={t.id} 
                className="relative w-[300px] md:w-[380px] flex-none snap-center mt-10 h-auto"
              >
                {/* Overlapping Avatar Area */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-[5px] border-black overflow-hidden z-20 bg-zinc-800 flex items-center justify-center text-3xl font-bold text-gray-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                   {/* Placeholder for the user's face (replace with Image tag) */}
                   {t.initial}
                </div>
                
                {/* Card Container (Dark mode adapted from white card) */}
                <div className="bg-[#111111] border border-zinc-800/80 rounded-[2.5rem] p-8 pt-16 h-full flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#7800FF]/50 hover:-translate-y-2 group/card">
                   
                   <div>
                     {/* 5 Stars requested by user */}
                     <div className="flex justify-center text-[#FFD700] mb-6 gap-1">
                       <FaStar size={18} />
                       <FaStar size={18} />
                       <FaStar size={18} />
                       <FaStar size={18} />
                       <FaStar size={18} />
                     </div>
                     
                     {/* Testimonial Body (matching the mixed font weight pattern) */}
                     <p className="text-gray-300 text-lg md:text-xl font-light text-center leading-relaxed" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
                       {t.text}
                     </p>
                   </div>
                   
                   {/* Author Subtext */}
                   <div className="mt-10 text-center">
                     <h4 className="text-white font-semibold tracking-wide text-lg" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>{t.name}</h4>
                     <p className="text-gray-500 text-sm mt-1">{t.role}</p>
                   </div>

                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-30 bg-black/80 hover:bg-[#7800FF] p-3 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-gray-800"
            aria-label="Scroll right"
          >
            <FaChevronRight size={20} />
          </button>

        </div>
      </div>
      
      {/* Global Style overrides to enforce hidden scrollbar for webkit (Chrome/Safari) */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
