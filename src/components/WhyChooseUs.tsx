
import { Shield, MapPin, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Botón de seguridad",
    description: "Añade una persona de confianza para que reciba notificaciones cada vez que viajes, comparta tu ubicación en tiempo real o contacta con emergencias."
  },
  {
    icon: MapPin,
    title: "Viajes geolocalizados",
    description: "Cada viaje está geolocalizado y puedes compartir tu viaje con tus amigos o familiares para que sepan dónde estás."
  },
  {
    icon: MessageSquare,
    title: "Estamos aquí para ti",
    description: "Nuestro equipo de atención al cliente está disponible para ayudarte y responder a tus dudas y preguntas."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tu seguridad, nuestro compromiso
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Cada detalle que forma parte de nuestro servicio se ha creado teniendo en cuenta tu seguridad
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
