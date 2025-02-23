import { useState } from 'react';
import { Wallet, Calendar, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { DownloadBar } from '@/components/DownloadBar';
import { RegisterForm } from '@/components/RegisterForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Wallet,
    title: "Comisiones flexibles",
    description: "Elige entre comisión por viaje o comisión fija semanal"
  },
  {
    icon: Calendar,
    title: "Horarios libres",
    description: "Trabaja cuando quieras, sin compromisos mínimos"
  },
  {
    icon: Target,
    title: "Metas alcanzables",
    description: "Establece tus propios objetivos de ganancias"
  },
  {
    icon: Award,
    title: "Programa de incentivos",
    description: "Gana bonos adicionales por tu desempeño"
  }
];

const faqs = [
  {
    question: "¿Cuál es la diferencia con ser Socio Conductor?",
    answer: "Como Conductor Standard tienes la flexibilidad de elegir entre pagar una comisión por viaje o una comisión fija semanal, sin necesidad de tener un vehículo propio."
  },
  {
    question: "¿Cómo funciona la comisión fija?",
    answer: "Pagas una cuota semanal fija y te quedas con el 100% de tus ganancias, sin importar cuántos viajes realices."
  },
  {
    question: "¿Puedo cambiar entre tipos de comisión?",
    answer: "Sí, puedes cambiar tu tipo de comisión cada semana según te convenga."
  }
];

const ConductorStandard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
                  Tú eliges cómo ganar
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Únete a MyDriver como Conductor Standard y forma parte de nuestra flota profesional.
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white"
                  onClick={() => setIsRegisterOpen(true)}
                >
                  Regístrate como conductor
                </Button>
              </div>
              <div className="flex-1">
                <img
                  src="/images/standard-driver.webp"
                  alt="Conductor Standard"
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
              Ventajas del programa Standard
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
              Comienza a ganar más
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a la plataforma de transporte privado con las mejores condiciones para conductores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white px-8 h-12 text-lg"
                onClick={() => setIsRegisterOpen(true)}
              >
                Regístrate como conductor
              </Button>
              <Button size="lg" variant="outline">
                Conocer más
              </Button>
            </div>
          </div>
        </section>

        <RegisterForm
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          title="Regístrate como Conductor Standard"
          subtitle="Únete a nuestra flota profesional"
        />
      </div>
      <DownloadBar />
    </>
  );
};

export default ConductorStandard;
