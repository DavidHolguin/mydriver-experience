/**
 * Componente para rastrear cambios de página en React Router
 * Envía automáticamente eventos de page_view a GTM en cada cambio de ruta
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const GoogleTagManagerPageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Rastrear vista de página en cada cambio de ruta
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
