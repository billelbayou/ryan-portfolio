'use client';

import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-28 text-white bg-black border-t border-gray-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row justify-between lg:pr-24">
          
          {/* Form Side */}
          <div className="w-full lg:w-3/4 flex flex-col items-start pr-0 lg:pr-10">
            
            {/* Title & Underline */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 text-white"
              style={{ fontFamily: 'var(--font-orbitron, sans-serif)' }}
            >
              I Am Ready To Consult You
            </h2>
            <div className="h-[2px] w-full max-w-[600px] bg-gradient-to-r from-red-600 via-green-500 to-blue-600 mb-12"></div>

            {/* Custom Form Layout matching user adjustments */}
            <form className="w-full mb-16" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Name */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <label className="text-gray-300 whitespace-nowrap font-light" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>My Name Is</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-[#0a0a0a] border border-gray-800 p-3 text-white focus:border-[#7800FF] focus:outline-none transition-colors"
                  />
                </div>
                
                {/* Email (requested by user) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <label className="text-gray-300 whitespace-nowrap font-light" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>My Email Is</label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-[#0a0a0a] border border-gray-800 p-3 text-white focus:border-[#7800FF] focus:outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Message (made bigger as requested) */}
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6 mb-8">
                <label className="text-gray-300 whitespace-nowrap font-light md:mt-3" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>I Am Interested In</label>
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full bg-[#0a0a0a] border border-gray-800 p-3 text-white focus:border-[#7800FF] focus:outline-none transition-colors resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-start md:justify-end">
                <button 
                  type="submit"
                  className="bg-[#7800FF] hover:bg-[#6500D1] text-white font-bold tracking-widest text-sm py-4 px-12 transition-colors uppercase"
                  style={{ fontFamily: 'var(--font-orbitron, sans-serif)' }}
                >
                  Send
                </button>
              </div>
            </form>

            {/* Contact Details Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6 text-sm font-light text-gray-300 mt-4 border-t border-gray-900 pt-10" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
              <div className="flex items-center gap-3">
                <FaPhoneAlt size={16} className="text-[#7800FF]" />
                <span>+92 455 478 112</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt size={16} className="text-[#7800FF]" />
                <span>Defense Phase 3, Lahore Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope size={16} className="text-[#7800FF]" />
                <span>videoeditor@gmail.com</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Full vertical "Go Back To The Top" element on the right edge */}
      <div className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 h-full hidden md:flex items-center justify-center z-20 pointer-events-none">
        
        <button 
          onClick={scrollToTop}
          className="group pointer-events-auto flex items-center justify-center translate-x-1/2 gap-2 text-gray-400 hover:text-[#7800FF] transition-colors"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 tracking-[0.2em] uppercase text-sm font-light py-4 border-l border-transparent hover:border-[#7800FF] pl-2 transition-colors" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
            Go Back To The Top
          </span>
        </button>

      </div>

    </section>
  );
}
