import React from 'react';
import { User } from 'lucide-react';
import { useLang } from '../../hooks';

const About = () => {
    const { t } = useLang();

    return (
        <div className="h-full flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-[var(--color-text-main)]">
                    <User className="text-[var(--color-primary)]" />
                    {t('aboutTitle')}
                </h2>
            </div>

            <div className="flex flex-col gap-6 flex-1">
                <div className="space-y-4 text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed max-w-3xl md:pl-3">
                    <p>
                        Ingeniero de software enfocado en backend con Java y Spring. Diseño plataformas sólidas y observables,
                        priorizando soluciones simples y mantenibles que resuelven problemas reales.
                    </p>
                    <p>
                        En frontend, disfruto maquetando experiencias rápidas y accesibles con React, Vite y Tailwind,
                        cuidando rendimiento y consistencia de componentes.
                    </p>
                    <p>
                        Experiencia armando pipelines, contenedores y despliegues en AKS; explorando IaC y buenas prácticas
                        DevOps para equipos distribuidos.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {['Arquitectura ligera', 'SRE mindset', 'Mentoría y pairing', 'Documentación viva'].map((chip) => (
                        <span key={chip} className="px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-xs font-semibold">
                            {chip}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
