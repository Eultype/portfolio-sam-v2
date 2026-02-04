import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // Optimisation du bundle pour les paquets modernes
    transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
    // Optimisation des images
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
    // Forcer une cible moderne pour réduire la taille du bundle
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
};

export default nextConfig;