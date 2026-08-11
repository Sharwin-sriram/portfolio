"use client";

import { Briefcase, Calendar, MapPin, Building, ChevronRight } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK & INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional <span className="gradient-text">Experience Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/80 via-slate-800 to-slate-900 -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Circle Indicator on Vertical Bar */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/20 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping opacity-75" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all group">
                      
                      {/* Company & Role Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-300 text-xs border border-teal-500/30">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-teal-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                        {item.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mb-4">
                        <Building className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {item.companyUrl ? (
                          <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:underline transition-colors">
                            {item.company}
                          </a>
                        ) : (
                          <span>{item.company}</span>
                        )}
                        <span className="text-slate-600">•</span>
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="text-xs text-slate-400">{item.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 mb-5">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <ChevronRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                        {item.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
