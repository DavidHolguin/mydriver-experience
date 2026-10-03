import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { LeadSection } from '@/components/LeadSection';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINKS } from '@/config/constants';
import { 
  Truck, 
  ShieldCheck, 
  MapPin, 
  Key, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Calculator,
  Sparkles,
  PhoneCall,
  Scale,
  Car,
  FileCheck,
  CreditCard,
  Building2,
  IdCard,
  Wrench,
  AlertCircle
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BENEFITS = [
  {
    icon: Key,
    title: "Chóferes Certificados y Filtro 360°",
    description: "Evaluamos antecedentes penales, pruebas psicométricas y exámenes toxicológicos periódicos a cada conductor asignado a tu unidad."
  },
  {
    icon: TrendingUp,
    title: "Hasta $10,000 MXN Fijos Mensuales",
    description: "Tu vehículo genera ingresos garantizados mes con mes. Elige recibir tus pagos de forma semanal ($2,500), quincenal ($5,000) o mensual ($10,000)."
  },
  {
    icon: MapPin,
    title: "Geolocalización GPS con Apagado Remoto",
    description: "Para tu tranquilidad, incorporaremos la instalación de equipo GPS de alta tecnología con ubicación en tiempo real y apagado de motor remoto en caso de emergencia y en todo momento te damos acceso de tu atención."
  },
  {
    icon: ShieldCheck,
    title: "Cobertura de Deducible y Seguro",
    description: "En caso de cualquier percance vial o robo total/parcial, nuestro equipo legal y operativo gestiona el siniestro y cubre el deducible correspondiente."
  },
  {
    icon: Scale,
    title: "Asesoría Jurídica Especializada 24/7",
    description: "Cuentas con respaldo legal integral sin costo extra ante autoridades de tránsito, trámites o cualquier contingencia operativa."
  },
  {
    icon: Wrench,
    title: "Mantenimiento Supervisado",
    description: "Red de talleres certificados con revisiones preventivas programadas para conservar el valor de reventa y la vida útil de tu automóvil."
  }
];

const REQUIREMENTS = [
  { icon: Car, text: "Automóvil modelo 2020 a 2026 en óptimas condiciones estéticas y mecánicas." },
  { icon: IdCard, text: "Póliza de seguro vehicular vigente (cobertura amplia o ERT)." },
  { 
    icon: FileCheck, 
    text: "Pago de registro y afiliación vehicular (al momento de registrar el vehículo).",
    badge: "Promo Octubre: $7,500",
    subtext: "Costo regular: $11,000 MXN. Promoción de Octubre: $7,500 MXN. *Términos y condiciones aplican (válido para los primeros 100 vehículos registrados)."
  },
  { icon: IdCard, text: "Tarjeta de circulación y placas al corriente." },
  { icon: Building2, text: "Cuenta bancaria nacional a tu nombre para recibir tus depósitos puntuales." },
  { icon: Scale, text: "Firma de contrato de prestación y custodia de unidad con MyDriver." }
];

const FAQS = [
  {
    question: "¿Cuánto cuesta el registro y afiliación vehicular?",
    answer: "El costo regular de registro y afiliación al momento de dar de alta el vehículo es de $11,000 MXN. Contamos con una Promoción especial de Octubre por $7,500 MXN (aplican términos y condiciones, válida al ser uno de los primeros 100 vehículos)."
  },
  {
    question: "¿Con qué frecuencia recibo mis ganancias?",
    answer: "Tienes total libertad para elegir: pagos semanales de $2,500 MXN, quincenales de $5,000 MXN o un pago mensual consolidado de $10,000 MXN vía transferencia bancaria directa."
  },
  {
    question: "¿Cómo monitoreo mi auto y qué pasa en una emergencia?",
    answer: "Para tu tranquilidad, incorporaremos la instalación de equipo GPS de alta tecnología con ubicación en tiempo real y apagado de motor remoto en caso de emergencia y en todo momento te damos acceso de tu atención desde tu celular."
  },
  {
    question: "¿Quién responde ante un choque, infracción o avería?",
    answer: "MyDriver cuenta con pólizas de respaldo, convenio con talleres de confianza y un equipo jurídico 24/7 que atiende el siniestro y cubre el deducible para que no tengas desembolsos imprevistos."
  },
  {
    question: "¿Cuántos autos puedo registrar en el programa?",
    answer: "Puedes afiliar desde 1 vehículo particular hasta flotas comerciales completas (10+ autos), multiplicando tus ingresos fijos de forma proporcional."
  }
];

const SocioFlotilla = () => {
  const [carCount, setCarCount] = useState<number>(2);
  const monthlyRatePerCar = 10000;
  const totalMonthlyEarnings = carCount * monthlyRatePerCar;

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-navy text-white pt-24 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/images/flotilla-corporativa.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/60" />

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs md:text-sm font-bold uppercase tracking-wider mb-6"
              >
                <Truck className="w-4 h-4 text-brand-red" />
                Programa Oficial Socio Flotilla
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
              >
                Gana hasta <span className="text-brand-red">$10,000 MXN</span> fijos al mes <br className="hidden sm:inline" />
                SIN conducir tu auto
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
              >
                Conviértete en Socio Flotilla MyDriver: nosotros certificamos chóferes de confianza, instalamos telemetría GPS con apagado remoto y te garantizamos ingresos fijos mensuales.
              </motion.p>

              {/* October Promotion Highlight Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-4 rounded-2xl bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-transparent border border-brand-red/30 mb-8 max-w-xl text-left flex items-start gap-3"
              >
                <Sparkles className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider bg-brand-red text-white px-2 py-0.5 rounded-full">
                      Promoción Octubre
                    </span>
                    <span className="text-xs text-gray-300">Primeros 100 vehículos</span>
                  </div>
                  <p className="text-sm text-white font-medium mt-1">
                    Costo de afiliación vehicular: <span className="line-through text-gray-400">$11,000</span> <strong className="text-amber-300 text-base font-bold">$7,500 MXN</strong>. *Aplican términos y condiciones.
                  </p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-brand-red hover:bg-brand-red-dark text-white rounded-pill px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    document.getElementById('registro-flotilla')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Registrar mi Auto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-pill bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                >
                  <a href={WHATSAPP_LINKS.socioFlotilla} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2 text-green-400" />
                    Asesoría por WhatsApp
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Visual Floating Handover Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src="/images/socio-flotilla-entrega.png"
                  alt="Entrega de vehículo y chófer certificado MyDriver"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center flex-shrink-0">
                      <Key className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-300 font-medium">Asignación Garantizada</p>
                      <p className="text-sm font-bold text-white">Chóferes verificados con récord limpio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <div className="bg-white shadow-card py-8 -mt-10 mx-auto max-w-5xl rounded-card relative z-20 border border-surface-border px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-surface-border">
          <div className="p-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-red">$10,000</p>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 font-medium">MXN fijos al mes por auto</p>
          </div>
          <div className="p-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-navy">100%</p>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 font-medium">Chóferes certificados</p>
          </div>
          <div className="p-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-navy">GPS 24/7</p>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 font-medium">Con apagado remoto</p>
          </div>
          <div className="p-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-navy">Legal</p>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 font-medium">Asesoría jurídica y deducible</p>
          </div>
        </div>
      </div>

      {/* 3. Interactive Fleet Earnings Calculator */}
      <SectionContainer background="white">
        <div className="max-w-5xl mx-auto bg-surface-light rounded-[32px] p-8 md:p-12 border border-surface-border shadow-elevated">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
              Calculadora de Rendimiento
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-3">
              ¿Cuánto puede generar tu flota con MyDriver?
            </h2>
            <p className="text-text-secondary text-sm md:text-base mt-2">
              Selecciona el número de vehículos que deseas colocar en la plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div>
                <label className="text-sm font-bold text-brand-navy block mb-3">
                  Número de autos a registrar:
                </label>
                <div className="grid grid-cols-5 gap-3">
                  {[1, 2, 3, 5, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setCarCount(num)}
                      className={`py-3 rounded-2xl text-base font-extrabold transition-all ${
                        carCount === num
                          ? 'bg-brand-red text-white shadow-md scale-105'
                          : 'bg-white text-text-secondary border border-surface-border hover:border-brand-red/40 hover:text-brand-navy'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <strong>Depósitos garantizados:</strong> semanales, quincenales o mensuales.
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <strong>Cero preocupaciones:</strong> nosotros gestionamos combustible, chofer y pasaje.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-brand-navy to-[#182a3a] text-white p-8 rounded-3xl text-center shadow-xl">
              <p className="text-xs uppercase font-bold text-gray-400 tracking-wider">Tu ingreso mensual proyectado:</p>
              <p className="text-4xl sm:text-5xl font-extrabold text-brand-red mt-2 mb-1">
                ${totalMonthlyEarnings.toLocaleString('es-MX')}
              </p>
              <p className="text-xs text-gray-300 font-medium mb-6">MXN fijos al mes ({carCount} {carCount === 1 ? 'auto' : 'autos'})</p>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-300 space-y-1">
                <p>Ingreso anual estimado: <strong className="text-white">${(totalMonthlyEarnings * 12).toLocaleString('es-MX')} MXN</strong></p>
              </div>

              <Button
                asChild
                className="w-full mt-6 bg-brand-red hover:bg-brand-red-dark text-white rounded-pill font-bold py-6"
              >
                <a href={WHATSAPP_LINKS.socioFlotilla} target="_blank" rel="noopener noreferrer">
                  Afiliar {carCount} {carCount === 1 ? 'Vehículo' : 'Vehículos'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 4. Benefits Grid */}
      <SectionContainer background="light">
        <SectionHeading
          badge="Protección Integral"
          title="Beneficios de ser Socio Flotilla"
          subtitle="Diseñado para que tu patrimonio genere utilidades con total seguridad y transparencia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {BENEFICIOS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-card p-8 border border-surface-border shadow-sm hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3">{item.title}</h4>
                <p className="text-text-secondary leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>

      {/* 5. Requirements Section */}
      <SectionContainer background="white">
        <SectionHeading
          badge="Requisitos"
          title="Ser parte de nuestra red es muy fácil"
          subtitle="Cumple con estos sencillos requisitos para dar de alta tus vehículos en la plataforma."
        />

        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REQUIREMENTS.map((req, i) => {
            const Icon = req.icon;
            return (
              <div 
                key={i}
                className="p-6 rounded-card border border-surface-border bg-white shadow-sm flex items-start gap-4 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  {req.badge && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-brand-red text-white mb-2">
                      {req.badge}
                    </span>
                  )}
                  <p className="text-base font-semibold text-text-primary">{req.text}</p>
                  {req.subtext && (
                    <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">{req.subtext}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* 6. Lead Capture Form CRM */}
      <div id="registro-flotilla">
        <LeadSection
          vertical="socio_flotilla"
          titulo="Registra tus vehículos en la flotilla"
          descripcion="Ingresos fijos al mes administrando o entregando unidades a la plataforma. Completa tus datos para recibir asesoría personalizada."
          ctaTexto="Afiliar mis unidades"
          etiquetaMensaje="¿Cuántos autos tienes y qué modelos?"
          mostrarCiudad={true}
        />
      </div>

      {/* 7. FAQs */}
      <SectionContainer background="light">
        <SectionHeading
          badge="Preguntas Frecuentes"
          title="Resolvemos tus Dudas"
          subtitle="Todo lo que necesitas saber antes de incorporar tus unidades a la flotilla."
        />
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full bg-white rounded-card shadow-sm border border-surface-border overflow-hidden">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-surface-border px-6">
                <AccordionTrigger className="text-lg font-semibold text-text-primary hover:text-brand-red py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContainer>

      {/* 8. Call To Action Final */}
      <SectionContainer background="brand">
        <div className="text-center max-w-3xl mx-auto text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            ¡Únete hoy y pon tu coche a generar ingresos!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Escríbenos por WhatsApp o déjanos tus datos para coordinar la inspección de tu vehículo y empezar a ganar sin conducir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100 rounded-pill px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
              asChild
            >
              <a href={WHATSAPP_LINKS.socioFlotilla} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2 text-green-600" />
                Contactar en WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default SocioFlotilla;
