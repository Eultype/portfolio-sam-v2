// Import Next
import type { Metadata } from "next";
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
// Import des styles
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Samuël | Développeur Créatif Full-Stack",
    description: "Portfolio immersif d'un développeur web passionné par l'espace et les interfaces modernes.",
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
