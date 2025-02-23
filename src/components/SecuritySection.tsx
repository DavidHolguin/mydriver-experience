import { Shield, MapPin, Headphones, Bell, Share2 } from 'lucide-react';

const SecurityCard = ({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const SecuritySection = () => {
  const features = [
    {
      icon: Bell,
      title: "Botón de seguridad",
      description: "Añade una persona de confianza para que reciba notificaciones cada vez que viajes, comparta tu ubicación en tiempo real o contacta con emergencias."
    },
    {
      icon: MapPin,
      title: "Viajes geolocalizados",
      description: "Cada viaje está geolocalizado y puedes compartir tu viaje con tus amigos o familiares para que sepan dónde estás."
    },
    {
      icon: Share2,
      title: "Comparte tu viaje",
      description: "Comparte los detalles de tu viaje con tus seres queridos para que puedan seguir tu ruta en tiempo real."
    },
    {
      icon: Headphones,
      title: "Estamos aquí para ti",
      description: "Nuestro equipo de atención al cliente está disponible 24/7 para ayudarte y responder a tus dudas y preguntas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tu seguridad, nuestro compromiso
          </h2>
          <p className="text-gray-600 text-lg">
            Cada detalle que forma parte de nuestro servicio se ha creado teniendo en cuenta tu seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <SecurityCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
