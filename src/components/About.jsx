import React from 'react';
import { User } from 'lucide-react';
import { useLang } from '../context/Context';

const About = () => {
    const { t } = useLang();

    return (
        <div className="h-full">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--color-text-main)]">
                <User className="text-[var(--color-primary)]" />
                {t('aboutTitle')}
            </h2>
            <div className="space-y-3 text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed indent-4">
                <p>{t('aboutDesc1')}</p>
                <p>{t('aboutDesc2')}</p>
                <p>{t('aboutDesc3')}</p>
                <p>{t('aboutDesc4')}</p>
            </div>
        </div>
    );
};

export default About;
