'use client';

import React, { useState } from 'react';
import { Users, CheckCircle2, AlertCircle, Clock, Calendar, ChevronRight, Zap } from 'lucide-react';

interface Participant {
  city: string;
  country: string;
  flag: string;
  offset: number;
}

const PARTICIPANTS: Participant[] = [
  { city: 'San Francisco', country: 'US (PDT)', flag: '🇺🇸', offset: -7 },
  { city: 'London', country: 'UK (BST)', flag: '🇬🇧', offset: 1 },
  { city: 'Tokyo', country: 'JP (JST)', flag: '🇯🇵', offset: 9 },
];

export const MeetingPlannerDemo = () => {
  const [selectedHour, setSelectedHour] = useState<number>(14); // 2:00 PM London time default

  // Helper to compute hour for a given offset relative to UTC
  // Assume reference is UTC hour (e.g., 13:00 UTC)
  const getHourForOffset = (utcHour: number, offset: number) => {
    let h = (utcHour + offset + 24) % 24;
    return Math.floor(h);
  };

  const getStatus = (hour: number) => {
    if (hour >= 9 && hour <= 17) {
      return { label: 'Optimal Work Hours', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', isWork: true };
    } else if ((hour >= 7 && hour < 9) || (hour > 17 && hour <= 21)) {
      return { label: 'Waking / Flexible', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30', isWork: false };
    }
    return { label: 'Sleeping Hours', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30', isWork: false };
  };

  // Find 3 recommended overlap slots
  // Check UTC hours 0-23 where at least 2 or 3 locations have reasonable hours
  const recommendedSlots = [
    { utcH: 14, label: '14:00 UTC (8:00 AM SF / 4:00 PM London / 11:00 PM Tokyo)', rating: 'Best 2-Way Overlap (US & Europe)' },
    { utcH: 15, label: '15:00 UTC (8:00 AM SF / 4:00 PM London)', rating: 'Perfect US-Europe Sync Window' },
    { utcH: 7, label: '07:00 UTC (8:00 AM London / 4:00 PM Tokyo)', rating: 'Perfect Europe-Asia Sync Window' },
  ];

  return (
    <section id="meeting-tools" className="py-20 relative bg-gray-950/60 border-y border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" /> Group Meeting & Call Planner
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Zero-Conflict <span className="cosmic-gradient-text">Global Scheduling</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Stop guessing across timezones. TimeAtlas automatically identifies non-conflicting overlapping working hours for your remote teams and global clients.
          </p>
        </div>

        {/* Interactive Planner Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Participant Cards & Selected Hour Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl glass-panel space-y-3">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Team Participants</span>
                <span className="text-xs text-cyan-400 font-semibold">3 Timezones Selected</span>
              </div>

              {PARTICIPANTS.map((p, idx) => {
                const localHour = getHourForOffset(selectedHour, p.offset);
                const status = getStatus(localHour);
                const displayH = localHour % 12 || 12;
                const ampm = localHour >= 12 ? 'PM' : 'AM';

                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{p.flag}</span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{p.city}</h4>
                        <p className="text-xs text-gray-400">{p.country}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-black font-mono text-white">
                        {displayH}:00 <span className="text-xs text-cyan-400 font-sans">{ampm}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border inline-block ${status.color}`}>
                        {status.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Best Time Recommendation Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-cyan-950/40 border border-indigo-500/30 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4 text-cyan-400" /> Best Time to Call Recommendation
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                The optimal window for San Francisco & London is between <strong>14:00 - 17:00 UTC</strong> (8:00 AM - 11:00 AM SF / 4:00 PM - 7:00 PM London).
              </p>
              <button
                onClick={() => setSelectedHour(14)}
                className="w-full py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-bold text-xs hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-1.5"
              >
                Set Meeting to 14:00 UTC <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 24-Hour Overlap Timeline Matrix */}
          <div className="lg:col-span-7 p-6 rounded-2xl glass-panel space-y-6">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" /> 24-Hour Overlap Timeline
                </h3>
                <p className="text-xs text-gray-400">Click any hour bar below to inspect multi-city local times</p>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                Selected UTC: {selectedHour}:00
              </span>
            </div>

            {/* Hours Bar */}
            <div className="space-y-4">
              <div className="grid grid-cols-12 sm:grid-cols-24 gap-1 overflow-x-auto pb-2">
                {[...Array(24)].map((_, utcH) => {
                  const isSelected = selectedHour === utcH;
                  // check how many participants are in work hours
                  const sfH = getHourForOffset(utcH, -7);
                  const lonH = getHourForOffset(utcH, 1);
                  const tokH = getHourForOffset(utcH, 9);

                  let workCount = 0;
                  if (sfH >= 9 && sfH <= 17) workCount++;
                  if (lonH >= 9 && lonH <= 17) workCount++;
                  if (tokH >= 9 && tokH <= 17) workCount++;

                  let barBg = 'bg-gray-800/80 hover:bg-gray-700';
                  if (workCount === 2) barBg = 'bg-emerald-500/50 hover:bg-emerald-400';
                  if (workCount >= 3) barBg = 'bg-emerald-400 hover:bg-emerald-300';
                  if (isSelected) barBg = 'bg-cyan-400 ring-2 ring-cyan-400 ring-offset-2 ring-offset-gray-950';

                  return (
                    <button
                      key={utcH}
                      onClick={() => setSelectedHour(utcH)}
                      className={`h-16 rounded-md flex flex-col items-center justify-between py-1 transition-all text-[10px] font-mono font-bold ${barBg}`}
                      title={`${utcH}:00 UTC - ${workCount} participants in work hours`}
                    >
                      <span className={isSelected ? 'text-gray-950 font-black' : 'text-gray-300'}>{utcH}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </button>
                  );
                })}
              </div>

              {/* Timeline Legend */}
              <div className="flex flex-wrap items-center justify-between text-xs text-gray-400 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-emerald-400 inline-block" />
                  <span>2+ Working Overlap</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-amber-500/50 inline-block" />
                  <span>Waking Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-gray-800 inline-block" />
                  <span>Off-Hours / Sleeping</span>
                </div>
              </div>
            </div>

            {/* Recommended Overlap Slots List */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Top Recommended Slots Today</h4>
              {recommendedSlots.map((slot, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedHour(slot.utcH)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedHour === slot.utcH
                      ? 'bg-cyan-500/15 border-cyan-500/40 text-white'
                      : 'bg-gray-900/60 border-gray-800 text-gray-300 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">{slot.label}</span>
                      <span className="text-[11px] text-gray-400">{slot.rating}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
