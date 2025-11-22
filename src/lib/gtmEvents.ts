/**
 * Utilidades para rastrear eventos comunes en GTM
 * Incluye eventos para Analytics, Meta Pixel, conversiones, etc.
 */

/**
 * Rastrear un evento de conversión
 * @param conversionName - Nombre de la conversión
 * @param value - Valor de la conversión (opcional)
 * @param currency - Moneda (opcional)
 */
export const trackConversion = (
  conversionName: string,
  value?: number,
  currency?: string
) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      conversion_name: conversionName,
      value: value,
      currency: currency || 'MXN',
    });
  }
};

/**
 * Rastrear un click en un botón o enlace
 * @param buttonName - Nombre del botón
 * @param location - Ubicación en la página (opcional)
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  if (window.gtag) {
    window.gtag('event', 'button_click', {
      button_name: buttonName,
      location: location,
    });
  }
};

/**
 * Rastrear un envío de formulario
 * @param formName - Nombre del formulario
 * @param formData - Datos del formulario (opcional, sin información sensible)
 */
export const trackFormSubmit = (
  formName: string,
  formData?: Record<string, any>
) => {
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      form_name: formName,
      ...formData,
    });
  }
};

/**
 * Rastrear una búsqueda
 * @param searchTerm - Término de búsqueda
 */
export const trackSearch = (searchTerm: string) => {
  if (window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
    });
  }
};

/**
 * Rastrear una compra/transacción
 * @param transactionId - ID de la transacción
 * @param value - Valor total
 * @param currency - Moneda
 * @param items - Array de items (opcional)
 */
export const trackPurchase = (
  transactionId: string,
  value: number,
  currency: string = 'MXN',
  items?: Array<{ id: string; name: string; quantity: number; price: number }>
) => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
    });
  }
};

/**
 * Rastrear un tiempo de permanencia en una sección
 * @param sectionName - Nombre de la sección
 * @param timeSpent - Tiempo invertido en milisegundos
 */
export const trackTimeSpent = (sectionName: string, timeSpent: number) => {
  if (window.gtag) {
    window.gtag('event', 'time_spent', {
      section_name: sectionName,
      time_ms: timeSpent,
    });
  }
};

/**
 * Rastrear una visualización de contenido
 * @param contentName - Nombre del contenido
 * @param contentType - Tipo de contenido (article, video, etc.)
 */
export const trackContentView = (contentName: string, contentType: string) => {
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      content_name: contentName,
      content_type: contentType,
    });
  }
};

/**
 * Rastrear evento personalizado
 * @param eventName - Nombre del evento
 * @param eventData - Datos del evento
 */
export const trackCustomEvent = (
  eventName: string,
  eventData?: Record<string, any>
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

/**
 * Rastrear contacto/consulta
 * @param contactType - Tipo de contacto (email, phone, form, etc.)
 * @param service - Servicio relacionado (opcional)
 */
export const trackContact = (contactType: string, service?: string) => {
  if (window.gtag) {
    window.gtag('event', 'contact', {
      contact_type: contactType,
      service: service,
    });
  }
};

/**
 * Rastrear descarga de recurso
 * @param resourceName - Nombre del recurso
 * @param resourceType - Tipo (PDF, video, etc.)
 */
export const trackDownload = (resourceName: string, resourceType: string) => {
  if (window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: resourceName,
      file_extension: resourceType,
    });
  }
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export {};
