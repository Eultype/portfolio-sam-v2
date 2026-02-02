'use server';

import { Resend } from 'resend';
import { contactSchema, ContactFormData } from '@/schemas/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormData) {
    // 1. Validation côté serveur (Sécurité maximale)
    const result = contactSchema.safeParse(data);

    if (!result.success) {
        return { error: "Données invalides." };
    }

    const { name, email, message } = result.data;

    try {
        // 2. Envoi de l'email via Resend
        const { data: resData, error } = await resend.emails.send({
            from: 'Samuël Darry <contact@samueldarry.com>',
            to: ['Sdarryy59@gmail.com'],
            subject: `Nouveau message de ${name} via le Portfolio`,
            replyTo: email,
            html: `
                <h2>Nouveau message reçu depuis votre portfolio</h2>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Message :</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
        });

        if (error) {
            console.error("Erreur Resend:", error);
            return { error: "Échec de l'envoi de l'email." };
        }

        return { success: true };
    } catch (error) {
        console.error("Erreur serveur:", error);
        return { error: "Une erreur inattendue est survenue." };
    }
}
