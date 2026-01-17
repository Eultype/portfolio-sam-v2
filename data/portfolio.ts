export const portfolioData = {
    personal: {
        name: "Samuël",
        role: "Développeur Full-Stack & UI Designer",
        tagline: "Je crée des expériences web rapides, modernes et scalables.",
        description: "Passionné par l'intersection entre le design et la technologie, je conçois des applications web performantes avec une attention obsessionnelle aux détails.",
        email: "Sdarryy59@gmail.com",
        socials: [
            { name: "GitHub", url: "https://github.com/Eultype", icon: "Github" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/samu%C3%ABl-darry-648504253/", icon: "Linkedin" },
            { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
        ]
    },
    nav: [
        { label: "Accueil", path: "/" },
        { label: "À Propos", path: "/about" },
        { label: "Compétences", path: "/skills" },
        { label: "Projets", path: "/projects" },
        { label: "Expérience", path: "/experience" },
        { label: "Contact", path: "/contact" },
    ],
    stats: [
        { label: "Années d'expérience", value: "5+" },
        { label: "Projets livrés", value: "30+" },
        { label: "Contributions Open Source", value: "500+" },
    ],
    skills: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
        backend: ["Node.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "GraphQL"],
        tools: ["Docker", "AWS", "Git", "Figma", "Vercel", "CI/CD"],
    },
    projects: [
        {
            id: 1,
            title: "Nebula Dashboard",
            category: "Full-Stack",
            description: "Un tableau de bord analytique SaaS avec visualisation de données en temps réel.",
            stack: ["Next.js", "Tremor", "Supabase"],
            image: "/projects/nebula.jpg",
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 2,
            title: "E-Commerce Galaxy",
            category: "Frontend",
            description: "Expérience d'achat immersive 3D pour une marque de vêtements streetwear.",
            stack: ["React", "Three.js", "Shopify API"],
            image: "/projects/ecommerce.jpg",
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 3,
            title: "Task Orbit",
            category: "App",
            description: "Gestionnaire de tâches collaboratif avec fonctionnalités IA.",
            stack: ["Vue.js", "Firebase", "OpenAI API"],
            image: "/projects/task.jpg",
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 4,
            title: "Portfolio V1",
            category: "Frontend",
            description: "Mon ancien portfolio.",
            stack: ["HTML", "SCSS", "JS"],
            image: "/projects/old.jpg",
            demo: "#",
            code: "#",
            featured: false
        }
    ],
    experience: [
        {
            id: 1,
            role: "Lead Developer",
            company: "TechAgency",
            date: "2023 - Présent",
            description: "Gestion d'une équipe de 5 développeurs, architecture de solutions SaaS complexes."
        },
        {
            id: 2,
            role: "Full-Stack Developer",
            company: "StartupSpace",
            date: "2021 - 2023",
            description: "Développement de fonctionnalités core, migration vers Next.js."
        },
        {
            id: 3,
            role: "Freelance",
            company: "Indépendant",
            date: "2019 - 2021",
            description: "Création de sites vitrines et e-commerce pour divers clients internationaux."
        }
    ]
};
