
import { Shield, DollarSign, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: DollarSign,
    title: "Mayores ingresos",
    description: "Gana más con cada viaje y recibe el 100% de tus propinas"
  },
  {
    icon: Shield,
    title: "Seguridad garantizada",
    description: "Monitoreamos tus viajes 24/7 y cuentas con póliza jurídica sin costo"
  },
  {
    icon: Clock,
    title: "Flexibilidad total",
    description: "Trabaja en tus horarios, tú decides cuándo y cuánto"
  },
  {
    icon: Star,
    title: "Beneficios exclusivos",
    description: "Accede a bonos especiales y programa de recompensas"
  }
];

const faqs = [
  {
    question: "¿Qué necesito para ser Socio Conductor?",
    answer: "Necesitas ser mayor de 18 años, tener licencia de conducir vigente, CURP, identificación oficial y aprobar nuestro examen de conocimientos viales."
  },
  {
    question: "¿Cuánto puedo ganar como Socio Conductor?",
    answer: "Tus ganancias dependen de las horas que dediques y la demanda. Nuestros socios conductores pueden ganar desde $10,000 hasta $25,000 pesos semanales."
  },
  {
    question: "¿Cómo funciona el pago?",
    answer: "Realizamos pagos semanales directamente a tu cuenta bancaria. Puedes ver tus ganancias en tiempo real desde la app."
  },
  {
    question: "¿Qué apoyo recibo de MyDriver?",
    answer: "Recibes soporte 24/7, seguro de responsabilidad civil, capacitación continua y acceso a promociones exclusivas."
  }
];

const SocioConductor = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary/5 pt-20 pb-32">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Convierte tu tiempo en ingresos
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Únete a MyDriver como Socio Conductor y obtén ingresos superiores, 
                flexibilidad horaria y beneficios exclusivos.
              </p>
              <Button size="lg" className="bg-primary text-white">
                Regístrate como conductor
              </Button>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Conductor MyDriver"
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
            Beneficios de ser Socio Conductor
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
            Requisitos para unirte
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                "Ser mayor de 18 años",
                "Identificación oficial vigente",
                "Licencia de conducir vigente",
                "CURP",
                "Carta de no antecedentes penales",
                "Aprobar examen de conocimientos viales"
              ].map((req, index) => (
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

      {/* FAQ Section */}
      <section className="py-20">
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
      <section className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a miles de conductores que ya confían en MyDriver para generar ingresos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white">
              Registrarme ahora
            </Button>
            <Button size="lg" variant="outline">
              Hablar con un asesor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocioConductor;
