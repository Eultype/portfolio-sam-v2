'use client';

// Import React
import { useRef, useEffect } from 'react';
// Import GSAP
import gsap from 'gsap';
// Import des composants
import MagneticButton from '@/components/ui/MagneticButton';
import AboutSection from '@/components/sections/About';
import SkillsSection from '@/components/sections/Skills';
import ProjectsSection from '@/components/sections/Projects';
import ExperienceSection from '@/components/sections/Experience';
import ContactSection from '@/components/sections/Contact';
// Import data
import { portfolioData } from '@/data/portfolio';
// Import context
import { useScene } from '@/context/SceneContext';

// Page d'accueil
export default function Home() {
  const { status, introPlayed } = useScene();
  const contentRef = useRef<HTMLDivElement>(null);

  // Gestion de l'affichage du contenu basé sur l'état de l'intro
  useEffect(() => {
    if (introPlayed) {
        // L'intro est finie : on révèle le contenu et on lance l'animation d'entrée
        gsap.to(contentRef.current, {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 2.5,
            ease: "power4.out"
        });

        // Animation des éléments Hero
        gsap.fromTo('.hero-animate',
            { y: 100, opacity: 0, rotateX: -30 },
            { y: 0, opacity: 1, rotateX: 0, duration: 2, stagger: 0.1, ease: "expo.out", delay: 0 }
        );
    } else {
        // L'intro n'est pas finie : on cache le contenu
        gsap.set(contentRef.current, { opacity: 0, scale: 0.9, filter: "blur(20px)" });
    }
  }, [introPlayed]);

  return (
      <main className="relative w-full text-white font-sans selection:bg-blue-500/30">
        
        {/* Pilotage de la 3D via le context (Scene est dans le layout) */}
                <div
                    ref={contentRef}
                    className="relative z-10 opacity-0"
                    style={{ pointerEvents: status === 'arrived' ? 'all' : 'none' }}
                >

                  {/* Hero */}
                  <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">
                    <div className="text-center max-w-6xl mx-auto space-y-6 z-10 mt-20">
                      <div className="overflow-hidden flex justify-center">
                        <p className="hero-animate text-blue-500 tracking-[0.5em] text-[10px] md:text-xs uppercase font-medium border border-white/5 px-6 py-2 rounded-full backdrop-blur-md bg-white/5 opacity-0">
                          {portfolioData.personal.role}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h1 className="text-5xl md:text-[12rem] font-bold tracking-tighter leading-[0.9] md:leading-[0.8] flex flex-col items-center text-white">
                          <span className="hero-animate block opacity-0">DIGITAL</span>
                          <span className="hero-animate block opacity-50 opacity-0">BUILDER</span>
                        </h1>
                      </div>

                      <div className="max-w-xl mx-auto flex justify-center">
                        <p className="hero-animate text-lg md:text-xl text-gray-500 leading-relaxed text-center font-light opacity-0">
                          Conception d'architectures robustes et d'interfaces fluides. Je bâtis des solutions numériques performantes de bout en bout, alliant innovation et pérennité.
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-center gap-8 pt-12 hero-animate opacity-0">
                        <MagneticButton>
                          <a href="/projects" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-500">
                            <span>VIEW WORK</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </a>
                        </MagneticButton>
                      </div>
                    </div>

                    <div className="absolute mb-26 bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 hero-animate opacity-0">
                      <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll to dive</span>
                      <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                    </div>
                  </section>

          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
        </main>
    );
}
