'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Scene from '@/components/3d/Scene';
import { portfolioData } from '@/data/portfolio';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ExperiencePage() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.animate-full-exp', {
            x: -50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <main ref={container} className="relative min-h-screen text-white font-sans selection:bg-blue-500/30">
            <Navbar />
            <Scene status="arrived" />

            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-32 space-y-8 animate-full-exp text-center">
                        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">CURSUS.</h1>
                        <p className="text-xl md:text-3xl text-gray-400 font-light">Mon parcours de l'apprentissage à l'expertise.</p>
                    </div>

                    <div className="border-l border-white/5 ml-4 md:ml-10 space-y-40 pl-8 md:pl-16 relative">
                        {portfolioData.experience.map((exp) => (
                            <div key={exp.id} className="animate-full-exp relative group">
                                <div className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 rounded-full border border-white/10 bg-black group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-500" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                    <span className="text-sm font-mono text-blue-500 tracking-widest">{exp.date}</span>
                                    <div className="text-xs uppercase tracking-widest text-gray-600 px-3 py-1 border border-white/5 rounded-full">{exp.company}</div>
                                </div>

                                <h3 className="text-5xl md:text-7xl font-bold mb-8 group-hover:text-white text-gray-400 transition-colors duration-500">
                                    {exp.role}
                                </h3>

                                <p className="text-xl text-gray-500 max-w-3xl leading-relaxed font-light">
                                    {exp.description}
                                </p>

                                {/* Points clés fictifs pour enrichir la page */}
                                <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/5">
                                    <div className="text-sm text-gray-600 font-mono">
                                        <span className="text-white block mb-2 uppercase tracking-widest">Responsabilités :</span>
                                        • Architecture logicielle<br/>
                                        • Mentorat technique<br/>
                                        • Optimisation performance
                                    </div>
                                    <div className="text-sm text-gray-600 font-mono">
                                        <span className="text-white block mb-2 uppercase tracking-widest">Résultats :</span>
                                        • Réduction latence -40%<br/>
                                        • Scalabilité x10<br/>
                                        • Taux de bugs -25%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
