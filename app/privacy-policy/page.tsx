"use client";

import React from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Mail,
} from "lucide-react";

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" /> Legal & Transparency
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">
            Last Updated: September 2, 2026 • Effective Date: September 2, 2026
          </p>
        </div>

        {/* High Level Privacy Commitment Highlight Box */}
        <div className="p-6 rounded-3xl glass-panel-glow border border-cyan-500/30 mb-10 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <Lock className="w-4 h-4" /> Our Privacy Guarantee
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            At <strong>TimeAtlas</strong>, we believe your location preferences
            and timezone schedules belong to you. We do{" "}
            <strong>not sell, rent, or trade your personal data</strong>.
            TimeAtlas operates on a local-first storage model where your saved
            cities, custom theme preferences, and reference locations remain
            stored locally on your device.
          </p>
        </div>

        {/* Structured Sections */}
        <div className="space-y-10 text-gray-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">1.</span> Information We
              Collect
            </h2>
            <p>
              When you use the TimeAtlas mobile app or web interface, we collect
              minimal data required to render accurate timezone comparisons:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-400">
              <li>
                <strong className="text-gray-200">
                  Local Location Data (Optional):
                </strong>{" "}
                If you grant location permission, TimeAtlas uses your
                device&apos;s GPS or network location solely to determine your
                current local timezone for reference clock display. Your exact
                GPS coordinates are never transmitted to our servers.
              </li>
              <li>
                <strong className="text-gray-200">
                  App Preferences & Saved Cities:
                </strong>{" "}
                Your saved locations, clock format (Digital/Analog), selected
                theme, and meeting preferences are saved locally on your device
                storage (`AsyncStorage`).
              </li>
              <li>
                <strong className="text-gray-200">
                  Anonymous Usage Telemetry:
                </strong>{" "}
                Non-identifiable diagnostic logs (e.g., app crash reports and
                operating system version) may be collected to help us diagnose
                bugs and improve app stability.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">2.</span> How We Use
              Information
            </h2>
            <p>
              The information processed by TimeAtlas is used strictly for the
              following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-400">
              <li>
                Calculating exact time offsets and daylight saving transitions
                across global cities.
              </li>
              <li>
                Rendering live digital and analog clock interfaces in your
                chosen color theme.
              </li>
              <li>
                Highlighting non-conflicting working hours in the Group Meeting
                & Call Planner.
              </li>
              <li>
                Maintaining app performance, fixing bugs, and publishing system
                updates.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">3.</span> Data Storage &
              Local-First Architecture
            </h2>
            <p>
              TimeAtlas does not require you to create an account or sign in
              with personal credentials. All user preferences remain on your
              smartphone or browser. If you uninstall the app or clear browser
              data, your local saved settings will be deleted.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">4.</span> Third-Party
              Services
            </h2>
            <p>
              We do not embed intrusive third-party advertising SDKs or
              cross-site tracking pixels. Any standard operating system services
              (such as Apple App Store or Google Play Store crash reporting)
              operate strictly under their respective privacy policies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">5.</span> Your Rights &
              Choice Controls
            </h2>
            <p>You maintain full control over your data within TimeAtlas:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-400">
              <li>
                You can enable or revoke Location Access at any time through
                your device System Settings.
              </li>
              <li>
                You can add, edit, or delete any saved city or comparison
                location directly inside the app.
              </li>
              <li>
                You can request complete data erasure by clearing app storage or
                contacting privacy support.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">6.</span>{" "}
              Children&apos;s Privacy
            </h2>
            <p>
              TimeAtlas does not knowingly solicit or collect personal
              information from children under the age of 13. TimeAtlas is a
              general utility clock app designed for users of all ages.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-gray-800 pt-8">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">7.</span> Contact
              Privacy Officer
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your data rights, please contact our dedicated
              privacy team:
            </p>
            <div className="p-5 rounded-2xl bg-gray-900 border border-gray-800 space-y-2 inline-block">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Privacy Team Contact
              </div>
              <a
                href="mailto:privacy@timeatlas.app"
                className="text-cyan-400 font-mono font-bold text-sm hover:underline flex items-center gap-2"
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
