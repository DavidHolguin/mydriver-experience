import { useState } from 'react';
import { DollarSign, Gavel, Wrench, ShieldCheck, Phone, Users, FileText, ThumbsUp, TrendingUp, Car, UserCircle, Home, FileCheck2, CreditCard } from 'lucide-react';
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
    icon: DollarSign,
    title: "Comisión Fija, No por Viaje",
    description: "Solo pagas $750 pesos semanales, sin importar cuántos viajes hagas. ¡Lo que generas es tuyo!"
  },
  {
    icon: Gavel,
    title: "Asesoría Jurídica 24/7",
    description: "En caso de cualquier percance vial, cuentas con apoyo legal inmediato y profesional, sin costo adicional."
  },
  {
    icon: Wrench,
    title: "Talleres Recomendados",
    description: "Accede a una red de talleres confiables y económicos para mantener tu auto en excelente estado."
  },
  {
    icon: ShieldCheck,
    title: "Monitoreo y Seguridad",
    description: "Todos tus viajes son geolocalizados y monitoreados, aumentando tu seguridad y la de tus pasajeros."
  },
  {
    icon: Phone,
    title: "Múltiples Canales de Viajes",
    description: "Te conectamos con usuarios vía WhatsApp, llamadas, App y bases fijas, con viajes verificados."
  },
  {
    icon: Users,
    title: "Comunidad Unida de Conductores",
    description: "Forma parte de una red de socios confiables donde se comparte información, apoyo y tips."
  },
  {
    icon: TrendingUp,
    title: "Genera Mayores Ganancias",
    description: "Nuestra comisión fija es la más baja del mercado. No cobramos comisiones por cada viaje."
  },
  {
    icon: ThumbsUp,
    title: "Sin Penalizaciones Injustas",
    description: "Tú eres tu propio jefe, pero nunca estás solo. Te respaldamos en lo legal, operativo y técnico."
  }
];

const howItWorks = [
    {
        step: "1",
        title: "Completa tu Registro",
        description: "Sube tus documentos y los de tu vehículo a nuestra plataforma de forma rápida y segura."
    },
    {
        step: "2",
        title: "Pasa la Verificación",
        description: "Nuestro equipo revisará tu información y el estado de tu vehículo para garantizar la seguridad."
    },
    {
        step: "3",
        title: "Empieza a Ganar",
        description: "Una vez aprobado, conéctate a la red MyDriver y empieza a recibir viajes con la mejor tarifa del mercado."
    }
];

const requirements = [
    {
        icon: Car,
        text: "Vehículo propio en buen estado (mínimo 2016)."
    },
    {
        icon: FileText,
        text: "Licencia de conducir vigente."
    },
    {
        icon: UserCircle,
        text: "INE o identificación oficial vigente."
    },
    {
        icon: Home,
        text: "Comprobante de domicilio (no mayor a 3 meses)."
    },
    {
        icon: FileCheck2,
        text: "Carta de no antecedentes penales (opcional)."
    },
    {
        icon: ShieldCheck,
        text: "Seguro del vehículo vigente."
    },
    {
        icon: CreditCard,
        text: "Pago único de registro y afiliación vehicular."
    }
]

const faqs = [
  {
    question: "¿Cómo funciona el pago de la comisión?",
    answer: "No pagas comisiones por viaje. Es un pago único semanal de $750, sin importar cuántos viajes realices. ¡Todo lo demás es para ti!"
  },
  {
    question: "¿Qué pasa si tengo un problema en un viaje?",
    answer: "Tu seguridad es nuestra prioridad. Cuentas con monitoreo en tiempo real y asesoría jurídica 24/7 sin costo adicional para apoyarte en caso de cualquier incidente."
  },
  {
    question: "¿Necesito buscar mis propios pasajeros?",
    answer: "Te conectamos con una gran demanda de usuarios a través de múltiples canales como WhatsApp, llamadas, nuestra app y bases fijas, asegurando un flujo constante de viajes."
  }
];

const SocioConductor = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
          style={{ backgroundImage: "url('/images/conductorSocio.webp')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container px-4 mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ¿Tienes Auto y Quieres Generar Ingresos?
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              ¡Únete como Socio-Conductor MyDriver! Disfruta la comisión más baja del mercado y el control total de tus ganancias.
            </p>
            <Button 
              size="lg" 
              className="bg-[#ab1818] hover:bg-[#ab1818]/90 text-white text-lg px-8 py-6"
              onClick={() => setIsRegisterOpen(true)}
            >
              Únete a MyDriver
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Beneficios de ser Socio-Conductor</h2>
                <p className="text-lg text-gray-600 mt-2">Te respaldamos en cada viaje.</p>
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
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Requisitos para Unirte</h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {requirements.map((req) => (
                            <li key={req.text} className="flex items-center">
                                <req.icon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-lg">{req.text}</span>
                            </li>
                        ))}
                    </ul>
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
        <section className="py-20 text-white" style={{backgroundColor: '#ab1818'}}>
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para ser tu Propio Jefe?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a la comunidad de socios-conductores que ya están maximizando sus ganancias con MyDriver.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-[#ab1818] hover:bg-gray-200 text-lg px-8 py-6"
              onClick={() => setIsRegisterOpen(true)}
            >
              Quiero Registrarme Ahora
            </Button>
          </div>
        </section>

        <RegisterForm
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          title="Regístrate como Socio Conductor"
          subtitle="Completa el formulario para comenzar a generar ingresos con tu vehículo."
        />
      </div>
      <DownloadBar />
    </>
  );
};

export default SocioConductor;
