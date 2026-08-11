"use client";

import { useState } from "react";
import { Code2, Layout, Server, Wrench, CheckCircle2 } from "lucide-react";
import { skillsData } from "@/data/skills";

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Wrench: Wrench
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map(c => c.category)];

  const filteredData = activeCategory === "All"
    ? skillsData
    : skillsData.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tools & Technologies <span className="gradient-text">I Work With</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            A comprehensive set of modern languages, frameworks, systems tools, and design concepts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-teal-400 text-teal-950 shadow-lg shadow-teal-500/20 font-bold"
                  : "glass-card text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
