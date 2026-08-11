"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, MessageSquare, MapPin } from "lucide-react";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/40 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Interested in collaboration, engineering roles, or tech discussions? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Action */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400 w-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Email Address</h3>
                <p className="text-base font-bold text-white mt-1">{profileData.email}</p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-teal-400" />
                    <span className="text-teal-400 font-bold">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Social Profiles</h3>
              
              <div className="flex flex-col gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-teal-400" />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">@Sharwin-sriram</span>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-teal-400" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">sharwinsriram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-teal-400" />
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-center space-y-2 animate-in fade-in">
                  <Check className="w-8 h-8 text-teal-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I will get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hello Sharwin, I would love to discuss..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-teal-400 text-teal-950 font-bold text-xs hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
