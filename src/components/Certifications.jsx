"use client";

import { Award, ExternalLink, ShieldCheck, CheckCircle, GraduationCap } from "lucide-react";
import { certificationsData } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-slate-950/40 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            NPTEL & Professional <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Verified academic and professional course achievements in computer science & software development.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    Verified NPTEL Certificate
                  </span>
                  <span className="text-xs text-slate-400">{cert.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-cyan-400 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Issuer: {cert.issuer}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Verification Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl glass-panel text-slate-200 hover:text-teal-300 font-semibold text-xs border border-slate-700 hover:border-teal-500/40 transition-all flex items-center justify-center gap-2"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
