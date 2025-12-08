import React from 'react';
import { Heart, Printer, PenTool } from 'lucide-react';
import { useLang } from '../context/Context';

const Hobbies = () => {
    const { t } = useLang();
    const hobbies = Array.isArray(t('hobbiesList')) ? t('hobbiesList') : [];

    return (
        <div className="h-full">
            <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-4 flex items-center gap-2">
                <Heart className="text-pink-500" size={20} />
                {t('hobbiesTitle')}
            </h2>
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
                    <div className="p-2.5 bg-[var(--color-bg-main)] rounded-lg text-[var(--color-primary)] border border-[var(--color-card-border)]">
                        <Printer size={20} />
                    </div>
                    <span className="text-base font-medium">{hobbies[0] || "Impresión 3D"}</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
                    <div className="p-2.5 bg-[var(--color-bg-main)] rounded-lg text-[var(--color-primary)] border border-[var(--color-card-border)]">
                        <PenTool size={20} />
                    </div>
                    <span className="text-base font-medium">{hobbies[1] || "Creación de Contenido"}</span>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
