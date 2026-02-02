// Import Metadata
import { Metadata } from 'next';
// Import du contenu client
import SkillsContent from './_components/SkillsContent';

// Metadata de la page Compétences
export const metadata: Metadata = {
    title: "Compétences & Stack | Samuël Darry | Développeur Full-Stack",
    description: "Expertise technique : Frontend (React, Next.js), Backend (Node.js, PostgreSQL) et Outils modernes.",
};

// Page compétences
export default function SkillsPage() {
    // Contenu de la page compétences
    return <SkillsContent />;
}