'use client';

// Import Next
import Link from 'next/link';
// Import React
import { useRef } from 'react';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// Import data
import { portfolioData } from '@/data/portfolio';

// Composant de la section Expériences de la Homepage
export default function ExperienceSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        // Animation d'entrée
        gsap.from('.exp-item', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            x: -50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });

        // Animation des cercles au scroll (Logique continue)
        const circles = container.current.querySelectorAll('.timeline-circle');
        circles.forEach((circle: any) => {
            gsap.to(circle, {
                backgroundColor: 'white',
                boxShadow: '0 0 30px rgba(255,255,255,0.5)',
                duration: 0.1,
                scrollTrigger: {
                    trigger: circle.parentElement,
                    start: "top 60%", 
                    end: "bottom 60%",
                    toggleActions: "play reverse play reverse",
                    fastScrollEnd: true
                }
            });
        });
    }, { scope: container });

    return (
        <section id="experience" ref={container} className="py-32 container mx-auto px-6">
            {/* Titres */}
            <span className="block text-sm font-mono text-blue-500 mb-12 uppercase tracking-[0.5em]">
                04. Parcours
            </span>
            <h2 className="text-6xl md:text-9xl font-bold mb-20 text-white/90 tracking-tighter">
                TIMELINE
            </h2>

            {/* Expériences : Date / Role / Entreprise */}
            <div className="border-l border-white/5 ml-4 md:ml-10 pl-8 md:pl-16 relative mb-20">
                {portfolioData.experience.slice(0, 2).map((exp) => (
                    <div key={exp.id} className="exp-item relative group pb-40 last:pb-20">
                        <div className="timeline-circle absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 rounded-full border border-white/10 bg-black transition-all duration-500" />
                        {/* Date */}
                        <span className="block text-xs font-mono text-blue-500 mb-4 tracking-widest">{exp.date}</span>
                        {/* Rôle */}
                        <h3 className="text-4xl md:text-6xl font-bold mb-2 group-hover:text-white text-gray-400 transition-colors duration-500">
                            {exp.role}
                        </h3>
                        {/* Entreprise */}
                        <div className="text-lg text-gray-600 mb-8 uppercase tracking-widest">{exp.company}</div>
                    </div>
                ))}
            </div>

            {/* Bouton voir mon parcours complet */}
            <div className="flex justify-center md:justify-start">
                <Link href="/experience" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                    <span>Voir mon parcours complet</span>
                    <span className="w-8 h-px bg-blue-500 group-hover:w-12 group-hover:bg-white transition-all"></span>
                </Link>
            </div>
        </section>
    );
}
