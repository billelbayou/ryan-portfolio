'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="bg-black text-white w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center text-2xl tracking-wider" style={{ fontFamily: 'var(--font-orbitron, sans-serif)' }}>
              <span className="font-light">Dramix</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium hover:text-gray-300 transition-colors tracking-widest"
                style={{ fontFamily: 'var(--font-body, sans-serif)' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="h-6 w-[2px] bg-[#424242]"></div>
            <div className="flex items-center space-x-5">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaFacebookF size={16} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaLinkedinIn size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2D2D2D] border-t border-[#424242]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#424242] transition-colors tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-body, sans-serif)' }}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-6 pb-2">
              <div className="flex items-center justify-center space-x-8 px-3">
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  <FaFacebookF size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  <FaLinkedinIn size={22} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  <FaYoutube size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
