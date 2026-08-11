"use client";

import { User, Terminal, Cpu, ShieldCheck, Zap, Layers } from "lucide-react";
import { profileData } from "@/data/profile";

export default function About() {
  const highlights = [
    {
      icon: Terminal,
      title: "Full-Stack Development",
      description: "Building responsive frontend user interfaces with React & Next.js, powered by robust Node.js backend REST services."
    },
    {
      icon: Cpu,
      title: "Low-Level Design (LLD)",
      description: "Designing modular, maintainable, and object-oriented software architectures applying SOLID principles and classic design patterns."
    },
    {
      icon: Layers,
      title: "System Customization",
      description: "Hands-on experience configuring Linux environments (Hyprland rice), build tooling, and media streaming protocols."
    },
    {
      icon: Zap,
      title: "Performance & DX",
      description: "Focusing on low-latency state recalculations, clean code standards, component reuse, and developer experience."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Solutions with <span className="gradient-text">Precision & Purpose</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Detailed Bio Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <h3 className="text-2xl font-bold text-white leading-snug">
              Passionate Developer continuously exploring the edge of modern web tech and system design.
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
              {profileData.bio}
            </p>

            <p className="text-slate-400 leading-relaxed">
              During my internship at <strong className="text-teal-300">Pinesphere Technologies</strong>, I led the development of key components for enterprise Point-of-Sale systems, mastering real-time state synchronization and production-grade UI design.
            </p>

            <div className="p-4 rounded-2xl glass-card border-l-4 border-l-teal-400 bg-slate-900/40">
              <p className="text-xs sm:text-sm font-mono text-teal-200">
                "Simple things should be simple, complex things should be possible." — Designing software with clarity and modular structure.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 w-fit mb-3 group-hover:bg-teal-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
