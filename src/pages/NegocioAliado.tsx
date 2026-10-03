import React from 'react';
import { Building2, TrendingUp, Users, HeartHandshake } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { WHATSAPP_LINKS } from '@/config/constants';

const benefits = [
  {
    icon: Building2,
    title: "Gestión centralizada",
    description: "Administra todos tus servicios desde una sola plataforma"
  },
  {
    icon: TrendingUp,
    title: "Crecimiento asegurado",
    description: "Aumenta tus ingresos con nuestra base de usuarios"
  },
  {
    icon: Users,
    title: "Soporte dedicado",
    description: "Equipo especializado para tu negocio 24/7"
  },
  {
    icon: HeartHandshake,
    title: "Alianza estratégica",
    description: "Beneficios exclusivos para negocios aliados"
  }
];

const faqs = [
  {
    question: "¿Qué requisitos necesito para ser Negocio Aliado?",
    answer: "Necesitas tener un negocio establecido, documentación legal vigente y cumplir con nuestros estándares de calidad."
  },
  {
    question: "¿Cuánto cuesta unirse como Negocio Aliado?",
    answer: "La inversión varía según el tipo de negocio y el plan que elijas. Contáctanos para recibir una cotización personalizada."
  },
  {
    question: "¿Qué soporte recibo como Negocio Aliado?",
    answer: "Recibes soporte técnico 24/7, capacitación para tu equipo, material promocional y acceso a nuestra plataforma de gestión."
  }
];

const NegocioAliado = () => {
  return (
    <ServicePageTemplate
      heroImage="/images/business-partner.webp"
      heroTitle="Impulsa tu negocio con MyDriver"
      heroSubtitle="Incrementa tus ventas y alcance uniéndote a nuestra plataforma."
      heroCTA="Registra tu negocio"
      heroBadge="Negocio Aliado"
      heroWhatsappLink={WHATSAPP_LINKS.negocioAliado}
      benefitsTitle="Beneficios para tu negocio"
      benefits={benefits}
      faqs={faqs}
      ctaTitle="Únete a MyDriver Business"
      ctaSubtitle="Descubre cómo podemos ayudarte a hacer crecer tu negocio."
      ctaButtonText="Registra tu negocio"
      ctaWhatsappLink={WHATSAPP_LINKS.negocioAliado}
      leadSection={{
        vertical: "negocio_aliado",
        titulo: "Registra tu negocio aliado",
        descripcion: "Comienza a enviar pedidos con la red de MyDriver.",
        ctaTexto: "Dar de alta mi negocio",
        etiquetaMensaje: "Giro del negocio",
      }}
    />
  );
};

export default NegocioAliado;
