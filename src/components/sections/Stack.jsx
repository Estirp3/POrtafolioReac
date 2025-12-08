import React from 'react';
import { Code2, Database, Layout, Server, Cpu } from 'lucide-react';
import { useLang } from '../../hooks';
import htmlIcon from '../../assets/iconos/HTML5.svg';
import cssIcon from '../../assets/iconos/CSS3.svg';
import jsIcon from '../../assets/iconos/JavaScript.svg';
import tailwindIcon from '../../assets/iconos/Tailwind CSS.svg';
import tsIcon from '../../assets/iconos/TypeScript.svg';
import javaIcon from '../../assets/iconos/Java.svg';
import springIcon from '../../assets/iconos/Spring.svg';
import reactIcon from '../../assets/iconos/React.svg';
import viteIcon from '../../assets/iconos/Vite.js (1).svg';
import dockerIcon from '../../assets/iconos/Docker.svg';
import k8sIcon from '../../assets/iconos/Kubernetes.svg';
import terraformIcon from '../../assets/iconos/HashiCorp Terraform.svg';
import postgresIcon from '../../assets/iconos/PostgresSQL.svg';
import postmanIcon from '../../assets/iconos/Postman.svg';
import bitbucketIcon from '../../assets/iconos/BitBucket.svg';

const Stack = () => {
    const { t } = useLang();

    const iconMap = {
        html5: htmlIcon,
        css3: cssIcon,
        javascript: jsIcon,
        react: reactIcon,
        vite: viteIcon,
        tailwindcss: tailwindIcon,
        typescript: tsIcon,
        java: javaIcon,
        spring: springIcon,
        fastapi: postmanIcon,
        postgresql: postgresIcon,
        kubernetes: k8sIcon,
        graphql: null,
        nginx: null,
        uml: null,
        docker: dockerIcon,
        terraform: terraformIcon,
        githubactions: bitbucketIcon,
    };

    const stackCategories = [
        {
            title: 'Frontend',
            icon: <Layout size={20} className="text-[var(--color-primary)]" />,
            techs: [
                { name: 'HTML5', icon: 'html5' },
                { name: 'CSS3', icon: 'css3' },
                { name: 'JavaScript', icon: 'javascript' },
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
                                <div
                                    key={tIdx}
                                    className="flex flex-col items-center gap-1 px-2.5 py-2 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-xl text-xs font-mono hover:border-[var(--color-primary)] transition-colors cursor-default min-w-[90px] text-center"
                                >
                                    <span className="text-[var(--color-text-main)]">{tech.name}</span>
                                    {iconMap[tech.icon] && (
                                        <img
                                            src={iconMap[tech.icon]}
                                            alt={tech.name}
                                            className="w-6 h-6 object-contain"
                                        />
                                    )}
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
