export const portfolioData = {
    personal: {
        name: "Samuël",
        role: "Développeur Full-Stack Junior",
        tagline: "Je crée des expériences web rapides, modernes et scalables.",
        description: "Passionné par l'intersection entre le design et la technologie, je conçois des applications web performantes avec une attention obsessionnelle aux détails.",
        email: "Sdarryy59@gmail.com",
        location: "Bruxelles, BE",
        age: "30 Ans",
        coordinates: {
            lat: "50° 50' 55.5\" N",
            lon: "4° 24' 13.2\" E"
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
        { label: "Années d'expérience", value: "0 à définir" },
        { label: "Projets livrés", value: "0 à définir" },
        { label: "Contributions Open Source", value: "0 à définir"},
    ],
    skills: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
        backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "PHP", "REST API"],
        tools: ["Git", "GitHub", "Linux", "JetBrains", "Figma", "Vercel",],
    },
    projects: [
        {
            id: 1,
            title: "Exemple Project 1",
            category: "Full-Stack",
            description: "Exemple description 1",
            stack: ["Stacks du projet à définir"],
            image: "/projet_scarlett.webp",
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 2,
            title: "Exemple Project 2",
            category: "Frontend",
            description: "Exemple description 2",
            stack: ["Stacks du projet à définir"],
            image: "/projects/ecommerce.jpg",
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 3,
            title: "Exemple Project 3",
            category: "App",
            description: "Exemple description 3",
            stack: ["Stacks du projet à définir"],
            image: "/projects/task.jpg",
            demo: "#",
            code: "#",
            featured: true
        },
        {
            id: 4,
            title: "Exemple Project 4",
            category: "Frontend",
            description: "Exemple description 4",
            stack: ["Stacks du projet à définir"],
            image: "/projects/old.jpg",
            demo: "#",
            code: "#",
            featured: false
        }
    ],
    experience: [
        {
            id: 1,
            role: "Exemple role 1",
            company: "Company name à définir.",
            date: "Date 1",
            description: "Description exemple 1"
        },
        {
            id: 2,
            role: "Exemple role 2",
            company: "Company name à définir.",
            date: "Date 2",
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
