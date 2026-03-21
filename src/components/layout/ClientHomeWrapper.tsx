'use client';

import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { useScene } from '@/context/SceneContext';

interface ClientHomeWrapperProps {
    children: ReactNode;
}

export default function ClientHomeWrapper({ children }: ClientHomeWrapperProps) {
    const { introPlayed } = useScene();
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

            // Contextualiser l'animation pour cibler proprement les éléments internes
            const ctx = gsap.context(() => {
                gsap.fromTo('.hero-animate',
                    { y: 100, opacity: 0, rotateX: -30 },
                    { y: 0, opacity: 1, rotateX: 0, duration: 2, stagger: 0.1, ease: "expo.out", delay: 0 }
                );
            }, contentRef);

            return () => ctx.revert(); // Nettoyage propre au démontage
        } else {
            // L'intro n'est pas finie : on cache le contenu
            gsap.set(contentRef.current, { opacity: 0, scale: 0.9, filter: "blur(20px)" });
        }
    }, [introPlayed]);

    return (
        <div
            ref={contentRef}
            className="relative z-10 opacity-0"
            style={{ pointerEvents: introPlayed ? 'all' : 'none' }}
        >
            {children}
        </div>
    );
}
