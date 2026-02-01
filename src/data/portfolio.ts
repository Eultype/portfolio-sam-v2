import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
    // Coordonnées personnelles
    personal: {
        name: "Samuël",
        role: "Disponible immédiatement",
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
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
                "Dashboard complet : Gestion des commandes, clients, produits et revendeurs."
            ],
            stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Shadcn UI", "Cloudinary", "Zod"],
            image: "/project/2d3d/project-2d3d.webp",
            gallery: ["/project/2d3d/project-2d3d-iMac.webp", "/project/2d3d/project-2d3d-macbook.webp", "/project/2d3d/project-2d3d-ipads.webp", "/project/2d3d/project-2d3d-iphones.webp"],
            demo: "https://admin.2d3d.be/",
            code: "#",
            featured: true
        },
        {
            id: 2,
            title: "Scarlett Gallery",
            category: "Frontend",
            description: "Une vitrine digitale d'exception fusionnant direction artistique minimaliste et architecture logicielle de pointe.",
            longDescription: "Scarlett Gallery est une expérience immersive haute fidélité conçue pour l'artiste peintre Emma De Noni. Le projet allie une esthétique 'Terra & Crème' à des performances techniques de premier plan.",
            stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lenis"],
            image: "/project/projet_scarlett.webp",
            gallery: [
                "/project/scarlett-gallery/scarlett-v2_iMac.webp",
                "/project/scarlett-gallery/scarlett-v2-macbook.webp",
                "/project/scarlett-gallery/scarlett-v2-ipads.webp",
                "/project/scarlett-gallery/scarlett-v2-iphones.webp",
            ],
            demo: "https://www.scarlettgallery.com/",
            code: "https://github.com/Eultype/scarlett-gallery-v2",
            versions: {
                v1: {
                    title: "Version 1.0 - Fondations",
                    description: "Première itération statique du portfolio. Un site vitrine classique axé sur la présentation des œuvres avec une architecture Bootstrap traditionnelle.",
                    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                    gallery: [
                        "/project/scarlett-gallery/scarlettgallery-iMac.webp",
                        "/project/scarlett-gallery/scarlettgallery-macbook.webp",
                        "/project/scarlett-gallery/scarlettgallery-ipads.webp",
                        "/project/scarlett-gallery/scarlettgallery-iphones.webp"
                    ],
                    demo: "https://www.scarlettgallery.com/",
                    code: "https://github.com/Eultype/Scarlett_Portfolio"
                },
                v2: {
                    title: "Version 2.0 - L'Excellence Technique",
                    description: "Refonte intégrale sous Next.js 16. Migration vers Tailwind CSS v4 pour un rendu ultra-rapide et intégration de Framer Motion pour des interactions fluides. L'expérience est sublimée par un Smooth Scroll (Lenis) et une optimisation SEO/Performance de pointe (SSG, WebP, Speed Insights).",
                    stack: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "Framer Motion", "Lenis"],
                    gallery: [
                        "/project/scarlett-gallery/scarlett-v2_iMac.webp",
                        "/project/scarlett-gallery/scarlett-v2-macbook.webp",
                        "/project/scarlett-gallery/scarlett-v2-ipads.webp",
                        "/project/scarlett-gallery/scarlett-v2-iphones.webp",
                    ],
                    demo: "https://www.scarlettgallery.com/",
                    code: "https://github.com/Eultype/scarlett-gallery-v2"
                }
            },
            challenges: [
                "Performance : Score LCP exemplaire grâce au SSG et à l'optimisation WebP.",
                "UX Premium : Navigation soyeuse via Lenis et animations chorégraphiées.",
                "SEO : Indexation totale avec metadata avancées et OpenGraph dynamique.",
                "Protection : Sécurisation du contenu visuel contre le clic droit."
            ],
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
            image: "/project/la-dolce-vita/la-dolce-vita.webp",
            gallery: ["/project/la-dolce-vita/la-dolce-vita-iMac.webp", "/project/la-dolce-vita/la-dolce-vita-macbook-1.webp", "/project/la-dolce-vita/la-dolce-vita-ipads-1.webp", "/project/la-dolce-vita/la-dolce-vita-iphones-2.webp"],
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 4,
            title: "Portfolio Interactif",
            category: "Full-Stack / 3D",
            description: "Une expérience immersive mêlant rendu 3D, animations haute performance et architecture Next.js moderne.",
            longDescription: "Ce portfolio est le fruit d'une réflexion sur l'expérience utilisateur moderne. L'objectif était de créer un pont entre le développement web traditionnel et l'immersion 3D. Chaque interaction est pensée pour être fluide et signifiante, reflétant mon identité de développeur.",
            stack: ["Next.js 16", "TypeScript", "Three.js", "GSAP", "Tailwind CSS"],
            image: "/project/portfolio/portfolio-v2.webp",
            gallery: [
                "/project/portfolio/portfolio-v2-iMac.webp",
                "/project/portfolio/portfolio-v2-macbook.webp",
                "/project/portfolio/portfolio-v2-ipads.webp",
                "/project/portfolio/portfolio-v2-iphones.webp"
            ],
            demo: "#",
            code: "https://github.com/Eultype/portfolio-sam-v2",
            versions: {
                v1: {
                    title: "Version 1.0 - Portfolio Statique",
                    description: "Ma première vitrine personnelle. Un site plus conventionnel axé sur la présentation textuelle et des grilles de projets simples. C'était mes premiers pas dans l'affirmation de mon identité visuelle.",
                    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                    gallery: [
                        "/project/portfolio/portfolio-v1-iMac.webp",
                        "/project/portfolio/portfolio-v1-macbook.webp",
                        "/project/portfolio/portfolio-v1-ipads.webp",
                        "/project/portfolio/portfolio-v1-iphones.webp"
                    ],
                    demo: "https://github.com/Eultype/Portfolio_V1"
                },
                v2: {
                    title: "Version 2.0 - L'Immersion 3D",
                    description: "La version actuelle. Une refonte totale axée sur l'interactivity. Intégration d'une scène 3D complexe, gestion de smooth scroll fluide avec Lenis, et une architecture Next.js 16 ultra-performante. Chaque transition est orchestrée pour créer une expérience mémorable.",
                    stack: ["Next.js 16", "TypeScript", "Three.js", "GSAP", "Tailwind CSS"],
                    gallery: [
                        "/project/portfolio/portfolio-v2-iMac.webp",
                        "/project/portfolio/portfolio-v2-macbook.webp",
                        "/project/portfolio/portfolio-v2-ipads.webp",
                        "/project/portfolio/portfolio-v2-iphones.webp"
                    ],
                    demo: "#",
                    code: "https://github.com/Eultype/portfolio-sam-v2"
                }
            },
            challenges: [
                "Intégration 3D : Mise en place d'une scène Three.js performante avec gestion d'états dynamiques.",
                "Animations synchronisées : Utilisation de GSAP pour orchestrer les transitions entre les sections.",
                "Architecture Next.js : Utilisation des Server Components pour la performance et du Context API pour l'état de la scène.",
                "Expérience sans couture : Implémentation d'un Smooth Scroll fluide et d'un préchargeur global."
            ],
            featured: true
        }
    ],
    // Expériences
    experience: [
        {
            id: 1,
            role: "Stagiaire Développeur Web Full-Stack",
            company: "Rebel Company",
            date: "5 janvier 2026 - Now",
            description: "Développement de l'application métier 2D3D (Next.js, Prisma) et gestion de projets WordPress. Une expérience terrain où j'ai pu confronter mon code à la réalité des besoins clients et livrer des produits finis.",
            responsibilities: [
                "Conception de l'architecture (Next.js)",
                "Développement Full-Stack (API & UI)",
                "Gestion et maintenance WordPress"
            ],
            results: [
                "Lancement du Dashboard Production",
                "Optimisation des performances",
                "Autonomie sur la stack technique"
            ]
        },
        {
            id: 2,
            role: "Formation Développeur Web Full-Stack",
            company: "Centre de formation 2 Mille",
            date: "11 novembre 2024 - 14 février 2026",
            description: "14 mois de formation alliant théorie fondamentale et pratique intensive. De l'algorithmique aux bases de données, j'ai consolidé chaque concept théorique par la réalisation de projets concrets.",
            responsibilities: [
                "Maîtrise du cycle de développement",
                "Architecture de bases de données",
                "Résolution de problèmes complexes"
            ],
            results: [
                "Polyvalence Front & Back",
                "Rigueur et bonnes pratiques",
                "Prêt pour la production"
            ]
        },
        {
            id: 3,
            role: "Explorateur Technologique",
            company: "Autodidacte & Veille",
            date: "Mission Permanente",
            description: "Exploration active des nouvelles frontières du web (Next.js, 3D, IA). Je consacre mon temps libre à bâtir des projets expérimentaux, à décortiquer des documentations et à affiner mes pratiques de Clean Code. Une quête perpétuelle d'excellence technique.",
            responsibilities: [
                "Auto-formation quotidienne",
                "Challenge technique personnel",
                "Développement d'outils sur-mesure"
            ],
            results: [
                "Portfolio 3D interactif",
                "Montée en compétence rapide",
                "Adaptabilité immédiate"
            ]
        }
    ]
};
