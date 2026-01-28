export type Project = {
    id: number;
    title: string;
    category: string;
    description: string;
    longDescription?: string;
    challenges?: string[];
    stack: string[];
    image: string;
    gallery?: string[];
    demo: string;
    code: string;
    featured?: boolean;
};

export type Experience = {
    id: number;
    role: string;
    company: string;
    date: string;
    description: string;
    responsibilities?: string[];
    results?: string[];
};

export type Social = {
    name: string;
    url: string;
    icon: string;
};

export type PortfolioData = {
    personal: {
        name: string;
        role: string;
        tagline: string;
        description: string;
        email: string;
        location: string;
        location2: string;
        age: string;
        coordinates: { lat: string; lon: string };
        coordinates2: { lat: string; lon: string };
        socials: Social[];
    };
    nav: { label: string; path: string }[];
    stats: { label: string; value: string }[];
    skills: {
        frontend: string[];
        backend: string[];
        tools: string[];
    };
    projects: Project[];
    experience: Experience[];
};
