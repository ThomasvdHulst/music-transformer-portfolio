import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              RiskOptimix Music Transformer
            </h3>
            <p className="text-sm text-gray-600">
              A recreation of Google&apos;s Music Transformer model,
              bringing AI-powered composition to everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-academic-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-sm text-gray-600 hover:text-academic-blue transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-academic-blue transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ThomasvdHulst/MusicTransformer.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-academic-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-van-der-hulst-17884a265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-academic-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:t.van.der.hulst@student.vu.nl"
                className="text-gray-600 hover:text-academic-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {currentYear} RiskOptimix Music Transformer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

