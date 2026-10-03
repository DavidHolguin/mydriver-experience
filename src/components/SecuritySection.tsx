import { motion } from 'framer-motion';
import { Shield, MapPin, Share2, PhoneCall } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';

const securityFeatures = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Botón de seguridad',
    description: 'Conéctate directamente con servicios de emergencia 911 en caso de cualquier eventualidad.',
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Viajes geolocalizados',
    description: 'Monitoreamos cada viaje en tiempo real desde el inicio hasta tu destino final.',
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Comparte tu viaje',
    description: 'Comparte tu ruta y estado del viaje en tiempo real con familiares y amigos.',
  },
  {
    icon: <PhoneCall className="w-8 h-8" />,
    title: 'Estamos aquí para ti',
    description: 'Soporte especializado disponible para ayudarte antes, durante y después de tu viaje.',
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

export const SecuritySection = () => {
  return (
    <SectionContainer id="seguridad" background="dark">
      <SectionHeading
        dark={true}
        badge="Seguridad"
        title="Tu seguridad, nuestra prioridad"
        subtitle="Cada detalle está diseñado pensando en tu protección."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 hover:bg-white/10 transition-colors"
          >
            <div className="bg-[#C41E1E]/20 rounded-2xl p-3 w-14 h-14 flex items-center justify-center text-[#C41E1E] mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};
