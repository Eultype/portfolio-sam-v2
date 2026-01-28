'use client';

// Import Next
import { usePathname } from 'next/navigation';
// Import React
import { useEffect, useRef } from 'react';
// Import Lenis
import Lenis from 'lenis';

// Layout du SmoothScroll
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing exponentiel pour un arrêt net mais doux
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Reset du scroll lorsqu'on change de page
    useEffect(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return <>{children}</>;
}
