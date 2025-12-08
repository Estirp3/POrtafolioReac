import React from 'react';
import { FolderGit2, Lock, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Monitor de Servicios",
            role: "Arquitectura y Desarrollo",
            desc: "Modernizacion de plataforma critica. Migracion de monolito a React + Vite + Spring Boot. Enfoque en performance y separacion de capas.",
            tags: ["React", "Java", "Spring Boot"],
        },
        {
            title: "Orquestador AKS",
            role: "DevOps",
            desc: "Microservicio para lanzar procesos en pods de Kubernetes con logging y metricas.",
            tags: ["Kubernetes", "Go", "Docker"],
        },
        {
            title: "Integration Framework",
            role: "Backend",
            desc: "Cliente robusto para APIs internas con manejo de errores, retries y timeouts.",
            tags: ["Java", "Resilience4j", "Rest Template"],
        },
        {
            title: "Chatbox Data Assist",
            role: "Arquitectura",
            desc: "Servicio de consulta de datos con integracion a OpenAI.",
            tags: ["Python", "OpenAI", "FastAPI"],
        },
        {
            title: "Terraform Multiambiente",
            role: "DevOps",
            desc: "Infraestructura como codigo modular para Dev, QA y Prod con manejo seguro de estado.",
            tags: ["Terraform", "Azure", "HCL"],
        },
        {
            title: "Landings Personales",
            role: "Fullstack",
            desc: "Desarrollo rapido de sitios web para emprendimientos usando Vite y Tailwind.",
            tags: ["React", "Tailwind", "Vite"],
            link: "https://github.com/Estirp3/POrtafolioReac"
        }
    ];

    return (
        <div className="h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <FolderGit2 className="text-[var(--color-primary)]" />
                    Proyectos Destacados
                </h2>
                <span className="text-sm text-[var(--color-text-muted)]">
                    Repos privados · en curso
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group bg-[var(--color-bg-main)]/50 rounded-xl p-6 border border-[var(--color-card-border)] hover:border-[var(--color-primary)] transition-all duration-300 flex flex-col hover:shadow-xl hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-5">
                            <div className="p-3 rounded-lg bg-[var(--color-card-border)] text-[var(--color-primary)] transition-colors">
                                <FolderGit2 size={22} />
                            </div>
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/15 border border-[var(--color-primary)] text-[var(--color-text-main)] text-xs font-semibold hover:bg-[var(--color-primary)]/25 transition-colors"
                                >
                                    Ver repo
                                    <ExternalLink size={14} />
                                </a>
                            ) : (
                                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-text-muted)] text-xs font-semibold">
                                    <Lock size={16} />
                                    Privado
                                </div>
                            )}
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

export default Projects;
