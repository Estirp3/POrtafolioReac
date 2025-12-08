import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { useLang } from '../context/Context';

const Learnings = () => {
    const { t } = useLang();
    const topics = [
        "Terraform Avanzado",
        "Kubernetes Patterns",
        "Arquitectura Limpia",
        "System Design"
    ];

    return (
        <div className="h-full">
            <h2 className="text-lg font-bold text-[var(--color-text-main)] mb-3 flex items-center gap-2">
                <BookOpen className="text-[var(--color-primary)]" size={18} />
                {t('learningsTitle')}
            </h2>
            <div className="flex flex-col gap-2">
                {topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[var(--color-text-muted)] bg-[var(--color-bg-main)]/50 p-2.5 rounded-lg border border-[var(--color-card-border)]">
                        <CheckCircle2 size={14} className="text-[var(--color-primary)] flex-shrink-0" />
                        <span className="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">{topic}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Learnings;
