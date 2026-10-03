import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINKS } from '@/config/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface ExperienceItem {
  id: string;
  title: string;
  seasonBadge: string;
  description: string;
  image: string;
  detailLink: string;
  whatsappLink: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'luciernagas',
    title: 'Santuario de las Luciérnagas',
    seasonBadge: 'Temporada: Junio – Agosto',
    description: 'Te llevamos a vivir la mágica experiencia del avistamiento de luciérnagas en los bosques de Nanacamilpa, Tlaxcala. Traslados redondos seguros y confortables.',
    image: '/images/ritualdeluciernagas.webp',
    detailLink: '/santuario-luciernagas',
    whatsappLink: WHATSAPP_LINKS.luciernagas,
  },
  {
    id: 'carnaval',
    title: 'Transporte al Carnaval de Veracruz',
    seasonBadge: 'Temporada: Junio – Julio',
    description: 'Olvídate del tráfico, del estacionamiento y las complicaciones. Tu conductor privado está listo para llevarte a los desfiles y fiestas más alegres.',
    image: '/images/carnavalVeracurz.webp',
    detailLink: '/carnaval-veracruz',
    whatsappLink: WHATSAPP_LINKS.carnaval,
  },
];

export const ExperienceSection = () => {
  return (
    <SectionContainer id="experiencias" background="light">
      <SectionHeading
        badge="Únicamente por Temporadas"
        title="MyDriver Experience"
        subtitle="Rutas turísticas y traslados a eventos emblemáticos diseñados para viajar sin preocupaciones. Disponibles exclusivamente en sus fechas oficiales."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-card overflow-hidden shadow-card border border-border-subtle hover-lift flex flex-col justify-between group"
          >
            {/* Image Header with Season Badge */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill bg-brand-navy/90 backdrop-blur-md text-white text-xs font-semibold shadow-md border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-brand-red" />
                  {exp.seasonBadge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Exclusivo MyDriver Experience
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                  {exp.title}
                </h3>
              </div>
            </div>

            {/* Content & Actions */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:flex-1 rounded-pill border-border-subtle hover:border-brand-red text-text-primary hover:text-brand-red hover:bg-surface-light h-12 text-sm font-semibold transition-all"
                >
                  <Link to={exp.detailLink}>
                    Más información
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  className="w-full sm:flex-1 bg-brand-red hover:bg-brand-red-hover text-white rounded-pill h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <a href={exp.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 mr-2" />
                    Reservar ahora
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
