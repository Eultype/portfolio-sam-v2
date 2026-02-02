import * as z from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, "L'identifiant doit contenir au moins 2 caractères."),
    email: z.string().email("Le chemin de retour (email) est invalide."),
    message: z.string().min(10, "Le payload (message) doit contenir au moins 10 caractères."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
