'use client';

import { useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Preloader from '@/components/ui/Preloader';
import { useScene } from '@/context/SceneContext';

export default function GlobalPreloader() {
  const { introPlayed, setIntroPlayed, setStatus } = useScene();
  const pathname = usePathname();
  const lock = useRef(false);

  const handlePreloaderComplete = useCallback(() => {
    if (lock.current) return;
    lock.current = true;

    if (pathname === '/') {
        // HOME : Warp Effect
        setStatus('warping');
        setTimeout(() => {
            setStatus('arrived');
            setIntroPlayed(true);
        }, 1200);
    } else {
        // AUTRES PAGES : Transition calme
        // On attend un peu que le loader s'efface pour calmer la scène
        setTimeout(() => {
            setStatus('arrived');
            setIntroPlayed(true);
        }, 1000);
    }
  }, [pathname, setStatus, setIntroPlayed]);

  if (introPlayed) return null;

  return <Preloader onComplete={handlePreloaderComplete} />;
}
