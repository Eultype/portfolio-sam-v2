'use client';

import { useCallback, useRef } from 'react';
import Preloader from '@/components/ui/Preloader';
import { useScene } from '@/context/SceneContext';

export default function GlobalPreloader() {
  const { introPlayed, setIntroPlayed, setStatus } = useScene();
  const lock = useRef(false);

  const handlePreloaderComplete = useCallback(() => {
    if (lock.current) return;
    lock.current = true;

    // 1. Déclenchement du Warp
    setStatus('warping');

    // 2. Séquence d'arrivée (Après 1.5s de voyage)
    setTimeout(() => {
      setStatus('arrived');
      setIntroPlayed(true); // Marque l'intro comme terminée
    }, 1500);
  }, [setStatus, setIntroPlayed]);

  if (introPlayed) return null;

  return <Preloader onComplete={handlePreloaderComplete} />;
}
