import { useState } from 'react';
import { Button } from './ui/button';
import { RegisterForm } from './RegisterForm';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  onRegister: () => void;
  registerText?: string;
  whatsappLink?: string;
}

const ServiceCard = ({ title, description, image, link, onRegister, registerText = "Registrarme", whatsappLink }: ServiceCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1 h-11"
          onClick={() => window.location.href = link}
        >
          Más información
        </Button>
        {whatsappLink ? (
          <Button
            asChild
            className="flex-1 h-11 bg-green-500 hover:bg-green-600 text-white gap-2"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              {registerText}
            </a>
          </Button>
        ) : (
          <Button
            className="flex-1 h-11 bg-[#ab1818] hover:bg-[#ab1818]/90 text-white"
            onClick={onRegister}
          >
            {registerText}
          </Button>
        )}
      </div>
    </div>
  </div>
);

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: "Socio Conductor",
      description: "Únete a nuestra red de conductores y genera ingresos extras con tu vehículo.",
      image: "/images/driver-partner.webp",
      link: "/socio-conductor",
      formTitle: "Regístrate como Socio Conductor",
      formSubtitle: "Comienza a generar ingresos con tu vehículo"
    },
    {
      title: "Conductor Standard",
      description: "Forma parte de nuestra flota de conductores profesionales con vehículos de la empresa.",
      image: "/images/standard-driver.webp",
      link: "/conductor-standard",
      formTitle: "Regístrate como Conductor Standard",
      formSubtitle: "Únete a nuestra flota profesional"
    },
    {
      title: "Socio Repartidor",
      description: "Forma parte de nuestra red de repartidores y genera ingresos con entregas.",
      image: "/images/delivery-partner.webp",
      link: "/socio-repartidor",
      formTitle: "Regístrate como Socio Repartidor",
      formSubtitle: "Únete a nuestra red de repartidores"
    },
    {
      title: "Negocio Aliado",
      description: "Incrementa tus ventas y alcance uniéndote a nuestra plataforma.",
      image: "/images/business-partner.webp",
      link: "/negocio-aliado",
      formTitle: "Regístrate como Negocio Aliado",
      formSubtitle: "Haz crecer tu negocio con nosotros"
    },
    {
      title: "MyDriver Cargo",
      description: "Soluciones de transporte y logística para empresas y negocios.",
      image: "/images/cargo-service.webp",
      link: "/mydriver-cargo",
      formTitle: "Solicita MyDriver Cargo",
      formSubtitle: "Soluciones logísticas a tu medida"
    },
    {
      title: "Santuario de las Luciérnagas",
      description: "Te llevamos a vivir la mágica experiencia del avistamiento de luciérnagas.",
      image: "/images/luciernagas1.jpg",
      link: "/santuario-luciernagas",
      registerText: "Reservar",
      whatsappLink: "https://wa.me/5212461977827?text=Hola,%20me%20gustaría%20reservar%20un%20viaje%20al%20Santuario%20de%20las%20Luciérnagas."
    }
  ];

  const selectedServiceData = services.find(s => s.title === selectedService);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre las diferentes formas de colaborar con MyDriver y forma parte de nuestra comunidad en crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              onRegister={() => setSelectedService(service.title)}
            />
          ))}
        </div>

        <RegisterForm
          title={selectedServiceData?.formTitle || ''}
          subtitle={selectedServiceData?.formSubtitle || ''}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      </div>
    </section>
  );
};
