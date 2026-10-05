import { useState } from 'react';
import { CheckCircle2, AlertTriangle, Loader2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { enviarLead } from '@/lib/leads';
import { wa, type Vertical } from '@/lib/marca';
import { trackFormSubmit } from '@/lib/gtmEvents';

type Props = {
  vertical: Vertical;
  titulo: string;
  descripcion?: string;
  ctaTexto?: string;
  /** Dato que el visitante ya tenía en pantalla (destino, plan, unidad…). */
  requerimiento?: string;
  /** Etiqueta del campo de texto libre. */
  etiquetaMensaje?: string;
  mostrarCiudad?: boolean;
  className?: string;
};

/**
 * Formulario de captación propio de MyDriver.
 *
 * Reemplaza a los formularios embebidos del proveedor anterior: los datos
 * entran al Twenty de MyDriver por el mismo camino que los de Altaria.
 */
export const LeadForm = ({
  vertical,
  titulo,
  descripcion,
  ctaTexto = 'Enviar',
  requerimiento,
  etiquetaMensaje = '¿Qué necesitas?',
  mostrarCiudad = true,
  className = '',
}: Props) => {
  const [estado, setEstado] = useState<'listo' | 'enviando' | 'ok' | 'error'>('listo');
  const [error, setError] = useState('');
  const [datos, setDatos] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  });

  const campo = (k: keyof typeof datos) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setDatos((d) => ({ ...d, [k]: e.target.value }));

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado('enviando');
    setError('');

    const r = await enviarLead({ ...datos, vertical, requirement: requerimiento });

    if (r.ok) {
      trackFormSubmit(`mydriver_${vertical}`, { vertical });
      setEstado('ok');
    } else {
      setError(r.error);
      setEstado('error');
    }
  };

  if (estado === 'ok') {
    return (
      <div className={`rounded-2xl border-2 border-green-600/30 bg-green-50 p-8 text-center ${className}`}>
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Listo, ya te tenemos</h3>
        <p className="text-gray-700 mb-6">
          Recibimos tus datos y quedaron registrados. Un asesor de MyDriver te contacta por WhatsApp.
        </p>
        <Button className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white gap-2" asChild>
          <a href={wa('Hola, acabo de dejar mis datos en el sitio y quiero avanzar.')} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" /> Adelantar por WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={enviar}
      className={`rounded-2xl bg-white shadow-xl border p-6 md:p-8 text-left ${className}`}
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{titulo}</h3>
      {descripcion && <p className="text-gray-600 mb-6">{descripcion}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor={`${vertical}-nombre`}>Nombre*</Label>
          <Input
            id={`${vertical}-nombre`}
            value={datos.firstName}
            onChange={campo('firstName')}
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <Label htmlFor={`${vertical}-apellido`}>Apellido</Label>
          <Input
            id={`${vertical}-apellido`}
            value={datos.lastName}
            onChange={campo('lastName')}
            placeholder="Tu apellido"
          />
        </div>
        <div>
          <Label htmlFor={`${vertical}-tel`}>WhatsApp*</Label>
          <Input
            id={`${vertical}-tel`}
            type="tel"
            inputMode="tel"
            value={datos.phone}
            onChange={campo('phone')}
            placeholder="10 dígitos"
            required
          />
        </div>
        <div>
          <Label htmlFor={`${vertical}-correo`}>Correo (opcional)</Label>
          <Input
            id={`${vertical}-correo`}
            type="email"
            value={datos.email}
            onChange={campo('email')}
            placeholder="tucorreo@ejemplo.com"
          />
        </div>
        {mostrarCiudad && (
          <div className="md:col-span-2">
            <Label htmlFor={`${vertical}-ciudad`}>Ciudad</Label>
            <Input
              id={`${vertical}-ciudad`}
              value={datos.city}
              onChange={campo('city')}
              placeholder="Tlaxcala, Puebla, CDMX…"
            />
          </div>
        )}
        <div className="md:col-span-2">
          <Label htmlFor={`${vertical}-mensaje`}>{etiquetaMensaje}</Label>
          <Input
            id={`${vertical}-mensaje`}
            value={datos.message}
            onChange={campo('message')}
            placeholder="Cuéntanos en una línea"
          />
        </div>
      </div>

      {estado === 'error' && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>
            No pudimos registrar tus datos ({error}). Escríbenos por WhatsApp y lo resolvemos al momento.
          </span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          disabled={estado === 'enviando'}
          className="flex-1 h-12 bg-[#ab1818] hover:bg-[#ab1818]/90 text-white gap-2"
        >
          {estado === 'enviando' ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          {estado === 'enviando' ? 'Enviando…' : ctaTexto}
        </Button>
        <Button type="button" variant="outline" className="h-12 gap-2" asChild>
          <a
            href={wa(`Hola, quiero información sobre ${titulo.toLowerCase()}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" /> Por WhatsApp
          </a>
        </Button>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Tus datos se registran en el CRM de MyDriver y se usan solo para contactarte.
      </p>
    </form>
  );
};
