'use client';

import { portfolioData } from '@/data/portfolio';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ExperienceSection() {
    const container = useRef(null);

    useGSAP(() => {
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
    }, { scope: container });

    return (
        <section id="experience" ref={container} className="py-32 container mx-auto px-6">
            <h2 className="text-sm font-mono text-blue-500 mb-12 uppercase tracking-[0.5em]">
                04. Parcours
            </h2>
            <h1 className="text-6xl md:text-9xl font-bold mb-20 text-white/90 tracking-tighter">
                TIMELINE
            </h1>

            <div className="border-l border-white/5 ml-4 md:ml-10 space-y-20 pl-8 md:pl-16 relative mb-20">
                {portfolioData.experience.slice(0, 2).map((exp) => (
                    <div key={exp.id} className="exp-item relative group">
                        <div className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 rounded-full border border-white/10 bg-black group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-500" />

                        <span className="block text-xs font-mono text-blue-500 mb-4 tracking-widest">{exp.date}</span>
                        <h3 className="text-4xl md:text-6xl font-bold mb-2 group-hover:text-white text-gray-400 transition-colors duration-500">
                            {exp.role}
                        </h3>
                        <div className="text-lg text-gray-600 mb-8 uppercase tracking-widest">{exp.company}</div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center md:justify-start">
                <Link href="/experience" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                    <span>Voir mon parcours complet</span>
                    <span className="w-8 h-px bg-blue-500 group-hover:w-12 group-hover:bg-white transition-all"></span>
                </Link>
            </div>
        </section>
    );
}
