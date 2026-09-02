import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TimeAtlas - World Clock & Timezone Planner App',
  description:
    'Master time across the globe. TimeAtlas is the ultimate world clock app with interactive time scrubber slider, group meeting overlap finder, daylight map visualizer, and 7 custom themes.',
  keywords: [
    'TimeAtlas',
    'World Clock App',
    'Timezone Converter',
    'Time Scrubber Slider',
    'Group Meeting Planner',
    'Best Time to Call Calculator',
    'Daylight Terminator Map',
    'Timezone Planner',
  ],
  openGraph: {
    title: 'TimeAtlas - World Clock & Timezone Planner App',
    description:
      'Master time across the globe with interactive time scrubbers, team meeting planners, and 7 custom themes.',
    url: 'https://timeatlas.app',
    siteName: 'TimeAtlas',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#070A12] text-gray-100 font-sans selection:bg-cyan-500 selection:text-gray-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
