import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Search,
  Car,
} from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_NUMBER } from "@/config/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export interface Destination {
  id: string;
  name: string;
  location: string;
  season: string;
  category: "Temporada" | "Pueblos Mágicos" | "Cultura" | "Ecoturismo";
  description: string;
  image: string;
  highlights: string[];
  dedicatedPage?: string;
  whatsappMessage: string;
}

export const destinationsData: Destination[] = [
  {
    id: "luciernagas",
    name: "Santuario de las Luciérnagas",
    location: "Nanacamilpa, Tlaxcala",
    season: "Junio – Agosto",
    category: "Temporada",
    description: "Vive la magia de millones de luciérnagas iluminando los bosques de Nanacamilpa. Un espectáculo natural inolvidable con traslado privado y tiempo de espera garantizado.",
    image: "/images/ritualdeluciernagas.webp",
    highlights: ["Recogida en tu hotel o domicilio", "Choferes locales verificados", "Espera completa durante el recorrido", "Unidades climatizadas y seguras"],
    dedicatedPage: "/santuario-luciernagas",
    whatsappMessage: "Hola, me gustaría cotizar y reservar mi viaje redondo al Santuario de las Luciérnagas.",
  },
  {
    id: "valquirico",
    name: "Val'Quirico",
    location: "Nativitas, Tlaxcala",
    season: "Todo el año / Fines de semana",
    category: "Pueblos Mágicos",
    description: "Pueblo de arquitectura medieval europea con callejones empedrados, gastronomía de autor, galerías y eventos ecuestres. Disfruta sin preocuparte por el estacionamiento.",
    image: "/images/destino-valquirico.jpg",
    highlights: ["Traslado puerta a puerta", "Tiempo libre flexible", "Ideal para parejas y familias", "Viajes redondos programados"],
    whatsappMessage: "Hola, quiero información y cotización para un traslado privado a Val'Quirico.",
  },
  {
    id: "carnaval",
    name: "Carnaval de Veracruz",
    location: "Veracruz y Boca del Río",
    season: "Junio – Julio",
    category: "Temporada",
    description: "Asiste a la fiesta más alegre de México sin sufrir el tráfico de la costa ni tarifas dinámicas. Tu chofer privado te deja a unos pasos de los desfiles y el malecón.",
    image: "/images/carnavalVeracurz.webp",
    highlights: ["Viajes directos y fluidos", "Seguridad nocturna 24/7", "Traslados a hoteles y aeropuerto", "Tarifas acordadas sin sorpresas"],
    dedicatedPage: "/carnaval-veracruz",
    whatsappMessage: "Hola, quiero reservar mi transporte para los eventos del Carnaval de Veracruz.",
  },
  {
    id: "huamantla",
    name: "Huamantla Pueblo Mágico",
    location: "Huamantla, Tlaxcala",
    season: "Todo el año • Estelar en Agosto",
    category: "Cultura",
    description: "Famoso por su arte efímero en tapetes de aserrín multicolor, la tradicional 'Noche que Nadie Duerme', haciendas y el Museo Nacional del Títere.",
    image: "/images/destino-huamantla.jpg",
    highlights: ["Recorridos coloniales", "Traslado a la fiesta patronal", "Espacio para compras y recuerdos", "Monitoreo GPS en tiempo real"],
    whatsappMessage: "Hola, me interesa agendar un traslado privado para visitar Huamantla Pueblo Mágico.",
  },
  {
    id: "haciendas",
    name: "Ruta de Haciendas Históricas",
    location: "Tlaxco y Huamantla, Tlaxcala",
    season: "Todo el año",
    category: "Cultura",
    description: "Casonas virreinales, arquitectura señorial y degustación del tradicional aguamiel y pulque artesanal. Una inmersión en la historia del campo mexicano.",
    image: "/images/destino-haciendas.jpg",
    highlights: ["Visita a haciendas emblemáticas", "Itinerario a la medida", "Seguridad y comodidad total", "Vehículos para grupos y familias"],
    whatsappMessage: "Hola, deseo cotizar una ruta por las Haciendas históricas de Tlaxcala con MyDriver.",
  },
];

export const Destinos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Todos", "Temporada", "Pueblos Mágicos", "Cultura"];

  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesCategory =
      selectedCategory === "Todos" || dest.category === selectedCategory;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white pt-36 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C41E1E_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 text-white text-sm font-semibold tracking-wide backdrop-blur-md border border-white/20 mb-4">
              <Sparkles className="w-4 h-4 text-amber-300" /> MyDriver Experience
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Destinos & Experiencias de Temporada
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Viaja a los rincones más mágicos, festivales y paisajes emblemáticos con la seguridad, puntualidad y confort de un conductor privado dedicado para ti y tus acompañantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="bg-white border-b border-border-subtle sticky top-20 z-30 shadow-soft">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-pill text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-brand-red text-white shadow-sm"
                      : "bg-surface-light text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Buscar destino o lugar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-pill border border-border-subtle bg-surface-light focus:bg-white focus:outline-none focus:border-brand-red transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <SectionContainer background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredDestinations.map((dest, index) => {
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dest.whatsappMessage)}`;

            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-card overflow-hidden shadow-card border border-border-subtle flex flex-col justify-between hover-lift group"
              >
                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <Badge className="bg-brand-navy/90 backdrop-blur-md text-white border border-white/20 text-xs px-3 py-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-brand-red" />
                      {dest.season}
                    </Badge>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-pill bg-white/90 text-brand-navy shadow-sm">
                      {dest.category}
                    </span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-amber-300 font-semibold flex items-center gap-1 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {dest.location}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md leading-snug">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {dest.description}
                  </p>

                  <div className="space-y-2 border-t border-border-subtle pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Incluye en tu traslado:
                    </p>
                    <ul className="space-y-1.5 text-xs text-text-secondary">
                      {dest.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col gap-2">
                    {dest.dedicatedPage ? (
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-pill border-border-subtle hover:border-brand-red text-text-primary hover:text-brand-red text-xs h-11 font-semibold"
                        >
                          <Link to={dest.dedicatedPage}>
                            Ver Detalle
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          className="bg-brand-red hover:bg-brand-red-hover text-white rounded-pill text-xs h-11 font-bold shadow-sm"
                        >
                          <a href={waLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5 mr-1" />
                            Reservar
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <Button
                        asChild
                        className="w-full bg-brand-red hover:bg-brand-red-hover text-white rounded-pill text-sm h-11 font-bold shadow-sm"
                      >
                        <a href={waLink} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 mr-2" />
                          Cotizar y Reservar por WhatsApp
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20 bg-white rounded-card max-w-md mx-auto p-8 border border-border-subtle">
            <MapPin className="w-12 h-12 text-text-muted mx-auto mb-3" />
            <h4 className="text-lg font-bold text-brand-navy">No se encontraron destinos</h4>
            <p className="text-sm text-text-secondary mt-1">
              Intenta con otra búsqueda o selecciona la categoría "Todos".
            </p>
          </div>
        )}
      </SectionContainer>

      {/* Custom Group Trip Banner */}
      <section className="bg-brand-navy text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <span className="px-4 py-1.5 rounded-pill bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider inline-block">
            Viajes Grupales y a Medida
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            ¿Tienes otro destino en mente para ti o tu grupo?
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Organizamos traslados ejecutivos y camionetas tipo Van para bodas, congresos, graduaciones o paseos turísticos familiares en toda la región.
          </p>
          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-pill px-8 py-6 text-base shadow-elevated"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola MyDriver, me gustaría cotizar un viaje personalizado para un grupo a un destino especial.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 mr-2" />
                Cotizar Viaje Personalizado
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destinos;
