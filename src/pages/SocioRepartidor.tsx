
import { useState } from 'react';
import { Bike, Clock, DollarSign, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { DownloadBar } from '@/components/DownloadBar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: DollarSign,
    title: "Ganancias competitivas",
    description: "Recibe el 100% de tus propinas y gana por cada entrega"
  },
  {
    icon: Clock,
    title: "Horario flexible",
    description: "Decide cuándo y cuánto tiempo quieres trabajar"
  },
  {
    icon: Shield,
    title: "Seguro incluido",
    description: "Cobertura durante tus entregas sin costo adicional"
  },
  {
    icon: Bike,
    title: "Equipo necesario",
    description: "Te proporcionamos la mochila térmica y uniformes"
  }
];

const requirements = [
  "Ser mayor de 18 años",
  "Identificación oficial vigente",
  "CURP",
  "Bicicleta o motocicleta propia",
  "Smartphone compatible",
  "Disponibilidad para trabajar"
];

const SocioRepartidor = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary/5 pt-20 pb-32">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Gana dinero haciendo entregas
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Únete a MyDriver ENTREGAS y genera ingresos extras en tus tiempos libres.
                </p>
                <Button size="lg" className="bg-primary text-white">
                  Regístrate como repartidor
                </Button>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Repartidor MyDriver"
                  className="rounded-2xl shadow-xl animate-fade-in"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Beneficios de ser Repartidor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title}
                  className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                >
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Qué necesitas para empezar?
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-6">
                {requirements.map((req, index) => (
                  <div 
                    key={req}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm animate-fade-in"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Comienza hoy mismo
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Forma parte de la comunidad de repartidores más grande y mejor pagada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white">
                Quiero ser repartidor
              </Button>
              <Button size="lg" variant="outline">
                Más información
              </Button>
            </div>
          </div>
        </section>
      </div>
      <DownloadBar />
    </>
  );
};

export default SocioRepartidor;
