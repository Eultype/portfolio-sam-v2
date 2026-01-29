import { Project } from '@/types/portfolio';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ModalStars from './ModalStars';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

// Composant modale de la page "Works"
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(modalRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        })
        .from(contentRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.2)'
        }, '-=0.1');

    }, { scope: modalRef });

    const handleClose = () => {
        const tl = gsap.timeline({
            onComplete: onClose
        });

        tl.to(contentRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
        })
        .to(modalRef.current, {
            opacity: 0,
            duration: 0.2
        }, '-=0.1');
    };

    // Gestion de la navigation clavier
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        // Empêcher le scroll du body quand la modale est ouverte
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (typeof document === 'undefined') return null;

    return createPortal(
        <div 
            ref={modalRef}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md opacity-0 overflow-y-auto"
            onClick={handleClose}
        >
            <div className="min-h-full flex items-center justify-center p-4 md:p-8">
                <div 
                    ref={contentRef}
                    className="bg-[#111] w-full max-w-7xl rounded-xl overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-white/10 relative xl:h-[85vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Bouton Fermer */}
                    <button 
                        onClick={handleClose}
                        className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-white/20 text-white/80 hover:text-white transition-all backdrop-blur-md border border-white/10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    {/* Galerie (Partie Gauche/Haut) */}
                    <div className="w-full xl:w-2/3 h-[40vh] sm:h-[50vh] xl:h-full min-h-[300px] relative bg-black group flex items-center justify-center border-b xl:border-b-0 xl:border-r border-white/5 overflow-hidden">
                        <ModalStars />
                        <div className="relative w-full h-full z-10 p-6 md:p-12">
                            <Image 
                                src={images[currentImageIndex]} 
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>                    
                        {/* Contrôles Galerie */}
                        {images.length > 1 && (
                            <>
                                <button 
                                    onClick={prevImage}
                                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/20 p-3 rounded-full text-white transition-all z-20 backdrop-blur-sm border border-white/5"
                                >
                                    ←
                                </button>
                                <button 
                                    onClick={nextImage}
                                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/20 p-3 rounded-full text-white transition-all z-20 backdrop-blur-sm border border-white/5"
                                >
                                    →
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {images.map((_, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-blue-500 w-4' : 'bg-white/30 hover:bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Détails (Partie Droite/Bas) */}
                    <div className="w-full xl:w-1/3 flex flex-col bg-[#111] xl:h-full">
                        {/* Contenu */}
                        <div 
                            className="p-6 md:p-10 xl:h-full xl:overflow-y-auto custom-scrollbar"
                            data-lenis-prevent
                        >
                            <div className="space-y-8">
                                {/* Header */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 border border-blue-400/20 px-3 py-1 rounded-full bg-blue-500/5">
                                            {project.category}
                                        </span>
                                        {project.featured && (
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1 rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                                        {project.title}
                                    </h2>
                                </div>

                                {/* Description */}
                                <div>
                                    <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-2 h-px bg-white/40"></span>
                                        Context
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base whitespace-pre-line text-justify">
                                        {project.longDescription || project.description}
                                    </p>
                                </div>

                                {/* Challenges / Key Features */}
                                {project.challenges && (
                                    <div>
                                        <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-2 h-px bg-white/40"></span>
                                            Highlights
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.challenges.map((challenge, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300 font-light text-sm">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                                    <span>{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-2 h-px bg-white/40"></span>
                                        Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="px-3 py-1.5 border border-white/10 text-gray-400 text-[10px] md:text-xs rounded hover:border-white/40 hover:text-white transition-colors cursor-default bg-white/[0.02]">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer Buttons */}
                            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-3">
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between w-full bg-white text-black px-6 py-4 rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
                                >
                                    <span className="font-bold text-xs uppercase tracking-widest">Voir le projet</span>
                                    <svg className="w-4 h-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </a>
                                <a 
                                    href={project.code} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between w-full border border-white/20 text-white px-6 py-4 rounded-sm hover:border-white hover:bg-white/5 transition-all duration-300"
                                >
                                    <span className="font-bold text-xs uppercase tracking-widest">Code Source</span>
                                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}