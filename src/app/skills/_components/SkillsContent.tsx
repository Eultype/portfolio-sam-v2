'use client';

// Import React
import { useRef, useEffect, useState } from 'react';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// Import data
import { portfolioData } from '@/data/portfolio';
// Import context
import { useScene } from '@/context/SceneContext';

// Page compétences (Contenu Client)
export default function SkillsContent() {
    const { setStatus } = useScene();
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    // Mise à jour de l'état de la scène 3D au montage
    useEffect(() => {
        setStatus('arrived');
    }, [setStatus]);

    const container = useRef(null);

    // Animations GSAP
    useGSAP(() => {
        gsap.from('.animate-full-skill', {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: container });

    const handleSkillClick = (skill: string) => {
        setActiveSkill(prev => prev === skill ? null : skill);
    };

    return (
        <main ref={container} className="relative min-h-screen text-white font-sans selection:bg-blue-500/30">
            
            <section className="pt-40 pb-20 container mx-auto px-6">
                {/* Titres */}
                <div className="max-w-6xl mx-auto">
                    <div className="mb-32 space-y-8 animate-full-skill">
                        <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter leading-none">ARSENAL.</h1>
                        <p className="text-xl md:text-3xl text-gray-400 font-light">Technologies et outils que je maîtrise au quotidien.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-32">
                        {/* Compétences Frondend*/}
                        <div className="space-y-12 animate-full-skill">
                            <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.5em] border-b border-white/10 pb-4">Frontend</h2>
                            <div className="space-y-6">
                                {portfolioData.skills.frontend.map(s => (
                                    <div 
                                        key={s} 
                                        onClick={() => handleSkillClick(s)}
                                        className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-colors cursor-pointer select-none ${activeSkill === s ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                                    >
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compétences Backend */}
                        <div className="space-y-12 animate-full-skill">
                            <h2 className="text-xs font-mono text-purple-500 uppercase tracking-[0.5em] border-b border-white/10 pb-4">Backend</h2>
                            <div className="space-y-6">
                                {portfolioData.skills.backend.map(s => (
                                    <div 
                                        key={s} 
                                        onClick={() => handleSkillClick(s)}
                                        className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-colors cursor-pointer select-none ${activeSkill === s ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                                    >
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Outils */}
                        <div className="space-y-12 animate-full-skill">
                            <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.5em] border-b border-white/10 pb-4">Tools</h2>
                            <div className="space-y-6">
                                {portfolioData.skills.tools.map(s => (
                                    <div 
                                        key={s} 
                                        onClick={() => handleSkillClick(s)}
                                        className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-colors cursor-pointer select-none ${activeSkill === s ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                                    >
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
