import React from 'react';
import { Bike, Clock, DollarSign, Shield, CheckCircle } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { WHATSAPP_LINKS } from '@/config/constants';

const benefits = [
  {
    icon: DollarSign,
    title: "Ganancias competitivas",
    description: "Recibe el 100% de tus propinas y gana por cada entrega"
  },
  {
    icon: Clock,
    title: "Horario flexible",
    description: "Decide cuándo y cuánto tiempo quieres trabajar"
  },
  {
    icon: Shield,
    title: "Seguro incluido",
    description: "Cobertura durante tus entregas sin costo adicional"
  },
  {
    icon: Bike,
    title: "Equipo necesario",
    description: "Te proporcionamos la mochila térmica y uniformes"
  }
];

const requirements = [
  { icon: CheckCircle, text: "Ser mayor de 18 años" },
  { icon: CheckCircle, text: "Identificación oficial vigente" },
  { icon: CheckCircle, text: "CURP" },
  { icon: CheckCircle, text: "Bicicleta o motocicleta propia" },
  { icon: CheckCircle, text: "Smartphone compatible" },
  { icon: CheckCircle, text: "Disponibilidad para trabajar" }
];

const SocioRepartidor = () => {
  return (
    <ServicePageTemplate
      heroImage="/images/delivery-partner.webp"
      heroTitle="Gana dinero haciendo entregas"
      heroSubtitle="Únete a MyDriver ENTREGAS y genera ingresos extras en tus tiempos libres."
      heroCTA="Regístrate como repartidor"
      heroBadge="Socio Repartidor"
      heroWhatsappLink={WHATSAPP_LINKS.socioRepartidor}
      benefitsTitle="Beneficios de ser Repartidor"
      benefits={benefits}
      requirements={requirements}
      requirementsTitle="¿Qué necesitas para empezar?"
      faqs={[]}
      ctaTitle="Comienza hoy mismo"
      ctaSubtitle="Forma parte de la comunidad de repartidores más grande y mejor pagada."
      ctaButtonText="Quiero ser repartidor"
      ctaWhatsappLink={WHATSAPP_LINKS.socioRepartidor}
      leadSection={{
        vertical: "socio_repartidor",
        titulo: "Regístrate como repartidor",
        descripcion: "Entregas de comida, paquetería y compras en tu ciudad.",
        ctaTexto: "Quiero repartir",
      }}
    />
  );
};

export default SocioRepartidor;
