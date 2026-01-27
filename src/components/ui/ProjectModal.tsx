'use client';

// Import Next
import Image from 'next/image';
// Import React
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
// Import Gsap
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// Import types
import { Project } from '@/types/portfolio';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

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
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 p-4 md:p-8"
            onClick={handleClose}
        >
            <div 
                ref={contentRef}
                className="bg-[#111] w-full max-w-6xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Galerie (Partie Gauche/Haut) */}
                <div className="w-full md:w-2/3 h-[40vh] md:h-auto relative bg-black/50 group ps-8">
                    <div className="relative w-full h-full">
                        <Image 
                            src={images[currentImageIndex]} 
                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    
                    {/* Contrôles Galerie */}
                    {images.length > 1 && (
                        <>
                            <button 
                                onClick={prevImage}
                                className="absolute left-10 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/20 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                            >
                                ←
                            </button>
                            <button 
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/20 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                            >
                                →
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-blue-500 w-4' : 'bg-white/30'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Détails (Partie Droite/Bas) */}
                <div className="w-full md:w-1/3 p-8 overflow-y-auto custom-scrollbar flex flex-col bg-[#0a0a0a]">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <span className="text-xs font-mono text-blue-400 border border-blue-400/30 px-2 py-1 rounded mb-3 inline-block">
                                {project.category}
                            </span>
                            <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
                        </div>
                        <button 
                            onClick={handleClose}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-6 flex-grow">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-mono">Description</h3>
                            <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-mono">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-white/10 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                        <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors"
                        >
                            Voir le site
                        </a>
                        <a 
                            href={project.code} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 border border-white/20 hover:border-white text-white text-center py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
