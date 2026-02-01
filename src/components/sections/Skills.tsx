'use client';

// Import Next
import Link from 'next/link';
// Import React
import { useRef } from 'react';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// Import data
import { portfolioData } from '@/data/portfolio';

// Composant de la section Compétences de la Homepage
export default function SkillsSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        gsap.from('.skill-line', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 100,
            opacity: 0,
            rotateX: -90,
            stagger: 0.05,
            duration: 1,
            ease: 'expo.out'
        });
    }, { scope: container });

    const coreSkills = [
        ...portfolioData.skills.frontend.slice(0, 3),
        ...portfolioData.skills.backend.slice(0, 3),
    ];

    return (
        // Titre de la section
        <section id="skills" ref={container} className="pt-20 pb-32 container mx-auto px-6 flex flex-col justify-center">
            <h2 className="text-sm font-mono text-blue-500 mb-12 uppercase tracking-[0.5em] border-b border-white/5 pb-4">
                02. Core Stack
            </h2>

            {/* Compétences */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start mb-12">
                {coreSkills.map((skill, i) => (
                    <div key={i} className="skill-line group relative cursor-default">
                  <span className="text-5xl md:text-8xl font-bold text-white/10 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                      {skill}
                  </span>
                    </div>
                ))}
            </div>

            {/* Bouton voir l'arsenal */}
            <div className="flex justify-center md:justify-start">
                <Link href="/skills" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                    <span>Voir tout l'arsenal</span>
                    <span className="w-8 h-px bg-blue-500 group-hover:w-12 group-hover:bg-white transition-all"></span>
                </Link>
            </div>
        </section>
    );
}
