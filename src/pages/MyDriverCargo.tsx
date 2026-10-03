import React from 'react';
import { Truck, Package, ShieldCheck, Timer } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { WHATSAPP_LINKS } from '@/config/constants';

const benefits = [
  {
    icon: Truck,
    title: "Flota especializada",
    description: "Vehículos adaptados para todo tipo de carga"
  },
  {
    icon: Package,
    title: "Múltiples servicios",
    description: "Desde paquetería hasta mudanzas comerciales"
  },
  {
    icon: ShieldCheck,
    title: "Carga asegurada",
    description: "Seguro incluido en todos los envíos"
  },
  {
    icon: Timer,
    title: "Entregas programadas",
    description: "Coordina envíos según tu calendario"
  }
];

const faqs = [
  {
    question: "¿Qué tipos de carga pueden transportar?",
    answer: "Manejamos todo tipo de carga: paquetería, mudanzas, carga comercial, materiales de construcción y más."
  },
  {
    question: "¿Cuál es el área de cobertura?",
    answer: "Operamos en las principales ciudades del país, con servicios locales y foráneos."
  },
  {
    question: "¿Cómo se garantiza la seguridad de la carga?",
    answer: "Todos nuestros envíos están asegurados y monitoreados en tiempo real mediante GPS."
  }
];

const MyDriverCargo = () => {
  return (
    <ServicePageTemplate
      heroImage="/images/cargo-service.webp"
      heroTitle="Soluciones de carga a tu medida"
      heroSubtitle="Transporte de carga confiable y seguro para tus necesidades logísticas."
      heroCTA="Cotizar servicio"
      heroBadge="MyDriver Cargo"
      heroWhatsappLink={WHATSAPP_LINKS.cargo}
      benefitsTitle="Nuestros servicios de carga"
      benefits={benefits}
      faqs={faqs}
      ctaTitle="Comienza a transportar con nosotros"
      ctaSubtitle="Soluciones logísticas adaptadas a tus necesidades empresariales."
      ctaButtonText="Solicitar servicio"
      ctaWhatsappLink={WHATSAPP_LINKS.cargo}
      leadSection={{
        vertical: "mydriver_cargo",
        titulo: "Cotiza tu flete o mudanza",
        descripcion: "Dinos qué necesitas mover y te damos precio.",
        ctaTexto: "Pedir cotización",
        etiquetaMensaje: "¿Qué trasladas y entre qué ciudades?",
      }}
    />
  );
};

export default MyDriverCargo;
