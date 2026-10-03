import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Sparkles, Calendar, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const services = [
  {
    id: 'flotilla',
    title: 'Socio Flotilla',
    description: 'Pon tus autos a generar hasta $10,000 MXN mensuales fijos sin conducirlos con monitoreo GPS.',
    image: '/images/flotilla-corporativa.jpg',
    link: '/socio-flotilla',
    badge: '$10,000/mes',
    className: 'lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[580px]',
  },
  {
    id: 'inversionista',
    title: 'Socio Inversionista',
    description: 'Cofundador local. Cupo limitado a 9 plazas por ciudad con rendimiento transaccional notariado.',
    image: '/images/socio-inversionista-hero.jpg',
    link: '/socio-inversionista',
    badge: '9 cupos',
    className: 'col-span-1 row-span-1 min-h-[250px] lg:min-h-[275px]',
  },
  {
    id: 'conductor',
    title: 'Socio Conductor',
    description: 'Aceptamos particulares y taxis. Elige 15% por viaje o tarifa plana de $4,500/mes.',
    image: '/images/conductor-hero-nuevo.png',
    link: '/socio-conductor',
    badge: 'Autos & Taxis',
    className: 'col-span-1 row-span-1 min-h-[250px] lg:min-h-[275px]',
  },
  {
    id: 'cargo',
    title: 'MyDriver Cargo',
    description: 'Soluciones de transporte y logística para empresas y mudanzas.',
    image: '/images/cargo-service.webp',
    link: '/mydriver-cargo',
    className: 'col-span-1 row-span-1 min-h-[250px] lg:min-h-[275px]',
  },
  {
    id: 'repartidor',
    title: 'Socio Repartidor',
    description: 'Genera ingresos con entregas locales y paquetería express.',
    image: '/images/delivery-partner.webp',
    link: '/socio-repartidor',
    className: 'col-span-1 row-span-1 min-h-[250px] lg:min-h-[275px]',
  },
  {
    id: 'negocio',
    title: 'Negocio Aliado',
    description: 'Incrementa tus ventas y alcance uniéndote a nuestra plataforma comercial.',
    image: '/images/business-partner.webp',
    link: '/negocio-aliado',
    className: 'col-span-1 row-span-1 min-h-[250px] lg:min-h-[275px]',
  },
];

const destinationSlides = [
  {
    id: 'valquirico',
    name: "Val'Quirico",
    season: 'Todo el año • Fines de semana',
    location: 'Nativitas, Tlaxcala',
    image: '/images/destino-valquirico.jpg',
    description: 'Pueblo de arquitectura medieval europea, callejones empedrados y alta gastronomía.',
    link: '/destinos',
  },
  {
    id: 'luciernagas',
    name: 'Santuario de las Luciérnagas',
    season: 'Temporada: Junio – Agosto',
    location: 'Nanacamilpa, Tlaxcala',
    image: '/images/ritualdeluciernagas.webp',
    description: 'Avistamiento de millones de luciérnagas en los frondosos bosques de Nanacamilpa.',
    link: '/santuario-luciernagas',
  },
  {
    id: 'carnaval',
    name: 'Carnaval de Veracruz',
    season: 'Temporada: Junio – Julio',
    location: 'Veracruz y Boca del Río',
    image: '/images/carnavalVeracurz.webp',
    description: 'La fiesta más alegre del mundo sin complicaciones de tráfico ni estacionamiento.',
    link: '/carnaval-veracruz',
  },
  {
    id: 'haciendas',
    name: 'Ruta de Haciendas Históricas',
    season: 'Todo el año',
    location: 'Tlaxco y Huamantla, Tlaxcala',
    image: '/images/destino-haciendas.jpg',
    description: 'Casonas coloniales señoriales y tradición pulquera en el corazón de Tlaxcala.',
    link: '/destinos',
  },
  {
    id: 'huamantla',
    name: 'Huamantla Pueblo Mágico',
    season: 'Todo el año • Estelar en Agosto',
    location: 'Huamantla, Tlaxcala',
    image: '/images/destino-huamantla.jpg',
    description: 'Arte efímero en tapetes de aserrín multicolor y la Noche que Nadie Duerme.',
    link: '/destinos',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ServicesSection = () => {
  return (
    <SectionContainer id="servicios" background="light">
      <SectionHeading
        badge="Servicios"
        title="Nuestros Servicios"
        subtitle="Descubre las diferentes formas de moverte y crecer con MyDriver."
      />

      {/* Grid of Permanent Services */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[250px] lg:auto-rows-[275px] mb-12"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants} className={service.className}>
            <Link to={service.link} className="group relative block w-full h-full overflow-hidden rounded-[24px] shadow-sm">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300" />
              
              {service.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold shadow-md">
                    {service.badge}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm md:text-base line-clamp-2 mb-4 opacity-100 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                  {service.description}
                </p>
                <div className="flex items-center text-red-400 font-semibold opacity-100 lg:opacity-0 lg:-translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300">
                  Descubre más <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Dedicated Section: MyDriver Experience with Destination Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-card overflow-hidden shadow-elevated border border-border-subtle p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image Carousel of Destinations */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <Carousel
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 3500,
                    stopOnInteraction: false,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {destinationSlides.map((slide) => (
                    <CarouselItem key={slide.id}>
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900 group">
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        
                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-brand-navy/90 backdrop-blur-md text-white text-xs font-semibold shadow-md border border-white/20">
                            <Calendar className="w-3.5 h-3.5 text-brand-red" />
                            {slide.season}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-pill bg-brand-red text-white shadow-sm">
                            <Sparkles className="w-3 h-3" /> Exclusivo
                          </span>
                        </div>

                        {/* Bottom Slide Info */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-xs text-amber-300 font-semibold flex items-center gap-1 mb-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {slide.location}
                          </p>
                          <h4 className="text-xl sm:text-2xl font-bold drop-shadow-md mb-1">
                            {slide.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 font-light">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 bg-white/80 hover:bg-white text-brand-navy border-none shadow-md" />
                <CarouselNext className="right-3 bg-white/80 hover:bg-white text-brand-navy border-none shadow-md" />
              </Carousel>
            </div>
            <p className="text-[11px] text-text-muted mt-2 text-center">
              Desliza para ver fotos de nuestros destinos por temporada
            </p>
          </div>

          {/* Right Column: Information & Direct Action to Destinations Page */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-pill bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Únicamente por Temporadas
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
                MyDriver Experience
              </h3>
            </div>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Viaja a festivales emblemáticos, reservas naturales protegidas y pueblos mágicos con chofer privado dedicado, traslados redondos y tiempo de espera garantizado.
            </p>

            <div className="space-y-2.5 pt-1">
              {[
                "Santuario de las Luciérnagas (Nanacamilpa, Tlaxcala)",
                "Val'Quirico y Pueblos Medievales",
                "Carnaval de Veracruz (Desfiles y Macroplaza)",
                "Ruta de Haciendas Históricas y Pulqueras",
                "Huamantla Pueblo Mágico (Arte en Aserrín)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-brand-red hover:bg-brand-red-hover text-white rounded-pill px-6 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <Link to="/destinos">
                  Ver Todos los Destinos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-pill border-border-subtle hover:border-brand-red text-text-primary hover:text-brand-red h-12 text-sm font-semibold"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola MyDriver, me interesa solicitar información sobre las rutas y destinos de MyDriver Experience.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 mr-2 text-brand-red" />
                  Cotizar por WhatsApp
                </a>
              </Button>
            </div>
          </div>

        </div>
      </motion.div>
    </SectionContainer>
  );
};
