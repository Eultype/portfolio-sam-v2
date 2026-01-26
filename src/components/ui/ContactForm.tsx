'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { portfolioData } from '@/data/portfolio';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulation d'envoi (On pourra lier une vraie API plus tard)
        setTimeout(() => {
            setStatus('success');
            // Animation de succès
            gsap.fromTo('.success-msg', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
        }, 2000);
    };

    if (status === 'success') {
        return (
            <div className="success-msg text-center py-20 space-y-6">
                <div className="w-20 h-20 rounded-full border-2 border-blue-500 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h3 className="text-3xl font-bold tracking-tighter">Transmission Reçue</h3>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Le signal a été envoyé avec succès vers {portfolioData.personal.location.split(',')[0]}.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-[10px] uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative">
            <div className="grid md:grid-cols-2 gap-8">
                {/* NOM */}
                <div className="space-y-2 group">
                    <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest block ml-2 group-focus-within:text-blue-500 transition-colors">
                        Interlocuteur_ID
                    </label>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="VOTRE NOM"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-sans text-sm tracking-wide"
                    />
                </div>

                {/* EMAIL */}
                <div className="space-y-2 group">
                    <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest block ml-2 group-focus-within:text-blue-500 transition-colors">
                        Signal_Return_Path
                    </label>
                    <input
                        required
                        name="email"
                        type="email"
                        placeholder="VOTRE@EMAIL.COM"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-sans text-sm tracking-wide"
                    />
                </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest block ml-2 group-focus-within:text-blue-500 transition-colors">
                    Message_Payload
                </label>
                <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="PARLONS DE VOTRE PROJET..."
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-sans text-sm tracking-wide resize-none"
                />
            </div>

            {/* SUBMIT */}
            <button
                disabled={status === 'sending'}
                type="submit"
                className="w-full group relative overflow-hidden bg-white text-black font-bold py-5 rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-500 disabled:opacity-50"
            >
        <span className="relative z-10 tracking-[0.3em] text-xs uppercase">
          {status === 'sending' ? 'Envoi en cours...' : 'Initialiser la Transmission'}
        </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            {/* INFOS BAS DE FORMULAIRE */}
            <div className="flex justify-between items-center text-[8px] font-mono text-gray-700 uppercase tracking-widest px-2">
                <span>Security: End-to-End Encrypted</span>
                <span>Buffer: 100% Ready</span>
            </div>
        </form>
    );
}
