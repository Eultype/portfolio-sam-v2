'use client';

import dynamic from 'next/dynamic';

// Le chargement dynamique avec ssr: false doit se faire dans un Client Component
const SceneWrapper = dynamic(() => import('@/components/3d/SceneWrapper'), {
    ssr: false,
});

export default function DynamicSceneWrapper() {
    return <SceneWrapper />;
}
