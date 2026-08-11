"use client";

import { X, ExternalLink, Sparkles, CheckCircle2, Tag } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl glass-card rounded-3xl border border-slate-700 bg-slate-900/90 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs mb-2">
            {project.badge || "Featured Project"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-teal-400 mt-1">{project.subtitle}</p>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto pr-2 space-y-6 flex-1 text-slate-300">
          <div>
            <h4 className="text-xs uppercase text-slate-400 tracking-wider mb-2">Overview</h4>
            <p className="text-sm leading-relaxed text-slate-300">{project.longDescription || project.description}</p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase text-slate-400 tracking-wider mb-3">Key Technical Features</h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase text-slate-400 tracking-wider mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-teal-950 font-semibold text-xs transition-colors shadow-md shadow-teal-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
