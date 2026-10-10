import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { useLang } from '../../hooks';

const Learnings = () => {
    const { t } = useLang();
    const topics = Array.isArray(t('learningTopics')) ? t('learningTopics') : [
        "Agentes Autónomos & MCP",
        "RAG Avanzado & Embeddings",
        "Kubernetes Patterns (AKS)",
        "System Design Escalable"
    ];

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <h2 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white mb-3.5 flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        <BookOpen size={16} />
                    </div>
                    {t('learningsTitle')}
                </h2>

                <div className="space-y-2">
                    {topics.map((topic, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 bg-[var(--color-bg-subtle)] p-2.5 rounded-xl border border-[var(--color-card-border)] hover:border-[var(--color-primary)] transition-colors group cursor-default shadow-xs"
                        >
                            <Sparkles size={13} className="text-purple-500 dark:text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-semibold leading-tight">
                                {topic}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-3 pt-2.5 border-t border-[var(--color-card-border)]/60 text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
                <span>Investigación continua</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● 2026</span>
            </div>
        </div>
    );
};

export default Learnings;
