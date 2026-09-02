'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  Sliders,
  Users,
  Globe,
  Palette,
  ShieldCheck,
  Download,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle2,
  Zap,
  Smartphone,
  ArrowRight,
  Sun,
  Moon,
} from 'lucide-react';
import { LiveClockDemo } from './components/LiveClockDemo';
import { MeetingPlannerDemo } from './components/MeetingPlannerDemo';
import { AppShowcase } from './components/AppShowcase';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What makes TimeAtlas different from a standard phone clock?',
      a: 'Unlike default system clocks, TimeAtlas features an interactive 24-hour time scrubber slider, group meeting overlap finder, daylight terminator world map visualizer, and 7 customizable themes. You can drag time into the past or future to instantly see how every global city reacts.',
    },
    {
      q: 'Does TimeAtlas handle Daylight Saving Time (DST) automatically?',
      a: 'Yes! TimeAtlas utilizes the authoritative IANA Time Zone Database rules to automatically adjust for spring/fall clock shifts worldwide, ensuring 100% accuracy for future meeting planning.',
    },
    {
      q: 'Can I use TimeAtlas offline without an internet connection?',
      a: 'Absolutely. All timezone offset calculations, city databases, and timeline scrubbers run 100% locally on your device without needing an active data or Wi-Fi connection.',
    },
    {
      q: 'How does the Group Meeting Planner work?',
      a: 'You add the cities where your team members or clients reside and specify preferred working hours. TimeAtlas instantly highlights overlapping green windows where all participants are awake and within business hours.',
    },
    {
      q: 'Is TimeAtlas free to download?',
      a: 'Yes, TimeAtlas is free to download on both iOS and Android. All core clock, comparison, and timezone planning tools are available out of the box.',
    },
  ];

  return (
    <div className="space-y-0 text-gray-100 overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 hero-glow overflow-hidden">
        
        {/* Glowing Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Live Ticking Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/10 animate-pulse-glow">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>TimeAtlas Pro • World Clock & Timezone Scrubber</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Master Time <br />
              <span className="cosmic-gradient-text">Across The Globe</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Scrub through past and future hours in real-time, plan zero-conflict global meetings, and stay in sync across every timezone.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#download"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-extrabold text-gray-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download App Free
              </Link>
              <Link
                href="#live-demo"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white glass-panel hover:bg-gray-800/80 transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Explore Interactive Demo
              </Link>
            </div>

            {/* Social Proof Stats Banner */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800/80">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">100k+</div>
                <div className="text-xs text-gray-400 font-semibold mt-0.5">Cities & Timezones</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800/80">
                <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">0ms</div>
                <div className="text-xs text-gray-400 font-semibold mt-0.5">Offline Calculations</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800/80">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">7</div>
                <div className="text-xs text-gray-400 font-semibold mt-0.5">Custom Color Themes</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800/80">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">100%</div>
                <div className="text-xs text-gray-400 font-semibold mt-0.5">Free Core Features</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LIVE INTERACTIVE CLOCK DEMO
         ───────────────────────────────────────────────────────────── */}
      <LiveClockDemo />

      {/* ─────────────────────────────────────────────────────────────
          3. FEATURE SHOWCASE GRID
         ───────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5" /> Powerful Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Everything You Need for <br />
              <span className="cosmic-gradient-text">Global Time Synchronization</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Engineered with focus on speed, design elegance, and complete offline privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl glass-panel hover:border-cyan-500/40 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Interactive Time Scrubber</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Drag the live 24-hour timeline back and forth. Watch all saved location clocks automatically re-calculate local time, daylight status, and relative day offsets.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl glass-panel hover:border-indigo-500/40 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Smart Group Meeting Planner</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Select team participant locations and define custom working hours. TimeAtlas instantly highlights green overlap slots where everyone is available.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl glass-panel hover:border-cyan-500/40 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Dual Digital & Analog Clocks</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Switch instantly between crisp digital time numbers and classic sweeping analog dials tailored to your personal reading preference.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-3xl glass-panel hover:border-indigo-500/40 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">World Map & Solar Terminator</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Visualize global daylight and night curves across continents with real-time location markers and solar line tracking.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-3xl glass-panel hover:border-cyan-500/40 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">7 Custom Theme Engine</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Choose from Cosmic Cyan, Cyber Neon, Midnight Obsidian, Glassmorphism, Terminal Emerald, Classic Slate, and Light themes.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-3xl glass-panel hover:border-indigo-500/40 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">100% Offline & Private</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Calculations execute entirely on your device. Zero account sign-up, zero background tracking, and full DST rule updates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. MEETING PLANNER TOOL SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <MeetingPlannerDemo />

      {/* ─────────────────────────────────────────────────────────────
          5. APP SCREENSHOW CASE GALLERY
         ───────────────────────────────────────────────────────────── */}
      <AppShowcase />

      {/* ─────────────────────────────────────────────────────────────
          6. TESTIMONIALS & REVIEWS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-cyan-400" /> User Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Loved by <span className="cosmic-gradient-text">Global Teams & Nomads</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl glass-panel space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "TimeAtlas solved my daily headache of scheduling meetings between San Francisco, London, and Tokyo. The time scrubber slider is pure magic!"
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-gray-950 font-bold text-sm">
                  EK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Elena Rostova</h4>
                  <p className="text-xs text-gray-400">Head of Remote Engineering</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-panel space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "The 7 theme engine and offline functionality make it my default travel app. It automatically handles DST changes without throwing off my calendar."
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 flex items-center justify-center text-gray-950 font-bold text-sm">
                  MC
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Marcus Chen</h4>
                  <p className="text-xs text-gray-400">Digital Nomad & Author</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-panel space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "Finally, a timezone app that doesn’t look like it was built in 2005. The glassmorphism dark theme and clean analog dial UI are stunning."
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center text-gray-950 font-bold text-sm">
                  SJ
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sophia Jenkins</h4>
                  <p className="text-xs text-gray-400">Global Product Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FAQ ACCORDION SECTION
         ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-gray-950/60 border-t border-gray-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Frequently Asked <span className="cosmic-gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Got questions about TimeAtlas? Here is everything you need to know.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl glass-panel overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between text-base font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. DOWNLOAD CTA BANNER SECTION
         ───────────────────────────────────────────────────────────── */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950 via-gray-950 to-indigo-950 border border-cyan-500/40 shadow-2xl relative overflow-hidden text-center space-y-8">
            
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto">
                <Clock className="w-8 h-8 animate-pulse" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Download <span className="cosmic-gradient-text">TimeAtlas</span> Today
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Available for iOS and Android. Take control of your global schedule with zero friction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#download"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-gray-950 font-black text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105"
              >
                <Smartphone className="w-5 h-5" />
                Apple App Store
              </a>
              <a
                href="#download"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gray-900 border border-gray-700 text-white font-black text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105"
              >
                <Smartphone className="w-5 h-5 text-cyan-400" />
                Google Play Store
              </a>
            </div>

            <p className="text-xs text-gray-400 pt-4">
              Requires iOS 15.0+ or Android 9.0+. 100% Privacy Focused.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}
