"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Code, Cpu } from "lucide-react";
import { profileData } from "@/data/profile";
import { GithubIcon } from "./Icons";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-float" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Main Hero Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Full-Stack & LLD Software Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="gradient-text">{profileData.name}</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl text-slate-300 font-medium">
              {profileData.title}
            </p>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {profileData.headline} Specialized in crafting robust web applications with Next.js & React, high-performance media nodes, and clean object-oriented systems design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-400 text-teal-950 font-semibold text-sm hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:text-white hover:bg-slate-800 transition-all"
              >
                <span>Internship & Experience</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-teal-300 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 pt-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>TypeScript / Next.js / Java</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-teal-400" />
                <span>Low-Level System Design</span>
              </div>
            </div>

          </div>

          {/* Right Side: Profile Image / Alt Message */}
          <div className="flex items-center justify-center">
            {!imageError ? (
              <img
                src={profileData.avatarUrl || "/profile.jpg"}
                alt="Profile Picture Placeholder"
                onError={() => setImageError(true)}
                className="max-w-xs w-full rounded-2xl border border-slate-800 shadow-lg object-cover"
              />
            ) : (
              <div className="px-8 py-12 rounded-2xl border border-dashed border-slate-800 bg-slate-900/30 text-slate-400 text-center text-sm">
                Profile Picture Placeholder
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
