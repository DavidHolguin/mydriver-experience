import React from 'react';
import { UserCheck, Banknote, Shield, Scale, MapPin, FileCheck, CreditCard, Car, Handshake, Building2, IdCard } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { WHATSAPP_LINKS } from '@/config/constants';

const benefits = [
  {
    icon: UserCheck,
    title: "Conductor Certificado",
    description: "Asignamos un conductor profesional y certificado para tu vehículo."
  },
  {
    icon: Banknote,
    title: "Ganancias Fijas",
    description: "Obtienes ganancias de hasta $10,000 MXN fijos al mes, sin conducir."
  },
  {
    icon: Shield,
    title: "Cobertura y Asesoría",
    description: "En caso de percance, robo total o parcial, te asesoramos y cubrimos tu deducible."
  },
  {
    icon: Scale,
    title: "Asesoría Jurídica 24/7",
    description: "Cuentas con apoyo legal en todo momento."
  },
  {
    icon: MapPin,
    title: "Geolocalización GPS",
    description: "Para tu tranquilidad, incorporaremos la instalación de equipo GPS de alta tecnología con ubicación en tiempo real y apagado de motor remoto en caso de emergencia y en todo momento te damos acceso de tu atención."
  }
];

const requirements = [
  { icon: Car, text: "Auto modelo 2020 a 2026" },
  { icon: IdCard, text: "Póliza de seguro vigente" },
  { 
    icon: FileCheck, 
    text: "Pago de registro y afiliación vehicular (al momento de registrar el vehículo)",
    badge: "Promo Octubre: $7,500",
    subtext: "Costo: $11,000 MXN y Promoción de Octubre: $7,500 MXN. *Términos y condiciones aplican (válido al ser uno de los primeros 100 vehículos)."
  },
  { icon: IdCard, text: "Tarjeta de circulación y placas al corriente" },
  { icon: Building2, text: "Cuenta bancaria para recibir ganancias" },
  { icon: Handshake, text: "Firma de contrato con MyDriver" }
];

const faqs = [
  {
    question: "¿Cuánto cuesta el registro y afiliación vehicular?",
    answer: "El costo regular de registro y afiliación al momento de dar de alta el vehículo es de $11,000 MXN. Contamos con una Promoción especial de Octubre por $7,500 MXN (aplican términos y condiciones, válida al ser uno de los primeros 100 vehículos)."
  },
  {
    question: "¿Puedo recibir el pago de forma semanal?",
    answer: "Sí, tienes la opción semanal de $2.500, quincenal de $5.000 o mensual de $10.000."
  },
  {
    question: "¿Qué sucede si el conductor incumple?",
    answer: "MyDriver supervisa y capacita a todos los choferes; ante cualquier incidente, actuamos de inmediato."
  },
  {
    question: "¿Cómo accedo a la ubicación de mi coche?",
    answer: "Con nuestra app o portal web recibirás acceso en tiempo real."
  }
];

const SocioFlotilla = () => {
  return (
    <ServicePageTemplate
      heroImage="/images/heroSocioFlotilla.webp"
      heroTitle={"Gana hasta $10,000 MXN.\nFijos al mes SIN conducir"}
      heroSubtitle="Conviértete en Socio Flotilla MyDriver: nosotros certificamos chóferes, cuidamos tu auto y te garantizamos ingresos fijos."
      heroCTA="Quiero ser socio"
      heroBadge="Socio Flotilla"
      heroWhatsappLink={WHATSAPP_LINKS.socioFlotilla}
      stats={[
        { value: "$10,000", label: "Ingreso mensual" },
        { value: "24/7", label: "Asesoría jurídica" },
        { value: "GPS", label: "Geolocalización" }
      ]}
      benefitsTitle="Beneficios de ser Socio Flotilla"
      benefits={benefits}
      requirements={requirements}
      requirementsTitle="Ser parte de nuestra red es muy fácil"
      faqs={faqs}
      ctaTitle="¡Únete hoy y pon tu coche a generar ingresos!"
      ctaSubtitle="Escríbenos por WhatsApp y comienza a ganar sin conducir."
      ctaButtonText="Contactar en WhatsApp"
      ctaWhatsappLink={WHATSAPP_LINKS.socioFlotilla}
      leadSection={{
        vertical: "socio_flotilla",
        titulo: "Registra tus vehículos en la flotilla",
        descripcion: "Ingresos fijos al mes administrando o entregando unidades a la plataforma.",
        ctaTexto: "Afiliar mis unidades",
        etiquetaMensaje: "¿Cuántos autos tienes y qué modelos?",
      }}
    />
  );
};

export default SocioFlotilla;
