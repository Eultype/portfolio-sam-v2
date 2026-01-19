'use client';

import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useScene } from '@/context/SceneContext';

export default function NotFound() {
  const container = useRef(null);
  const { setStatus, setIntroPlayed } = useScene();

  // On s'assure que la scène est en mode "arrived" (calme) et on marque l'intro comme vue
  useEffect(() => {
    setStatus('arrived');
    setIntroPlayed(true);
  }, [setStatus, setIntroPlayed]);

  useEffect(() => {
    gsap.fromTo('.animate-404', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <main ref={container} className="relative min-h-screen flex flex-col items-center justify-center text-white font-sans selection:bg-blue-500/30">
      
      <div className="text-center space-y-8 z-10 px-6">
        <h1 className="animate-404 text-7xl md:text-[12rem] font-bold tracking-tighter leading-none text-blue-500/80">
          404
        </h1>
        
        <div className="animate-404 space-y-4">
          <h2 className="text-2xl md:text-4xl font-light uppercase tracking-widest">
            Signal Lost
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-base max-w-md mx-auto">
            Les coordonnées demandées ne correspondent à aucun secteur connu du système.
          </p>
        </div>

        <div className="animate-404 pt-8 flex justify-center">
          <MagneticButton>
            <Link href="/" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all duration-500">
              <span>RETOUR À LA BASE</span>
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Élément décoratif "Glitch" ou scanline */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-50" />
      
    </main>
  );
}
