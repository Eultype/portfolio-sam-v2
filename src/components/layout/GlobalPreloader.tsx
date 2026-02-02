'use client';

// Import Next
import { usePathname } from 'next/navigation';
// Import React
import { useCallback, useRef } from 'react';
// Import des composants
import Preloader from '@/components/ui/Preloader';
// Import Context
import { useScene } from '@/context/SceneContext';

// Layout du Preloader
export default function GlobalPreloader() {
  const { introPlayed, setIntroPlayed, setStatus } = useScene();
  const pathname = usePathname();
  const lock = useRef(false);

  const handlePreloaderComplete = useCallback(() => {
    if (lock.current) return;
    lock.current = true;

    const isMobile = window.innerWidth < 768;

    if (pathname === '/') {
        if (isMobile) {
            // MOBILE : Accès direct
            setStatus('arrived');
            setIntroPlayed(true);
        } else {
            // DESKTOP/TABLET : Warp Effect
            setStatus('warping');
            setTimeout(() => {
                setStatus('arrived');
                setIntroPlayed(true);
            }, 1200);
        }
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
