import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RiskOptimix Music Transformer',
  description: 'A recreation of Google\'s revolutionary Music Transformer - AI-powered music generation and composition.',
  keywords: ['music transformer', 'AI music', 'music generation', 'deep learning', 'MIDI', 'neural networks'],
  authors: [{ name: 'RiskOptimix' }],
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'RiskOptimix Music Transformer',
    description: 'A recreation of Google\'s revolutionary Music Transformer - AI-powered music generation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

