'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Menu, X, Download, Shield, MessageSquare, Globe, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gray-950 rounded-[11px] flex items-center justify-center">
                <Clock className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                TimeAtlas
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Pro
                </span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">
                World Clock & Timezone Planner • by Siddharth Jain
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link
              href="/#live-demo"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Interactive Demo
            </Link>
            <Link
              href="/#features"
              className="hover:text-cyan-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#meeting-tools"
              className="hover:text-cyan-400 transition-colors"
            >
              Meeting Planner
            </Link>
            <Link
              href="/#showcase"
              className="hover:text-cyan-400 transition-colors"
            >
              App Screenshots
            </Link>
            <Link
              href="/#faq"
              className="hover:text-cyan-400 transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Action CTA & Contact link */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-2"
            >
              Contact Support
            </Link>
            <Link
              href="/#download"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-gray-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-gray-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-gray-200 text-sm">
            <Link
              href="/#live-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 text-cyan-400"
            >
              <Sparkles className="w-4 h-4" />
              Interactive Demo
            </Link>
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800"
            >
              Features & Tools
            </Link>
            <Link
              href="/#meeting-tools"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800"
            >
              Meeting & Group Planner
            </Link>
            <Link
              href="/#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800"
            >
              App Screenshots
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800 text-xs text-gray-400 flex items-center gap-2"
            >
              <Shield className="w-3.5 h-3.5" />
              Privacy Policy
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              href="/#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-gray-950 bg-gradient-to-r from-cyan-400 to-indigo-400"
            >
              <Download className="w-4 h-4" />
              Download TimeAtlas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
