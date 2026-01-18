'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { portfolioData } from '@/data/portfolio';

interface LiquidImageProps {
  src: string;
  alt: string;
  className?: string;
  showHUDData?: boolean;
}

export default function LiquidImage({ src, alt, className = "", showHUDData = true }: LiquidImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
      const dataRef = useRef<HTMLDivElement>(null);
      const tlRef = useRef<gsap.core.Timeline | null>(null);
      const [isHovered, setIsHovered] = useState(false);
  
      const xTo = useRef<any>(null);  const yTo = useRef<any>(null);
  const rotateXTo = useRef<any>(null);
  const rotateYTo = useRef<any>(null);

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    xTo.current = gsap.quickTo(imageRef.current, "x", { duration: 0.1, ease: "power2.out" });
    yTo.current = gsap.quickTo(imageRef.current, "y", { duration: 0.1, ease: "power2.out" });
    rotateXTo.current = gsap.quickTo(containerRef.current, "rotateX", { duration: 0.1, ease: "power2.out" });
    rotateYTo.current = gsap.quickTo(containerRef.current, "rotateY", { duration: 0.1, ease: "power2.out" });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xPct = (x / width - 0.5);
    const yPct = (y / height - 0.5);

    rotateXTo.current(yPct * -20);
    rotateYTo.current(xPct * 20);
    xTo.current(xPct * -25);
    yTo.current(yPct * -25);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(imageRef.current, { scale: 1.1, duration: 0.4 });

    // SÉQUENCE DE SCAN
    if (tlRef.current) tlRef.current.kill();
    tlRef.current = gsap.timeline();
    
    // 1. Reset et départ de la ligne
    tlRef.current.fromTo(scanLineRef.current, 
      { top: "-10%", opacity: 1 }, 
      { top: "110%", duration: 0.8, ease: "power2.inOut" }
    )
    // 2. Apparition des données au centre
    .fromTo(dataRef.current,
      { opacity: 0, scale: 0.8, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.4, ease: "back.out(1.7)" }
    )
    // 3. Attente et disparition
    .to(dataRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.4,
      delay: 2,
      ease: "power2.in"
    })
    // 4. Cacher la ligne à la fin
    .to(scanLineRef.current, { opacity: 0, duration: 0.3 }, "-=0.4");
  };

      const handleMouseLeave = () => {

        setIsHovered(false);
        // Arrêt immédiat de l'animation de scan
        if (tlRef.current) {
            tlRef.current.kill();
            tlRef.current = null;
        }

        if (rotateXTo.current) rotateXTo.current(0);
        if (rotateYTo.current) rotateYTo.current(0);
        if (xTo.current) xTo.current(0);
        if (yTo.current) yTo.current(0);
        gsap.to(imageRef.current, { scale: 1, duration: 0.4 });

        // Réinitialisation forcée des éléments du scan
        gsap.to([dataRef.current, scanLineRef.current], { opacity: 0, duration: 0.2 });
      };

  return (
    <div 
        ref={containerRef} 
        className={`relative w-full h-full overflow-hidden group border border-white/10 bg-black ${className}`}
        style={{ 
            transformStyle: 'preserve-3d', 
            perspective: '1000px',
            transition: 'all 0.7s, transform 0s' 
        }}
    >
      {/* IMAGE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <Image
              ref={imageRef}
              src={src} 
              alt={alt}
              fill
              priority
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`absolute inset-0 w-full h-full object-cover will-change-transform ${isHovered ? 'brightness-110 contrast-110 grayscale-0' : 'brightness-75 grayscale-[0.5]'}`}
          />
          
          <div className={`absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-300 ${isHovered ? 'opacity-40' : 'opacity-0'}`}>
            <Image 
                src={src} 
                alt="" 
                fill
                priority
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover translate-x-[2px] scale-[1.05]" 
                style={{ filter: 'hue-rotate(90deg) brightness(1.5)' }} 
            />
            <Image 
                src={src} 
                alt="" 
                fill
                priority
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover -translate-x-[2px] scale-[1.05]" 
                style={{ filter: 'hue-rotate(-90deg) brightness(1.5)' }} 
            />
          </div>
      </div>

      {/* INTERACTION OVERLAY - Ensures mouse events are captured */}
      <div 
        className="absolute inset-0 z-50 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* DONNÉES CENTRALES (Apparaissent après le scan) */}
      {showHUDData && (
          <div 
            ref={dataRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0"
          >
              <div className="bg-black/60 backdrop-blur-md border border-blue-500/30 p-6 rounded-lg text-center space-y-2 min-w-[200px] shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <div className="text-[10px] font-mono text-blue-400 tracking-[0.3em] uppercase border-b border-blue-500/20 pb-2 mb-2">Identification_Complete</div>
                  <div className="flex justify-between gap-8 text-[9px] font-mono">
                      <span className="text-gray-500 uppercase">Identité</span>
                      <span className="text-white font-bold">{portfolioData.personal.name}</span>
                  </div>
                  <div className="flex justify-between gap-8 text-[9px] font-mono">
                      <span className="text-gray-500 uppercase">Cycle</span>
                      <span className="text-white font-bold">{portfolioData.personal.age}</span>
                  </div>
                  <div className="flex justify-between gap-8 text-[9px] font-mono">
                      <span className="text-gray-500 uppercase">Localisation</span>
                      <span className="text-white font-bold text-right">{portfolioData.personal.location}</span>
                  </div>
                  <div className="pt-1 border-t border-blue-500/10 mt-1">
                      <div className="text-[7px] font-mono text-blue-400/60 uppercase tracking-widest mb-1 text-left">Geographic_Data:</div>
                      <div className="text-[8px] font-mono text-white/80 text-left leading-tight">
                          LAT: {portfolioData.personal.coordinates.lat}<br/>
                          LON: {portfolioData.personal.coordinates.lon}
                      </div>
                  </div>
              </div>
          </div>
      )}

      {/* HUD CORNERS */}
      <div className={`absolute inset-0 p-6 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-blue-500/50" />
          <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-blue-500/50" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-blue-500/50" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-blue-500/50" />
      </div>

      {/* SCAN LINE */}
      <div ref={scanLineRef} className="absolute left-0 w-full h-[2px] bg-blue-400/60 shadow-[0_0_20px_#3b82f6] pointer-events-none opacity-0" />
    </div>
  );
}