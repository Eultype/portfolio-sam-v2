'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Scene from '@/components/3d/Scene';
import { portfolioData } from '@/data/portfolio';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LiquidImage from '@/components/ui/LiquidImage';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.animate-full-about', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        });

        // PARALLAXE IMAGE
        gsap.to('.parallax-img', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: -100,
            ease: 'none'
        });
    }, { scope: container });

    return (
        <main ref={container} className="relative min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Navbar />
            <Scene status="arrived" />

            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="max-w-5xl mx-auto space-y-32">

                    {/* HEADER PAGE */}
                    <div className="text-center space-y-8 animate-full-about">
                        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">BIO.</h1>
                        <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto">
                            Plus qu'un développeur, un créateur d'univers numériques.
                        </p>
                    </div>

                    {/* CONTENU DÉTAILLÉ */}
                    <div className="grid md:grid-cols-2 gap-20 animate-full-about parallax-img">
                        <div className="aspect-[3/4] w-full relative animate-about-image will-change-transform">
                            <LiquidImage
                                src="/IMG_5360.webp"
                                alt="Portrait Samuël"
                                className="w-full h-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                                location={portfolioData.personal.location2}
                                coordinates={portfolioData.personal.coordinates2}
                            />
                        </div>
                        <div className="space-y-12 animate-full-about text-lg text-gray-300 font-light leading-relaxed">
                            <p>
                                {portfolioData.personal.description}
                            </p>
                            <p>
                                Basé à Bruxelles, je viens de terminer un cycle intensif de 12 mois au CF2M. Cette
                                formation m'a permis de maîtriser l'ensemble de la chaîne de production, de la structure
                                des bases de données au déploiement final.
                            </p>
                            <p>
                                Passionné par l'évolution du web, je maintiens une veille technologique quotidienne. De
                                l'intégration de la 3D avec Three.js à l'usage de l'IA comme levier de productivité, je
                                cherche sans cesse à enrichir mon arsenal technique pour bâtir des solutions innovantes.
                            </p>

                            {/* Stats en ligne */}
                            <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-12">
                                {portfolioData.stats.map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* PHILOSOPHIE / VALEURS (Enrichissement) */}
                    <div className="py-20 border-t border-white/5 animate-full-about">
                        <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.5em] mb-12">Ma Philosophie</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { t: "Performance first", d: "Chaque milliseconde compte. De l'optimisation des requêtes SQL à la réactivité de l'interface, je veille à ce que l'architecture technique garantisse une navigation rapide et fluide pour l'utilisateur." },
                                { t: "Design Empathique", d: "L'interface doit s'effacer devant l'expérience. Je conçois des systèmes intuitifs où le design n'est pas seulement esthétique, mais une réponse logique aux besoins de l'utilisateur." },
                                { t: "Clean Engineering", d: "Un code durable est un code bien structuré. En m'appuyant sur des logiques MVC et des standards de programmation rigoureux, je construis des bases solides et faciles à maintenir." },
                            ].map((v, i) => (
                                <div key={i} className="space-y-4">
                                    <h3 className="text-xl font-bold">{v.t}</h3>
                                    <p className="text-gray-500 font-light">{v.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}