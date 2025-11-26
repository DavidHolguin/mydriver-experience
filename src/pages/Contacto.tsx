
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contacto = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "soporte@mydriver.com",
      link: "mailto:soporte@mydriver.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Ciudad de México, México",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horario",
      details: "24/7 Soporte",
      link: "#"
    }
  ];

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
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                Contáctanos
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in">
                Estamos aquí para ayudarte. No dudes en contactarnos si tienes alguna pregunta.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">
                  Información de Contacto
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                    >
                      <info.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Envíanos un mensaje
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">
                      Asunto
                    </label>
                    <Input id="subject" placeholder="¿Sobre qué nos quieres contactar?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escribe tu mensaje aquí..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full bg-primary text-white">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Contacto;
