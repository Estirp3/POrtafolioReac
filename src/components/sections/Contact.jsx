import React, { useState } from 'react';
import { 
    Mail, 
    Linkedin, 
    Github, 
    Send, 
    Clock3, 
    Copy, 
    Check,
    Sparkles,
    ShieldCheck
} from 'lucide-react';
import { useLang } from '../../hooks';

const Contact = () => {
    const { t } = useLang();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('patricio.calderonig@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const channels = [
        {
            icon: <Mail size={18} />,
            label: 'Email Directo',
            value: 'patricio.calderonig@gmail.com',
            href: 'mailto:patricio.calderonig@gmail.com',
            color: 'text-indigo-600 dark:text-indigo-400'
        },
        {
            icon: <Linkedin size={18} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/PatricioCalderon',
            href: 'https://www.linkedin.com/in/patricio-calder%C3%B3n-573ba8208/',
            color: 'text-sky-600 dark:text-sky-400'
        },
        {
            icon: <Github size={18} />,
            label: 'GitHub',
            value: 'github.com/Estirp3',
            href: 'https://github.com/Estirp3',
            color: 'text-purple-600 dark:text-purple-400'
        },
    ];

    const contactTags = Array.isArray(t('contactTags')) ? t('contactTags') : [
        "Arquitectura Fullstack",
        "Integraciones con IA",
        "Metropolitan Project",
        "Backend Java / Node",
        "Kubernetes & DevOps"
    ];

    return (
        <div className="h-full w-full flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold font-display flex items-center gap-2.5 text-slate-900 dark:text-white">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        <Mail size={22} />
                    </div>
                    {t('contactTitle')}
                </h2>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <Clock3 size={13} className="text-emerald-500" />
                    {t('responseTime')}
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full">
                
                {/* Left Card: Pitch & Direct Action */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 dark:from-indigo-950/30 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-400 text-xs font-semibold">
                            <Sparkles size={13} />
                            Construyamos el próximo proyecto
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white leading-snug">
                            {t('contactHeadline')}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            {t('contactDesc')}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {contactTags.map((tag, idx) => (
                                <span 
                                    key={idx} 
                                    className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-slate-200 shadow-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 flex flex-wrap gap-3">
                        <a 
                            href="mailto:patricio.calderonig@gmail.com" 
                            className="btn-primary no-underline flex-1 sm:flex-initial justify-center"
                        >
                            {t('letsTalk')} <Send size={16} />
                        </a>
                        <button
                            onClick={handleCopyEmail}
                            className="btn-secondary flex-1 sm:flex-initial justify-center"
                            title="Copiar email al portapapeles"
                        >
                            {copied ? (
                                <>
                                    <Check size={16} className="text-emerald-500" /> Copiado
                                </>
                            ) : (
                                <>
                                    <Copy size={16} /> Copiar Email
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Right Card: Direct Channels */}
                <div className="flex flex-col gap-3.5 justify-between">
                    {channels.map((ch) => (
                        <a
                            key={ch.label}
                            href={ch.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group shadow-xs"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ${ch.color} group-hover:scale-110 transition-transform`}>
                                    {ch.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{ch.label}</span>
                                    <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {ch.value}
                                    </span>
                                </div>
                            </div>
                            <div className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">
                                →
                            </div>
                        </a>
                    ))}

                    {/* Security & Uptime note */}
                    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-2.5">
                        <ShieldCheck size={16} className="text-emerald-500 flex-shrink-0" />
                        <span>Disponible para consultoría, roles Fullstack Senior / Tech Lead y contratos de arquitectura.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
