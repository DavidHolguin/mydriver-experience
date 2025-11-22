/**
 * Configuración centralizada de Google Tag Manager
 * Mantén todos los IDs y configuraciones en este archivo
 */

export const GTM_CONFIG = {
  // ID de Google Tag Manager
  GTM_ID: 'GTM-555W2DG3',

  // (Opcional) ID de Meta Pixel
  META_PIXEL_ID: 'TU_META_PIXEL_ID_AQUI',

  // (Opcional) ID de Google Analytics 4
  GA4_ID: 'TU_GA4_ID_AQUI',

  // Habilitar/deshabilitar debug mode
  DEBUG: false,

  // Eventos que se deben ignorar en desarrollo
  IGNORED_EVENTS_IN_DEV: ['page_view'],

  // Mapeo de eventos por página
  PAGE_EVENTS: {
    '/': 'home_page',
    '/blog': 'blog_page',
    '/socio-conductor': 'socio_conductor_page',
    '/socio-repartidor': 'socio_repartidor_page',
    '/socio-flotilla': 'socio_flotilla_page',
    '/negocio-aliado': 'negocio_aliado_page',
    '/mydriver-cargo': 'mydriver_cargo_page',
    '/descargas': 'descargas_page',
    '/sobre-nosotros': 'sobre_nosotros_page',
    '/contacto': 'contacto_page',
    '/terminos': 'terminos_page',
    '/politicas': 'politicas_page',
  },

  // Botones importantes a rastrear
  CTA_BUTTONS: {
    'Quiero ser socio': 'cta_socio',
    'Solicita tu viaje': 'cta_viaje',
    'Registrarse': 'cta_registrarse',
    'Descargar': 'cta_descargar',
    'Contactar': 'cta_contactar',
  },

  // Formularios importantes
  FORMS: {
    'solicitud_conductor': 'Solicitud Socio Conductor',
    'solicitud_repartidor': 'Solicitud Socio Repartidor',
    'solicitud_flotilla': 'Solicitud Socio Flotilla',
    'registro_usuario': 'Registro de Usuario',
    'contacto_general': 'Formulario de Contacto',
  },
};

/**
 * Función para obtener el evento de página
 */
export const getPageEvent = (pathname: string): string => {
  return GTM_CONFIG.PAGE_EVENTS[pathname as keyof typeof GTM_CONFIG.PAGE_EVENTS] || 'page_view';
};

/**
 * Función para loguear eventos en desarrollo
 */
export const logEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (GTM_CONFIG.DEBUG && process.env.NODE_ENV === 'development') {
    console.log(`[GTM Event] ${eventName}`, eventData);
  }
};

export default GTM_CONFIG;
