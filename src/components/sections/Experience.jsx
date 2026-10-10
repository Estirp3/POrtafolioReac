import React from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { useLang } from '../../hooks';

const Experience = () => {
    const { t } = useLang();
    const roles = Array.isArray(t('roles')) ? t('roles') : [];
    const certList = Array.isArray(t('certList')) ? t('certList') : ["Azure AZ-104", "Azure AZ-204", "DevOps AZ-400", "AI Agent Workflows"];

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-2.5 text-slate-900 dark:text-white">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        <Briefcase size={20} />
                    </div>
                    {t('expTitle')}
                </h2>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-[var(--color-card-border)]">
                    {roles.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 group">
                            {/* Timeline dot */}
                            <div className="absolute left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-bg-main)] border-2 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 group-hover:bg-indigo-600 transition-all"></div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {exp.title}
                                </h3>
                                <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-600 dark:text-slate-400 bg-[var(--color-bg-subtle)] px-2.5 py-0.5 rounded-full border border-[var(--color-card-border)] w-fit">
                                    <Calendar size={11} /> {exp.period}
                                </span>
                            </div>

                            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                {exp.company}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {exp.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications strip */}
            <div className="mt-6 pt-4 border-t border-[var(--color-card-border)]">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <Award size={15} className="text-amber-500" />
                    <span>{t('certifications')}:</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {certList.map((cert, cIdx) => (
                        <span 
                            key={cIdx} 
                            className="text-xs px-2.5 py-1 rounded-lg bg-[var(--color-bg-subtle)] text-slate-800 dark:text-slate-200 border border-[var(--color-card-border)] font-mono hover:border-indigo-500 transition-colors"
                        >
                            {cert}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
