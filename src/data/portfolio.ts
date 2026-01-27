import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
    // Coordonnées personnelles
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
    // Menu de navigation
    nav: [
        { label: "Accueil", path: "/" },
        { label: "À Propos", path: "/about" },
        { label: "Compétences", path: "/skills" },
        { label: "Projets", path: "/projects" },
        { label: "Expérience", path: "/experience" },
        { label: "Contact", path: "/contact" },
    ],
    // Statistiques
    stats: [
        { label: "mois de formation intensive", value: "14" },
        { label: "Projets architecturés", value: "10+" },
        { label: "Technologies et outils utilisés", value: "15+"},
        { label: "Heures de code & veille", value: "1800+"}
    ],
    // Skills
    skills: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "PHP", "REST API"],
        tools: ["Git", "GitHub", "Linux", "JetBrains", "Figma", "Vercel",],
    },
    // Projets
    projects: [
        {
            id: 1,
            title: "2D3D Gravure - Dashboard",
            category: "Full-Stack",
            description: "Un ERP moderne et sur-mesure pour gérer l'intégralité du flux de production d'une entreprise de gravure. De la commande client à l'expédition.",
            longDescription: "Conception et développement d'une plateforme ERP (Enterprise Resource Planning) complète pour digitaliser l'atelier de gravure 2D3D Crystal. Ce projet ambitieux répond à un besoin critique : centraliser la gestion des commandes, du stock et des partenaires B2B sur une interface unique et ultra-performante.",
            challenges: [
                "Flux de production complexe : Création d'un Wizard intuitif et suivi visuel des statuts.",
                "Architecture B2B/B2C : Système de rôles (RBAC) sécurisé isolant les données.",
                "Performance & Temps réel : Utilisation de Server Actions et WebSockets.",
                "Automatisation : Génération de factures PDF et gestion intelligente des stocks."
            ],
            stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Shadcn UI", "Cloudinary"],
            image: "/project-2d3d.png",
            gallery: ["/project/project-2d3d-iMac.png", "/project/project-2d3d-macbook.png", "/project/project-2d3d-ipad-1.png", "/project/project-2d3d-iphone-1.png"],
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 2,
            title: "Scarlett Gallery",
            category: "Frontend",
            description: "Conception et développement d’un site vitrine destiné à la présentation d’une galerie artistique.",
            longDescription: "Scarlett Gallery est un projet de portfolio artistique mettant en avant des œuvres contemporaines. L'objectif était de créer une interface épurée et immersive qui laisse toute la place aux visuels. Le site comprend une page de présentation de l'artiste, une galerie interactive, ses services, ses avis et un formulaire de contact optimisé.",
            stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            image: "/project/projet_scarlett.webp",
            gallery: ["/project/projet_scarlett.webp", "/project/projet_scarlett.webp", "/project/projet_scarlett.webp"],
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 3,
            title: "La Dolce Vita",
            category: "Frontend",
            description: "Une vitrine digitale immersive pour un restaurant italien de prestige. Alliant design luxueux, animations fluides et architecture Next.js optimisée.",
            longDescription: "La Dolce Vita n'est pas un simple site vitrine, c'est une application web immersive conçue pour refléter l'excellence gastronomique de l'établissement. L'objectif était de créer une expérience utilisateur fluide et raffinée, évoquant l'atmosphère chaleureuse de l'Italie.",
            challenges: [
                "UX/UI Premium : Direction artistique soignée et micro-interactions subtiles.",
                "Réservation Intuitive : Tunnel de réservation étape par étape avec validation en temps réel.",
                "Performance & SEO : Utilisation des Server Components et données structurées.",
                "Architecture Modulaire : Code organisé pour une maintenabilité maximale."
            ],
            stack: ["Next.js 16", "Tailwind CSS", "TypeScript", "Framer Motion", "Zod", "Lenis"],
            image: "/project/ladolcevita2.png",
            gallery: ["/project/ladolcevita2.png", "/ladolcevita2.png"],
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
    // Expériences
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
