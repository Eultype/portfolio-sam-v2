# Portfolio Samuël V2 🚀

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-R3F-white?style=for-the-badge&logo=three.js)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

> Une expérience web immersive alliant performance technique (Next.js App Router) et créativité visuelle (3D & Animations).
> **URL :** [https://www.samueldarry.com](https://www.samueldarry.com)

## 🌟 Présentation

Ce portfolio n'est pas qu'une simple vitrine, c'est une démonstration technique. Il explore la convergence entre le web applicatif moderne et l'expérience utilisateur immersive.
Développé avec la dernière stack **Next.js 16**, il met en œuvre une architecture hybride **Server/Client** optimisée pour le SEO tout en offrant des interactions riches.

### Points Forts Techniques
*   **Architecture Hybride Avancée :** Séparation stricte entre le rendu Serveur (SEO, Métadonnées) et le rendu Client (Animations, 3D).
*   **3D Performante :** Intégration de Three.js via `@react-three/fiber` avec chargement dynamique (Lazy Loading) pour ne pas bloquer le thread principal.
*   **Animations Fluides :** Orchestration complexe via **GSAP** et **ScrollTrigger**.
*   **SEO Technique :** Sitemap dynamique, Robots.txt, OpenGraph, JSON-LD et balises sémantiques.
*   **Type Safety :** Base de code 100% TypeScript avec validation des données via **Zod**.
*   **Formulaires Robustes :** Gestion d'état et validation avec **React Hook Form**.

## 🛠️ Stack Technique

**Core :**
*   `Next.js 16` (App Router, Server Components)
*   `React 19`
*   `TypeScript`

**Style & UI :**
*   `Tailwind CSS v4`
*   `GSAP` (Animations & Scroll)
*   `Lenis` (Smooth Scroll)

**3D & Créatif :**
*   `Three.js`
*   `React Three Fiber`
*   `React Three Drei`

**Qualité & Outils :**
*   `Zod` (Schéma de validation)
*   `React Hook Form` (Gestion de formulaires)
*   `ESLint`

## 📂 Structure du Projet

L'architecture suit les meilleures pratiques Next.js pour la scalabilité :

```bash
src/
├── app/                  # App Router (Routes & Layouts)
│   ├── layout.tsx        # Layout Global (SEO, Fontes, Providers)
│   ├── page.tsx          # Page d'accueil (Serveur)
│   ├── about/            # Route /about
│   │   ├── page.tsx      # Composant Serveur (SEO)
│   │   └── _components/  # Composants Clients (Animations)
│   └── ...
├── components/           # Composants Réutilisables
│   ├── 3d/               # Scènes & Objets Three.js
│   ├── ui/               # Composants d'interface (Boutons, Cards...)
│   └── sections/         # Sections de page (Hero, Skills...)
├── context/              # Context API (État global de la scène)
├── data/                 # Source de vérité (Textes, Projets...)
├── schemas/              # Schémas de validation Zod
└── types/                # Définitions TypeScript partagées
```

## 🚀 Installation & Démarrage

1.  **Cloner le projet :**
    ```bash
    git clone https://github.com/votre-username/portfolio-sam-v2.git
    cd portfolio-sam-v2
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```
    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build & Production

Pour créer une version de production optimisée :

```bash
npm run build
npm start
```

## 📄 Licence

Ce projet est sous licence MIT. Code source ouvert à des fins éducatives.
Le design et le contenu restent la propriété de Samuël Darry.

---
*Développé avec passion par [Samuël Darry](https://www.samueldarry.com).*