'use client';

// Import Spline
import Spline from "@splinetool/react-spline";
// Import des composants
import MagneticButton from '../ui/MagneticButton';
// Import des data
import { portfolioData } from '@/data/portfolio';

// Layout du Footer
export default function Footer() {
    return (
        <footer className="relative pt-60 pb-20 z-10 overflow-hidden">
            {/* Ligne de séparation infinie */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)]" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    {/* Robot / Titre */}
                    <div className="mb-20 md:mb-2 lg:mb-14 xl:mb-20 w-full flex flex-col items-center">
                        {/* Robot */}
                        <div className="w-full h-[200px] md:h-[500px] xl:h-[600px] relative pb-10 md:p-0 -mt-20 md:-mt-32 xl:-mt-40">
                            <Spline
                                scene="https://prod.spline.design/fhn2DJvLeJq9GDKK/scene.splinecode"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        {/* Titre */}
                        <h2 className="text-[10px] uppercase tracking-[1em] text-blue-500 xl:mb-8 font-mono -mt-10 md:-mt-20 z-10 relative">End of Transmission</h2>
                    </div>

                    <div className="grid md:grid-cols-3 w-full gap-20 items-end border-t border-white/5 pt-20">
                        {/* Colonne de gauche : Titre / Email / Disponibilité */}
                        <div className="text-left space-y-6">
                            {/* Titre */}
                            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest block mb-4">Coordinates</span>
                            {/* Email */}
                            <a href={`mailto:${portfolioData.personal.email}`} className="text-2xl hover:text-blue-500 transition-colors duration-500">
                                {portfolioData.personal.email}
                            </a>
                            {/* Disponibilité */}
                            <p className="text-sm text-gray-600 font-light max-w-xs">
                                Disponible pour de nouvelles missions intersidérales à travers le globe.
                            </p>
                        </div>

                        {/* Colonne centrale : Réseaux sociaux */}
                        <div className="flex flex-col items-center gap-10">
                            <div className="flex gap-8">
                                {portfolioData.personal.socials.map((social) => (
                                    <MagneticButton key={social.name}>
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs text-gray-400 hover:text-white hover:border-white transition-all duration-500"
                                        >
                                            {social.name.charAt(0)}
                                        </a>
                                    </MagneticButton>
                                ))}
                            </div>
                            <div className="w-px h-20 bg-gradient-to-b from-white/10 to-transparent" />
                        </div>

                        {/* Colonne de droite : Heure / Localisation / Auteur */}
                        <div className="text-right space-y-6 font-mono uppercase">
                            {/* Heure */}
                            <div className="text-[10px] text-gray-600 tracking-widest">
                                Time: {new Date().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})} GMT+1
                            </div>
                            {/* Localisation */}
                            <div className="text-[10px] text-gray-600 tracking-widest">
                                Loc: 50.8487° N, 4.4036° E
                            </div>
                            {/* Auteur */}
                            <div className="text-[8px] text-blue-500/50 pt-10">
                                © {new Date().getFullYear()} DESIGNED & BUILT BY SAMUEL.DEV
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
