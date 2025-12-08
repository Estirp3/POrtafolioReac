import React from 'react';
import { Code2, Database, Layout, Server, Cpu } from 'lucide-react';
import { useLang } from '../context/Context';

const Stack = () => {
    const { t } = useLang();

    const stackCategories = [
        {
            title: 'Frontend',
            icon: <Layout size={20} className="text-[var(--color-primary)]" />,
            techs: [
                { name: 'HTML/CSS/JS', icon: 'html5' },
                { name: 'React', icon: 'react' },
                { name: 'Vite', icon: 'vite' },
                { name: 'Tailwind', icon: 'tailwindcss' },
                { name: 'TypeScript', icon: 'typescript' }
            ]
        },
        {
            title: 'Backend',
            icon: <Server size={20} className="text-[var(--color-primary)]" />,
            techs: [
                { name: 'Java', icon: 'java' },
                { name: 'Spring Boot', icon: 'spring' },
                { name: 'APIs REST', icon: 'fastapi' },
                { name: 'PostgreSQL', icon: 'postgresql' }
            ]
        },
        {
            title: 'Arquitectura',
            icon: <Code2 size={20} className="text-[var(--color-primary)]" />,
            techs: [
                { name: 'Microservicios', icon: 'kubernetes' },
                { name: 'BFF', icon: 'graphql' },
                { name: 'API Gateway', icon: 'nginx' },
                { name: 'Design Patterns', icon: 'uml' }
            ]
        },
        {
            title: 'DevOps',
            icon: <Cpu size={20} className="text-[var(--color-primary)]" />,
            techs: [
                { name: 'Docker', icon: 'docker' },
                { name: 'K8s (AKS)', icon: 'kubernetes' },
                { name: 'Terraform', icon: 'terraform' },
                { name: 'CI/CD', icon: 'githubactions' }
            ]
        }
    ];

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--color-text-main)]">
                <Database className="text-[var(--color-primary)]" />
                {t('stackTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                {stackCategories.map((cat, idx) => (
                    <div key={idx} className="bg-[var(--color-bg-main)]/50 rounded-xl p-4 border border-[var(--color-card-border)] hover:border-[var(--color-primary)] transition-colors shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            {cat.icon}
                            <h3 className="font-semibold text-[var(--color-text-main)] text-base">{cat.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cat.techs.map((tech, tIdx) => (
                                <div key={tIdx} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-full text-xs font-mono hover:border-[var(--color-primary)] transition-colors cursor-default">
                                    <img
                                        src={`https://techicons.dev/icons/${tech.icon}`}
                                        alt={tech.name}
                                        className="w-4 h-4"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                    <span className="text-[var(--color-text-main)]">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stack;
