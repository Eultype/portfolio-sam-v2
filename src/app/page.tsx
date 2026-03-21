// Import des composants statiques et interactifs
import MagneticButton from '@/components/ui/MagneticButton';
import AboutSection from '@/components/sections/About';
import SkillsSection from '@/components/sections/Skills';
import ProjectsSection from '@/components/sections/Projects';
import ExperienceSection from '@/components/sections/Experience';
import ContactSection from '@/components/sections/Contact';
import ClientHomeWrapper from '@/components/layout/ClientHomeWrapper';

// Import data
import { portfolioData } from '@/data/portfolio';

// Page d'accueil - Désormais un Server Component
export default function Home() {
    return (
        <main className="relative w-full text-white font-sans selection:bg-blue-500/30">
            {/* 
              ClientHomeWrapper gère les animations GSAP et la scène 3D.
              Tout le contenu enfant est généré côté serveur (SSR) pour le SEO !
            */}
            <ClientHomeWrapper>
                {/* Hero */}
                <section id="home" className="relative min-h-[100svh] flex flex-col items-center px-6 overflow-hidden pt-28">
                    <div className="flex-1 flex flex-col justify-center text-center max-w-6xl mx-auto z-10 w-full">
                        <div className="overflow-hidden flex justify-center pb-6">
                            <p className="hero-animate text-blue-500 tracking-[0.5em] text-[10px] md:text-xs uppercase font-medium border border-white/5 px-6 py-2 rounded-full backdrop-blur-md bg-white/5 opacity-0">
                                {portfolioData.personal.role}
                            </p>
                        </div>
                        {/* Titres */}
                        <div className="pb-6">
                            <h1 className="text-7xl md:text-[10rem] lg:text-[11rem] font-bold tracking-tighter leading-[0.9] md:leading-[0.8] flex flex-col items-center text-white">
                                <span className="hero-animate block opacity-0">FULLSTACK</span>
                                <span className="hero-animate block opacity-50 opacity-0">DEVELOPER</span>
                            </h1>
                        </div>
                        {/* Description */}
                        <div className="mx-auto flex justify-center pb-6">
                            <p className="hero-animate text-lg md:text-xl text-gray-500 leading-relaxed text-center font-light opacity-0">
                                Je conçois des applications web fluides et performantes. Alliant rigueur technique et créativité, je transforme vos besoins en solutions numériques concrètes, du backend à l'interface utilisateur.
                            </p>
                        </div>
                        {/* Bouton voir projet */}
                        <div className="flex flex-wrap justify-center gap-8 hero-animate opacity-0">
                            <MagneticButton>
                                <a href="/projects" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-500">
                                    <span>VIEW WORK</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </MagneticButton>
                        </div>

                        {/* Indicateur de scroll */}
                        <div className="flex flex-col items-center hero-animate opacity-0 -mt-2">
                            <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
                            <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-white opacity-60">Scroll to dive</span>
                        </div>
                    </div>
                </section>
                
                {/* À Propos */}
                <AboutSection />
                {/* Compétences */}
                <SkillsSection />
                {/* Projets */}
                <ProjectsSection />
                {/* Expériences */}
                <ExperienceSection />
                {/* Contact */}
                <ContactSection />
            </ClientHomeWrapper>
        </main>
    );
}