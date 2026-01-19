'use client';

import { portfolioData } from '@/data/portfolio';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCardImage from "@/components/ui/ProjectCardImage";
import { useScene } from '@/context/SceneContext';

export default function ProjectsPage() {
    const { setStatus } = useScene();

    useEffect(() => {
        setStatus('arrived');
    }, [setStatus]);

    const container = useRef(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...Array.from(new Set(portfolioData.projects.map(p => p.category)))];
    const filteredProjects = filter === 'All' ? portfolioData.projects : portfolioData.projects.filter(p => p.category === filter);

    useGSAP(() => {
        gsap.from('.animate-full-project', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }, { scope: container, dependencies: [filter] });

    return (
        <main ref={container} className="relative min-h-screen text-white font-sans">
            
            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="max-w-6xl mx-auto mb-32 space-y-8 animate-full-project">
                    <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">WORKS.</h1>
                    <p className="text-xl md:text-3xl text-gray-400 font-light">Une collection de solutions concrètes aux problèmes complexes.</p>
                </div>

                {/* FILTRES */}
                <div className="flex flex-wrap gap-6 mb-32 animate-full-project">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-sm uppercase tracking-widest transition-all ${
                                filter === cat
                                    ? 'text-white border-b border-white pb-1'
                                    : 'text-gray-500 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GRILLE COMPLÈTE */}
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-40">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="animate-full-project group flex flex-col space-y-8">
                            <div className="aspect-[16/9] relative overflow-hidden rounded-sm">
                                <ProjectCardImage
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-4xl font-bold group-hover:text-blue-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] font-mono text-gray-600 border border-white/5 px-2 py-1 rounded">
                                {project.category}
                            </span>
                                </div>
                                <p className="text-gray-400 leading-relaxed font-light text-lg">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="text-[10px] text-gray-600 uppercase tracking-widest border-b border-white/5">
                                    {tech}
                                </span>
                                    ))}
                                </div>
                                <div className="pt-8 flex gap-8">
                                    <a href={project.demo} className="text-[10px] uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-colors">Demo</a>
                                    <a href={project.code} className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Code source</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
}
