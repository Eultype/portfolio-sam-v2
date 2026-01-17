'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import MagneticButton from '../ui/MagneticButton';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: "Home", path: "/", id: "home" },
        { label: "About", path: "/about", id: "about" },
        { label: "Skills", path: "/skills", id: "skills" },
        { label: "Works", path: "/projects", id: "projects" },
        { label: "Experience", path: "/experience", id: "experience" },
        { label: "Contact", path: "/contact", id: "contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[95%] max-w-6xl rounded-full border border-white/5 overflow-hidden ${
                    scrolled
                        ? 'bg-black/20 backdrop-blur-2xl py-3 px-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] border-white/10'
                        : 'bg-transparent py-6 px-4'
                }`}
            >
                <div className="flex items-center justify-between">
                    {/* HUD LOGO */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-500">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        </div>
                        <span className="text-sm font-bold tracking-[0.3em] text-white uppercase hidden sm:block">System.Samuël</span>
                    </Link>

                    {/* DESKTOP HUD NAV */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.path}
                                className={`relative px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 rounded-full ${
                                    pathname === item.path ? 'text-white bg-white/10' : 'text-gray-500 hover:text-white'
                                }`}
                            >
                                {item.label}
                                {pathname === item.path && (
                                    <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-8 h-[1px] bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* STATUS INDICATOR */}
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex flex-col items-end text-[8px] font-mono text-gray-600 uppercase tracking-widest">
                            <span>Status: Online</span>
                            <span className="text-blue-500">Lat: 0.02ms</span>
                        </div>
                        <MagneticButton>
                            <a
                                href="#contact"
                                className="px-6 py-2.5 text-[10px] font-bold bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 tracking-widest"
                            >
                                INITIATE
                            </a>
                        </MagneticButton>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className="w-6 h-4 flex flex-col justify-between items-end">
                            <div className={`h-px bg-white transition-all duration-500 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                            <div className={`h-px bg-white transition-all duration-500 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
                            <div className={`h-px bg-white transition-all duration-500 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-6'}`} />
                        </div>
                    </button>
                </div>
            </header>

            {/* MOBILE HUD MENU */}
            <div
                className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-700 md:hidden ${
                    mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-10'
                }`}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
                <nav className="flex flex-col items-center gap-10 relative z-10">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.id}
                            href={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-5xl font-bold text-white/20 hover:text-white transition-all duration-500 tracking-tighter"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
