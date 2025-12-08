import React from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, Clock3 } from 'lucide-react';
import { useLang } from '../../hooks';

const Contact = () => {
    const { t } = useLang();

    const channels = [
        {
            icon: <Mail size={18} />,
            label: 'Email',
            value: 'patricio.calderonig@gmail.com',
            href: 'mailto:patricio.calderonig@gmail.com',
        },
        {
            icon: <Linkedin size={18} />,
            label: 'LinkedIn',
            value: 'linkedin/PatricioCalderon',
            href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
        },
        {
            icon: <Github size={18} />,
            label: 'GitHub',
            value: 'github.com/Estirp3',
            href: 'https://github.com/Estirp3',
        },
    ];

    return (
        <div className="h-full w-full flex flex-col gap-5">
            <div className="flex items-center gap-2">
                <Mail className="text-[var(--color-primary)]" />
                <h2 className="text-2xl font-bold">{t('contact')}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch w-full">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--color-card-border)] bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-[var(--color-card-bg)]/85 dark:via-[var(--color-card-bg)]/80 dark:to-[var(--color-card-bg)]/85 p-6 flex flex-col gap-4 shadow-sm">
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/15" />
                    <div className="relative flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[var(--color-card-border)] text-[var(--color-primary)]">
                            <MessageSquare size={18} />
                        </div>
                        <div className="space-y-1 text-[var(--color-text-muted)]">
                            <p className="text-[var(--color-text-main)] font-semibold">Construyamos algo juntos.</p>
                            <p>Arquitectura backend, integraciones, DevOps y performance para equipos que quieren entregar rapido sin perder calidad.</p>
                            <p className="text-sm flex items-center gap-2 text-[var(--color-text-muted)]">
                                <Clock3 size={14} /> Respondo en menos de 24h.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {['Arquitectura', 'Backend Java', 'K8s/AKS', 'Terraform', 'APIs', 'Mentoria'].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-[var(--color-bg-main)] border border-[var(--color-card-border)] text-xs font-semibold">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href="mailto:patricio.calderonig@gmail.com" className="btn-primary mt-auto w-full sm:w-auto justify-center no-underline">
                        {t('letsTalk')} <Send size={16} />
                    </a>
                </div>

                <div className="flex flex-col gap-3 h-full">
                    {channels.map((ch) => (
                        <a
                            key={ch.label}
                            href={ch.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-bg-main)] hover:border-[var(--color-primary)] transition-colors"
                        >
                            <div className="p-2 rounded-md bg-[var(--color-card-border)] text-[var(--color-primary)]">
                                {ch.icon}
                            </div>
                            <div className="flex flex-col leading-tight w-full">
                                <span className="text-xs text-[var(--color-text-muted)]">{ch.label}</span>
                                <span className="text-sm font-semibold text-[var(--color-text-main)] break-words">{ch.value}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
