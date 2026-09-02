'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Sunrise, Sunset, Sliders, Palette, RefreshCw, Check, Sparkles, Compass } from 'lucide-react';

interface CityLocation {
  id: string;
  city: string;
  country: string;
  flag: string;
  offsetHours: number; // offset from UTC in hours
  timezone: string;
}

const CITIES: CityLocation[] = [
  { id: '1', city: 'San Francisco', country: 'United States', flag: '🇺🇸', offsetHours: -7, timezone: 'PDT (UTC-7)' },
  { id: '2', city: 'New York', country: 'United States', flag: '🇺🇸', offsetHours: -4, timezone: 'EDT (UTC-4)' },
  { id: '3', city: 'London', country: 'United Kingdom', flag: '🇬🇧', offsetHours: 1, timezone: 'BST (UTC+1)' },
  { id: '4', city: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪', offsetHours: 4, timezone: 'GST (UTC+4)' },
  { id: '5', city: 'Tokyo', country: 'Japan', flag: '🇯🇵', offsetHours: 9, timezone: 'JST (UTC+9)' },
  { id: '6', city: 'Sydney', country: 'Australia', flag: '🇦🇺', offsetHours: 10, timezone: 'AEST (UTC+10)' },
];

const THEMES = [
  { id: 'cosmic', name: 'Cosmic Cyan', bg: 'bg-[#070A12]', cardBg: 'bg-[#111827]/90', border: 'border-cyan-500/30', accent: '#22D3EE', text: 'text-cyan-400' },
  { id: 'neon', name: 'Neon Cyber', bg: 'bg-[#0B0D17]', cardBg: 'bg-[#151928]/90', border: 'border-indigo-500/40', accent: '#6366F1', text: 'text-indigo-400' },
  { id: 'midnight', name: 'Obsidian', bg: 'bg-[#09090B]', cardBg: 'bg-[#18181B]/90', border: 'border-zinc-800', accent: '#3B82F6', text: 'text-blue-400' },
  { id: 'glass', name: 'Glassmorphic', bg: 'bg-[#0F172A]', cardBg: 'bg-[#1E293B]/70 backdrop-blur-md', border: 'border-white/20', accent: '#38BDF8', text: 'text-sky-400' },
  { id: 'terminal', name: 'Terminal', bg: 'bg-[#050D08]', cardBg: 'bg-[#0D1F15]/90', border: 'border-emerald-500/40', accent: '#10B981', text: 'text-emerald-400' },
  { id: 'classic', name: 'Classic Slate', bg: 'bg-[#1E1E24]', cardBg: 'bg-[#2B2C34]/90', border: 'border-purple-500/30', accent: '#7F5AF0', text: 'text-purple-400' },
];

export const LiveClockDemo = () => {
  const [clockMode, setClockMode] = useState<'digital' | 'analog'>('digital');
  const [scrubOffsetMinutes, setScrubOffsetMinutes] = useState<number>(0);
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Ticking second timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute scrubbed Date
  const targetDate = new Date(currentTime.getTime() + scrubOffsetMinutes * 60 * 1000);

  // Helper to format time for a city
  const getCityTime = (cityOffsetHours: number) => {
    // Get current UTC timestamp
    const utcMs = targetDate.getTime() + targetDate.getTimezoneOffset() * 60000;
    const cityMs = utcMs + cityOffsetHours * 3600000;
    const cityDate = new Date(cityMs);

    const hours = cityDate.getHours();
    const minutes = cityDate.getMinutes();
    const seconds = cityDate.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // Day/Night indicator
    let isDay = hours >= 6 && hours < 18;
    let dayNightLabel = 'Night';
    let icon = <Moon className="w-4 h-4 text-indigo-400" />;

    if (hours >= 6 && hours < 9) {
      dayNightLabel = 'Sunrise';
      icon = <Sunrise className="w-4 h-4 text-orange-400" />;
    } else if (hours >= 9 && hours < 17) {
      dayNightLabel = 'Business';
      icon = <Sun className="w-4 h-4 text-amber-400" />;
    } else if (hours >= 17 && hours < 20) {
      dayNightLabel = 'Sunset';
      icon = <Sunset className="w-4 h-4 text-rose-400" />;
    }

    // Relative day indicator compared to user's current day
    const userDay = targetDate.getDate();
    const cityDay = cityDate.getDate();
    let dayBadge = 'Same Day';
    let badgeColor = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

    if (cityDay > userDay || (cityDay === 1 && userDay > 20)) {
      dayBadge = '+1 Day';
      badgeColor = 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    } else if (cityDay < userDay || (userDay === 1 && cityDay > 20)) {
      dayBadge = '-1 Day';
      badgeColor = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    }

    return {
      timeStr: `${displayHours}:${formattedMinutes}`,
      secondsStr: formattedSeconds,
      ampm,
      hours24: hours,
      dayNightLabel,
      icon,
      isDay,
      dayBadge,
      badgeColor,
    };
  };

  // Compute analog hand angles
  const refHours = targetDate.getHours() % 12;
  const refMinutes = targetDate.getMinutes();
  const refSeconds = targetDate.getSeconds();

  const hourDeg = (refHours + refMinutes / 60) * 30;
  const minuteDeg = (refMinutes + refSeconds / 60) * 6;
  const secondDeg = refSeconds * 6;

  return (
    <section id="live-demo" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Live Interactive App Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Experience <span className="cosmic-gradient-text">TimeAtlas</span> Live
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Scrub through time in real-time, preview multi-city day/night shifts, and test custom color themes right in your browser.
          </p>
        </div>

        {/* Live Simulator Card Container */}
        <div className={`rounded-3xl border ${activeTheme.border} ${activeTheme.bg} p-6 sm:p-8 shadow-2xl transition-all duration-500`}>
          
          {/* Top Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800/80">
            
            {/* Clock Mode Selector */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-gray-900/90 border border-gray-800">
              <button
                onClick={() => setClockMode('digital')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  clockMode === 'digital'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-gray-950 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Digital View
              </button>
              <button
                onClick={() => setClockMode('analog')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  clockMode === 'analog'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-gray-950 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Analog Dial
              </button>
            </div>

            {/* Theme Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5 mr-2">
                <Palette className="w-3.5 h-3.5 text-cyan-400" /> Theme:
              </span>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTheme(t)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                    activeTheme.id === t.id
                      ? `${t.border} ${t.cardBg} ${t.text} ring-2 ring-cyan-500/40`
                      : 'border-gray-800 bg-gray-900/60 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.accent }} />
                  {t.name}
                  {activeTheme.id === t.id && <Check className="w-3 h-3 ml-0.5" />}
                </button>
              ))}
            </div>

            {/* Reset Scrub Button */}
            {scrubOffsetMinutes !== 0 && (
              <button
                onClick={() => setScrubOffsetMinutes(0)}
                className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Reset to Live Time
              </button>
            )}

          </div>

          {/* Main Display Section: Clock Hero & Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
            
            {/* Clock Visualizer (Digital / Analog) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-950/60 border border-gray-800/80">
              {clockMode === 'digital' ? (
                <div className="text-center space-y-2 py-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    Reference Time (UTC)
                  </div>
                  <div className="text-5xl sm:text-6xl font-black tracking-tight font-mono text-white flex items-baseline justify-center gap-2">
                    <span>{getCityTime(0).timeStr}</span>
                    <span className="text-xl sm:text-2xl text-cyan-400">{getCityTime(0).ampm}</span>
                    <span className="text-lg text-gray-400 font-normal">:{getCityTime(0).secondsStr}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">
                    {targetDate.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              ) : (
                /* Analog Clock Face */
                <div className="relative w-56 h-56 rounded-full border-4 border-gray-800 bg-gray-950 flex items-center justify-center shadow-inner my-2">
                  {/* Dial Hour Markers */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-3 bg-gray-700 rounded-full"
                      style={{
                        transform: `rotate(${i * 30}deg) translateY(-94px)`,
                      }}
                    />
                  ))}
                  {/* Hour Hand */}
                  <div
                    className="absolute w-1.5 h-16 bg-white rounded-full origin-bottom shadow"
                    style={{
                      transform: `rotate(${hourDeg}deg) translateY(-32px)`,
                    }}
                  />
                  {/* Minute Hand */}
                  <div
                    className="absolute w-1 h-22 bg-cyan-400 rounded-full origin-bottom shadow"
                    style={{
                      transform: `rotate(${minuteDeg}deg) translateY(-44px)`,
                    }}
                  />
                  {/* Second Hand */}
                  <div
                    className="absolute w-0.5 h-24 bg-rose-500 rounded-full origin-bottom shadow"
                    style={{
                      transform: `rotate(${secondDeg}deg) translateY(-48px)`,
                    }}
                  />
                  {/* Center Dot */}
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full border-2 border-white z-10 shadow-lg" />
                </div>
              )}
            </div>

            {/* Time Scrubber Slider Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-5 rounded-2xl bg-gray-900/80 border border-gray-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    Interactive Time Scrubber
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {scrubOffsetMinutes === 0
                      ? 'Live Time (0h)'
                      : `${scrubOffsetMinutes > 0 ? '+' : ''}${(scrubOffsetMinutes / 60).toFixed(1)} Hours Shift`}
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="-720"
                  max="720"
                  step="30"
                  value={scrubOffsetMinutes}
                  onChange={(e) => setScrubOffsetMinutes(Number(e.target.value))}
                  className="w-full"
                />

                {/* Slider Labels */}
                <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>-12 Hours</span>
                  <span>-6h</span>
                  <span className="text-cyan-400 font-bold">NOW</span>
                  <span>+6h</span>
                  <span>+12 Hours</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15 text-xs text-gray-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <p>
                  <strong>Drag the slider</strong> to preview future or past hours worldwide. Notice how cities instantly update local time, daylight status, and relative day indicators!
                </p>
              </div>
            </div>

          </div>

          {/* Cities Comparison Cards Grid */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider px-1">
              <span>Global City Comparison ({CITIES.length} Active Clocks)</span>
              <span>Scrubbed Local Time</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CITIES.map((city) => {
                const info = getCityTime(city.offsetHours);
                return (
                  <div
                    key={city.id}
                    className={`p-4 rounded-2xl border ${activeTheme.border} ${activeTheme.cardBg} flex items-center justify-between hover:scale-[1.02] transition-transform duration-200 shadow-md`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{city.flag}</span>
                        <span className="text-base font-bold text-white">{city.city}</span>
                        <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded border ${info.badgeColor}`}>
                          {info.dayBadge}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{city.timezone}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          {info.icon}
                          {info.dayNightLabel}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-black font-mono tracking-tight text-white flex items-baseline justify-end gap-1">
                        <span>{info.timeStr}</span>
                        <span className="text-xs text-cyan-400 font-sans font-semibold">{info.ampm}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">:{info.secondsStr}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
