import { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.samueldarry.com';

  const routes = portfolioData.nav.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route.path === '/' ? 1 : 0.8,
  }));

  // On peut ajouter d'autres routes dynamiques ici si nécessaire (ex: /projects/[slug])
  // Pour l'instant, les projets sont affichés sur /projects dans une modale ou une liste, donc pas de pages individuelles indexables par défaut sauf si on crée des pages dynamiques.

  return [...routes];
}
