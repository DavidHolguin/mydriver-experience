import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Car,
  ShieldCheck,
  Clock,
  Users,
  Star,
  MessageSquare,
  MapPin,
  CheckCircle2,
  TrafficCone,
  ParkingCircleOff,
  Smile,
  ChevronDown,
  Calendar,
} from "lucide-react";
import { WHATSAPP_LINKS } from "@/config/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "¿Puedo reservar traslados para varios días del carnaval?",
    a: "¡Totalmente! Puedes programar tu itinerario completo para toda la semana de desfiles, conciertos y eventos con chofer privado asignado.",
  },
  {
    q: "¿Realizan traslados al Aeropuerto de Veracruz (Heriberto Jara)?",
    a: "Sí, coordinamos recogidas y traslados puntuales con monitoreo de vuelos para que llegues a tiempo a tu despegue o llegada.",
  },
  {
    q: "¿Cuáles son las formas de pago?",
    a: "Aceptamos transferencia electrónica directa, pago con tarjeta y efectivo, acordando la tarifa fijada antes de abordar sin sorpresas.",
  },
  {
    q: "¿Cuentan con unidades para familias o grupos numerosos?",
    a: "Sí, contamos con sedanes ejecutivos, SUVs y camionetas tipo Van para grupos que desean viajar juntos de manera confortable.",
  },
];

const benefits = [
  {
    icon: Calendar,
    title: "Reservas Programadas",
    description: "Asegura todos tus traslados a los paseos del carnaval con días de anticipación.",
  },
  {
    icon: Users,
    title: "Conductores Verificados",
    description: "Choferes locales experimentados que dominan las mejores rutas alternas.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Nocturna 24/7",
    description: "Disfruta de las fiestas nocturnas con la certeza de un regreso seguro.",
  },
  {
    icon: Car,
    title: "Confort y Climatización",
    description: "Vehículos modernos, limpios y con aire acondicionado óptimo ante el calor jarocho.",
  },
  {
    icon: Star,
    title: "Tarifas Acordadas",
    description: "Sin tarifas dinámicas abusivas ni multiplicadores sorpresa en horas pico.",
  },
  {
    icon: MapPin,
    title: "Cobertura Total Veracruz - Boca",
    description: "Hoteles, zona costera, macroplaza, malecón y aeropuerto sin restricciones.",
  },
];

const CarnavalVeracruz = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      {/* Video Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover hidden md:block filter brightness-75"
          >
            <source src="/videos/heroCarnavalPc.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover block md:hidden filter brightness-75"
          >
            <source src="/videos/heroCarnavalMobile.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl px-4 py-24 mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-pill bg-brand-red text-white text-xs font-bold tracking-wider uppercase mb-4 shadow-md">
              Veracruz 2025 • Fiesta y Tradición
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Vive el Carnaval, <br />
              <span className="text-gradient">MyDriver te lleva</span>
            </h1>

            <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Despreocúpate del tráfico, el caos de estacionamiento y las tarifas disparadas. Tu transporte privado seguro para la fiesta más alegre del mundo.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-pill px-8 py-6 text-lg shadow-elevated hover-lift"
              >
                <a href={WHATSAPP_LINKS.carnaval} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2" />
                  Reservar mi Viaje
                </a>
              </Button>
              <a
                href="#solucion"
                className="w-full sm:w-auto px-8 py-3.5 rounded-pill bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 backdrop-blur-md transition-all text-center"
              >
                Ver Solución
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison: Problem vs MyDriver Solution */}
      <SectionContainer id="solucion" background="white">
        <SectionHeading
          badge="La Diferencia"
          title="La Alegría es Tuya, el Camino es Nuestro"
          subtitle="El Carnaval de Veracruz es para bailar, disfrutar y gozar la música, no para pasar horas atorado en congestionamientos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Problem Card */}
          <div className="relative rounded-card overflow-hidden p-8 flex flex-col justify-between text-white bg-slate-900 shadow-elevated border border-slate-800 group">
            <img
              src="/images/apuros.webp"
              className="absolute inset-0 w-full h-full object-cover opacity-15 filter grayscale transition-transform duration-700 group-hover:scale-105"
              alt="Carnaval con estrés"
            />
            <div className="relative z-10 space-y-6">
              <div className="inline-block px-3 py-1 rounded-pill bg-red-500/20 text-red-400 text-xs font-bold uppercase">
                Transporte Convencional
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Los Dolores de Cabeza Habituales
              </h3>
              <ul className="space-y-4 text-base text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                    <TrafficCone className="w-5 h-5" />
                  </div>
                  <span>Calles cerradas y tráfico sofocante sin rutas claras</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                    <ParkingCircleOff className="w-5 h-5" />
                  </div>
                  <span>Estacionamientos llenos o a precios exorbitantes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span>Largas filas a altas horas de la madrugada sin taxis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution Card */}
          <div className="relative rounded-card overflow-hidden p-8 flex flex-col justify-between text-white bg-brand-navy shadow-elevated border-2 border-brand-red/40 group">
            <img
              src="/images/carnavalVeracurz.webp"
              className="absolute inset-0 w-full h-full object-cover opacity-20 filter brightness-110 transition-transform duration-700 group-hover:scale-105"
              alt="Carnaval con MyDriver"
            />
            <div className="relative z-10 space-y-6">
              <div className="inline-block px-3 py-1 rounded-pill bg-brand-red/30 text-red-200 text-xs font-bold uppercase">
                Experiencia MyDriver
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Viaja en Primera Clase a la Fiesta
              </h3>
              <ul className="space-y-4 text-base text-gray-200">
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-red/30 flex items-center justify-center text-red-300 shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <span>Punto de recogida programado y rutas ágiles</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-red/30 flex items-center justify-center text-red-300 shrink-0">
                    <Smile className="w-5 h-5" />
                  </div>
                  <span>Llega fresco, relajado y directo a las gradas o desfiles</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-red/30 flex items-center justify-center text-red-300 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span>Regreso seguro a tu hotel o casa al terminar el evento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer background="light">
        <SectionHeading
          badge="Fácil y Rápido"
          title="Reserva tu Unidad en 3 Pasos"
          subtitle="Garantiza tu traslado antes de que se agote la disponibilidad durante las fechas estelares del carnaval."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "1",
              icon: MessageSquare,
              title: "Escríbenos por WhatsApp",
              text: "Haz clic en el botón directo y saluda a nuestro equipo de coordinación.",
            },
            {
              step: "2",
              icon: MapPin,
              title: "Define tu Itinerario",
              text: "Indica fecha, horas, puntos de recogida y número de pasajeros.",
            },
            {
              step: "3",
              icon: CheckCircle2,
              title: "Confirmación Inmediata",
              text: "Recibe los datos de tu conductor y vehículo verificado asignado.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card p-8 shadow-card border border-border-subtle hover-lift text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider mb-1">
                Paso {item.step}
              </span>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-brand-red hover:bg-brand-red-hover text-white rounded-pill px-8 py-6 font-bold shadow-card"
          >
            <a href={WHATSAPP_LINKS.carnaval} target="_blank" rel="noopener noreferrer">
              Chatear para Cotizar y Reservar
            </a>
          </Button>
        </div>
      </SectionContainer>

      {/* Benefits Grid */}
      <SectionContainer background="white">
        <SectionHeading
          badge="Ventajas"
          title="Beneficios de Elegir MyDriver"
          subtitle="Diseñado para que tu única preocupación sea disfrutar de la fiesta."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-surface-light rounded-card p-6 border border-border-subtle hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h4>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer background="light">
        <SectionHeading
          badge="Dudas"
          title="Preguntas Frecuentes sobre el Carnaval"
          subtitle="Resolvemos tus inquietudes para que viajes con total certidumbre."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card border border-border-subtle shadow-soft overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-semibold text-brand-navy pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-red shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-secondary text-base leading-relaxed border-t border-border-subtle/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Final CTA */}
      <section className="bg-brand-red text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            ¿Listo para el Carnaval Más Alegre de México?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Asegura tu chofer privado para los paseos de carros alegóricos y conciertos masivos. ¡Los espacios son limitados!
          </p>
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100 font-bold rounded-pill px-10 py-6 text-lg shadow-elevated hover-lift"
            >
              <a href={WHATSAPP_LINKS.carnaval} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2 text-brand-red" />
                Agendar mi Unidad por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarnavalVeracruz;
