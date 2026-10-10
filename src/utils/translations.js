export const labels = {
    ES: {
        // Navbar
        about: "Sobre mí",
        stack: "Stack & IA",
        projects: "Proyectos",
        exp: "Experiencia",
        contact: "Contacto",

        // Hero
        heroTitle: "Desarrollador Fullstack, DevOps & AI Solutions",
        heroRoleBadge: "Arquitectura Cloud • Microservicios • Agentes IA",
        heroDesc: "Diseño y desarrollo plataformas escalables de extremo a extremo, infraestructura automatizada en la nube e integraciones avanzadas con Inteligencia Artificial y agentes autónomos.",
        viewProjects: "Ver proyectos",
        downloadCV: "Descargar CV",
        available: "Disponible para proyectos & consultoría",
        aiStatus: "Agentes IA: Operativos",
        clusterStatus: "Infraestructura Cloud: Saludable",

        // About
        aboutTitle: "Sobre mí",
        aboutDesc1: "Ingeniero de software especializado en diseñar soluciones robustas y escalables con Java (Spring Boot) y Node.js / Express en backend, priorizando alta disponibilidad, seguridad y código limpio.",
        aboutDesc2: "En constante evolución hacia la Inteligencia Artificial aplicada: desarrollo flujos con agentes autónomos, integración de LLMs (OpenAI, Claude, DeepSeek), prompts estructurados y arquitecturas RAG para resolver problemas complejos de automatización.",
        aboutDesc3: "Experiencia integral en frontend moderno con React, TypeScript y Tailwind CSS, complementado con DevOps: orquestación en Kubernetes (AKS), contenedores Docker e Infraestructura como Código (IaC) con Terraform.",
        aboutPills: [
            "Arquitectura Cloud & Microservicios",
            "Desarrollo con IA & Agentes",
            "Kubernetes (AKS) & Docker",
            "Backend Java & Node.js",
            "Frontend React & TypeScript",
            "Infraestructura con Terraform"
        ],

        // Experience
        expTitle: "Experiencia Profesional",
        roles: [
            {
                title: "Senior Fullstack, DevOps & AI Developer",
                company: "Proyectos Especializados & Freelance",
                period: "2024 - Presente",
                desc: "Liderazgo técnico en desarrollo integral de plataformas como Metropolitan Fashion Chile (arquitectura PERN contenerizada con roles RBAC). Implementación de agentes de IA y automatizaciones cloud en Azure y DigitalOcean."
            },
            {
                title: "Arquitecto de Software & Tech Lead",
                company: "Trayectoria Tecnológica",
                period: "2021 - 2024",
                desc: "Diseño de soluciones backend empresariales, modernización de monolitos hacia microservicios desacoplados y gobernanza de infraestructura CI/CD en Kubernetes."
            },
            {
                title: "Backend Engineer",
                company: "Inicios Profesionales",
                period: "2018 - 2021",
                desc: "Desarrollo de servicios REST de alto rendimiento en Java y Spring, optimización de bases de datos relacionales y monitoreo de integración continua."
            }
        ],
        certifications: "Certificaciones & Enfoque",
        certList: ["Azure AZ-104", "Azure AZ-204", "DevOps AZ-400", "AI Agent Workflows"],

        // Stack
        stackTitle: "Stack Tecnológico & Inteligencia Artificial",

        // Projects
        projectsTitle: "Proyectos Destacados",
        projectsSubtitle: "Producción • Innovación • Arquitectura",
        featuredBadge: "PROYECTO DESTACADO",
        privateBadge: "Repo Privado",
        publicBadge: "Código Abierto",
        githubLink: "Ver más en GitHub",
        projectList: [
            {
                id: "metropolitan",
                title: "Metropolitan Fashion Chile",
                role: "Arquitectura Fullstack & DevOps",
                desc: "Plataforma integral para gestión y curaduría de modelos y diseñadores del prestigioso evento Metropolitan Fashion Chile (Santiago Haute Couture). Incluye portal público de postulaciones, panel de control administrativo multi-rol (RBAC: Master, Coordinator, Designer, Staff), base de datos relacional y despliegue contenerizado con Docker y Nginx.",
                tags: ["React 18", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
                featured: true,
                badge: "En Producción",
                metric: "Portal Público + Control Core RBAC",
                link: null
            },
            {
                id: "ai-assist",
                title: "Chatbox Data Assist & Agentes IA",
                role: "AI Engineering & Backend",
                desc: "Sistema inteligente de consulta y extracción analítica de datos utilizando modelos de OpenAI y orquestación de agentes con Python. Implementa recuperación contextual (RAG), validación de esquemas y automatización de flujos de trabajo.",
                tags: ["Python", "OpenAI API", "LangChain", "FastAPI", "RAG", "Agentes Autónomos"],
                featured: true,
                badge: "AI Powered",
                metric: "Pipeline LLM & RAG",
                link: null
            },
            {
                id: "monitor",
                title: "Monitor de Servicios Críticos",
                role: "Arquitectura y Desarrollo",
                desc: "Modernización de plataforma empresarial. Migración de monolito legacy a una arquitectura modular con frontend reactivo en React + Vite y microservicios Java Spring Boot con observabilidad integral.",
                tags: ["React", "Java", "Spring Boot", "Microservicios", "Observabilidad"],
                featured: false,
                badge: "Microservicios",
                metric: "Monolito a Cloud Native",
                link: null
            },
            {
                id: "aks",
                title: "Orquestador de Procesos AKS",
                role: "DevOps & Cloud Native",
                desc: "Microservicio especializado en lanzamiento, gobernanza y monitoreo dinámico de procesos en pods aislados de Azure Kubernetes Service (AKS), con telemetría y logging centralizado.",
                tags: ["Kubernetes (AKS)", "Go", "Docker", "Azure", "Cloud Native"],
                featured: false,
                badge: "DevOps",
                metric: "Aprovisionamiento en Pods",
                link: null
            },
            {
                id: "terraform",
                title: "Infraestructura Terraform Multiambiente",
                role: "Infraestructura como Código (IaC)",
                desc: "Módulos de Terraform estructurados para aprovisionamiento automatizado y consistente de recursos en Azure a través de ambientes Dev, QA y Producción con gestión segura de estado.",
                tags: ["Terraform", "Azure", "IaC", "HCL", "DevOps"],
                featured: false,
                badge: "IaC",
                metric: "Dev / QA / Prod Automatizado",
                link: null
            },
            {
                id: "framework",
                title: "Resilient Integration Framework",
                role: "Backend Architecture",
                desc: "Cliente robusto para intercomunicación entre APIs internas con patrones avanzados de tolerancia a fallos: Circuit Breaker con Resilience4j, retries exponenciales y timeouts configurables.",
                tags: ["Java", "Resilience4j", "Spring Boot", "APIs REST"],
                featured: false,
                badge: "Resiliencia",
                metric: "Zero Downtime Integrations",
                link: null
            },
            {
                id: "landings",
                title: "Bento Design Portfolio & Web Apps",
                role: "Frontend Engineering",
                desc: "Diseño y desarrollo de sitios web y aplicaciones de alto impacto con diseño modular Bento Grid, rendimiento optimizado (100 Lighthouse) y micro-interacciones cinematográficas.",
                tags: ["React", "Tailwind CSS", "Vite", "Bento Grid", "UI/UX"],
                featured: false,
                badge: "Frontend",
                metric: "Ultra-rápido & Accesible",
                link: "https://github.com/Estirp3/POrtafolioReac"
            }
        ],

        // Learnings & Hobbies
        learningsTitle: "Áreas de Investigación & Aprendizaje",
        learningTopics: [
            "Agentes Autónomos & MCP (Model Context Protocol)",
            "RAG Avanzado & Embeddings Vectoriales",
            "Kubernetes Patterns & Arquitectura AKS",
            "System Design & Escalabilidad Masiva"
        ],
        hobbiesTitle: "Intereses & Hobbies",
        hobbiesList: [
            { title: "Impresión 3D & Maker", desc: "Modelado y prototipado físico" },
            { title: "Creación de Contenido Tech", desc: "Divulgación sobre IA & desarrollo" }
        ],

        // Contact
        contactTitle: "Contacto & Colaboración",
        contactHeadline: "¿Tienes un desafío de arquitectura, desarrollo web o Inteligencia Artificial?",
        contactDesc: "Hablemos sobre cómo puedo aportar valor técnico sólido: desde la creación de plataformas completas y microservicios hasta la integración de agentes inteligentes y DevOps en la nube.",
        responseTime: "Respondo usualmente en menos de 24 horas.",
        letsTalk: "Iniciar conversación",
        contactTags: ["Arquitectura Fullstack", "Integraciones con IA", "Metropolitan Project", "Backend Java / Node", "Kubernetes & DevOps"]
    },
    EN: {
        // Navbar
        about: "About Me",
        stack: "Stack & AI",
        projects: "Projects",
        exp: "Experience",
        contact: "Contact",

        // Hero
        heroTitle: "Fullstack Developer, DevOps & AI Solutions",
        heroRoleBadge: "Cloud Architecture • Microservices • AI Agents",
        heroDesc: "I architect and build end-to-end scalable platforms, automated cloud infrastructure, and state-of-the-art Artificial Intelligence integrations with autonomous agents.",
        viewProjects: "Explore Projects",
        downloadCV: "Download CV",
        available: "Available for new projects & consulting",
        aiStatus: "AI Agents: Operational",
        clusterStatus: "Cloud Infra: Healthy",

        // About
        aboutTitle: "About Me",
        aboutDesc1: "Software engineer specialized in building robust, scalable solutions using Java (Spring Boot) and Node.js / Express in the backend, prioritizing high availability, security, and clean code.",
        aboutDesc2: "Constantly evolving into applied Artificial Intelligence: building autonomous agent workflows, integrating LLMs (OpenAI, Claude, DeepSeek), structured prompt engineering, and RAG architectures to automate complex business logic.",
        aboutDesc3: "End-to-end expertise in modern frontend development with React, TypeScript, and Tailwind CSS, backed by strong DevOps skills: Kubernetes (AKS) orchestration, Docker containers, and Infrastructure as Code with Terraform.",
        aboutPills: [
            "Cloud Architecture & Microservices",
            "AI Engineering & Agents",
            "Kubernetes (AKS) & Docker",
            "Java & Node.js Backend",
            "React & TypeScript Frontend",
            "Infrastructure as Code (Terraform)"
        ],

        // Experience
        expTitle: "Work Experience",
        roles: [
            {
                title: "Senior Fullstack, DevOps & AI Developer",
                company: "Specialized Projects & Freelance",
                period: "2024 - Present",
                desc: "Technical leadership on full-lifecycle platforms like Metropolitan Fashion Chile (containerized PERN stack with RBAC roles). Implementing autonomous AI workflows and automated cloud deployments on Azure and DigitalOcean."
            },
            {
                title: "Software Architect & Tech Lead",
                company: "Career Milestones",
                period: "2021 - 2024",
                desc: "Architected enterprise backend solutions, led monolith-to-microservices migrations, and governed continuous delivery infrastructure on Kubernetes."
            },
            {
                title: "Backend Engineer",
                company: "Early Career",
                period: "2018 - 2021",
                desc: "Developed high-throughput REST APIs in Java and Spring, optimized relational database query performance, and established foundational CI pipelines."
            }
        ],
        certifications: "Certifications & Core Focus",
        certList: ["Azure AZ-104", "Azure AZ-204", "DevOps AZ-400", "AI Agent Workflows"],

        // Stack
        stackTitle: "Tech Stack & Artificial Intelligence",

        // Projects
        projectsTitle: "Featured Projects",
        projectsSubtitle: "Production • Innovation • Architecture",
        featuredBadge: "FEATURED PROJECT",
        privateBadge: "Private Repo",
        publicBadge: "Open Source",
        githubLink: "Explore on GitHub",
        projectList: [
            {
                id: "metropolitan",
                title: "Metropolitan Fashion Chile",
                role: "Fullstack Architecture & DevOps",
                desc: "Comprehensive platform for the curation and management of models and designers for the prestigious Metropolitan Fashion Chile (Santiago Haute Couture) event. Features public applicant portal, multi-role RBAC admin control panel (Master, Coordinator, Designer, Staff), relational database, and containerized deployment with Docker and Nginx.",
                tags: ["React 18", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
                featured: true,
                badge: "In Production",
                metric: "Public Portal + Control Core RBAC",
                link: null
            },
            {
                id: "ai-assist",
                title: "Chatbox Data Assist & AI Agents",
                role: "AI Engineering & Backend",
                desc: "Intelligent analytics and data retrieval system powered by OpenAI models and Python agent orchestration. Features contextual retrieval (RAG), strict schema validation, and autonomous workflow execution.",
                tags: ["Python", "OpenAI API", "LangChain", "FastAPI", "RAG", "Autonomous Agents"],
                featured: true,
                badge: "AI Powered",
                metric: "LLM Pipeline & RAG",
                link: null
            },
            {
                id: "monitor",
                title: "Mission-Critical Service Monitor",
                role: "Architecture & Development",
                desc: "Enterprise platform modernization. Decoupled legacy monolith into a modern React + Vite frontend and reactive Java Spring Boot microservices with comprehensive observability.",
                tags: ["React", "Java", "Spring Boot", "Microservices", "Observability"],
                featured: false,
                badge: "Microservices",
                metric: "Monolith to Cloud Native",
                link: null
            },
            {
                id: "aks",
                title: "AKS Process Orchestrator",
                role: "DevOps & Cloud Native",
                desc: "Specialized microservice for dynamic provisioning, governance, and real-time monitoring of workloads inside isolated Azure Kubernetes Service (AKS) pods with centralized logging.",
                tags: ["Kubernetes (AKS)", "Go", "Docker", "Azure", "Cloud Native"],
                featured: false,
                badge: "DevOps",
                metric: "Dynamic Pod Provisioning",
                link: null
            },
            {
                id: "terraform",
                title: "Multi-Environment Terraform IaC",
                role: "Infrastructure as Code",
                desc: "Structured, reusable Terraform modules for automated Azure cloud infrastructure provisioning across Dev, QA, and Production with secure state separation.",
                tags: ["Terraform", "Azure", "IaC", "HCL", "DevOps"],
                featured: false,
                badge: "IaC",
                metric: "Dev / QA / Prod Automated",
                link: null
            },
            {
                id: "framework",
                title: "Resilient Integration Framework",
                role: "Backend Architecture",
                desc: "Hardened client framework for internal API consumption with enterprise fault tolerance: Resilience4j circuit breaking, smart retry policies, and controlled fallbacks.",
                tags: ["Java", "Resilience4j", "Spring Boot", "REST APIs"],
                featured: false,
                badge: "Resilience",
                metric: "Zero Downtime Integrations",
                link: null
            },
            {
                id: "landings",
                title: "Bento Design Portfolio & Web Apps",
                role: "Frontend Engineering",
                desc: "High-impact web applications built with modular Bento Grid design, 100 Lighthouse performance, responsive layout, and smooth cinematic micro-interactions.",
                tags: ["React", "Tailwind CSS", "Vite", "Bento Grid", "UI/UX"],
                featured: false,
                badge: "Frontend",
                metric: "Blazing Fast & Accessible",
                link: "https://github.com/Estirp3/POrtafolioReac"
            }
        ],

        // Learnings & Hobbies
        learningsTitle: "Research & Continuous Learning",
        learningTopics: [
            "Autonomous Agents & MCP (Model Context Protocol)",
            "Advanced RAG & Vector Embeddings",
            "Kubernetes Patterns & AKS Architecture",
            "System Design & High-Scalability"
        ],
        hobbiesTitle: "Interests & Maker Hobbies",
        hobbiesList: [
            { title: "3D Printing & Maker", desc: "Physical modeling and prototyping" },
            { title: "Tech Content Creation", desc: "Sharing insights on AI & software" }
        ],

        // Contact
        contactTitle: "Contact & Collaboration",
        contactHeadline: "Have an architectural challenge, web project, or AI initiative?",
        contactDesc: "Let's connect to build impactful technical solutions: from fullstack production platforms and microservices to intelligent AI agent integrations and cloud infrastructure.",
        responseTime: "Usually replying within 24 hours.",
        letsTalk: "Let's Talk",
        contactTags: ["Fullstack Architecture", "AI Integrations", "Metropolitan Project", "Java / Node Backend", "Kubernetes & DevOps"]
    }
};
