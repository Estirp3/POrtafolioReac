import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLang } from '../context/Context';

const Contact = () => {
    const { t } = useLang();

    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Mail className="text-[var(--color-primary)]" />
                    {t('contact')}
                </h2>
                <p className="text-muted mb-6">
                    ¿Tienes un proyecto interesante o quieres hablar de arquitectura de software? Hablemos.
                </p>

                <div className="space-y-4">
                    <a href="mailto:patricio.calderonig@gmail.com" className="flex items-center gap-3 text-muted hover:text-[var(--color-text-main)] transition-colors group">
                        <div className="p-2 bg-[var(--color-card-border)] rounded-lg text-[var(--color-primary)] transition-colors">
                            <Mail size={18} />
                        </div>
                        <span className="text-sm truncate font-medium">patricio.calderonig@gmail.com</span>
                    </a>

                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors group">
                        <div className="p-2 bg-[var(--color-card-border)] rounded-lg text-blue-500 transition-colors">
                            <Linkedin size={18} />
                        </div>
                        <span className="text-sm font-medium">Linkedin/PatricioCalderon</span>
                    </a>

                    <a href="https://github.com/Estirp3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-[var(--color-text-main)] transition-colors group">
                        <div className="p-2 bg-[var(--color-card-border)] rounded-lg transition-colors">
                            <Github size={18} />
                        </div>
                        <span className="text-sm font-medium">github.com/Estirp3</span>
                    </a>
                </div>
            </div>

            <a href="mailto:patricio.calderonig@gmail.com" className="w-full mt-8 btn-primary no-underline">
                {t('letsTalk')} <Send size={16} />
            </a>
        </div>
    );
};

export default Contact;
