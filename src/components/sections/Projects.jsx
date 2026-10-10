import React, { useState } from 'react';
import { 
    FolderGit2, 
    Lock, 
    ExternalLink, 
    Sparkles, 
    ShieldCheck, 
    Star
} from 'lucide-react';
import { useLang } from '../../hooks';

const Projects = () => {
    const { t } = useLang();
    const [filter, setFilter] = useState('all'); // 'all' | 'featured' | 'ai' | 'cloud'

    const projects = Array.isArray(t('projectList')) ? t('projectList') : [];

    const filteredProjects = projects.filter(p => {
        if (filter === 'featured') return p.featured;
        if (filter === 'ai') return p.tags.some(tag => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('openai') || tag.toLowerCase().includes('rag') || tag.toLowerCase().includes('agentes'));
        if (filter === 'cloud') return p.tags.some(tag => tag.toLowerCase().includes('docker') || tag.toLowerCase().includes('kubernetes') || tag.toLowerCase().includes('terraform') || tag.toLowerCase().includes('aks'));
        return true;
    });

    return (
        <div className="h-full">
            {/* Header with Title and Filter Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display flex items-center gap-2.5 text-slate-900 dark:text-white">
                        <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                            <FolderGit2 size={22} />
                        </div>
                        {t('projectsTitle')}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {t('projectsSubtitle')}
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
                    {[
                        { id: 'all', label: 'Todos' },
                        { id: 'featured', label: '★ Destacados' },
                        { id: 'ai', label: '✨ IA & Agentes' },
                        { id: 'cloud', label: '☁ Cloud / DevOps' },
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setFilter(tab.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                                filter === tab.id
                                    ? 'bg-indigo-600 text-white shadow-sm'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bento Grid of Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, idx) => {
                    const isMetropolitan = project.id === 'metropolitan';
                    const isAi = project.id === 'ai-assist';

                    return (
                        <div
                            key={project.id || idx}
                            className={`group relative rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between shadow-xs ${
                                isMetropolitan
                                    ? 'md:col-span-2 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 dark:from-indigo-950/30 dark:via-slate-900/80 dark:to-slate-950 border-indigo-300 dark:border-indigo-500/40 hover:border-indigo-500 hover:shadow-lg'
                                    : isAi
                                    ? 'bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 dark:from-purple-950/30 dark:via-slate-900/80 dark:to-slate-950 border-purple-300 dark:border-purple-500/40 hover:border-purple-500 hover:shadow-lg'
                                    : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:shadow-md'
                            } hover:-translate-y-1`}
                        >
                            {/* Top badge & icon bar */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-2.5 rounded-xl ${
                                            isMetropolitan 
                                                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30' 
                                                : isAi 
                                                ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                                                : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30'
                                        }`}>
                                            {isMetropolitan ? <Star size={20} /> : isAi ? <Sparkles size={20} /> : <FolderGit2 size={20} />}
                                        </div>

                                        {project.badge && (
                                            <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                                                isMetropolitan
                                                    ? 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800'
                                                    : isAi
                                                    ? 'bg-purple-50 text-purple-700 border-purple-300 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800'
                                                    : 'bg-indigo-50 text-indigo-700 border-indigo-300 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800'
                                            }`}>
                                                {project.badge}
                                            </span>
                                        )}
                                    </div>

                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 text-xs font-semibold hover:bg-indigo-600 hover:text-white transition-all"
                                        >
                                            <span>GitHub</span>
                                            <ExternalLink size={13} />
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[11px] font-mono">
                                            <Lock size={12} />
                                            {t('privateBadge')}
                                        </span>
                                    )}
                                </div>

                                {/* Title and Role */}
                                <h3 className={`text-xl font-bold font-display mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-slate-900 dark:text-white ${
                                    isMetropolitan ? 'text-2xl' : ''
                                }`}>
                                    {project.title}
                                </h3>

                                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                                    <span>{project.role}</span>
                                    {project.metric && (
                                        <>
                                            <span className="text-slate-400">•</span>
                                            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-medium">{project.metric}</span>
                                        </>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                {/* Metropolitan Extra Architecture Callout */}
                                {isMetropolitan && (
                                    <div className="mb-6 p-3.5 rounded-xl bg-slate-100/90 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1.5 text-slate-800 dark:text-slate-300">
                                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                                            <ShieldCheck size={14} /> Control Core RBAC & Containerized Architecture:
                                        </div>
                                        <div className="text-slate-600 dark:text-slate-400 text-[11px] flex flex-wrap gap-x-3 gap-y-1">
                                            <span>• Roles: Master / Coordinator / Designer / Staff</span>
                                            <span>• Docker & Nginx Reverse Proxy</span>
                                            <span>• DigitalOcean Production Droplet</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 dark:border-slate-800">
                                {project.tags.map((tag, tIdx) => (
                                    <span 
                                        key={tIdx} 
                                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 group-hover:border-indigo-400 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
