// Import Next
import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
// Import des composants
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SceneWrapper from "@/components/3d/SceneWrapper";
import GlobalPreloader from "@/components/layout/GlobalPreloader";
// Import du contexte
import { SceneProvider } from "@/context/SceneContext";
// Import des données
import { portfolioData } from "@/data/portfolio";
// Import des styles
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://portfolio-sam-v2.vercel.app'), // TODO: Remplacer par votre URL de production réelle
    title: {
        default: "Samuël | Développeur Créatif Full-Stack",
        template: "%s | Samuël"
    },
    description: portfolioData.personal.description,
    keywords: ["Développeur Web", "Full-Stack", "React", "Next.js", "Three.js", "Portfolio", "Bruxelles", "Développeur Front-end", "Creative Developer"],
    authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.socials.find(s => s.name === 'GitHub')?.url }],
    creator: portfolioData.personal.name,
    publisher: portfolioData.personal.name,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'fr_BE',
        url: 'https://portfolio-sam-v2.vercel.app',
        title: "Samuël | Développeur Créatif Full-Stack",
        description: portfolioData.personal.description,
        siteName: "Portfolio Samuël",
        images: [
            {
                url: '/project/portfolio/portfolio-v2.webp',
                width: 1200,
                height: 630,
                alt: 'Portfolio Samuël - Creative Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Samuël | Développeur Créatif Full-Stack",
        description: portfolioData.personal.description,
        images: ['/project/portfolio/portfolio-v2.webp'],
        creator: '@Eultype', // Placeholder basé sur GitHub, à ajuster
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    alternates: {
        canonical: '/',
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body
            className={`${spaceGrotesk.variable} font-sans antialiased`}
        >
        <SceneProvider>
            <GlobalPreloader />
            <SceneWrapper />
            <SmoothScroll>
                <CustomCursor />
                <Navbar />
                {children}
                <Footer />
            </SmoothScroll>
        </SceneProvider>
        </body>
        </html>
    );
}
