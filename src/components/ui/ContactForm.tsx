'use client';

import { useState } from 'react';
import gsap from 'gsap';
import { portfolioData } from '@/data/portfolio';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/schemas/contact';
import { sendEmail } from '@/app/actions';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    // Initialisation du hook useForm
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    // Gestion de la soumission
    const onSubmit = async (data: ContactFormData) => {
        setStatus('sending');
        setErrorMessage("");

        try {
            const result = await sendEmail(data);

            if (result.success) {
                setStatus('success');
                reset(); // Reset du formulaire
                // Animation de succès
                gsap.fromTo('.success-msg', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
            } else {
                setStatus('error');
                setErrorMessage(result.error || "Une erreur est survenue.");
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage("Erreur lors de la connexion au serveur.");
        }
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative">
            <div className="grid md:grid-cols-2 gap-8">
                {/* NOM */}
                <div className="space-y-2 group">
                    <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest block ml-2 group-focus-within:text-blue-500 transition-colors">
                        Interlocuteur_ID
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="VOTRE NOM"
                        className={`w-full bg-white/5 border rounded-sm px-6 py-4 outline-none transition-all font-sans text-sm tracking-wide 
                            ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50 focus:bg-white/10'}`}
                    />
                    {errors.name && (
                        <span className="text-red-400 text-[10px] font-mono ml-2 uppercase tracking-widest animate-pulse">
                            Error: {errors.name.message}
                        </span>
                    )}
                </div>

                {/* EMAIL */}
                <div className="space-y-2 group">
                    <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest block ml-2 group-focus-within:text-blue-500 transition-colors">
                        Signal_Return_Path
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="VOTRE@EMAIL.COM"
                        className={`w-full bg-white/5 border rounded-sm px-6 py-4 outline-none transition-all font-sans text-sm tracking-wide 
                            ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50 focus:bg-white/10'}`}
                    />
                    {errors.email && (
                        <span className="text-red-400 text-[10px] font-mono ml-2 uppercase tracking-widest animate-pulse">
                            Error: {errors.email.message}
                        </span>
                    )}
                </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest block ml-2 group-focus-within:text-blue-500 transition-colors">
                    Message_Payload
                </label>
                <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="PARLONS DE VOTRE PROJET..."
                    className={`w-full bg-white/5 border rounded-sm px-6 py-4 outline-none transition-all font-sans text-sm tracking-wide resize-none 
                        ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50 focus:bg-white/10'}`}
                />
                {errors.message && (
                    <span className="text-red-400 text-[10px] font-mono ml-2 uppercase tracking-widest animate-pulse">
                        Error: {errors.message.message}
                    </span>
                )}
            </div>

            {/* MESSAGE D'ERREUR API */}
            {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono p-4 rounded-sm uppercase tracking-widest animate-shake">
                    Signal_Error: {errorMessage}
                </div>
            )}

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
