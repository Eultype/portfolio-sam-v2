// Import Metadata
import { Metadata } from 'next';
// Import du contenu client
import ProjectsContent from './_components/ProjectsContent';

// Metadata de la page Projets
export const metadata: Metadata = {
    title: "Projets & Réalisations | Samuël Darry | Développeur Full-Stack",
    description: "Découvrez une sélection de mes projets web les plus récents : applications full-stack, sites vitrines et expériences 3D.",
};

// Page projets
export default function ProjectsPage() {
    // Contenu de la page projets
    return <ProjectsContent />;
}
