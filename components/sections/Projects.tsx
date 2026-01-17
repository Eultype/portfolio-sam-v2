'use client';

import { portfolioData } from '@/data/portfolio';
import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LiquidImage from '@/components/ui/LiquidImage';

export default function ProjectsSection() {
    const container = useRef(null);
    const featuredProjects = portfolioData.projects.filter(p => p.featured).slice(0, 2);

    useGSAP(() => {
        gsap.from('.project-item', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section id="projects" ref={container} className="py-32 container mx-auto px-6">
            <h2 className="text-sm font-mono text-blue-500 mb-12 uppercase tracking-[0.5em]">
                03. Réalisations
            </h2>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-20 text-white/90 leading-none">
                SELECTED <br /> <span className="text-gray-600">WORKS</span>
            </h1>

            <div className="space-y-40 mb-20">
                {featuredProjects.map((project, index) => (
                    <div key={project.id} className="project-item group flex flex-col md:flex-row gap-8 md:gap-20 items-center">
                        <div className={`w-full md:w-2/3 aspect-video relative overflow-hidden rounded-sm ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <LiquidImage
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        <div className="w-full md:w-1/3 space-y-6">
                            <div className="text-[10px] font-mono text-blue-400 border border-blue-400/30 px-2 py-1 inline-block rounded">
                                {project.category}
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold group-hover:text-blue-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                {project.description}
                            </p>
                            <div className="pt-8">
                                <Link href="/projects" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                                    <span>Voir tous les projets</span>
                                    <span className="w-8 h-px bg-blue-500 group-hover:w-12 group-hover:bg-white transition-all"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
