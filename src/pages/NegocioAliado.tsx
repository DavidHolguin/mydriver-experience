import { useState } from 'react';
import { Building2, TrendingUp, Users, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { AppPromptModal } from '@/components/AppPromptModal';
import { RegisterForm } from '@/components/RegisterForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Building2,
    title: "Gestión centralizada",
    description: "Administra todos tus servicios desde una sola plataforma"
  },
  {
    icon: TrendingUp,
    title: "Crecimiento asegurado",
    description: "Aumenta tus ingresos con nuestra base de usuarios"
  },
  {
    icon: Users,
    title: "Soporte dedicado",
    description: "Equipo especializado para tu negocio 24/7"
  },
  {
    icon: HeartHandshake,
    title: "Alianza estratégica",
    description: "Beneficios exclusivos para negocios aliados"
  }
];

const faqs = [
  {
    question: "¿Qué requisitos necesito para ser Negocio Aliado?",
    answer: "Necesitas tener un negocio establecido, documentación legal vigente y cumplir con nuestros estándares de calidad."
  },
  {
    question: "¿Cuánto cuesta unirse como Negocio Aliado?",
    answer: "La inversión varía según el tipo de negocio y el plan que elijas. Contáctanos para recibir una cotización personalizada."
  },
  {
    question: "¿Qué soporte recibo como Negocio Aliado?",
    answer: "Recibes soporte técnico 24/7, capacitación para tu equipo, material promocional y acceso a nuestra plataforma de gestión."
  }
];

const NegocioAliado = () => {
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
                  Impulsa tu negocio con MyDriver
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Incrementa tus ventas y alcance uniéndote a nuestra plataforma.
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white"
                  onClick={() => setIsRegisterOpen(true)}
                >
                  Registra tu negocio
                </Button>
              </div>
              <div className="flex-1">
                <img
                  src="/images/business-partner.webp"
                  alt="Negocio Aliado"
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
              Beneficios para tu negocio
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
              Únete a MyDriver Business
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a hacer crecer tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white px-8 h-12 text-lg"
                onClick={() => setIsRegisterOpen(true)}
              >
                Registra tu negocio
              </Button>
              <Button size="lg" variant="outline">
                Ver planes
              </Button>
            </div>
          </div>
        </section>

        <RegisterForm
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          title="Registra tu Negocio"
          subtitle="Haz crecer tu negocio con nosotros"
        />
      </div>
      <AppPromptModal />
    </>
  );
};

export default NegocioAliado;
