'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.3); // Facteur de force magnétique
            yTo(y * 0.3);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        magnetic.current?.addEventListener("mousemove", mouseMove);
        magnetic.current?.addEventListener("mouseleave", mouseLeave);

        return () => {
            magnetic.current?.removeEventListener("mousemove", mouseMove);
            magnetic.current?.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <div ref={magnetic} className={`relative inline-block ${className}`}>
            {children}
        </div>
    );
}
