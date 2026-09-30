import { LeadForm } from './LeadForm';
import type { Vertical } from '@/lib/marca';

type Props = {
  vertical: Vertical;
  titulo: string;
  descripcion?: string;
  ctaTexto?: string;
  requerimiento?: string;
  etiquetaMensaje?: string;
  mostrarCiudad?: boolean;
};

/**
 * Sección de captación con el formulario propio de la marca.
 * Sustituye al formulario embebido del proveedor anterior en cada página.
 */
export const LeadSection = ({ ...props }: Props) => (
  <section id="registro" className="py-16 md:py-20 bg-gray-100">
    <div className="container mx-auto px-4 max-w-3xl">
      <LeadForm {...props} />
    </div>
  </section>
);
