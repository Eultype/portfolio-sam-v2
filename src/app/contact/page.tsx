// Import Metadata
import { Metadata } from 'next';
// Import du contenu client
import ContactContent from './_components/ContactContent';

// Metadata de la page Contact
export const metadata: Metadata = {
    title: "Contact | Samuël Darry | Développeur Full-Stack",
    description: "Contactez-moi pour discuter de vos projets web, collaborations ou opportunités professionnelles.",
};

// Page contact
export default function ContactPage() {
    // Contenu de la page contact
    return <ContactContent />;
}