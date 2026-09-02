"use client";

import React from "react";
import Link from "next/link";
import { FileText, Shield, AlertTriangle, ArrowLeft, Mail } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-gray-100 hero-glow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to TimeAtlas Home
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12 border-b border-gray-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" /> Terms of Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-400">
            Last Updated: September 2, 2026 • Effective Date: September 2, 2026
          </p>
        </div>

        {/* Summary Disclaimer Box */}
        <div
          id="disclaimer"
          className="p-6 rounded-3xl glass-panel-glow border border-indigo-500/30 mb-10 space-y-3"
        >
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-400" /> Essential
            Summary
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            By downloading, accessing, or using the <strong>TimeAtlas</strong>{" "}
            application or web service, you agree to comply with these Terms &
            Conditions. TimeAtlas provides world clock calculations and group
            meeting tools for informational and planning purposes.
          </p>
        </div>

        {/* Structured Sections */}
        <div className="space-y-10 text-gray-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">1.</span> Acceptance
              of Terms
            </h2>
            <p>
              By accessing or installing TimeAtlas, you acknowledge that you
              have read, understood, and agree to be bound by these Terms &
              Conditions and our Privacy Policy. If you do not agree to these
              terms, you must refrain from using the software.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">2.</span> License
              Grant & Permitted Usage
            </h2>
            <p>
              Subject to your compliance with these Terms, TimeAtlas grants you
              a non-exclusive, non-transferable, revocable, personal license to
              download, install, and run the app on your personal mobile devices
              or web browsers.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-400">
              <li>
                You may use TimeAtlas for personal time management, travel
                planning, or business scheduling.
              </li>
              <li>
                You may not reverse-engineer, decompile, modify, or create
                derivative works of the application source code.
              </li>
              <li>
                You may not redistribute or sell TimeAtlas software binaries or
                brand assets without explicit written permission.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">3.</span> Timezone
              Data & Accuracy Disclaimer
            </h2>
            <p>
              TimeAtlas calculates local times and offset hours using standard
              global timezone tables (IANA Time Zone Database). While we strive
              for absolute precision and update DST rules regularly:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-400">
              <li>
                Geopolitical changes or sudden emergency government daylight
                saving shifts may occasionally cause discrepancies before an app
                update is deployed.
              </li>
              <li>
                TimeAtlas is provided on an &quot;AS IS&quot; and &quot;AS
                AVAILABLE&quot; basis. Users are encouraged to double-check
                critical flight schedules or high-stakes international
                broadcasts.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">4.</span> Intellectual
              Property Rights
            </h2>
            <p>
              All titles, logos, brand names, visual themes (Cosmic Cyan, Cyber
              Neon, Obsidian, etc.), graphic design elements, code, and
              documentation associated with TimeAtlas are the exclusive
              intellectual property of TimeAtlas Inc. All rights reserved.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">5.</span> Limitation
              of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, TimeAtlas Inc.
              and its developers shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages (including
              lost profits, missed appointments, or business interruption)
              arising out of or related to your use or inability to use the
              service.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">6.</span>{" "}
              Modifications to Service & Terms
            </h2>
            <p>
              We reserve the right to modify or discontinue features in
              TimeAtlas, or update these Terms & Conditions from time to time.
              Updated terms will be posted on this website with a revised
              &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-gray-800 pt-8">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">7.</span> Governing
              Law & Legal Contact
            </h2>
            <p>
              These Terms & Conditions are governed by and construed in
              accordance with standard international commercial software laws.
              If you have questions regarding legal compliance, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-gray-900 border border-gray-800 space-y-2 inline-block">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Legal Department Contact
              </div>
              <a
                href="mailto:infosiddjain@gmail.com"
                className="text-indigo-400 font-mono font-bold text-sm hover:underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> infosiddjain@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
