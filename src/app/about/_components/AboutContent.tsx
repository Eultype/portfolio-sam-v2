'use client';

// Import React
import { useRef, useEffect } from 'react';
// Import GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Import des composants
import LiquidImage from '@/components/ui/LiquidImage';
// Import datas
import { portfolioData } from '@/data/portfolio';
// Import context
import { useScene } from '@/context/SceneContext';

gsap.registerPlugin(ScrollTrigger);

export default function AboutContent() {
    const container = useRef(null);
    const { setStatus } = useScene();

    // Mise à jour de l'état de la scène 3D au montage
    useEffect(() => {
        setStatus('arrived');
    }, [setStatus]);

    // Animations GSAP
    useGSAP(() => {
        // Animation d'entrée du contenu
        gsap.to('.animate-full-about', {
            y: 0,
            opacity: 1,
            startAt: { y: 50 },
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        });

        // PARALLAXE IMAGE
        if (document.querySelector('.animate-about-image')) {
            gsap.to('.animate-about-image', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                y: -100,
                ease: 'none'
            });
        }
    }, { scope: container });

    return (
        <main ref={container} className="relative min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
            
            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="max-w-5xl mx-auto space-y-32">

                    {/* Header */}
                    <div className="text-center space-y-8 animate-full-about opacity-0">
                        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none">BIO.</h1>
                        <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto">
                            Plus qu'un développeur, un créateur d'univers numériques.
                        </p>
                    </div>

                    {/* Contenu : Image / Description / Stats */}
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Image - Pas d'opacité 0 ici pour le LCP */}
                        <div className="aspect-[3/4] w-full relative animate-about-image will-change-transform">
                            <LiquidImage
                                src="/personnal/me_dolomites.webp"
                                alt="Portrait Samuël"
                                className="w-full h-full rounded-sm transition-all duration-700"
                                location={portfolioData.personal.location2}
                                coordinates={portfolioData.personal.coordinates2}
                            />
                        </div>
                        {/* Description */}
                        <div className="space-y-12 animate-full-about opacity-0 text-lg text-gray-300 font-light leading-relaxed">
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

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-12 text-center lg:text-left">
                                {portfolioData.stats.map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="py-20 border-t border-white/5 animate-full-about opacity-0">
                        <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.5em] mb-12">Ma Philosophie</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
        </main>
    );
}
