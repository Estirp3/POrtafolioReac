import React from 'react';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Monitor de Servicios",
            role: "Arquitectura y Desarrollo",
            desc: "Modernización de plataforma crítica. Migración de monolito a React + Vite + Spring Boot. Enfoque en performance y separación de capas.",
            tags: ["React", "Java", "Spring Boot"],
            link: "#"
        },
        {
            title: "Orquestador AKS",
            role: "DevOps",
            desc: "Microservicio para lanzar procesos en pods de Kubernetes con logging y métricas.",
            tags: ["Kubernetes", "Go", "Docker"],
            link: "#"
        },
        {
            title: "Integration Framework",
            role: "Backend",
            desc: "Cliente robusto para APIs internas con manejo de errores, retries y timeouts.",
            tags: ["Java", "Resilience4j", "Rest Template"],
            link: "#"
        },
        {
            title: "Chatbox Data Assist",
            role: "Arquitectura",
            desc: "Servicio de consulta de datos con integración a OpenAI.",
            tags: ["Python", "OpenAI", "FastAPI"],
            link: "#"
        },
        {
            title: "Terraform Multiambiente",
            role: "DevOps",
            desc: "Infraestructura como código modular para Dev, QA y Prod con manejo seguro de estado.",
            tags: ["Terraform", "Azure", "HCL"],
            link: "#"
        },
        {
            title: "Landings Personales",
            role: "Fullstack",
            desc: "Desarrollo rápido de sitios web para emprendimientos usando Vite y Tailwind.",
            tags: ["React", "Tailwind", "Vite"],
            link: "#"
        }
    ];

    return (
        <div className="h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <FolderGit2 className="text-[var(--color-primary)]" />
                    Proyectos Destacados
                </h2>
                <a href="https://github.com/Estirp3" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-primary)] hover:underline flex items-center gap-1 transition-colors">
                    Ver más en Github <ArrowIcon />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group bg-[var(--color-bg-main)]/50 rounded-xl p-6 border border-[var(--color-card-border)] hover:border-[var(--color-primary)] transition-all duration-300 flex flex-col hover:shadow-xl hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-5">
                            <div className="p-3 rounded-lg bg-[var(--color-card-border)] text-[var(--color-primary)] transition-colors">
                                <FolderGit2 size={22} />
                            </div>
                            <div className="flex gap-3">
                                <a href={project.link} className="text-muted hover:text-[var(--color-text-main)] transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} className="text-muted hover:text-[var(--color-text-main)] transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors text-[var(--color-text-main)]">{project.title}</h3>
                        <p className="text-sm text-[var(--color-primary)] font-medium mb-4">{project.role}</p>

                        <p className="text-[var(--color-text-muted)] text-base mb-6 line-clamp-4 leading-relaxed">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="tech-badge py-1 px-3 bg-[var(--color-card-bg)]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

export default Projects;
