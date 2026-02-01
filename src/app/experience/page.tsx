'use client';

// Import React
import { useRef, useEffect } from 'react';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// Import data
import { portfolioData } from '@/data/portfolio';
// Import context
import { useScene } from '@/context/SceneContext';

// Page expériences
export default function ExperiencePage() {
    const { setStatus } = useScene();

    useEffect(() => {
        setStatus('arrived');
    }, [setStatus]);

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        // Animation d'entrée
        gsap.from('.animate-full-exp', {
            x: -50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });

        // Animation des cercles au scroll
        // On cible tous les éléments avec la classe .timeline-circle à l'intérieur du container
        const circles = container.current.querySelectorAll('.timeline-circle');

        circles.forEach((circle: any) => {
            gsap.to(circle, {
                backgroundColor: 'white',
                boxShadow: '0 0 30px rgba(255,255,255,0.5)',
                duration: 0.1, // Réactivité quasi-instantanée
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
        <main ref={container} className="relative min-h-screen text-white font-sans selection:bg-blue-500/30">
            
            <section className="pt-40 pb-20 container mx-auto px-6">
                {/* Titres */}
                <div className="max-w-5xl mx-auto">
                    <div className="mb-32 space-y-8 animate-full-exp text-center">
                        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">CURSUS.</h1>
                        <p className="text-xl md:text-3xl text-gray-400 font-light">Mon parcours de l'apprentissage à l'expertise.</p>
                    </div>

                    {/* Expérience : Date / Entreprise / Role / Description */}
                    <div className="border-l border-white/5 ml-4 md:ml-10 pl-8 md:pl-16 relative">
                        {portfolioData.experience.map((exp) => (
                            <div key={exp.id} className="animate-full-exp relative group pb-40 last:pb-0">
                                <div className="timeline-circle absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 rounded-full border border-white/10 bg-black transition-all duration-500" />

                                {/* Date / Entreprise */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                    {/* Date */}
                                    <span className="text-sm font-mono text-blue-500 tracking-widest">{exp.date}</span>
                                    {/* Entreprise */}
                                    <div className="text-xs uppercase tracking-widest text-gray-600 px-3 py-1 border border-white/5 rounded-full">{exp.company}</div>
                                </div>
                                {/* Rôle */}
                                <h3 className="text-5xl md:text-7xl font-bold mb-8 group-hover:text-white text-gray-400 transition-colors duration-500">
                                    {exp.role}
                                </h3>
                                {/* Description */}
                                <p className="text-xl text-gray-500 max-w-3xl leading-relaxed font-light">
                                    {exp.description}
                                </p>

                                {/* Points clés : Responsabilités / Résultats */}
                                <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/5">
                                    {/* Responsabilités */}
                                    {exp.responsibilities && (
                                        <div className="text-sm text-gray-600 font-mono">
                                            <span className="text-white block mb-2 uppercase tracking-widest">Responsabilités :</span>
                                            {exp.responsibilities.map((resp, i) => (
                                                <div key={i}>• {resp}</div>
                                            ))}
                                        </div>
                                    )}
                                    {/* Résultats */}
                                    {exp.results && (
                                        <div className="text-sm text-gray-600 font-mono">
                                            <span className="text-white block mb-2 uppercase tracking-widest">Résultats :</span>
                                            {exp.results.map((res, i) => (
                                                <div key={i}>• {res}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
