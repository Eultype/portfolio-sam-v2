'use client';

import { portfolioData } from '@/data/portfolio';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useScene } from '@/context/SceneContext';

export default function SkillsPage() {
    const { setStatus } = useScene();

    useEffect(() => {
        setStatus('arrived');
    }, [setStatus]);

    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.animate-full-skill', {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <main ref={container} className="relative min-h-screen text-white font-sans selection:bg-blue-500/30">
            
            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-32 space-y-8 animate-full-skill">
                        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">ARSENAL.</h1>
                        <p className="text-xl md:text-3xl text-gray-400 font-light">Technologies et outils que je maîtrise au quotidien.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-32">
                        {/* FRONTEND */}
                        <div className="space-y-12 animate-full-skill">
                            <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.5em] border-b border-white/10 pb-4">Frontend</h2>
                            <div className="space-y-6">
                                {portfolioData.skills.frontend.map(s => (
                                    <div key={s} className="text-4xl md:text-5xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">{s}</div>
                                ))}
                            </div>
                        </div>

                        {/* BACKEND */}
                        <div className="space-y-12 animate-full-skill">
                            <h2 className="text-xs font-mono text-purple-500 uppercase tracking-[0.5em] border-b border-white/10 pb-4">Backend</h2>
                            <div className="space-y-6">
                                {portfolioData.skills.backend.map(s => (
                                    <div key={s} className="text-4xl md:text-5xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">{s}</div>
                                ))}
                            </div>
                        </div>

                        {/* TOOLS */}
                        <div className="space-y-12 animate-full-skill">
                            <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.5em] border-b border-white/10 pb-4">Tools</h2>
                            <div className="space-y-6">
                                {portfolioData.skills.tools.map(s => (
                                    <div key={s} className="text-4xl md:text-5xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">{s}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
