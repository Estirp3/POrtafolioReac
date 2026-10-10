import React from 'react';
import { 
    Code2, 
    Database, 
    Layout, 
    Server, 
    Cpu, 
    Sparkles, 
    Bot, 
    Brain, 
    Layers, 
    Cloud, 
    Workflow,
    Boxes,
    ShieldCheck
} from 'lucide-react';
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
        docker: dockerIcon,
        terraform: terraformIcon,
        githubactions: bitbucketIcon,
    };

    const categories = [
        {
            id: 'ai',
            title: 'IA & Agentes Autónomos',
            icon: <Sparkles size={18} className="text-purple-600 dark:text-purple-400" />,
            badge: 'AI Engineering',
            badgeClass: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
            spanClass: 'lg:col-span-2',
            bgClass: 'bg-purple-50/40 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/40',
            techs: [
                { name: 'Agentes MCP', lucide: Bot, color: 'text-purple-600 dark:text-purple-400' },
                { name: 'OpenAI / Claude', lucide: Brain, color: 'text-indigo-600 dark:text-indigo-400' },
                { name: 'LangChain & RAG', lucide: Workflow, color: 'text-sky-600 dark:text-sky-400' },
                { name: 'Vector DBs', lucide: Layers, color: 'text-emerald-600 dark:text-emerald-400' },
                { name: 'Prompt Engineering', lucide: Code2, color: 'text-amber-600 dark:text-amber-400' },
                { name: 'Python AI Workflows', lucide: Cpu, color: 'text-blue-600 dark:text-blue-400' }
            ]
        },
        {
            id: 'backend',
            title: 'Backend & Datos',
            icon: <Server size={18} className="text-indigo-600 dark:text-indigo-400" />,
            badge: 'Core Backend',
            badgeClass: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20',
            spanClass: 'lg:col-span-1',
            bgClass: 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800',
            techs: [
                { name: 'Java', icon: 'java' },
                { name: 'Spring Boot', icon: 'spring' },
                { name: 'Node.js / Express', lucide: Server, color: 'text-emerald-600 dark:text-emerald-400' },
                { name: 'APIs REST', icon: 'fastapi' },
                { name: 'PostgreSQL', icon: 'postgresql' },
                { name: 'Prisma ORM', lucide: Database, color: 'text-teal-600 dark:text-teal-400' }
            ]
        },
        {
            id: 'frontend',
            title: 'Frontend Moderno',
            icon: <Layout size={18} className="text-sky-600 dark:text-sky-400" />,
            badge: 'UI / UX',
            badgeClass: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20',
            spanClass: 'lg:col-span-1',
            bgClass: 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800',
            techs: [
                { name: 'React 18/19', icon: 'react' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'Vite', icon: 'vite' },
                { name: 'JavaScript', icon: 'javascript' },
                { name: 'Bento Grid Design', lucide: Boxes, color: 'text-indigo-600 dark:text-indigo-400' }
            ]
        },
        {
            id: 'devops',
            title: 'Cloud & DevOps',
            icon: <Cloud size={18} className="text-emerald-600 dark:text-emerald-400" />,
            badge: 'Infra & CI/CD',
            badgeClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
            spanClass: 'lg:col-span-1',
            bgClass: 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800',
            techs: [
                { name: 'Docker', icon: 'docker' },
                { name: 'Kubernetes (AKS)', icon: 'kubernetes' },
                { name: 'Terraform', icon: 'terraform' },
                { name: 'CI/CD Pipelines', icon: 'githubactions' },
                { name: 'Nginx Proxy', lucide: Server, color: 'text-green-600 dark:text-green-400' },
                { name: 'DigitalOcean', lucide: Cloud, color: 'text-blue-600 dark:text-blue-400' }
            ]
        },
        {
            id: 'arch',
            title: 'Arquitectura & Seguridad',
            icon: <Cpu size={18} className="text-amber-600 dark:text-amber-400" />,
            badge: 'Sistemas',
            badgeClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
            spanClass: 'lg:col-span-1',
            bgClass: 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800',
            techs: [
                { name: 'Microservicios', lucide: Layers, color: 'text-amber-600 dark:text-amber-400' },
                { name: 'RBAC Security', lucide: ShieldCheck, color: 'text-emerald-600 dark:text-emerald-400' },
                { name: 'Resilience4j', lucide: Cpu, color: 'text-indigo-600 dark:text-indigo-400' },
                { name: 'Clean Architecture', lucide: Code2, color: 'text-purple-600 dark:text-purple-400' },
                { name: 'Observabilidad', lucide: Server, color: 'text-sky-600 dark:text-sky-400' },
                { name: 'Design Patterns', lucide: Code2, color: 'text-teal-600 dark:text-teal-400' }
            ]
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header with Title and subtitle */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold font-display flex items-center gap-2.5 text-slate-900 dark:text-white">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        <Database size={20} />
                    </div>
                    {t('stackTitle')}
                </h2>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                    Stack Tecnológico de Producción & Laboratorio
                </span>
            </div>

            {/* Structured Category Grid - No truncation, no empty space */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categories.map((cat) => (
                    <div 
                        key={cat.id} 
                        className={`rounded-2xl p-5 border transition-all duration-200 shadow-xs flex flex-col justify-between ${cat.spanClass} ${cat.bgClass} hover:border-indigo-500 hover:shadow-md`}
                    >
                        <div>
                            {/* Card Category Header */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex items-center gap-2">
                                    {cat.icon}
                                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-display">
                                        {cat.title}
                                    </h3>
                                </div>
                                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border whitespace-nowrap font-medium ${cat.badgeClass}`}>
                                    {cat.badge}
                                </span>
                            </div>

                            {/* Tech Badges List - Flex Wrap ensures complete names without awkward dots */}
                            <div className="flex flex-wrap gap-2">
                                {cat.techs.map((tech, tIdx) => {
                                    const LucideComp = tech.lucide;
                                    return (
                                        <div
                                            key={tIdx}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all cursor-default shadow-xs"
                                        >
                                            {iconMap[tech.icon] ? (
                                                <img
                                                    src={iconMap[tech.icon]}
                                                    alt={tech.name}
                                                    className="w-4 h-4 object-contain flex-shrink-0 group-hover:scale-110 transition-transform"
                                                />
                                            ) : LucideComp ? (
                                                <LucideComp size={16} className={`${tech.color || 'text-indigo-600'} flex-shrink-0`} />
                                            ) : (
                                                <Cpu size={16} className="text-indigo-600 flex-shrink-0" />
                                            )}
                                            <span className="text-xs font-mono font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                                                {tech.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stack;
