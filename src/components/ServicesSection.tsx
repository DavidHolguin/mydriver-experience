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
            className="flex-1 h-11 bg-[#ab1818] hover:bg-[#ab1818]/90 text-white"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
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
      title: "Socio Flotilla",
      description: "Gana hasta $10,000 mensuales sin conducir. Tu coche trabaja por ti.",
      image: "/images/heroSocioFlotilla.webp",
      link: "/socio-flotilla",
      registerText: "Quiero ser socio",
      whatsappLink: "https://wa.me/5212461569161?text=¡Hola%20MyDriver!%20Quiero%20información%20para%20ser%20socio%20flotilla."
    },
    {
      title: "Socio Conductor",
      description: "Únete a nuestra red de conductores y genera ingresos extras con tu vehículo.",
      image: "/images/driver-partner.webp",
      link: "/socio-conductor",
      formTitle: "Regístrate como Socio Conductor",
      formSubtitle: "Comienza a generar ingresos con tu vehículo",
      whatsappLink: "https://wa.me/5212461569161?text=Hola,%20me%20gustaría%20registrarme%20para%20el%20servicio%20de%20Socio%20Conductor."
    },
    {
      title: "Conductor Standard",
      description: "Forma parte de nuestra flota de conductores profesionales con vehículos de la empresa.",
      image: "/images/standard-driver.webp",
      link: "/conductor-standard",
      formTitle: "Regístrate como Conductor Standard",
      formSubtitle: "Únete a nuestra flota profesional",
      whatsappLink: "https://wa.me/5212461569161?text=Hola,%20me%20gustaría%20registrarme%20para%20el%20servicio%20de%20Conductor%20Standard."
    },
    {
      title: "Socio Repartidor",
      description: "Forma parte de nuestra red de repartidores y genera ingresos con entregas.",
      image: "/images/delivery-partner.webp",
      link: "/socio-repartidor",
      formTitle: "Regístrate como Socio Repartidor",
      formSubtitle: "Únete a nuestra red de repartidores",
      whatsappLink: "https://wa.me/5212461569161?text=Hola,%20me%20gustaría%20registrarme%20para%20el%20servicio%20de%20Socio%20Repartidor."
    },
    {
      title: "Negocio Aliado",
      description: "Incrementa tus ventas y alcance uniéndote a nuestra plataforma.",
      image: "/images/business-partner.webp",
      link: "/negocio-aliado",
      formTitle: "Regístrate como Negocio Aliado",
      formSubtitle: "Haz crecer tu negocio con nosotros",
      whatsappLink: "https://wa.me/5212461569161?text=Hola,%20me%20gustaría%20registrarme%20para%20el%20servicio%20de%20Negocio%20Aliado."
    },
    {
      title: "MyDriver Cargo",
      description: "Soluciones de transporte y logística para empresas y negocios.",
      image: "/images/cargo-service.webp",
      link: "/mydriver-cargo",
      formTitle: "Solicita MyDriver Cargo",
      formSubtitle: "Soluciones logísticas a tu medida",
      whatsappLink: "https://wa.me/5212461569161?text=Hola,%20me%20gustaría%20registrarme%20para%20el%20servicio%20de%20MyDriver%20Cargo."
    },
    {
      title: "Santuario de las Luciérnagas",
      description: "Te llevamos a vivir la mágica experiencia del avistamiento de luciérnagas.",
      image: "/images/luciernagas1.jpg",
      link: "/santuario-luciernagas",
      registerText: "Reservar ahora",
      whatsappLink: "https://wa.me/5212461569161?text=Hola,%20me%20gustaría%20reservar%20un%20viaje%20al%20Santuario%20de%20las%20Luciérnagas."
    },
    {
      title: "Transporte al Carnaval de Veracruz",
      description: "Disfruta de la fiesta más alegre del mundo. Te llevamos con seguridad y comodidad.",
      image: "/images/carnavalVeracurz.webp",
      link: "/carnaval-veracruz",
      registerText: "Reservar ahora",
      whatsappLink: "https://wa.me/5212461569161?text=Hola,%20quiero%20reservar%20mi%20viaje%20para%20el%20Carnaval%20de%20Veracruz."
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
