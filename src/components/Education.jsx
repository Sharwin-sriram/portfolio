"use client";

import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from "lucide-react";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="gradient-text">Coursework</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-teal-500/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs mb-2 inline-block">
                    {edu.score}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col md:items-end text-xs text-slate-400 gap-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework Grid */}
              <div className="pt-6">
                <h4 className="text-xs uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-teal-400" />
                  <span>Key Computer Science Coursework</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {edu.relevantCourses.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-slate-300">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
