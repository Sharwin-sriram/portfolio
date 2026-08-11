"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code, Terminal, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
  ];

  useEffect(() => {
    // Navbar background on scroll
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver for reliable active section tracking
    const sectionIds = navLinks.map(link => link.href.substring(1));
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080c14]/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center group"
          >
            <span className="font-anurati text-xl text-white group-hover:text-teal-300 transition-colors">
              Sharwin
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Social Quick Links & Hire CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/Sharwin-sriram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800/60 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/sharwinsriram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800/60 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 text-xs font-semibold text-teal-950 bg-teal-400 hover:bg-teal-300 rounded-full transition-all shadow-md hover:shadow-teal-400/20"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 mt-3 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Sharwin-sriram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-teal-300"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sharwinsriram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-teal-300"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-xs font-medium text-teal-950 bg-teal-400 hover:bg-teal-300 rounded-full"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
