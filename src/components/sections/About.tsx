'use client';

// Import Next
import Link from 'next/link';
// Import React
import { useRef } from 'react';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Import des composants
import LiquidImage from '@/components/ui/LiquidImage';
// Import data
import { portfolioData } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

// Composant de la section About de la Homepage
export default function AboutSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        gsap.from('.animate-about-text', {
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

        gsap.from('.animate-about-image', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            scale: 0.9,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out'
        });

        gsap.to('.parallax-img', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            y: -150,
            ease: 'none'
        });

    }, { scope: container });

    return (
        <section id="about" ref={container} className="py-32 container mx-auto px-6 relative">
            <div className="flex flex-col lg:flex-row gap-20 items-start">

                {/* Colonne de gauche : Idendité */}
                <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
                    <span className="block text-sm font-mono text-blue-500 mb-4 uppercase tracking-[0.5em] animate-about-text">
                        01. L'Explorateur
                    </span>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 animate-about-text leading-[0.9] text-white">
                        WHO <br />
                        <span className="text-gray-500">AM I?</span>
                    </h2>
                    <div className="h-1 w-20 bg-white mb-8 animate-about-text" />

                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300 animate-about-text max-w-lg font-light">
                        Je m'appelle Samuël. Développeur par choix, geek par nature. J'aime quand les choses sont carrées
                        : un code propre, une architecture logique et une expérience utilisateur sans friction.
                        Bref, je ne fais pas que coder, je donne vie à des idées.
                    </p>
                </div>

                {/* Colonne de droite : image / descriptio,*/}
                <div className="lg:w-1/2 space-y-24 pt-20">

                    {/* Image - Priorité LCP */}
                    <div className="aspect-[3/4] w-full relative parallax-img animate-about-image will-change-transform">
                        <LiquidImage
                            src="/personnal/solitude.webp"
                            alt="Portrait Samuël"
                            className="w-full h-full rounded-sm transition-all duration-700"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-12 animate-about-text">
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            Mon voyage a commencé avec une immersion intensive de {portfolioData.stats[0].value} mois.
                            Depuis, j'explore chaque recoin du développement web, de l'interface utilisateur immersive
                            aux architectures de données scalables.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            Fort d'un cursus intensif axé sur la maîtrise du cycle complet de développement, j'ai appris
                            à naviguer du front-end créatif à la gestion de bases de données relationnelles. De la
                            logique MVC à l'intégration d'API modernes, je forge des outils performants, scalables et
                            centrés sur l'innovation.
                        </p>
                    </div>

                    <div>
                        {/* Bouton lire ma bio complète */}
                        <Link href="/about" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                            <span>Lire ma bio complète</span>
                            <span className="w-8 h-px bg-blue-500 group-hover:w-12 group-hover:bg-white transition-all"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
