import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { LeadSection } from '@/components/LeadSection';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINKS } from '@/config/constants';
import { 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Building2, 
  FileText, 
  BarChart3, 
  Award, 
  Lock, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PLAZAS = [
  {
    ciudad: "Tlaxcala",
    estado: "Fase de Expansión Activa",
    cuposTotales: 9,
    cuposRestantes: 3,
    destacado: "Plaza origen con base operativa consolidada y alta demanda de pasajeros.",
  },
  {
    ciudad: "Puebla",
    estado: "Fase de Lanzamiento",
    cuposTotales: 9,
    cuposRestantes: 4,
    destacado: "Gran metrópoli con corredores universitarios, corporativos y de turismo.",
  },
  {
    ciudad: "Guadalajara",
    estado: "Fase de Convocatoria",
    cuposTotales: 9,
    cuposRestantes: 6,
    destacado: "Hub de innovación tecnológica y segunda zona metropolitana de México.",
  },
];

const BENEFICIOS = [
  {
    icon: TrendingUp,
    title: "Retorno Atractivo y Flujo Mensual",
    description: "Participa de los ingresos operativos de cada viaje completado en la ciudad seleccionada con liquidaciones transparentes periódicas."
  },
  {
    icon: ShieldCheck,
    title: "Certeza Jurídica Blindada",
    description: "Tu participación se respalda mediante contratos mercantiles verificados legalmente, protegiendo tu patrimonio sin complejidades corporativas."
  },
  {
    icon: BarChart3,
    title: "Métricas y Transparencia en Vivo",
    description: "Acceso exclusivo a indicadores clave de rendimiento (KPIs), volumen de viajes, conductores activos y facturación general de tu plaza."
  },
  {
    icon: Award,
    title: "Estatus de Cofundador Local",
    description: "Forma parte del consejo consultivo regional, con voz activa en decisiones estratégicas de expansión, alianzas y tarifas locales."
  },
  {
    icon: Building2,
    title: "Ecosistema Tecnológico Integral",
    description: "Plataforma multivertical con apps de pasajeros, conductores, reparto de paquetería (Cargo) y turismo regional (MyDriver Experience)."
  },
  {
    icon: Lock,
    title: "Cupo Rigurosamente Limitado",
    description: "Solo admitimos un máximo de 9 socios por plaza para garantizar rentabilidad significativa y trato directo y exclusivo con los fundadores."
  }
];

const REQUISITOS = [
  "Capacidad de inversión inicial para desarrollo y escalabilidad de plaza.",
  "Compromiso de colaboración estratégica o visión de expansión en su entidad.",
  "Cumplimiento de filtros de validación de identidad y origen de fondos.",
  "Firma de convenio de confidencialidad (NDA) previo al acceso a estados financieros."
];

const FAQS = [
  {
    question: "¿En qué consiste exactamente el rol de Socio Inversionista?",
    answer: "El socio inversionista o cofundador local aporta capital y visión estratégica para impulsar la penetración de MyDriver en su ciudad. A cambio, recibe un porcentaje directo del volumen transaccional de los viajes y servicios completados en su entidad."
  },
  {
    question: "¿Por qué el cupo está estrictamente limitado a 9 socios por ciudad?",
    answer: "Limitamos cada plaza a 9 cupos para evitar la dispersión de rendimientos, garantizar una comunicación ejecutiva directa con los fundadores y asegurar que cada socio obtenga una tasa de retorno altamente atractiva sobre el mercado."
  },
  {
    question: "¿Cómo se formaliza legalmente la inversión?",
    answer: "Todo el proceso se formaliza mediante contratos mercantiles de participación con validez notarial. Este esquema otorga certeza jurídica plena sobre derechos económicos y rendimientos, evitando contingencias laborales o societarias."
  },
  {
    question: "¿Qué ciudades están disponibles actualmente?",
    answer: "Iniciamos la convocatoria oficial en Tlaxcala, Puebla y Guadalajara. Una vez cubiertos los 9 cupos de cada plaza, se cerrará la recepción para esas entidades."
  },
  {
    question: "¿Cuál es el siguiente paso para postularme?",
    answer: "Completa el formulario inferior o contáctanos directamente vía WhatsApp. Nuestro equipo directivo coordinará una reunión privada donde te presentaremos el Plan de Negocios, proyecciones financieras y el borrador de contrato."
  }
];

const SocioInversionista = () => {
  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-brand-navy text-white pt-24 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('/images/heroSocioFlotilla.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/95 to-brand-navy" />

        <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs md:text-sm font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 text-brand-red" />
            Convocatoria Exclusiva · 9 Plazas por Ciudad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6"
          >
            Sé Socio Inversionista y <span className="text-brand-red">Cofundador</span> de MyDriver
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed"
          >
            Participa en la expansión del ecosistema de movilidad privada y turismo más rentable de México. Respaldo contractual verificado y rendimientos sobre el volumen transaccional de tu ciudad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red-dark text-white rounded-pill px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              onClick={() => {
                const formEl = document.getElementById('registro-inversionista');
                formEl?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Postularme al Programa
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-pill px-8 py-6 text-lg font-semibold w-full sm:w-auto backdrop-blur-sm"
              asChild
            >
              <a href={WHATSAPP_LINKS.socioInversionista} target="_blank" rel="noopener noreferrer">
                Hablar con Dirección
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Plazas y Cupos Disponibles */}
      <SectionContainer background="white">
        <SectionHeading
          badge="Disponibilidad Inmediata"
          title="Plazas en Fase de Convocatoria"
          subtitle="Para salvaguardar la rentabilidad de cada socio, el ingreso está rigurosamente topado a nueve personas por ciudad."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {PLAZAS.map((plaza, idx) => (
            <motion.div
              key={plaza.ciudad}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-card p-8 border-2 border-surface-border hover:border-brand-red/40 hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-red" />
                    <h3 className="text-2xl font-bold text-text-primary">{plaza.ciudad}</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 text-brand-red border border-red-200">
                    {plaza.estado}
                  </span>
                </div>

                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {plaza.destacado}
                </p>
              </div>

              <div className="pt-6 border-t border-surface-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase font-bold text-gray-400">Cupos Disponibles:</span>
                  <span className="text-lg font-extrabold text-brand-red">
                    {plaza.cuposRestantes} de {plaza.cuposTotales}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-brand-red h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${((plaza.cuposTotales - plaza.cuposRestantes) / plaza.cuposTotales) * 100}%` }}
                  />
                </div>
                <p className="text-[11px] text-gray-400 mt-2 text-right">
                  {plaza.cuposTotales - plaza.cuposRestantes} asignados
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* 3. Beneficios Estratégicos */}
      <SectionContainer background="light">
        <SectionHeading
          badge="Propuesta de Valor"
          title="¿Por qué invertir en MyDriver?"
          subtitle="Combinamos tecnología propia, tracción comprobada y un modelo comercial justo para conductores y pasajeros."
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

      {/* 4. Marco Legal y Certeza */}
      <SectionContainer background="white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-navy to-[#182a3a] text-white rounded-[32px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-brand-red mb-4">
              <ShieldCheck className="w-8 h-8" />
              <span className="text-sm font-bold uppercase tracking-wider text-white/90">Seguridad Financiera y Legal</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
              Tranquilidad respaldada mediante contratos mercantiles notariales
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              Entendemos la importancia de reglas claras. El modelo de Socio Inversionista se suscribe bajo instrumentos contractuales sólidos que definen porcentajes de rendimiento, fechas de pago y auditoría de métricas, sin las fricciones societarias ni la burocracia de esquemas de capital cerrado tradicionales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {REQUISITOS.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 5. Lead Form CRM */}
      <div id="registro-inversionista">
        <LeadSection
          vertical="socio_inversionista"
          titulo="Postulación a Socio Inversionista"
          descripcion="Déjanos tus datos. Un director del equipo fundador se comunicará contigo confidencialmente por WhatsApp para presentarte el dossier de inversión."
          ctaTexto="Enviar Solicitud de Postulación"
          etiquetaMensaje="¿En qué ciudad te interesa participar y qué perfil profesional o empresarial tienes?"
          mostrarCiudad={true}
        />
      </div>

      {/* 6. Preguntas Frecuentes */}
      <SectionContainer background="light">
        <SectionHeading 
          badge="Dudas Frecuentes"
          title="Preguntas sobre el Programa" 
          subtitle="Resolvemos las principales inquietudes sobre la inversión y el esquema de colaboración."
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

      {/* 7. Call To Action Final */}
      <SectionContainer background="brand">
        <div className="text-center max-w-3xl mx-auto text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Asegura tu lugar en tu ciudad antes de que se completen los cupos
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Las 9 plazas por entidad se asignan por orden de postulación y validación de perfil. Conversa hoy mismo con la dirección de MyDriver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100 rounded-pill px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
              asChild
            >
              <a href={WHATSAPP_LINKS.socioInversionista} target="_blank" rel="noopener noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default SocioInversionista;
