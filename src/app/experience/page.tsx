// Import Metadata
import { Metadata } from 'next';
// Import du contenu client
import ExperienceContent from './_components/ExperienceContent';

// Metadata de la page Experiences
export const metadata: Metadata = {
    title: "Expérience & Parcours | Samuël Darry | Développeur Full-Stack",
    description: "Chronologie de mon parcours professionnel et de ma formation intensive en développement web Full-Stack.",
    alternates: {
        canonical: '/experience',
    }
};

// Page expériences
export default function ExperiencePage() {
    // Contenu de la page expériences
    return <ExperienceContent />;
}