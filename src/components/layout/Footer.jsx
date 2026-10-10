import React from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 text-xs font-mono relative z-10 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span className="font-bold font-display text-slate-900 dark:text-white text-sm">
                        Patricio Calderón
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <span>© {new Date().getFullYear()} @Estirp3</span>
                </div>

                <div className="flex items-center gap-2 text-center text-[11px] text-slate-600 dark:text-slate-400">
                    <span>Construido con React, Tailwind & Agentes de IA</span>
                    <Sparkles size={13} className="text-purple-600 dark:text-purple-400" />
                </div>

                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                    <a 
                        href="https://github.com/Estirp3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={16} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/patricio-calder%C3%B3n-573ba8208/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a 
                        href="mailto:patricio.calderonig@gmail.com" 
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
