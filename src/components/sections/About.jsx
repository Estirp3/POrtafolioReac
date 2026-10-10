import React from 'react';
import { User, Brain, Server, Cloud } from 'lucide-react';
import { useLang } from '../../hooks';

const About = () => {
    const { t } = useLang();
    const pills = Array.isArray(t('aboutPills')) ? t('aboutPills') : [];

    return (
        <div className="h-full flex flex-col justify-between gap-5">
            <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                    <h2 className="text-2xl font-bold font-display flex items-center gap-2.5 text-slate-900 dark:text-white">
                        <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                            <User size={20} />
                        </div>
                        {t('aboutTitle')}
                    </h2>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--color-bg-subtle)] border border-[var(--color-card-border)] text-slate-600 dark:text-slate-400 font-medium">
                        Fullstack + DevOps + AI
                    </span>
                </div>

                {/* Paragraphs */}
                <div className="space-y-3.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    <p className="flex items-start gap-2.5">
                        <Server size={18} className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                        <span>{t('aboutDesc1')}</span>
                    </p>
                    <p className="flex items-start gap-2.5">
                        <Brain size={18} className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                        <span>{t('aboutDesc2')}</span>
                    </p>
                    <p className="flex items-start gap-2.5">
                        <Cloud size={18} className="text-sky-600 dark:text-sky-400 mt-1 flex-shrink-0" />
                        <span>{t('aboutDesc3')}</span>
                    </p>
                </div>
            </div>

            {/* Capability Pills */}
            <div className="pt-2 border-t border-[var(--color-card-border)]">
                <div className="flex flex-wrap gap-2">
                    {pills.map((chip, idx) => (
                        <span 
                            key={idx} 
                            className="px-3 py-1 rounded-full bg-[var(--color-bg-subtle)] border border-[var(--color-card-border)] hover:border-[var(--color-primary)] text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors cursor-default"
                        >
                            {chip}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
