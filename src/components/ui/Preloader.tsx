'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const percentRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const logRef = useRef<HTMLDivElement>(null);
    const [complete, setComplete] = useState(false);

    const logs = [
        "Initializing Neural Link...",
        "Loading Portfolio Map v2.0...",
        "Calibrating Gravitational Lensing...",
        "Establishing Secure Connection...",
        "Syncing with Brussels Station...",
        "Ready for Departure."
    ];

    useEffect(() => {
        // Utilisation de context pour sécuriser GSAP dans React
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            const percent = { value: 0 };

            document.body.style.overflow = 'hidden';

            tl.to(percent, {
                value: 100,
                duration: 3,
                ease: "power2.inOut",
                onUpdate: () => {
                    if (percentRef.current) {
                        percentRef.current.textContent = `${Math.round(percent.value)}%`;
                    }
                    if (barRef.current) {
                        gsap.set(barRef.current, { scaleX: percent.value / 100 });
                    }
                    const logIndex = Math.floor((percent.value / 100) * logs.length);
                    if (logRef.current && logs[logIndex]) {
                        logRef.current.textContent = logs[logIndex];
                    }
                }
            })
                // Utilisation de classes (strings) pour plus de stabilité
                .to(['.percent-display', '.log-display', '.loader-ui'], {
                    opacity: 0,
                    scale: 1.1,
                    filter: "blur(10px)",
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.in"
                })
                .to(containerRef.current, {
                    scale: 1.5,
                    opacity: 0,
                    duration: 0.5,
                    ease: "expo.inOut",
                    onStart: () => {
                        if (onComplete) onComplete();
                    },
                    onComplete: () => {
                        setComplete(true);
                        document.body.style.overflow = '';
                    }
                });
        }, containerRef);

        return () => ctx.revert();
    }, []); // On ne dépend plus de onComplete pour éviter les relances

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center text-white font-sans pointer-events-none"
        >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

            <div className="relative w-full max-w-sm px-10 text-center space-y-8">
                <div className="loader-ui flex justify-center mb-12">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
                    </div>
                </div>

                <div ref={percentRef} className="percent-display text-6xl font-bold tracking-tighter font-mono italic">
                    0%
                </div>

                <div className="loader-ui relative w-full h-[2px] bg-white/5 overflow-hidden">
                    <div
                        ref={barRef}
                        className="absolute top-0 left-0 h-full w-full bg-blue-500 shadow-[0_0_10px_#3b82f6] origin-left scale-x-0"
                    />
                </div>

                <div ref={logRef} className="log-display text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] h-4">
                    Waiting for boot...
                </div>
            </div>

            <div className="absolute bottom-10 w-full flex justify-between px-10 text-[8px] font-mono text-gray-700 uppercase tracking-widest loader-ui">
                <span>System.Version: 1.0.4</span>
                <span>Core.Samuël: Active</span>
            </div>
        </div>
    );
}