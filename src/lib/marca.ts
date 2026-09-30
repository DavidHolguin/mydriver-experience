/**
 * Datos de la marca MyDriver y del CRM propio.
 *
 * Un solo lugar para el número de WhatsApp de la marca y para el punto por el
 * que entran los formularios. Si cambia el número, se cambia aquí y se
 * reemplaza el valor en los enlaces estáticos de las páginas.
 *
 * El número es el que se vinculó el 25-sep-2026 para MyDriver (línea propia de
 * la marca; antes el sitio usaba el que comparte con SentinelX).
 */
export const WHATSAPP_NUMERO = "5212215590718";
export const WHATSAPP_TEXTO = "+52 1 221 559 0718";

/** Punto de entrada de los leads: el CRM del grupo, no un formulario de terceros. */
export const CRM_ENDPOINT = "https://api-crm.prometheuslabs.com.co/webhooks/lead";

/** Nombre con el que viaja la marca en el CRM. */
export const MARCA = "mydriver";

/** Enlace de WhatsApp con mensaje precargado. */
export const wa = (mensaje?: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}${mensaje ? `?text=${encodeURIComponent(mensaje)}` : ""}`;

/** Verticales con las que el CRM etiqueta cada lead del sitio. */
export type Vertical =
  | "usuario_pasajero"
  | "socio_conductor"
  | "socio_flotilla"
  | "socio_repartidor"
  | "conductor_standard"
  | "negocio_aliado"
  | "mydriver_cargo"
  | "experiencia_turismo"
  | "socio_inversionista";
