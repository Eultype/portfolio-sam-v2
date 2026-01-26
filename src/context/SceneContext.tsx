'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type SceneStatus = 'loading' | 'warping' | 'arrived';

interface SceneContextType {
  status: SceneStatus;
  setStatus: (status: SceneStatus) => void;
  introPlayed: boolean;
  setIntroPlayed: (played: boolean) => void;
}

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export function SceneProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<SceneStatus>('loading');
  const [introPlayed, setIntroPlayed] = useState(false);

  return (
    <SceneContext.Provider value={{ status, setStatus, introPlayed, setIntroPlayed }}>
      {children}
    </SceneContext.Provider>
  );
}

export function useScene() {
  const context = useContext(SceneContext);
  if (context === undefined) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
}
