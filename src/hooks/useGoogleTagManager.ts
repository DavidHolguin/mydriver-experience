/**
 * Hook para integración de Google Tag Manager
 * Maneja la carga y el seguimiento de eventos de GTM en toda la aplicación
 */

import { useEffect } from 'react';
import { GTM_CONFIG } from '@/config/gtmConfig';

/**
 * Inicializa Google Tag Manager en la aplicación
 * Este hook debe ejecutarse una sola vez en el componente raíz
 */
export const useGoogleTagManager = () => {
  useEffect(() => {
    // Verifica si GTM ya está cargado
    if (window.dataLayer) {
      return;
    }

    // Inicializa dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GTM_CONFIG.GTM_ID);
  }, []);
};

/**
 * Hook para rastrear eventos personalizados en GTM
 * @param eventName - Nombre del evento a rastrear
 * @param eventData - Datos adicionales del evento (opcional)
 */
export const useTrackEvent = (eventName: string, eventData?: Record<string, any>) => {
  const trackEvent = (customEventData?: Record<string, any>) => {
    if (window.gtag) {
      const data = { ...eventData, ...customEventData };
      window.gtag('event', eventName, data);
    }
  };

  return trackEvent;
};

/**
 * Hook para rastrear vistas de página
 * Útil cuando usas React Router
 * @param pagePath - Ruta de la página
 * @param pageTitle - Título de la página
 */
export const useTrackPageView = (pagePath: string, pageTitle?: string) => {
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      });
    }
  }, [pagePath, pageTitle]);
};

/**
 * Declaración de tipos globales para TypeScript
 */
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export {};
