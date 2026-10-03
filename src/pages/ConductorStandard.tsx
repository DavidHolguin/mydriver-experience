import React from 'react';
import { Wallet, Calendar, Target, Award, CheckCircle, Smartphone, FileText } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { WHATSAPP_LINKS } from '@/config/constants';

const benefits = [
  {
    icon: Wallet,
    title: "Comisiones Flexibles",
    description: "Elige entre una comisión por viaje o una tarifa fija semanal. Tú decides qué te conviene más."
  },
  {
    icon: Calendar,
    title: "Horarios Libres",
    description: "Conduce cuando quieras, sin horarios forzosos ni compromisos mínimos. Tu tiempo es tuyo."
  },
  {
    icon: Target,
    title: "Tus Propias Metas",
    description: "Establece tus objetivos de ganancias y trabaja a tu ritmo para alcanzarlos."
  },
  {
    icon: Award,
    title: "Incentivos Adicionales",
    description: "Accede a nuestro programa de bonos y recompensas por un desempeño excepcional."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Regístrate en Minutos",
    description: "Completa nuestro sencillo formulario en línea con tu información básica y documentos."
  },
  {
    step: "2",
    title: "Elige tu Plan",
    description: "Selecciona el esquema de comisiones que mejor se adapte a tu estilo de trabajo y finanzas."
  },
  {
    step: "3",
    title: "Conduce y Gana",
    description: "Una vez aprobado, activa la app, empieza a recibir viajes y a generar ganancias inmediatamente."
  }
];

const requirements = [
  {
    icon: CheckCircle,
    text: "Ser mayor de 18 años."
  },
  {
    icon: FileText,
    text: "Licencia de conducir vigente."
  },
  {
    icon: Smartphone,
    text: "Smartphone con plan de datos."
  },
  {
    icon: CheckCircle,
    text: "Pasar nuestra verificación de seguridad."
  }
];

const faqs = [
  {
    question: "¿Cuál es la diferencia con ser Socio Conductor?",
    answer: "Como Conductor Standard tienes la flexibilidad de elegir entre pagar una comisión por viaje o una comisión fija semanal, sin necesidad de tener un vehículo propio. Es ideal para quienes buscan maximizar su tiempo."
  },
  {
    question: "¿Cómo funciona la comisión fija semanal?",
    answer: "Pagas una única cuota semanal y te quedas con el 100% de las ganancias de todos los viajes que realices. Sin sorpresas."
  },
  {
    question: "¿Puedo cambiar entre tipos de comisión?",
    answer: "Sí, nuestro sistema te permite cambiar tu tipo de comisión una vez por semana para que siempre tengas el control."
  }
];

const ConductorStandard = () => {
  return (
    <ServicePageTemplate
      heroImage="/images/conductorStandard.webp"
      heroTitle="Tú Eliges Cómo y Cuánto Ganar"
      heroSubtitle="Únete a MyDriver como Conductor Standard. Disfruta de comisiones flexibles, horarios libres y el control total de tus ganancias."
      heroCTA="Regístrate para Conducir"
      heroBadge="Conductor Standard"
      heroWhatsappLink={WHATSAPP_LINKS.conductorStandard}
      benefitsTitle="Ventajas del Programa Standard"
      benefitsSubtitle="Beneficios pensados para ti."
      benefits={benefits}
      howItWorks={howItWorks}
      requirements={requirements}
      faqs={faqs}
      ctaTitle="¿Listo para Tomar el Volante?"
      ctaSubtitle="Únete a la comunidad de conductores que ya están ganando más con MyDriver."
      ctaButtonText="Quiero Registrarme Ahora"
      ctaWhatsappLink={WHATSAPP_LINKS.conductorStandard}
      leadSection={{
        vertical: "conductor_standard",
        titulo: "Únete como Conductor Standard",
        descripcion: "Sin auto propio: te asignamos unidad y empiezas a generar.",
        ctaTexto: "Registrarme",
      }}
    />
  );
};

export default ConductorStandard;
