'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface ProjectCardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function ProjectCardImage({ src, alt, className = "" }: ProjectCardImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cleanImageRef = useRef<HTMLDivElement>(null);
    const scanLineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialisation stricte
        gsap.set(cleanImageRef.current, { clipPath: "inset(0 100% 0 0)" } as any);
        gsap.set(scanLineRef.current, { left: "0%", opacity: 0 });
    }, []);

    const handleMouseEnter = () => {
        // Kill anciennes anims
        gsap.killTweensOf([scanLineRef.current, cleanImageRef.current]);

        const tl = gsap.timeline();

        // 1. La barre de scan passe
        tl.fromTo(scanLineRef.current,
            { left: "0%", opacity: 1 },
            { left: "100%", duration: 0.6, ease: "power2.inOut" }
        );

        // 2. L'image nette se révèle en suivant la barre
        (gsap as any).fromTo(cleanImageRef.current,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power2.inOut" },
            "<" // Synchro parfaite
        );

        // Cacher la barre à la fin
        tl.to(scanLineRef.current, { opacity: 0, duration: 0.2 });
    };

    const handleMouseLeave = () => {
        gsap.killTweensOf([scanLineRef.current, cleanImageRef.current]);

        // Retour rapide à l'état flou (on referme le masque)
        gsap.to(cleanImageRef.current, {
            clipPath: "inset(0 100% 0 0)",
            duration: 0.4,
            ease: "power2.out"
        } as any);

        gsap.to(scanLineRef.current, { opacity: 0, duration: 0.2 });
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full overflow-hidden border border-white/10 bg-black ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* COUCHE 1 : OFF (Sombre, N&B, Floue) / Toujours visible au fond */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover brightness-100 xl:brightness-50 grayscale-0 xl:grayscale blur-0 xl:blur-[2px]"
                />
            </div>

            {/* COUCHE 2 : ON (Nette, Couleur) / Masquée par défaut */}
            <div
                ref={cleanImageRef}
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover brightness-100 grayscale-0 contrast-105"
                />
            </div>

            {/* SCAN LINE (Verticale) */}
            <div
                ref={scanLineRef}
                className="absolute top-0 w-[2px] h-full bg-blue-400/80 shadow-[0_0_20px_#3b82f6] pointer-events-none opacity-0 z-30"
            />
        </div>
    );
}