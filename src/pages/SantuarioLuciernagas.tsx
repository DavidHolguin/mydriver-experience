import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINKS } from "@/config/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const images = [
  "/images/luciernagas1.jpg",
  "/images/luciernagas2.jpg",
  "/images/ritualdeluciernagas.webp",
  "/images/mydriverPortada.webp",
];

const steps = [
  {
    step: "01",
    title: "Inicio y Pick-up Seguro",
    description: "Te recogemos en tu punto de partida. Olvídate del estrés de manejar en carretera nocturna y déjalo en manos de profesionales certificados.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Vive la Magia sin Prisa",
    description: "Explora los senderos del bosque iluminado en Nanacamilpa. Tu conductor te espera pacientemente para cuando termine el recorrido.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Retorno Confortable",
    description: "Al finalizar el ritual de las luciérnagas, tu vehículo climatizado estará listo para llevarte de vuelta seguro hasta la puerta de tu hogar u hotel.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Vehículos sanitizados, cómodos y climatizados",
  "Conductores locales altamente capacitados",
  "Viajes redondos con tiempo de espera garantizado",
  "Atención personalizada para familias y grupos",
  "Tarifas transparentes sin cargos sorpresa",
  "Monitoreo GPS en tiempo real de tu trayecto",
];

const SantuarioLuciernagas = () => {
  return (
    <Layout>
      {/* Video Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-75"
          src="/videos/video_generation_0.mp4"
        >
          Tu navegador no soporta video HTML5.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-black/40" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-300" /> Experiencia Exclusiva MyDriver
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Santuario de las <span className="text-gradient">Luciérnagas</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Viaja con total seguridad, confort y puntualidad al espectáculo natural más mágico de México en los bosques de Nanacamilpa.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-pill px-8 py-6 text-lg shadow-elevated hover-lift"
              >
                <a href={WHATSAPP_LINKS.luciernagas} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2" />
                  Reservar mi Traslado
                </a>
              </Button>

              <a
                href="#detalles"
                className="w-full sm:w-auto px-8 py-3.5 rounded-pill bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 backdrop-blur-md transition-all text-center"
              >
                Conocer Más
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Experience Info */}
      <SectionContainer id="detalles" background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="px-4 py-1.5 rounded-pill text-xs font-bold uppercase tracking-wider bg-brand-red/10 text-brand-red inline-block">
              Temporada de Lluvias (Junio - Agosto)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Un Espectáculo Natural Único e Inolvidable
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Cada año, los frondosos bosques de oyamel y pino de Nanacamilpa, Tlaxcala, se transforman en un escenario de fantasía donde millones de luciérnagas sincronizan su bioluminiscencia.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Con MyDriver eliminas la preocupación de conducir de noche por caminos boscosos. Te ofrecemos transporte privado puerta a puerta, choferes profesionales y vehículos con máxima seguridad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                  <span className="text-sm font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red-hover text-white rounded-pill px-8 py-4 font-bold shadow-card">
                <a href={WHATSAPP_LINKS.luciernagas} target="_blank" rel="noopener noreferrer">
                  Consultar Disponibilidad y Tarifas
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-red/20 to-amber-400/20 rounded-card blur-2xl -z-10" />
            <Carousel
              className="w-full max-w-lg mx-auto"
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 3500,
                  stopOnInteraction: true,
                }),
              ]}
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden rounded-card border-none shadow-elevated">
                      <CardContent className="p-0 aspect-[4/3]">
                        <img
                          src={src}
                          alt={`Santuario Luciérnagas ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-brand-navy border-none shadow-md" />
              <CarouselNext className="right-4 bg-white/80 hover:bg-white text-brand-navy border-none shadow-md" />
            </Carousel>
          </div>
        </div>
      </SectionContainer>

      {/* How It Works (Bento Steps) */}
      <SectionContainer background="light">
        <SectionHeading
          badge="Itinerario"
          title="Tu Viaje en 3 Simples Pasos"
          subtitle="Diseñamos una logística integral para que tú y tus acompañantes solo se concentren en disfrutar de la naturaleza."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card p-8 shadow-card border border-border-subtle flex flex-col justify-between hover-lift relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-extrabold text-brand-navy/20 font-display">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Final CTA Banner */}
      <section className="bg-brand-navy text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C41E1E_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-6">
          <span className="px-4 py-1.5 rounded-pill bg-white/10 text-white/90 text-sm font-semibold inline-block">
            Cupos Limitados por Temporada
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            ¿Listo para vivir la magia de las luciérnagas?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Reserva con anticipación tu transporte privado redondo. Coordina tu horario de recogida directamente por WhatsApp.
          </p>
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-pill px-10 py-6 text-lg shadow-elevated hover-lift"
            >
              <a href={WHATSAPP_LINKS.luciernagas} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2" />
                Contactar a un Asesor de Viaje
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SantuarioLuciernagas;
