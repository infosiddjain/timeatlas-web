'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Send, CheckCircle2, Clock, MapPin, HelpCircle, Shield, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen text-gray-100 hero-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" /> Support & Contact
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            We&apos;re Here to <span className="cosmic-gradient-text">Help You</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Have questions, feedback, or a feature request for TimeAtlas? Send us a message and our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel-glow">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Message Sent Successfully!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to TimeAtlas support. We have received your inquiry and sent a confirmation email to <strong>{formData.email || 'your email'}</strong>.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', category: 'General Inquiry', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-cyan-400 font-bold text-xs hover:bg-gray-800 transition-all mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-400" /> Direct Message Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Press & Partnerships">Press & Partnerships</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide details about your query or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl text-sm font-extrabold text-gray-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  {status === 'submitting' ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Support Channels & Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Direct Support */}
            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Email Support</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Direct customer support and technical assistance:
              </p>
              <a
                href="mailto:support@timeatlas.app"
                className="text-cyan-400 font-mono text-sm font-bold block hover:underline"
              >
                support@timeatlas.app
              </a>
            </div>

            {/* Card 2: Press */}
            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Press & Media</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                For press inquiries, brand assets, or review codes:
              </p>
              <a
                href="mailto:press@timeatlas.app"
                className="text-indigo-400 font-mono text-sm font-bold block hover:underline"
              >
                press@timeatlas.app
              </a>
            </div>

            {/* Card 3: Response Time */}
            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Response Time Commitment</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                We monitor support tickets 7 days a week. Typical response time is under <strong>12 to 24 hours</strong>.
              </p>
            </div>

            {/* Card 4: Quick Links */}
            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Legal & Resources</h4>
              <div className="flex flex-col space-y-2 text-xs font-semibold text-gray-300">
                <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" /> Read Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-indigo-400" /> Read Terms & Conditions
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
