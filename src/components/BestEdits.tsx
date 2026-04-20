'use client';

import React, { useState, useRef } from 'react';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Mock data for the videos
const portfolioVideos = [
  { id: 1, title: 'CASH COW', placeholder: 'bg-blue-900/50' },
  { id: 2, title: 'REEL', placeholder: 'bg-green-900/50' },
  { id: 3, title: 'VLOG', placeholder: 'bg-gray-800/50' },
  { id: 4, title: 'PODCAST', placeholder: 'bg-purple-900/50' },
  { id: 5, title: 'GAMING', placeholder: 'bg-red-900/50' },
];

export default function BestEdits() {
  const [activeVideo, setActiveVideo] = useState<{id: number, title: string} | null>(null);
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
    <section id="portfolio" className="relative w-full py-20 lg:py-28 text-white bg-black overflow-hidden">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start">
          <h2 
            className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2 text-white font-orbitron"
          >
            My Best Edits
          </h2>
          {/* Gradient Underline */}
          <div className="h-0.5 w-64 bg-linear-to-r from-red-600 via-green-500 to-blue-600"></div>
        </div>

        {/* Slider Controls & Carousel */}
        <div className="relative group">
          
          {/* Scroll Left Button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-black/60 hover:bg-[#7800FF] p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Videos Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {portfolioVideos.map((video) => (
              <div 
                key={video.id} 
                className="flex-none w-70 sm:w-[320px] md:w-95 snap-center flex flex-col items-center group/item cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                {/* Thumbnail Container */}
                <div className={`relative w-full aspect-square md:aspect-4/3 ${video.placeholder} overflow-hidden bg-zinc-900 border border-zinc-800 transition-transform duration-300 group-hover/item:scale-[1.02] mb-6 flex items-center justify-center`}>
                  
                  {/* Faux thumbnail image graphic (replace with Next/Image for real thumbnails) */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/item:scale-110">
                    <FaPlay className="text-black ml-1" size={24} />
                  </div>
                  
                </div>

                {/* Video Title */}
                <h3 
                  className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white font-orbitron"
                >
                  {video.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-black/60 hover:bg-[#7800FF] p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <FaChevronRight size={20} />
          </button>

        </div>
      </div>

      {/* Video Expansion Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-300">
          
          <button 
            onClick={() => setActiveVideo(null)} 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-gray-400 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
          >
            <FaTimes size={30} />
          </button>

          <div className="w-full max-w-6xl aspect-video bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center relative shadow-2xl overflow-hidden rounded-xl">
            
            {/* The Actual Video placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
               <FaPlay className="text-[#7800FF] mb-6 opacity-50" size={64} />
               <h3 className="text-3xl font-bold uppercase tracking-wider mb-2 font-orbitron">
                 {activeVideo.title}
               </h3>
               <p className="text-gray-400 font-light mt-4">
                 [ Insert your `&lt;video src="..."&gt;` or YouTube iframe here ]
               </p>
            </div>

          </div>
        </div>
      )}

      {/* Global style to hide scrollbar for webkit (Chrome/Safari/Edge) since we have custom buttons */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
