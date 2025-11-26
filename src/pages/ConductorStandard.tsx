import { useState } from 'react';
import { Wallet, Calendar, Target, Award, CheckCircle, Smartphone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Wallet,
    title: "Comisiones Flexibles",
    description: "Elige entre una comisión por viaje o una tarifa fija semanal. Tú decides qué te conviene más."
  },
  {
    icon: Calendar,
    title: "Horarios Libres",
    description: "Conduce cuando quieras, sin horarios forzosos ni compromisos mínimos. Tu tiempo es tuyo."
  },
  {
    icon: Target,
    title: "Tus Propias Metas",
    description: "Establece tus objetivos de ganancias y trabaja a tu ritmo para alcanzarlos."
  },
  {
    icon: Award,
    title: "Incentivos Adicionales",
    description: "Accede a nuestro programa de bonos y recompensas por un desempeño excepcional."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Regístrate en Minutos",
    description: "Completa nuestro sencillo formulario en línea con tu información básica y documentos."
  },
  {
    step: "2",
    title: "Elige tu Plan",
    description: "Selecciona el esquema de comisiones que mejor se adapte a tu estilo de trabajo y finanzas."
  },
  {
    step: "3",
    title: "Conduce y Gana",
    description: "Una vez aprobado, activa la app, empieza a recibir viajes y a generar ganancias inmediatamente."
  }
];

const requirements = [
  {
    icon: CheckCircle,
    text: "Ser mayor de 18 años."
  },
  {
    icon: FileText,
    text: "Licencia de conducir vigente."
  },
  {
    icon: Smartphone,
    text: "Smartphone con plan de datos."
  },
  {
    icon: CheckCircle,
    text: "Pasar nuestra verificación de seguridad."
  }
]

const faqs = [
  {
    question: "¿Cuál es la diferencia con ser Socio Conductor?",
    answer: "Como Conductor Standard tienes la flexibilidad de elegir entre pagar una comisión por viaje o una comisión fija semanal, sin necesidad de tener un vehículo propio. Es ideal para quienes buscan maximizar su tiempo."
  },
  {
    question: "¿Cómo funciona la comisión fija semanal?",
    answer: "Pagas una única cuota semanal y te quedas con el 100% de las ganancias de todos los viajes que realices. Sin sorpresas."
  },
  {
    question: "¿Puedo cambiar entre tipos de comisión?",
    answer: "Sí, nuestro sistema te permite cambiar tu tipo de comisión una vez por semana para que siempre tengas el control."
  }
];

const ConductorStandard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="pt-16 bg-white text-gray-800">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center py-20 md:py-32"
          style={{ backgroundImage: "url('/images/conductorStandard.webp')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container px-4 mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Tú Eliges Cómo y Cuánto Ganar
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Únete a MyDriver como Conductor Standard. Disfruta de comisiones flexibles, horarios libres y el control total de tus ganancias.
            </p>
            <Button
              size="lg"
              className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white text-lg px-8 py-6"
              onClick={() => window.open("https://wa.me/5212461569161?text=Hola%2C%20quiero%20registrarme%20como%20Conductor%20Standard.", "_blank")}
            >
              Regístrate para Conducir
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Ventajas del Programa Standard</h2>
              <p className="text-lg text-gray-600 mt-2">Beneficios pensados para ti.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-[#ab1818]/10 rounded-full">
                      <benefit.icon className="w-8 h-8 text-[#ab1818]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">¿Cómo Funciona?</h2>
              <p className="text-lg text-gray-600 mt-2">En 3 simples pasos estarás en camino.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {howItWorks.map((item) => (
                <div key={item.step} className="p-6">
                  <div className="flex justify-center items-center mx-auto w-16 h-16 bg-[#ab1818] text-white text-2xl font-bold rounded-full mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="/images/standard-driver.webp"
                  alt="Conductor Standard sonriendo"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Requisitos para Unirte</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Esto es lo que necesitas para empezar a conducir con nosotros:
                </p>
                <ul className="space-y-4">
                  {requirements.map((req) => (
                    <li key={req.text} className="flex items-center">
                      <req.icon className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-lg">{req.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-white" style={{ backgroundColor: '#ab1818' }}>
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Tomar el Volante?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a la comunidad de conductores que ya están ganando más con MyDriver.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#ab1818] hover:bg-gray-200 text-lg px-8 py-6"
              onClick={() => window.open("https://wa.me/5212461569161?text=Hola%2C%20quiero%20registrarme%20como%20Conductor%20Standard.", "_blank")}
            >
              Quiero Registrarme Ahora
            </Button>
          </div>
        </section>



        {/* Embedded Form */}
        <div style={{ position: 'fixed', bottom: '0px', left: '0px', right: '0px', padding: '0 16px 16px 16px', backgroundColor: 'transparent', zIndex: 1000 }}>
          <iframe
            src="https://mydriverapp.lovable.app/embed/conductor_standard?pipeline=conductor_standard&stage=b95af692-71cd-4568-8d9f-3ff2fadc5832&position=bottom-center&primaryColor=b60000&theme=light&borderRadius=8&buttonSize=default"
            width="100%"
            height="100"
            style={{ border: 'none', borderRadius: '8px' }}
            title="Conductor Standard Form"
          />
        </div>
      </div>

    </>
  );
};

export default ConductorStandard;
