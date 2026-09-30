/**
 * Envío de leads del sitio al CRM propio (Twenty).
 *
 * Antes cada página embebía un iframe del CRM del proveedor anterior
 * (mydriverapp.lovable.app) y los datos se iban con él. Ahora el formulario es
 * nuestro y el lead entra por el mismo camino que los de Altaria: el
 * integration-worker lo recibe y el agente lo registra en el Twenty de MyDriver
 * (persona + oportunidad + tarea).
 *
 * Regla: si el envío falla, se dice. Nunca se simula un alta que no ocurrió.
 */
import { CRM_ENDPOINT, MARCA, type Vertical } from "./marca";

export type LeadInput = {
  vertical: Vertical;
  firstName: string;
  lastName?: string;
  phone: string;
  email?: string;
  city?: string;
  message?: string;
  /** Texto que el visitante traía en pantalla (destino, plan, etc.). */
  requirement?: string;
};

/** Parámetros de campaña de la URL, para no perder la atribución. */
function parametrosDeCampana(): Record<string, string> {
  const out: Record<string, string> = {};
  const params = new URLSearchParams(window.location.search);
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"]) {
    const v = params.get(k);
    if (v) out[k] = v.slice(0, 200);
  }
  return out;
}

export type LeadResult = { ok: true } | { ok: false; error: string };

export async function enviarLead(datos: LeadInput): Promise<LeadResult> {
  const phone = datos.phone.replace(/[^\d+]/g, "");

  if (!datos.firstName.trim() || phone.replace(/\D/g, "").length < 10) {
    return { ok: false, error: "Necesitamos tu nombre y un teléfono de 10 dígitos." };
  }

  const cuerpo = {
    brand: MARCA,
    vertical: datos.vertical,
    firstName: datos.firstName.trim(),
    lastName: datos.lastName?.trim() || undefined,
    phone,
    email: datos.email?.trim() || undefined,
    city: datos.city?.trim() || undefined,
    company: undefined,
    requirement: datos.requirement?.trim() || datos.message?.trim() || undefined,
    source: `sitio-mydriver:${datos.vertical}`,
    page: window.location.pathname,
    utm: parametrosDeCampana(),
  };

  try {
    const res = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuerpo),
    });

    if (!res.ok) {
      const detalle = await res.text().catch(() => "");
      return { ok: false, error: `El CRM respondió ${res.status}. ${detalle.slice(0, 160)}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "No se pudo enviar el formulario." };
  }
}
