"use client";

import { ArrowUp, Terminal, Heart } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-2 font-mono text-slate-300 font-bold">
            <div className="p-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span>
              Sharwin<span className="text-teal-400">.dev</span>
            </span>
          </div>

          {/* Copyright & Tech */}
          <div className="text-center font-mono">
            <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Built with Next.js 16, React 19 & Tailwind CSS.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-teal-300 hover:border-teal-500/40 transition-all flex items-center gap-1.5"
            title="Scroll to Top"
          >
            <span className="font-mono text-[11px]">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
