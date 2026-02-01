'use client';

// Import React
import { useRef } from 'react';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// Import des composants
import ContactForm from '../ui/ContactForm';
// Import data
import { portfolioData } from '@/data/portfolio';

// Composant de la section Contact de la Homepage
export default function ContactSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        gsap.from('.animate-contact', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section id="contact" ref={container} className="py-32 container mx-auto px-6">
            {/* Titre de la section */}
            <h2 className="text-sm font-mono text-blue-500 mb-12 uppercase tracking-[0.5em] animate-contact">
                05. Contact
            </h2>

            <div className="flex flex-col lg:flex-row gap-20">
                {/* Colonne gauche : Titre / Description / Réseaux sociaux */}
                <div className="lg:w-1/2 space-y-12">
                    <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] animate-contact">
                        LET'S <br />
                        <span className="text-gray-700">START</span>
                    </h1>

                    <div className="animate-contact max-w-md">
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            Vous avez une idée révolutionnaire ou un défi technique ? Envoyez-moi un signal. Je réponds généralement sous 24 cycles.
                        </p>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="pt-12 grid grid-cols-2 gap-12 border-t border-white/5 animate-contact">
                        {portfolioData.personal.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs uppercase tracking-[0.3em] text-gray-600 hover:text-white transition-colors"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Colonne droite : Formulaire */}
                <div className="lg:w-1/2 bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-sm animate-contact">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}