
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

const PoliticasPrivacidad = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    {
      icon: Shield,
      title: "Protección de Datos",
      content: "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales."
    },
    {
      icon: Lock,
      title: "Información Recopilada",
      content: "Recopilamos información necesaria para proporcionar nuestros servicios de manera efectiva y segura."
    },
    {
      icon: Eye,
      title: "Uso de la Información",
      content: "Tu información se utiliza para mejorar nuestros servicios y personalizar tu experiencia."
    },
    {
      icon: FileCheck,
      title: "Tus Derechos",
      content: "Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento."
    }
  ];

  return (
    <>
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Política de Privacidad
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tu privacidad es importante para nosotros. Conoce cómo recopilamos, usamos y protegemos tu información.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <section.icon className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Información Detallada</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    MyDriver se compromete a proteger la privacidad de nuestros usuarios. Esta política describe nuestras prácticas de recopilación y uso de datos.
                  </p>
                  <h3>Recopilación de Datos</h3>
                  <p>
                    Recopilamos información que proporcionas directamente, como:
                  </p>
                  <ul>
                    <li>Información de contacto</li>
                    <li>Detalles de ubicación</li>
                    <li>Preferencias de servicio</li>
                    <li>Información de pago</li>
                  </ul>
                  <h3>Uso de Datos</h3>
                  <p>
                    Utilizamos tu información para:
                  </p>
                  <ul>
                    <li>Proporcionar y mejorar nuestros servicios</li>
                    <li>Procesar pagos</li>
                    <li>Comunicarnos contigo</li>
                    <li>Garantizar la seguridad</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default PoliticasPrivacidad;
