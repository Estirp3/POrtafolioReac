import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLang } from '../context/Context';

const Experience = () => {
    const { t } = useLang();
    // Safely get roles, default to empty array if undefined
    const roles = Array.isArray(t('roles')) ? t('roles') : [];

    return (
        <div className="h-full">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[var(--color-text-main)]">
                <Briefcase className="text-[var(--color-primary)]" />
                {t('expTitle')}
            </h2>
            <div className="space-y-6">
                {roles.map((exp, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-[var(--color-card-border)] hover:border-[var(--color-primary)] transition-colors">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-bg-main)] border-2 border-[var(--color-primary)]"></div>
                        <h3 className="text-lg font-semibold text-[var(--color-text-main)]">{exp.title}</h3>
                        <div className="flex items-center text-sm text-[var(--color-primary)] mb-1">
                            <span className="font-semibold mr-2">{exp.company}</span>
                            <span className="text-[var(--color-text-muted)]">•</span>
                            <span className="ml-2 flex items-center gap-1 text-[var(--color-text-muted)]">
                                <Calendar size={12} /> {exp.period}
                            </span>
                        </div>
                        <p className="text-[var(--color-text-muted)] text-sm">
                            {exp.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--color-card-border)]">
                <h4 className="text-sm font-semibold text-[var(--color-text-main)] mb-2">{t('certifications')}:</h4>
                <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-2 py-1 rounded bg-[var(--color-card-border)] text-[var(--color-text-main)] border border-[var(--color-card-border)]">Azure AZ-104</span>
                    <span className="text-xs px-2 py-1 rounded bg-[var(--color-card-border)] text-[var(--color-text-main)] border border-[var(--color-card-border)]">Azure AZ-204</span>
                    <span className="text-xs px-2 py-1 rounded bg-[var(--color-card-border)] text-[var(--color-text-main)] border border-[var(--color-card-border)]">DevOps AZ-400</span>
                </div>
            </div>
        </div>
    );
};

export default Experience;
