'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Shield, FileText, Mail, Globe, ArrowUpRight, Share2, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/80 text-gray-400 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-gray-950 rounded-[11px] flex items-center justify-center">
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-black tracking-tight text-white">TimeAtlas</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              The ultimate world clock, timezone scrub slider, and remote team meeting planner app designed for global minds, digital nomads, and cross-border teams.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Community"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://timeatlas.app"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product & Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#live-demo" className="hover:text-cyan-400 transition-colors">
                  Interactive Clock Demo
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-cyan-400 transition-colors">
                  Timezone Scrubber
                </Link>
              </li>
              <li>
                <Link href="/#meeting-tools" className="hover:text-cyan-400 transition-colors">
                  Group Meeting Planner
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-cyan-400 transition-colors">
                  7 Color Themes
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-cyan-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support & Help</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Submit Feedback
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Press & Media Kit
                </Link>
              </li>
              <li>
                <a href="mailto:support@timeatlas.app" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  support@timeatlas.app
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal & Compliance</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="/terms#disclaimer" className="hover:text-cyan-400 transition-colors">
                  Data Accuracy Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} TimeAtlas Inc. All rights reserved. Master Time Across The Globe.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Built with precision for global minds</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
