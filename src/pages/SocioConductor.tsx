import React from 'react';
import { DollarSign, Gavel, Wrench, ShieldCheck, Phone, Users, TrendingUp, ThumbsUp, Car, UserCircle, Home, FileCheck2, CreditCard, FileText } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { WHATSAPP_LINKS, EMBED_FORMS } from '@/config/constants';

const benefits = [
  {
    icon: DollarSign,
    title: "Comisión Fija, No por Viaje",
    description: "Solo pagas $750 pesos semanales, sin importar cuántos viajes hagas. ¡Lo que generas es tuyo!"
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
    icon: TrendingUp,
    title: "Genera Mayores Ganancias",
    description: "Nuestra comisión fija es la más baja del mercado. No cobramos comisiones por cada viaje."
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
    text: "Vehículo propio en buen estado (mínimo 2016)."
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
    text: "Pago único de registro y afiliación vehicular."
  }
];

const faqs = [
  {
    question: "¿Cómo funciona el pago de la comisión?",
    answer: "No pagas comisiones por viaje. Es un pago único semanal de $750, sin importar cuántos viajes realices. ¡Todo lo demás es para ti!"
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
      heroTitle="¿Tienes Auto y Quieres Generar Ingresos?"
      heroSubtitle="¡Únete como Socio-Conductor MyDriver! Disfruta la comisión más baja del mercado y el control total de tus ganancias."
      heroCTA="Únete a MyDriver"
      heroBadge="Socio Conductor"
      heroWhatsappLink={WHATSAPP_LINKS.socioConductor}
      stats={[
        { value: "$750", label: "Comisión semanal fija" },
        { value: "24/7", label: "Soporte legal" },
        { value: "100%", label: "Tus ganancias" }
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
