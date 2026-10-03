import React from 'react';
import { DollarSign, Gavel, Wrench, ShieldCheck, Phone, Users, TrendingUp, ThumbsUp, Car, UserCircle, Home, FileCheck2, CreditCard, FileText } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { WHATSAPP_LINKS, EMBED_FORMS } from '@/config/constants';

const benefits = [
  {
    icon: DollarSign,
    title: "Tú Eliges tu Tarifa: 15% o $4,500 Fijo",
    description: "Elige entre pagar el 15% por viaje o una suscripción mensual fija de $4,500 MXN sin cobro por porcentaje. ¡Tú decides cómo ganar más!"
  },
  {
    icon: Car,
    title: "Taxis Rotulados y Autos Particulares",
    description: "La plataforma está abierta para choferes de taxis rotulados oficiales y propietarios de vehículos particulares en regla."
  },
  {
    icon: Gavel,
    title: "Asesoría Jurídica 24/7",
    description: "En caso de cualquier percance vial, cuentas con apoyo legal inmediato y profesional, sin costo adicional."
  },
  {
    icon: Wrench,
    title: "Talleres Recomendados",
    description: "Accede a una red de talleres confiables y económicos para mantener tu auto en excelente estado."
  },
  {
    icon: ShieldCheck,
    title: "Monitoreo y Seguridad",
    description: "Todos tus viajes son geolocalizados y monitoreados, aumentando tu seguridad y la de tus pasajeros."
  },
  {
    icon: Phone,
    title: "Múltiples Canales de Viajes",
    description: "Te conectamos con usuarios vía WhatsApp, llamadas, App y bases fijas, con viajes verificados."
  },
  {
    icon: Users,
    title: "Comunidad Unida de Conductores",
    description: "Forma parte de una red de socios confiables donde se comparte información, apoyo y tips."
  },
  {
    icon: ThumbsUp,
    title: "Sin Penalizaciones Injustas",
    description: "Tú eres tu propio jefe, pero nunca estás solo. Te respaldamos en lo legal, operativo y técnico."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Completa tu Registro",
    description: "Sube tus documentos y los de tu vehículo a nuestra plataforma de forma rápida y segura."
  },
  {
    step: "2",
    title: "Pasa la Verificación",
    description: "Nuestro equipo revisará tu información y el estado de tu vehículo para garantizar la seguridad."
  },
  {
    step: "3",
    title: "Empieza a Ganar",
    description: "Una vez aprobado, conéctate a la red MyDriver y empieza a recibir viajes con la mejor tarifa del mercado."
  }
];

const requirements = [
  {
    icon: Car,
    text: "Automóvil particular o taxi rotulado en buen estado (mínimo 2016)."
  },
  {
    icon: FileText,
    text: "Licencia de conducir vigente."
  },
  {
    icon: UserCircle,
    text: "INE o identificación oficial vigente."
  },
  {
    icon: Home,
    text: "Comprobante de domicilio (no mayor a 3 meses)."
  },
  {
    icon: FileCheck2,
    text: "Carta de no antecedentes penales (opcional)."
  },
  {
    icon: ShieldCheck,
    text: "Seguro del vehículo vigente."
  },
  {
    icon: CreditCard,
    text: "Pago de registro y afiliación vehicular."
  }
];

const faqs = [
  {
    question: "¿Qué vehículos se aceptan en MyDriver?",
    answer: "Aceptamos tanto automóviles particulares como taxis rotulados debidamente regularizados y en buen estado mecánico (año 2016 en adelante)."
  },
  {
    question: "¿Cómo funciona el esquema de comisiones y cobro?",
    answer: "Ofrecemos dos esquemas flexibles: puedes optar por una comisión del 15% por viaje realizado, o bien una suscripción mensual fija de $4,500 MXN sin cobro por porcentaje de viajes. ¡El resto es 100% para ti!"
  },
  {
    question: "¿Qué pasa si tengo un problema en un viaje?",
    answer: "Tu seguridad es nuestra prioridad. Cuentas con monitoreo en tiempo real y asesoría jurídica 24/7 sin costo adicional para apoyarte en caso de cualquier incidente."
  },
  {
    question: "¿Necesito buscar mis propios pasajeros?",
    answer: "Te conectamos con una gran demanda de usuarios a través de múltiples canales como WhatsApp, llamadas, nuestra app y bases fijas, asegurando un flujo constante de viajes."
  }
];

const SocioConductor = () => {
  return (
    <ServicePageTemplate
      heroImage="/images/conductorSocio.webp"
      heroTitle="¿Tienes Auto o Taxi y Quieres Generar Ingresos?"
      heroSubtitle="¡Únete como Socio-Conductor MyDriver! Aceptamos autos particulares y taxis rotulados. Elige entre 15% por viaje o tarifa fija de $4,500 al mes."
      heroCTA="Únete a MyDriver"
      heroBadge="Socio Conductor"
      heroWhatsappLink={WHATSAPP_LINKS.socioConductor}
      stats={[
        { value: "$4,500/mes", label: "O 15% por viaje" },
        { value: "Taxis y Autos", label: "Particulares bienvenidos" },
        { value: "24/7", label: "Asesoría legal y monitoreo" }
      ]}
      benefitsTitle="Beneficios de ser Socio-Conductor"
      benefitsSubtitle="Te respaldamos en cada viaje."
      benefits={benefits}
      howItWorks={howItWorks}
      requirements={requirements}
      faqs={faqs}
      ctaTitle="¿Listo para ser tu Propio Jefe?"
      ctaSubtitle="Únete a la comunidad de socios-conductores que ya están maximizando sus ganancias con MyDriver."
      ctaButtonText="Quiero Registrarme Ahora"
      ctaWhatsappLink={WHATSAPP_LINKS.socioConductor}
      leadSection={{
        vertical: "socio_conductor",
        titulo: "Regístrate como Socio Conductor",
        descripcion: "Déjanos tus datos y un asesor te contacta para completar tu alta.",
        ctaTexto: "Quiero ser Socio Conductor",
      }}
    />
  );
};

export default SocioConductor;
