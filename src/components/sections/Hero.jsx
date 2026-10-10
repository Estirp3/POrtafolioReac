import React, { useState } from 'react';
import { 
    Download, 
    ArrowRight, 
    Terminal, 
    Server, 
    Sparkles, 
    Cpu, 
    CheckCircle2, 
    Bot,
    ShieldCheck
} from 'lucide-react';
import { useLang } from '../../hooks';
import profilePic from '../../assets/img/prc.png';

const Hero = () => {
    const { t, lang } = useLang();
    const [activeTab, setActiveTab] = useState('ai'); // 'ai' | 'cloud'

    return (
        <div className="h-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between relative">
            {/* Ambient background glows */}
            <div className="absolute -left-12 -top-16 w-72 h-72 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-tl from-purple-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: Identity, Value Proposition & Actions */}
            <div className="flex-1 z-10 w-full space-y-6">
                
                {/* Profile Avatar & Status Badge */}
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="relative inline-block">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-4 ring-slate-100 dark:ring-slate-800/80 border-2 border-indigo-500/40 shadow-lg bg-slate-950">
                            <img
                                src={profilePic}
                                alt="Patricio Calderon"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        {/* Status indicator docked cleanly on the avatar corner */}
                        <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-white dark:ring-slate-900"></span>
                        </span>
                    </div>

                    <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {t('available')}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                            Patricio Calderón
                            <span className="text-xs px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono font-medium border border-indigo-500/20">
                                @Estirp3
                            </span>
                        </h2>
                        <p className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                            <Sparkles size={13} className="text-purple-500 dark:text-purple-400" />
                            Fullstack • DevOps • AI Engineering
                        </p>
                    </div>
                </div>

                {/* Main Heading - High Contrast in Light & Dark Mode */}
                <div className="space-y-3">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-[1.18] text-slate-900 dark:text-white">
                        {lang === 'ES' ? (
                            <>
                                Desarrollador <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 dark:from-indigo-400 dark:via-purple-300 dark:to-sky-300 bg-clip-text text-transparent">Fullstack & DevOps</span> potenciado con IA
                            </>
                        ) : (
                            <>
                                Fullstack & DevOps <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 dark:from-indigo-400 dark:via-purple-300 dark:to-sky-300 bg-clip-text text-transparent">AI Solutions</span> Developer
                            </>
                        )}
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                        {t('heroDesc')}
                    </p>
                </div>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a href="#projects" className="btn-primary no-underline text-sm sm:text-base">
                        {t('viewProjects')} <ArrowRight size={17} />
                    </a>
                    <a href="/CV_Patricio_Calderon_dev.pdf" download className="btn-secondary no-underline text-sm sm:text-base">
                        {t('downloadCV')} <Download size={17} />
                    </a>
                </div>

                {/* Quick Trust Badges */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--color-bg-subtle)] border border-[var(--color-card-border)] flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-500" /> +30 Proyectos Cloud
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--color-bg-subtle)] border border-[var(--color-card-border)] flex items-center gap-1.5">
                        <Bot size={13} className="text-purple-500 dark:text-purple-400" /> Agentes MCP & LLMs
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--color-bg-subtle)] border border-[var(--color-card-border)] flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-indigo-500 dark:text-indigo-400" /> Arquitectura K8s (AKS)
                    </span>
                </div>
            </div>

            {/* Right Column: Sleek Simulated Terminal & Control Core */}
            <div className="flex-1 w-full relative z-10">
                <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-4 sm:p-5 text-slate-200 backdrop-blur-xl">
                    
                    {/* Window Titlebar */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                            <span className="text-xs font-mono text-slate-400 ml-2">estirp3-dev-box:~</span>
                        </div>
                        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                            <button 
                                onClick={() => setActiveTab('ai')}
                                className={`px-2.5 py-0.5 rounded cursor-pointer transition-colors ${activeTab === 'ai' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                            >
                                AI Agents
                            </button>
                            <button 
                                onClick={() => setActiveTab('cloud')}
                                className={`px-2.5 py-0.5 rounded cursor-pointer transition-colors ${activeTab === 'cloud' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                            >
                                Cloud / K8s
                            </button>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    {activeTab === 'ai' ? (
                        <div className="space-y-2.5 font-mono text-xs">
                            <div className="text-slate-400 flex items-center gap-1.5">
                                <span className="text-purple-400 font-bold">$</span> agent.orchestrate --pipeline metropolitan
                            </div>
                            <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-900/40 space-y-1.5 text-slate-300">
                                <div className="flex items-center justify-between text-[11px]">
                                    <span className="text-indigo-400 flex items-center gap-1">
                                        <Bot size={13} /> Model Context Protocol (MCP)
                                    </span>
                                    <span className="text-emerald-400 font-semibold">Active</span>
                                </div>
                                <div className="text-[11px] text-slate-400">
                                    &gt; Curaduría de modelos y postulaciones automatizadas con OpenAI.
                                </div>
                                <div className="text-[11px] text-slate-400">
                                    &gt; Embeddings vectoriales calculados para búsqueda semántica.
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pt-1">
                                <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                                    <div className="text-[10px] text-slate-400">LLM Inference</div>
                                    <div className="text-emerald-400 font-bold flex items-center gap-1 text-xs">
                                        ● Operational
                                    </div>
                                </div>
                                <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                                    <div className="text-[10px] text-slate-400">RAG Latency</div>
                                    <div className="text-indigo-400 font-bold text-xs">~120ms</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-2.5 font-mono text-xs">
                            <div className="text-slate-400 flex items-center gap-1.5">
                                <span className="text-emerald-400 font-bold">$</span> kubectl get pods -n production
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1 text-slate-300 text-[11px]">
                                <div className="flex justify-between">
                                    <span>metropolitan-api-7b8f9</span>
                                    <span className="text-emerald-400 font-bold">1/1 Running</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>metropolitan-web-4a2c1</span>
                                    <span className="text-emerald-400 font-bold">1/1 Running</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>postgres-ha-stateful-0</span>
                                    <span className="text-emerald-400 font-bold">Ready</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pt-1">
                                <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                                    <div className="text-[10px] text-slate-400">AKS Cluster Status</div>
                                    <div className="text-emerald-400 font-bold text-xs flex items-center gap-1">
                                        <Server size={12} /> 99.99% Uptime
                                    </div>
                                </div>
                                <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                                    <div className="text-[10px] text-slate-400">Terraform IaC</div>
                                    <div className="text-indigo-400 font-bold text-xs flex items-center gap-1">
                                        <Cpu size={12} /> Despliegue Automatizado
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Status strip */}
                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1 text-emerald-400">
                            <Terminal size={12} /> bash ready
                        </span>
                        <span className="text-slate-500">Node v20 • Docker • AKS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
