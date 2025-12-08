import React from 'react';
import { Download, ArrowRight, Terminal, Server, Code, Database, Monitor } from 'lucide-react';
import { useLang } from '../context/Context';

const Hero = () => {
    const { t } = useLang();

    return (
        <div className="h-full flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden relative">
            <div className="flex-1 z-10 w-full pt-4 md:pt-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-card-border)] text-indigo-500 text-xs font-semibold mb-6 border border-[var(--color-card-border)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Available for hire
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight bg-gradient-to-r from-[var(--color-text-main)] to-[var(--color-primary)] bg-clip-text text-transparent">
                    {t('heroTitle')}
                </h1>
                <p className="text-xl text-[var(--color-primary)] font-mono mb-6 font-bold">@Estirp3</p>
                <p className="text-muted text-lg leading-relaxed mb-8 max-w-lg">
                    {t('heroDesc')}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="btn-primary no-underline">
                        {t('viewProjects')} <ArrowRight size={18} />
                    </a>
                    <a href="/CV_Patricio_Calderon_dev.pdf" download className="btn-secondary no-underline">
                        {t('downloadCV')} <Download size={18} />
                    </a>
                </div>
            </div>

            {/* Decorative Tech Illustration to fill void */}
            <div className="flex-1 hidden md:flex items-center justify-center relative w-full h-full min-h-[300px]">
                <div className="relative w-full h-[300px] flex items-center justify-center perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

                    {/* Abstract Code Window */}
                    <div className="absolute top-0 right-10 p-4 bg-[var(--color-bg-main)]/90 border border-[var(--color-card-border)] rounded-xl shadow-2xl w-48 z-20 animate-slide-up backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center gap-2 mb-3 border-b border-[var(--color-card-border)] pb-2">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                            <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                            <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                        </div>
                    </div>

                    {/* Server Icon Card */}
                    <div className="absolute bottom-4 left-10 p-3 bg-[var(--color-bg-main)]/90 border border-[var(--color-card-border)] rounded-xl shadow-2xl z-30 animate-slide-up flex items-center gap-3" style={{ animationDelay: '0.5s' }}>
                        <div className="p-2 bg-green-500/20 rounded-lg">
                            <Server className="text-green-500" size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-muted font-bold">System Status</div>
                            <div className="text-xs text-green-500 font-bold">● Operational</div>
                        </div>
                    </div>

                    {/* Central Terminal Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/30 z-10 transform hover:scale-110 transition-transform duration-300">
                        <Terminal size={48} className="text-white" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-10 left-20 px-3 py-1 bg-[var(--color-bg-main)] border border-[var(--color-card-border)] rounded-full text-xs font-mono text-[var(--color-primary)] shadow-sm animate-bounce" style={{ animationDuration: '3s' }}>
                        $ git commit -m "feat: new portfolio"
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
