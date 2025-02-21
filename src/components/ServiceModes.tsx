
import { CreditCard, Car, Truck, Store, Bike } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Car,
    title: "Socio conductor",
    description: "Genera ingresos con tu vehículo y sé parte de nuestra comunidad de conductores.",
  },
  {
    icon: CreditCard,
    title: "Conductor standar",
    description: "Elige entre comisión por viaje o comisión fija semanal. ¡Tú decides cómo ganar!",
  },
  {
    icon: Bike,
    title: "Socio repartidor",
    description: "Únete a MyDriver ENTREGAS y gana dinero repartiendo en tu ciudad.",
  },
  {
    icon: Store,
    title: "Negocio aliado",
    description: "Impulsa tu negocio con nuestra plataforma de transporte corporativo.",
  },
  {
    icon: Truck,
    title: "MyDriver cargo",
    description: "Soluciones de transporte de carga para tu negocio.",
  },
];

export const ServiceModes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nuestros servicios
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Trabajamos para reinventar la forma en la que se mueve el mundo, para mejor.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="outline" className="w-full">
                Saber más
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
