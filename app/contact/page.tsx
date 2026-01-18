'use client';

import Scene from '@/components/3d/Scene';
import ContactForm from '@/components/ui/ContactForm';
import { portfolioData } from '@/data/portfolio';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ContactPage() {
    const container = useRef(null);

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
            <Scene status="arrived" />

            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-32 space-y-8 animate-full-contact">
                        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">SIGNAL.</h1>
                        <p className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl">
                            Initialisez une connexion directe pour discuter de vos ambitions numériques.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        {/* INFOS DIRECTES */}
                        <div className="lg:w-1/3 space-y-16 animate-full-contact">
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em]">Command_Center</h3>
                                <p className="text-2xl font-light">Bruxelles, Belgique</p>
                                <p className="text-gray-500 text-sm font-mono uppercase">50.8487° N, 4.4036° E</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em]">Direct_Link</h3>
                                <a href={`mailto:${portfolioData.personal.email}`} className="text-2xl font-light hover:text-blue-400 transition-colors">
                                    {portfolioData.personal.email}
                                </a>
                            </div>

                            <div className="pt-8 border-t border-white/5 space-y-6">
                                <h3 className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">Transmissions</h3>
                                <div className="flex flex-wrap gap-6">
                                    {portfolioData.personal.socials.map(s => (
                                        <a key={s.name} href={s.url} className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{s.name}</a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FORMULAIRE HUD - VERSION EXACTE SECTION HOME */}
                        <div className="lg:w-2/3 w-full bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-sm animate-full-contact relative">
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
