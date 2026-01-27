import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
    personal: {
        name: "Samuël",
        role: "Développeur Full-Stack Junior",
        tagline: "Je crée des expériences web rapides, modernes et scalables.",
        description: "Passionné par le lien entre design et technique, je développe des applications web performantes. Mon objectif est simple : allier un code propre à une expérience utilisateur fluide et soignée.",
        email: "Sdarryy59@gmail.com",
        location: "Bruxelles, BE",
        location2: "Dolomites, IT",
        age: "30 Ans",
        coordinates: {
            lat: "50° 50' 55.5\" N",
            lon: "4° 24' 13.2\" E"
        },
        coordinates2: {
            lat: "46° 37′ 07\" N",
            lon: "12° 18′ 20\" E"
        },
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
        { label: "mois de formation intensive", value: "14" },
        { label: "Projets architecturés", value: "10+" },
        { label: "Technologies et outils utilisés", value: "15+"},
        { label: "Heures de code & veille", value: "1800+"}
    ],
    skills: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "PHP", "REST API"],
        tools: ["Git", "GitHub", "Linux", "JetBrains", "Figma", "Vercel",],
    },
    projects: [
        {
            id: 1,
            title: "Scarlett Gallery",
            category: "Frontend",
            description: "Conception et développement d’un site vitrine destiné à la présentation d’une galerie artistique.",
            longDescription: "Scarlett Gallery est un projet de portfolio artistique mettant en avant des œuvres contemporaines. L'objectif était de créer une interface épurée et immersive qui laisse toute la place aux visuels. Le site comprend une galerie interactive, une page de présentation de l'artiste et un formulaire de contact optimisé.",
            stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            image: "/project/projet_scarlett.webp",
            gallery: ["/project/projet_scarlett.webp", "/project/projet_scarlett.webp", "/project/projet_scarlett.webp"],
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 2,
            title: "2D3D Gravure - Dashboard",
            category: "Frontend",
            description: "Exemple description 2",
            longDescription: "Développement d'un tableau de bord administratif pour une entreprise de gravure. Ce dashboard permet de visualiser les commandes en cours, les stocks de matériaux et les statistiques de production en temps réel. L'interface a été pensée pour être efficace et responsive sur tablette.",
            stack: ["Stacks du projet à définir"],
            image: "/project-2d3d.png",
            gallery: ["/project-2d3d.png", "/project-2d3d.png"],
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 3,
            title: "Exemple Project 3",
            category: "App",
            description: "Exemple description 3",
            longDescription: "Une application mobile cross-platform conçue pour simplifier la gestion des tâches quotidiennes. Elle intègre des fonctionnalités de synchronisation cloud, des notifications push et un mode sombre natif.",
            stack: ["Stacks du projet à définir"],
            image: "/projects/task.jpg",
            gallery: ["/projects/task.jpg"],
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 4,
            title: "Exemple Project 4",
            category: "Frontend",
            description: "Exemple description 4",
            longDescription: "Refonte complète de l'identité visuelle et du site web d'une start-up locale. Le projet incluait la création d'un système de design complet et l'intégration de maquettes haute fidélité.",
            stack: ["Stacks du projet à définir"],
            image: "/projects/old.jpg",
            gallery: ["/projects/old.jpg"],
            demo: "#",
            code: "#",
            featured: false
        }
    ],
    experience: [
        {
            id: 1,
            role: "Stagiaire Développeur Full-Stack",
            company: "Rebel Company",
            date: "5 janvier 2026 - Now",
            description: "Description exemple 1"
        },
        {
            id: 2,
            role: "Formation Développeur Web Full-Stack",
            company: "Centre de formation 2 Mille",
            date: "11 novembre 2024 - 14 février 2026",
            description: "Description exemple 2"
        },
        {
            id: 3,
            role: "Exemple role 3",
            company: "Company name à définir.",
            date: "Date 3",
            description: "Description exemple 3"
        }
    ]
};
