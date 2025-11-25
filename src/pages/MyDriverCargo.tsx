import { useState } from 'react';
import { Truck, Package, ShieldCheck, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { AppPromptModal } from '@/components/AppPromptModal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const benefits = [
  {
    icon: Truck,
    title: "Flota especializada",
    description: "Vehículos adaptados para todo tipo de carga"
  },
  {
    icon: Package,
    title: "Múltiples servicios",
    description: "Desde paquetería hasta mudanzas comerciales"
  },
  {
    icon: ShieldCheck,
    title: "Carga asegurada",
    description: "Seguro incluido en todos los envíos"
  },
  {
    icon: Timer,
    title: "Entregas programadas",
    description: "Coordina envíos según tu calendario"
  }
];

const faqs = [
  {
    question: "¿Qué tipos de carga pueden transportar?",
    answer: "Manejamos todo tipo de carga: paquetería, mudanzas, carga comercial, materiales de construcción y más."
  },
  {
    question: "¿Cuál es el área de cobertura?",
    answer: "Operamos en las principales ciudades del país, con servicios locales y foráneos."
  },
  {
    question: "¿Cómo se garantiza la seguridad de la carga?",
    answer: "Todos nuestros envíos están asegurados y monitoreados en tiempo real mediante GPS."
  }
];

const MyDriverCargo = () => {
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
                  Soluciones de carga a tu medida
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transporte de carga confiable y seguro para tus necesidades logísticas.
                </p>
                <Button
                  size="lg"
                  className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white"
                  onClick={() => window.open("https://wa.me/5212461569161?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20MyDriver%20Cargo.", "_blank")}
                >
                  Cotizar servicio
                </Button>
              </div>
              <div className="relative w-full h-[400px] md:h-[500px]">
                <img
                  src="/images/cargo-service.webp"
                  alt="MyDriver Cargo"
                  className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestros servicios de carga
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

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Preguntas frecuentes
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Comienza a transportar con nosotros
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Soluciones logísticas adaptadas a tus necesidades empresariales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white" onClick={() => window.open("https://wa.me/5212461569161?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20MyDriver%20Cargo.", "_blank")}>
                Solicitar servicio
              </Button>
              <Button size="lg" variant="outline">
                Ver tarifas
              </Button>
            </div>
          </div>
        </section>
      </div>

      <iframe
        src="https://mydriverapp.lovable.app/embed/mydriver_cargo?pipeline=mydriver_cargo&stage=d207cf32-6ec1-4fd2-aa32-010ad37a49e8&position=bottom-center&primaryColor=b60000&theme=light&borderRadius=8&buttonSize=default"
        width="100%"
        height="100"
        style={{ border: 'none', borderRadius: '8px', position: 'fixed', bottom: '0px', zIndex: 1000 }}
        title="MyDriver Cargo Form"
      />
      <AppPromptModal />
    </>
  );
};

export default MyDriverCargo;
