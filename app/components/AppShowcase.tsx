'use client';

import React, { useState } from 'react';
import { Smartphone, Clock, Sliders, Users, Globe, Palette, Check, Sparkles } from 'lucide-react';

const TABS = [
  { id: 'home', title: 'Main Home Clock', icon: Clock, desc: 'Digital & Analog dual reference clocks with instant city comparison cards.' },
  { id: 'compare', title: 'Real-Time Scrubber', icon: Sliders, desc: 'Scrub time back and forth to inspect exact future or past hour offsets across saved locations.' },
  { id: 'meeting', title: 'Group Planner', icon: Users, desc: 'Find non-conflicting working hours for international calls and remote team syncs.' },
  { id: 'world', title: 'Geographic World Map', icon: Globe, desc: 'Visual daylight terminator map showing GMT offset zones and global pins.' },
  { id: 'themes', title: '7 Color Themes', icon: Palette, desc: 'Personalize your aesthetic with Cosmic, Neon, Obsidian, Glass, Terminal & Light modes.' },
];

export const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <section id="showcase" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Smartphone className="w-3.5 h-3.5" /> App Interface Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Designed for <span className="cosmic-gradient-text">Elegance & Precision</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Explore every screen of the TimeAtlas app built with native fluid performance and sleek dark-mode aesthetics.
          </p>
        </div>

        {/* Showcase Tabs Nav */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 shadow-lg shadow-cyan-500/15 scale-105'
                    : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Screen Showcase Phone Frame */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel-glow relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Phone Frame Simulator */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-72 h-[520px] bg-gray-950 rounded-[44px] border-4 border-gray-800 p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                {/* Phone Notch */}
                <div className="w-32 h-4 bg-gray-900 rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-950 mr-2" />
                  <div className="w-8 h-1 bg-gray-800 rounded-full" />
                </div>

                {/* Inner Screen Content according to activeTab */}
                <div className="flex-1 bg-[#070A12] rounded-[32px] p-3 text-white space-y-3 overflow-hidden font-sans border border-gray-800/80">
                  
                  {activeTab === 'home' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                        <span className="text-[10px] font-black tracking-widest uppercase text-cyan-400">TIMEATLAS</span>
                        <span className="text-[9px] font-mono text-gray-400">3 Saved Cities</span>
                      </div>
                      
                      {/* Clock Card */}
                      <div className="p-4 rounded-2xl bg-gray-900/90 border border-cyan-500/30 text-center space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">NEW YORK (EDT)</span>
                        <div className="text-3xl font-black font-mono text-white">09:48 <span className="text-xs text-cyan-400">AM</span></div>
                        <span className="text-[9px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Live Sync • UTC-4</span>
                      </div>

                      {/* City List */}
                      <div className="space-y-2 pt-1">
                        <div className="p-2.5 rounded-xl bg-gray-900/60 border border-gray-800 flex items-center justify-between">
                          <div className="text-[11px] font-bold">🇬🇧 London</div>
                          <div className="text-xs font-mono text-cyan-400 font-bold">2:48 PM</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-gray-900/60 border border-gray-800 flex items-center justify-between">
                          <div className="text-[11px] font-bold">🇯🇵 Tokyo</div>
                          <div className="text-xs font-mono text-cyan-400 font-bold">10:48 PM</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-gray-900/60 border border-gray-800 flex items-center justify-between">
                          <div className="text-[11px] font-bold">🇦🇺 Sydney</div>
                          <div className="text-xs font-mono text-cyan-400 font-bold">11:48 PM (+1)</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'compare' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="text-[10px] font-black tracking-widest uppercase text-cyan-400 border-b border-gray-800 pb-1">
                        REAL-TIME SCRUBBER
                      </div>
                      
                      <div className="p-3 rounded-2xl bg-gray-900/90 border border-gray-800 space-y-2">
                        <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                          <span>SCRUBBER</span>
                          <span className="text-cyan-400">+4.5 Hours Shift</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full relative overflow-hidden">
                          <div className="w-3/4 h-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-gray-900/80 border border-cyan-500/30 flex justify-between items-center">
                          <span className="text-[11px] font-bold">🇺🇸 San Francisco</span>
                          <span className="text-xs font-mono text-cyan-400 font-bold">11:18 AM</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-gray-900/80 border border-cyan-500/30 flex justify-between items-center">
                          <span className="text-[11px] font-bold">🇬🇧 London</span>
                          <span className="text-xs font-mono text-cyan-400 font-bold">7:18 PM</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-gray-900/80 border border-cyan-500/30 flex justify-between items-center">
                          <span className="text-[11px] font-bold">🇦🇪 Dubai</span>
                          <span className="text-xs font-mono text-cyan-400 font-bold">10:18 PM</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'meeting' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="text-[10px] font-black tracking-widest uppercase text-indigo-400 border-b border-gray-800 pb-1">
                        GROUP MEETING PLANNER
                      </div>

                      <div className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                        <span className="text-[10px] text-indigo-300 font-bold block">NON-CONFLICTING OVERLAP</span>
                        <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                          ✓ 14:00 - 17:00 UTC (Ideal Sync)
                        </div>
                      </div>

                      <div className="space-y-1.5 text-[10px]">
                        <div className="p-2 rounded-lg bg-gray-900 flex justify-between">
                          <span>SF (PDT): 8:00 AM</span>
                          <span className="text-emerald-400">Work Hours</span>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-900 flex justify-between">
                          <span>London (BST): 4:00 PM</span>
                          <span className="text-emerald-400">Work Hours</span>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-900 flex justify-between">
                          <span>Tokyo (JST): 11:00 PM</span>
                          <span className="text-amber-400">Late Waking</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'world' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="text-[10px] font-black tracking-widest uppercase text-cyan-400 border-b border-gray-800 pb-1">
                        WORLD TIMEZONE MAP
                      </div>

                      {/* Map Graphic Mockup */}
                      <div className="h-44 rounded-2xl bg-gradient-to-tr from-gray-950 via-indigo-950 to-gray-900 border border-cyan-500/30 p-2 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22D3EE_1px,transparent_1px)] [background-size:12px_12px]" />
                        <div className="relative z-10 flex justify-between text-[9px] text-gray-400 font-mono">
                          <span>UTC-8</span>
                          <span>UTC 0</span>
                          <span>UTC+9</span>
                        </div>
                        <div className="relative z-10 text-center space-y-1">
                          <Globe className="w-8 h-8 text-cyan-400 mx-auto animate-pulse" />
                          <span className="text-[9px] text-cyan-300 font-bold block">Daylight Terminator Active</span>
                        </div>
                        <div className="relative z-10 text-right text-[8px] text-gray-400">
                          Automatic Solar Track
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'themes' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="text-[10px] font-black tracking-widest uppercase text-cyan-400 border-b border-gray-800 pb-1">
                        7 THEME MODES
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2.5 rounded-xl bg-[#070A12] border border-cyan-500/40 text-cyan-400 font-bold">Cosmic Cyan</div>
                        <div className="p-2.5 rounded-xl bg-[#0B0D17] border border-indigo-500/40 text-indigo-400 font-bold">Neon Cyber</div>
                        <div className="p-2.5 rounded-xl bg-[#09090B] border border-zinc-700 text-zinc-300 font-bold">Obsidian</div>
                        <div className="p-2.5 rounded-xl bg-[#0F172A] border border-sky-400/40 text-sky-300 font-bold">Glassmorphic</div>
                        <div className="p-2.5 rounded-xl bg-[#050D08] border border-emerald-500/40 text-emerald-400 font-bold">Terminal</div>
                        <div className="p-2.5 rounded-xl bg-[#1E1E24] border border-purple-500/40 text-purple-300 font-bold">Classic Slate</div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Home Indicator */}
                <div className="w-24 h-1 bg-gray-700 rounded-full mx-auto mt-2" />
              </div>
            </div>

            {/* Feature Highlights beside phone */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Screen Feature #{TABS.findIndex(t => t.id === activeTab) + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {TABS.find(t => t.id === activeTab)?.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {TABS.find(t => t.id === activeTab)?.desc}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs text-gray-300">
                    High precision calculations using standard IANA timezone database definitions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs text-gray-300">
                    Automatic Daylight Saving Time (DST) transitions handled seamlessly.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs text-gray-300">
                    Zero battery drain with hardware-accelerated fluid UI transitions.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
