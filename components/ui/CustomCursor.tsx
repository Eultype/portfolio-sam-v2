'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const rotatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        const rotator = rotatorRef.current;

        gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
        };

        // On prépare l'animation de rotation mais on la met en pause
        const rotationAnim = gsap.to(rotator, {
            rotation: 360,
            duration: 4,
            repeat: -1,
            ease: "none",
            paused: true
        });

        const handleHover = () => {
            gsap.to(cursor, { scale: 0.5, backgroundColor: "#3b82f6", duration: 0.3 });

            // Agrandissement + Rotation
            gsap.to(follower, {
                scale: 1.5,
                borderColor: "rgba(59, 130, 246, 0.6)",
                duration: 0.3
            });

            rotationAnim.play();
        };

        const handleLeave = () => {
            gsap.to(cursor, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });

            // Retour à la normale
            gsap.to(follower, {
                scale: 1,
                borderColor: "rgba(255, 255, 255, 0.2)",
                duration: 0.3
            });

            rotationAnim.pause();
            // On remet la rotation à 0 proprement
            gsap.to(rotator, { rotation: 0, duration: 0.5 });
        };

        window.addEventListener('mousemove', moveCursor);

        const attachListeners = () => {
            const clickables = document.querySelectorAll('a, button, .clickable');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', handleHover);
                el.addEventListener('mouseleave', handleLeave);
            });
        };

        attachListeners();
        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            />

            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[9998] hidden md:block flex items-center justify-center transition-colors overflow-hidden"
            >
                {/* COUCHE DE ROTATION ACTIVÉE AU HOVER */}
                <div ref={rotatorRef} className="w-full h-full relative flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white/40" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white/40" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-white/40" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-white/40" />
                </div>
            </div>
        </>
    );
}
