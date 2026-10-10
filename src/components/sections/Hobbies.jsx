import React from 'react';
import { Heart, Printer, Video } from 'lucide-react';
import { useLang } from '../../hooks';

const Hobbies = () => {
    const { t } = useLang();
    const hobbies = Array.isArray(t('hobbiesList')) ? t('hobbiesList') : [];

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <h2 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white mb-3.5 flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                        <Heart size={16} />
                    </div>
                    {t('hobbiesTitle')}
                </h2>

                <div className="space-y-2.5">
                    {hobbies.map((item, idx) => {
                        const title = typeof item === 'string' ? item : item.title;
                        const desc = typeof item === 'string' ? '' : item.desc;
                        const isPrinter = idx === 0;

                        return (
                            <div 
                                key={idx} 
                                className="flex items-center gap-3 p-2.5 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-card-border)] hover:border-pink-500/40 transition-colors group shadow-xs"
                            >
                                <div className="p-2 bg-[var(--color-card-bg)] rounded-lg text-pink-500 border border-[var(--color-card-border)] group-hover:scale-105 transition-transform flex-shrink-0">
                                    {isPrinter ? <Printer size={16} /> : <Video size={16} />}
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{title}</div>
                                    {desc && <div className="text-[11px] text-slate-600 dark:text-slate-400">{desc}</div>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[var(--color-card-border)]/60 text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
                <span>Creatividad & Maker</span>
                <span className="text-pink-600 dark:text-pink-400 font-semibold">Passions</span>
            </div>
        </div>
    );
};

export default Hobbies;
