"use client";

import { useState, useEffect } from "react";
import { FolderGit2, Star, GitFork, ExternalLink, Search, Filter, Sparkles, Layers, Info } from "lucide-react";
import { featuredProjectsData } from "@/data/featuredProjects";
import { fetchGitHubRepos } from "@/lib/github";
import ProjectModal from "./ProjectModal";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  useEffect(() => {
    async function loadRepos() {
      setLoadingRepos(true);
      const data = await fetchGitHubRepos();
      setRepos(data);
      setLoadingRepos(false);
    }
    loadRepos();
  }, []);

  const languages = ["All", ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean)))];

  const HIDDEN_REPOS = ["NWscript", "nilesoft-shell"];

  const filteredRepos = repos.filter((repo) => {
    if (HIDDEN_REPOS.some(name => repo.name.toLowerCase() === name.toLowerCase())) return false;
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang = selectedLanguage === "All" || repo.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO & OPEN SOURCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & <span className="gradient-text">GitHub Repositories</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Explore curated major projects from internships and live open-source repositories directly synced with GitHub.
          </p>
        </div>

        {/* --- SECTION 1: FEATURED PROJECTS --- */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">Pinned & Major Highlights</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjectsData.map((project) => (
              <div
                key={project.id}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium">
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-cyan-400 mb-4">{project.subtitle}</p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inspect Modal Trigger CTA */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl glass-panel text-slate-200 hover:text-teal-300 font-semibold text-xs border border-slate-700 hover:border-teal-500/40 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <Info className="w-4 h-4 text-teal-400" />
                  <span>Inspect Architecture Details</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: LIVE GITHUB REPOSITORIES --- */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white tracking-wide">Live Public Repositories</h3>
              <span className="text-xs text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-800">
                {filteredRepos.length} Repos
              </span>
            </div>

            {/* Search & Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search repos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Language Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto py-1">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1 rounded-lg text-xs transition-all ${
                      selectedLanguage === lang
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 font-bold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Repo Grid */}
          {loadingRepos ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="glass-card p-6 rounded-2xl animate-pulse space-y-4">
                  <div className="h-4 bg-slate-800 rounded w-3/4" />
                  <div className="h-10 bg-slate-800/60 rounded" />
                  <div className="h-4 bg-slate-800 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredRepos.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl">
              <p className="text-slate-400 text-sm">No repositories found matching your query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-teal-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-white group-hover:text-teal-300 transition-colors flex items-center gap-1.5"
                      >
                        <FolderGit2 className="w-4 h-4 text-teal-400" />
                        <span className="truncate max-w-[200px]">{repo.name}</span>
                      </a>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                        title="Open in GitHub"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 mb-4 min-h-[32px]">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs">
                    {/* Topics / Badges */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {repo.topics.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-400"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats bar */}
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <div className="flex items-center gap-3">
                        {repo.language && (
                          <span className="flex items-center gap-1 text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-500/80" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-slate-400" />
                          {repo.forks_count}
                        </span>
                      </div>
                      <span>{new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "2-digit" })}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
