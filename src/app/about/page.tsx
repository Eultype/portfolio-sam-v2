// Import Metadata
import { Metadata } from 'next';
// Import du contenu client
import AboutContent from './_components/AboutContent';

// Metadata de la page À propos
export const metadata: Metadata = {
    title: "À Propos | Samuël Darry | Développeur Full-Stack",
    description: "Découvrez mon parcours, ma philosophie et mon approche du développement web full-stack et créatif.",
    alternates: {
        canonical: '/about',
    }
};

// Page À propos
export default function AboutPage() {
    // Contenu de la page À propos
    return <AboutContent />;
}
