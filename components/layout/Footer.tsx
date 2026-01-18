'use client';

import { portfolioData } from '@/data/portfolio';
import MagneticButton from '../ui/MagneticButton';

export default function Footer() {
    return (
        <footer className="relative pt-60 pb-20 z-10 overflow-hidden">
            {/* Ligne de séparation infinie */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)]" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center">

                    <div className="mb-20">
                        <h2 className="text-[10px] uppercase tracking-[1em] text-blue-500 mb-8 font-mono">End of Transmission</h2>
                        <h1 className="text-7xl md:text-[15rem] font-bold tracking-tighter text-white/5 selection:bg-transparent leading-none select-none">
                            GOODBYE
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-3 w-full gap-20 items-end border-t border-white/5 pt-20">
                        {/* GAUCHE : COORDONNEES */}
                        <div className="text-left space-y-6">
                            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest block mb-4">Coordinates</span>
                            <a href={`mailto:${portfolioData.personal.email}`} className="text-2xl hover:text-blue-500 transition-colors duration-500">
                                {portfolioData.personal.email}
                            </a>
                            <p className="text-sm text-gray-600 font-light max-w-xs">
                                Disponible pour de nouvelles missions intersidérales à travers le globe.
                            </p>
                        </div>

                        {/* CENTRE : SOCIALS */}
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

                        {/* DROITE : LEGAL/TIME */}
                        <div className="text-right space-y-6 font-mono uppercase">
                            <div className="text-[10px] text-gray-600 tracking-widest">
                                Time: {new Date().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})} GMT+1
                            </div>
                            <div className="text-[10px] text-gray-600 tracking-widest">
                                Loc: 50.8487° N, 4.4036° E
                            </div>
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
