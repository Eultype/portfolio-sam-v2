'use client';

// Import react
import { useRef, useEffect } from 'react';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// Import des composants
import ContactForm from '@/components/ui/ContactForm';
import { portfolioData } from '@/data/portfolio';
// Import context
import { useScene } from '@/context/SceneContext';

// Page de contact (Contenu Client)
export default function ContactContent() {
    const { setStatus } = useScene();
    
    // Mise à jour de l'état de la scène 3D au montage
    useEffect(() => {
        setStatus('arrived');
    }, [setStatus]);

    const container = useRef(null);

    // Animations GSAP
    useGSAP(() => {
        gsap.from('.animate-full-contact', {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <main ref={container} className="relative min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
            
            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Titres */}
                    <div className="mb-32 space-y-8 animate-full-contact">
                        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">SIGNAL.</h1>
                        <p className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl">
                            Initialisez une connexion directe pour discuter de vos ambitions numériques.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        {/* Infos : Coordonnées / Email / Réseaux Sociaux */}
                        <div className="lg:w-1/3 space-y-16 animate-full-contact">
                            {/* Coordonnées */}
                            <div className="space-y-4">
                                <span className="block text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em]">Command_Center</span>
                                <p className="text-2xl font-light">Bruxelles, Belgique</p>
                                <p className="text-gray-500 text-sm font-mono uppercase">50.8487° N, 4.4036° E</p>
                            </div>
                            {/* Email */}
                            <div className="space-y-4">
                                <span className="block text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em]">Direct_Link</span>
                                <a href={`mailto:${portfolioData.personal.email}`} className="text-2xl font-light hover:text-blue-400 transition-colors">
                                    {portfolioData.personal.email}
                                </a>
                            </div>
                            {/* Réseaux sociaux */}
                            <div className="pt-8 border-t border-white/5 space-y-6">
                                <span className="block text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">Transmissions</span>
                                <div className="flex flex-wrap gap-6">
                                    {portfolioData.personal.socials.map(s => (
                                        <a key={s.name} href={s.url} className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{s.name}</a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Formulaire de contact */}
                        <div className="lg:w-2/3 w-full bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-sm animate-full-contact relative">
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
