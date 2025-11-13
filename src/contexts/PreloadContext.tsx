import React, { createContext, useContext, useState, useEffect } from 'react';
import MyDriverPreload from '@/components/Preloader';

interface PreloadContextType {
  hasPreloadedOnce: boolean;
}

const PreloadContext = createContext<PreloadContextType | undefined>(undefined);

export const PreloadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasPreloadedOnce, setHasPreloadedOnce] = useState(false);

  useEffect(() => {
    // Marcar como que ya ha hecho el preload una vez
    setHasPreloadedOnce(true);
  }, []);

  return (
    <PreloadContext.Provider value={{ hasPreloadedOnce }}>
      {!hasPreloadedOnce && <MyDriverPreload />}
      {children}
    </PreloadContext.Provider>
  );
};

export const usePreload = () => {
  const context = useContext(PreloadContext);
  if (!context) {
    throw new Error('usePreload must be used within PreloadProvider');
  }
  return context;
};
